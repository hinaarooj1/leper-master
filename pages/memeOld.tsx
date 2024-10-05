import { NextPage } from "next";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { UserContext } from "../hooks/userProvider";
import { getRandomNumber, convertNumberToFixedString } from "../utils/utils";

const Meme: NextPage = () => {
  const [rand, setRand] = useState(1);
  const [newLink, setNewLink] = useState("");
  const { user, totalCount, setUser } = useContext(UserContext);

  const handleCreateMeme = (event) => {
    event.preventDefault();
    const newRand = getRandomNumber(totalCount);
    setRand(newRand);
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
    <div className="flex justify-center items-center flex-col w-full text-center pt-[100px] pb-[100px] p-[20px]">
      <div className="my-font w-full max-w-[1000px] text-[30px]">
        <div>Click the meme button to load new meme.</div>
        <div className="mt-[30px] mb-[10px]">
          Take the meme and upload to as many socials as possible, then copy URL
          into the box below.
        </div>
      </div>
      <Image
        className="mt-[20px]"
        alt="Main"
        src={`/memeimages/meme${convertNumberToFixedString(rand)}.jpg`}
        width={300}
        height={300}
      />
      <button
        className="mt-[20px] w-3/4 max-w-[300px] my-font bg-[#20854D] hover:bg-[#228b22] active:bg-[#20854D] text-white font-bold rounded-full p-4 border-[2px] border-[#FFFFF]"
        style={{ border: "2px solid white" }}
        type="button"
        onClick={handleCreateMeme}
      >
        Load another Meme
      </button>
      <textarea
        className="mt-[50px] w-3/4 max-w-[400px] my-font text-xl bg-[#111827] h-[150px] "
        value={newLink}
        onChange={handleChangeLink}
      />
      <button
        className="mt-[20px] w-3/4 max-w-[300px] my-font bg-[#20854D] hover:bg-[#228b22] active:bg-[#20854D] text-white font-bold rounded-full p-4"
        style={{ border: "2px solid white" }}
        type="button"
        onClick={handleSubmitLink}
      >
        Submit Link
      </button>

      <div className="mt-[50px] max-w-[1000px] text-[30px] my-font w-full text-xl">
        Your submissions will be linked to your wallet and you will be
        airdropped $Leper for each successful post!
        <br />
        <br />
        Bonus points for using your own memes!
      </div>
    </div>
  );
};

export default Meme;
