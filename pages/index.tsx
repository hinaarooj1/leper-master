/* eslint-disable @next/next/link-passhref */
import { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = (props) => {
  const wallet = useWallet();
  const router = useRouter();

  const handleBuyToken = (event) => {
    event.preventDefault();
    window.open("https://raydium.io/swap/?inputCurrency=sol&outputCurrency=B1E4X24EKvNEzvCfH87YRwYeczUMNsdrdum3T2TC1qUx&outputSymbol=LEPER&inputAmount=0&fixed=in");
  };
  const handleVisitDextools = (event) => {
    event.preventDefault();
    window.open("https://www.dextools.io/app/en/solana/pair-explorer/");
  };
  const handleWebsite = (event) => {
    event.preventDefault();
    router.push("https://leper.wtf");
  };
  const handleStartDapp = (event) => {
    event.preventDefault();
    if (!wallet.publicKey) {
      alert("You need to connect your wallet to start dapp.");
      return;
    }
    router.push("/name");
  };

  return (
    <div>
      <div className=" ">
        <div className="new-home min-height ">
          <ul className="social-list ">
            <li>
              <a target="_blank" href="https://twitter.com/lepercoin" rel="noopener noreferrer">
                <img alt="Twitter" className="rotate-it" src="/new/x.png" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/lepercoin" rel="noopener noreferrer">
                <img alt="Telegram" className="rotate-it" src="/new/telegram.png" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://instagram.com/lepercoin" rel="noopener noreferrer">
                <img alt="Instagram" className="rotate-it" src="/new/insta.png" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.tiktok.com/@lepercoin" rel="noopener noreferrer">
                <img alt="TikTok" className="rotate-it" src="/new/tiktok.png" />
              </a>
            </li>
          </ul>
          <div className="buy-lepers">
            <ul className="social-lists">
              <li>
                <a target="_blank" href="/" rel="noopener noreferrer">
                  <img alt="home" className="rotate-it homebtn" src="/new/home.png" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/lepercoin" rel="noopener noreferrer">
                  <img alt="connect" className="rotate-it" src="/new/connect.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="inside-flex section-width  min-height">
            <div className="larry-gif">
              <img src="/new/larry.gif" alt="" />
            </div>
            <div className="larry-content">
              <h1>
                MAKE MEMES AND EARN <span className="yellow-color">REWARDS</span>
              </h1>
              <div className="btnsas">
                <button className="hovering"><img src="/new/start now.png" alt="" /></button>
                <button className="hovering"><img src="/new/buy leper.png" alt="" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="how-it-works relative">

          <div className="home-action-lines">
            <div className="home-action-line">
              <div className="home-action-line-row">
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
              </div>
            </div>

          </div>
          <div className="abs-img">
            <img src="/new/polaroid.png" alt="" />
          </div>
          <div className="flex-center section-width">
            <div className="how-content">
              <h1 className="flex-text-h1">HOW IT WORKS</h1>
              <p className="flex-text-p"><span className="yellow-color">Step 1:</span> Download phantom from the App Store or install the browser extension. Visit our URL via your web browser or phantom mobile browser and connect wallet using button above.</p>
              <p className="flex-text-p"><span className="yellow-color">Step 3:</span> Once connected, click the “generate meme” button and save the image. You will need to spread this far and wide, be sure to submit all the links to the posts you have made.</p>
              <p className="flex-text-p"><span className="yellow-color">Step 4:</span> Once connected, you will be ale to share the links with us where you have mosted your memes</p>
              <p className="flex-text-p"><span className="yellow-color">Step 5:</span> Once you have submitted the links or your posts, it will be reviewed by the team. Once checked, you will be airdropped your Reward Tokens.</p>
              <button className="get-btn">
                <img src="/new/get started.png" alt="" />
              </button>
            </div>
          </div>

        </div>



        <div className="footer-area  relative">
          <div className="home-action-lines ">
            <div className="home-action-line  manW ">
              <div className="home-action-line-row">
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
                <div className="home-action-line-text">$LEPER</div>
              </div>
            </div>

          </div>
          <div className="section-width   paddinb">
            <div className="botma">
              <h1 className="flex-smoke-h1 ">CONNECT</h1>
              <p className="flex-smoke-p">JOIN THE LEPER LEGION, IT’S A WAY OF LIFE! </p>
              <ul className="social-list static">
                <li><a target="_blank" href="https://twitter.com/lepercoin"><img className="rotate-it" src="/new/x.png" /></a></li>
                <li><a target="_blank" href="https://t.me/lepercoin"><img className="rotate-it" src="/new/telegram.png" /></a></li>
                <li><a target="_blank" href="https://instagram.com/lepercoin"><img className="rotate-it" src="/new/insta.png" /></a></li>
                <li><a target="_blank" href="https://www.tiktok.com/@lepercoin"><img className="rotate-it" src="/new/tiktok.png" /></a></li>
              </ul>
            </div>
            <div className="bottom-dex">
              <h1 className="flex-smoke-h1  ">DEGEN ARE YOU READY?</h1>
              <p className="flex-smoke-p mb-0">BUY <span className="yellow-clr">$LEPER</span> VIA THE LINK BELOW.</p>
              <button className="buy-leper static buy-it">
                <img src="/new/buy leper v2.png" />
              </button>
            </div>
            <div className="other-bg">
              <div className="other-links section-widt">
                <div className="inside-li">
                  <h1 >OTHER LINKS</h1>
                  <ul className="other-lo">
                    <li><a href="https://leper.gitbook.io/leper-docs" target="_blank" className="yellow-clr">WHITEPAPER</a></li>
                    <li><a className="yellow-clr">DEXSCREENER</a></li>
                    <li><a className="yellow-clr">LINKTREE</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lepper-footer">
            <img src="/new/LEPER Footer.png" alt="" />
          </div>
        </div>


      </div>

    </div>
  );
};

export default Home;
