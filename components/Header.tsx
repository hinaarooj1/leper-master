import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import Link from "next/link";

// add this
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export const Header: FC = () => {
  const router = useRouter();
  const gotoAdmin = (event) => {
    event.preventDefault();
    router.push("/admin");
  };
  const gotoBack = (event) => {
    event.preventDefault();
    router.back();
  };
  const wallet = useWallet();
  const walletAddress = wallet.publicKey?.toString();
  return (
    // <div className="header">
    //   <div className="header-wrapper">
    //     <Link href="#top">
    //       <Image
    //         className="header-image"
    //         alt="Lepe Logo"
    //         src="/lepergold.png"
    //         width={104}
    //         height={28}
    //       />
    //     </Link>
    //     <div className="grow"></div>
    //     {walletAddress === "FZ8idPupqGtCCQ5t1YGgz1kE4WeVJpSZmJV25aEgZ9uP" ? (
    //       <>
    //         <button
    //           type="button"
    //           className="my-font bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-6"
    //           onClick={gotoAdmin}
    //         >
    //           Admin Page
    //         </button>
    //         <button
    //           type="button"
    //           className="my-font bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-6"
    //           onClick={gotoBack}
    //         >
    //           Back
    //         </button>
    //       </>
    //     ) : (
    //       <></>
    //     )}

    //     <WalletMultiButtonDynamic
    //       style={{ backgroundColor: "#228b22", border: "none", cursor: "pointer", padding: "10px 20px", fontSize: "16px" }}
    //     />
    //   </div>
    // </div>
    <>
    </>
  );
};

export default Header;
