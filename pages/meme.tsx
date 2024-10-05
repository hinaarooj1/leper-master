import { NextPage } from "next";
import { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { UserContext } from "../hooks/userProvider";
import { getRandomNumber, convertNumberToFixedString } from "../utils/utils";
import dynamic from "next/dynamic";
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);
const Meme: NextPage = () => {
  const [rand, setRand] = useState(1);
  const [newLink, setNewLink] = useState("");
  const { user, totalCount, setUser } = useContext(UserContext);
  const canvasRef = useRef(null);
  const textareaRef = useRef(null);

  // Step 2: Function to copy text on button click
  const handleCopyClick = () => {
    const tagsText = textareaRef.current.value; // Get the textarea value

    // Use clipboard API to copy the text
    navigator.clipboard.writeText(tagsText).then(() => {
      alert("Tags copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  };

  const handleCreateMeme = (event) => {
    event.preventDefault();
    const newRand = getRandomNumber(totalCount);
    setRand(newRand);
  };
  const SaveImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      alert("Canvas is not available.");
      return;
    }
    const ctx = canvas.getContext("2d");

    // Load the image
    const image = new window.Image();
    image.src = `/memeimages/meme${convertNumberToFixedString(rand)}.jpg`;

    // Once the image is loaded, draw it to the canvas
    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Create a link to download the canvas as an image
      const link = document.createElement("a");
      link.download = `meme.jpg`;
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    };
  };
  const handleChangeLink = (event) => {
    event.preventDefault();
    setNewLink(event.target.value);
  };

  const handleSubmitLink = async (event) => {
    event.preventDefault();
    if (!newLink) {
      alert("Please enter link.");
      return;
    }
    let newUser;
    if (user.links) {
      newUser = {
        ...user,
        links: [
          ...user.links,
          {
            name: `meme${convertNumberToFixedString(rand)}.jpg`,
            link: newLink,
          },
        ],
      };
    } else {
      newUser = {
        ...user,
        links: [
          {
            name: `meme${convertNumberToFixedString(rand)}.jpg`,
            link: newLink,
          },
        ],
      };
    }

    try {
      await fetch("/api/users", {
        method: "PUT",
        body: JSON.stringify(newUser),
      });
      setUser(newUser);
      setNewLink("");
      alert("Successfully submitted.");
    } catch (error) {
      alert("Error detected when trying to save link.");
    }
  };
  return (
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
        <div className="upper-img">
          <img src="/new/meme2earn logo.png" alt="" />
        </div>
        <div className="flex-bx">
          <div className="flx-col">
            <h1 className="haich"><span className="yellow-color">#1</span> Generate a meme</h1>
            <div className="meme-img">
              <Image
                className="masj "
                alt="Main"
                src={`/memeimages/meme${convertNumberToFixedString(rand)}.jpg`}
                width={300}
                height={300}
              />
            </div>
            <canvas ref={canvasRef} width={300} height={300} style={{ display: "none" }}></canvas>
            <div className="btns-cjk">
              <button className="red-btn"
                onClick={handleCreateMeme}
              >
                Generate meme
              </button>
              <button className="yellow-btn"
                onClick={SaveImage}
              >
                SAVE IMAGE
              </button>

            </div>
          </div>
          <div className="flx-col">
            <h1 className="haich"><span className="yellow-color">#2</span> Copy & use our hashtags</h1>
            <div className="input-copy relative">
              <textarea readOnly ref={textareaRef} value="#LEPER #SOLANA #MEMEZEARN #LARRYLEPER #LEPERCOIN #IRISHPEPE #LEPERONSOLANA"></textarea>
              <button className="copy-img" onClick={handleCopyClick}>
                <img src="/new/copy.png" alt="" />
              </button>
            </div>
            <h1 className="haich mt-10"><span className="yellow-color">#3</span> PASTE YOUR URLS BELOW</h1>
            <div className="input-copy relative h1002">
              <textarea className="h1002" value={newLink}
                onChange={handleChangeLink}></textarea>

            </div>
            <div className="btns-cjk">
              <button className="yellow-btn"
                onClick={handleSubmitLink}
              >
                SAVE AND SUBMIT
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Meme;
