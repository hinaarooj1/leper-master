import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useContext } from "react";
import { UserContext } from "../hooks/userProvider";
import Spinner from "../components/Spinner";
import dynamic from "next/dynamic";
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);
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
        <div className="new-home min-height-res ">
          <ul className="social-list ">
            <li>
              <a target="_blank" href="https://twitter.com/lepercoin" rel="noreferrer">
                <img alt="Twitter" className="rotate-it" src="/new/x.png" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/lepercoin" rel="noreferrer">
                <img alt="Telegram" className="rotate-it" src="/new/telegram.png" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://instagram.com/lepercoin" rel="noreferrer">
                <img alt="Instagram" className="rotate-it" src="/new/insta.png" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.tiktok.com/@lepercoin" rel="noreferrer">
                <img alt="TikTok" className="rotate-it" src="/new/tiktok.png" />
              </a>
            </li>
          </ul>
          <div className="buy-lepers">
            <ul className="social-lists">
              <li>
                <a href="https://leper.wtf" rel="noreferrer">
                  <img alt="home" className="rotate-it homebtn" src="/new/home.png" />
                </a>
              </li>
              <li>
                {/* <a   rel="noreferrer">
              <img    onClick={handleConnectClick}  alt="connect" className="rotate-it" src="/new/connect.png" />
            </a> */}

                <WalletMultiButtonDynamic
                  style={{ backgroundColor: "#228b22", border: "none", cursor: "pointer", padding: "10px 20px", fontSize: "16px" }}
                />
              </li>
            </ul>
          </div>
          <div className="meme-earn min-height-r section-width">
            <div className="upper-img this-abs">
              <img src="/new/meme2earn logo.png" alt="" />
            </div>
            <div className="choose-name">
              <h1 className="haich haich-yellow">Choose a display name</h1>
              <input value={userName}
                onChange={handleChangeUserName} type="text" />
              <button onClick={handleNext}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Name;
