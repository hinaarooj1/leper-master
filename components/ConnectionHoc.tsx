import { NextPage } from "next";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";

const ConnectionHoc: NextPage = ({ children }) => {
  const { connected } = useWallet();
  const router = useRouter();
  useEffect(() => {
    // if (!connected) {
    //   router.push("/");
    // }
  }, [connected]);
  return <>{children}</>;
};

export default ConnectionHoc;
