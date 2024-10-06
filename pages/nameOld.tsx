import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useContext } from "react";
import { UserContext } from "../hooks/userProvider";
import Spinner from "../components/Spinner";

const Name: NextPage = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);
  const wallet = useWallet();
  const walletAddress = wallet.publicKey?.toString();

  useEffect(() => {
    console.log(wallet);
    (async () => {
      // Fetching user data
      try {
        const response = await fetch(`/api/users/${walletAddress}`, {
          method: "GET",
        });
        const userData = (await response.json()).data;
        setIsLoading(false);
        if (userData.length) {
          if (userData[0].links) {
            setUser({
              ...userData[0],
              links: JSON.parse(userData[0].links),
            });
          } else {
            setUser({
              ...userData[0],
              links: [],
            });
          }
          router.push("/meme");
        }
      } catch (error) {
        setIsLoading(false);
        // alert("Error detected when fetching data");
      }
    })();
  }, [walletAddress, router, setUser]);

  const handleChangeUserName = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const handleNext = async (event) => {
    event.preventDefault();
    // Add user data with wallet address
    if (userName) {
      try {
        await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify({
            name: userName,
            walletAddress,
          }),
        });
        setUser({
          user: userName,
          walletAddress,
        });
        router.push("/meme");
      } catch (error) {
        alert("Error detected when trying to add user name.");
      }
    } else {
      alert("User name is required.");
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="font-mono flex justify-center items-center h-screen flex-col gap-[20px] text-center">
          <div className="my-font w-full max-w-[1000px] text-[30px]">
            <div>Welcome to the Meme2Earn dashboard!! </div>
            <div className="mt-[10px] mb-[10px]">
              Please enter a username below!
            </div>
          </div>
          <input
            className="my-font w-3/4 max-w-[500px] text-xl mr-6 py-4 px-4 bg-[#111827]"
            type="text"
            value={userName}
            onChange={handleChangeUserName}
            placeholder="Enter your user name"
          />
          <button
            className="my-font w-3/4 max-w-[500px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-6"
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Name;
