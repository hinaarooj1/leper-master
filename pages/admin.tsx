import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import Spinner from "../components/Spinner";

const Admin: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [txSig, setTxSig] = useState('');
  const [users, setUsers] = useState([]);
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setIsLoading(false);
      setUsers(data.data.map(user => ({
        ...user,
        amount: 0
      })));
    })();
  }, []);

  const handleAmount = (event, id) => {
    event.preventDefault();
    setUsers(users.map(user => {
      if (user._id === id) {
        return {
          ...user,
          amount: event.target.value
        };
      }
      return user
    }));
  };
  const handleSend = async (event, amount, recipient) => {
    event.preventDefault();
    if (!connection || !publicKey) { return }
    const transaction = new web3.Transaction()
    const recipientPubKey = new web3.PublicKey(recipient)

    const sendSolInstruction = web3.SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: recipientPubKey,
        lamports: LAMPORTS_PER_SOL * amount
    })

    transaction.add(sendSolInstruction)
    try {
      const sig = await sendTransaction(transaction, connection);
      setTxSig(sig)
    } catch(error) {
      alert("Error occured in transfer");
    }
  };
  return (
    <>{
      isLoading ? <Spinner/> :
      <div className="flex justify-center items-center">
        <table className="mt-24 my-font border-collapse border border-spacing-2 border-separate">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Wallet Address</th>
              <th>Actions</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.walletAddress}</td>
                  <td>
                    <input type="text" className="py-1 px-4 w-20 bg-[#111827]" value={user.amount} onChange={(e) => handleAmount(e, user._id)} />
                    <button className="my-font bg-blue-500 hover:bg-blue-700 text-white px-4 rounded-full m-6" type="button" onClick={(e) => handleSend(e, user.amount, user.walletAddress)}>Send</button>
                  </td>
                  <td>
                    {
                      user?.links ? (
                        <table className="border-collapse border border-spacing-2 border-separate">
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              JSON.parse(user.links).map((link, index) => (
                                <tr key={index}>
                                  <td>{link.name}</td>
                                  <td>{link.link}</td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      ) : "None"
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    }</>
  );
};

export default Admin;