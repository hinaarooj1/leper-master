
import { FC, ReactNode, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
require('@solana/wallet-adapter-react-ui/styles.css')

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
        ],
        []
    );

    const network = clusterApiUrl('devnet');
    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletContextProvider