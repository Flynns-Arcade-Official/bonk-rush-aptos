/* eslint-disable react/prop-types */
// src/context/WalletContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { Network } from "aptos";

const WalletContext = createContext();

export const useWalletAptos = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);
  const [publicKey, setPublicKey] = useState(null);
  const [bonkBalance, setBonkBalance] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { account, disconnect, signAndSubmitTransaction } = useWallet();
  const aptosConfig = new AptosConfig({ network: Network.DEVNET });
  const amountConfig = 100000000;
  const aptos = new Aptos(aptosConfig);

  const connectWallet = async () => {
    
    setOpenModal(true);
  };

  const disconnectWallet = async () => {
    try {
      await wallet.disconnect();
      setPublicKey(null);
      localStorage.removeItem("walletAddress");
      let updateBonkEvent = new CustomEvent("Update Bonk", {
        detail: {
          bonk_balance: "0",
        },
      });

      let event = new window.CustomEvent("Wallet Disconnected", {
        detail: { wallet_address: "" },
      });
      window.dispatchEvent(updateBonkEvent);
      window.dispatchEvent(event);
    } catch (err) {
      console.error("Failed to disconnect wallet:", err);
    }
  };

  const signMessage = async (message) => {
    try {
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await wallet.signMessage(encodedMessage, "utf8");
      console.log("Signed message:", signedMessage);
      return signedMessage;
    } catch (err) {
      console.error("Failed to sign message:", err);
    }
  };

  /**
   * The function `getBonkBalance` retrieves the balance of a specific token account associated with a
   * given public key and dispatches an event with the updated balance.
   */
  const getBonkBalance = async (publicKey) => {
    let tokenAccounts = await connection.getTokenAccountsByOwner(publicKey, {
      mint: new PublicKey(tokenMint), // Mint address (SPL Token Address)
    });
    let event;
    if (tokenAccounts.value.length > 0) {
      let bonkBalance = await connection.getTokenAccountBalance(
        tokenAccounts.value[0].pubkey
      );
      console.log(parseFloat(bonkBalance.value.uiAmountString));
      setBonkBalance(parseFloat(bonkBalance.value.uiAmountString));
      event = new CustomEvent("Update Bonk", {
        detail: {
          bonk_balance: bonkBalance.value.uiAmountString,
        },
      });
    } else {
      setBonkBalance(0);
      event = new CustomEvent("Update Bonk", {
        detail: {
          bonk_balance: "0",
        },
      });
    }
    window.dispatchEvent(event);
  };

  const getPoolBalance = async (publicKey) => {
    let tokenAccounts = await connection.getTokenAccountsByOwner(
      new PublicKey(publicKey),
      {
        mint: new PublicKey(tokenMint), // Mint address (SPL Token Address)
      }
    );
    let bonkBalance = await connection.getTokenAccountBalance(
      tokenAccounts.value[0].pubkey
    );
    console.log("get pool balance: " + bonkBalance.value.uiAmountString);
    let event = new CustomEvent("Update Pool", {
      detail: {
        pool_balance: bonkBalance.value.uiAmountString,
      },
    });
    window.dispatchEvent(event);
  };

  /**
   * The function `getTokenAccount` checks for a token account associated with a specific owner and token
   * mint address, creating one if it does not exist.
   * @returns The `getTokenAccount` function returns either the public key of an existing token account
   * owned by the specified `ownerPublicKey`, or it creates a new associated token account if one does
   * not already exist and returns the associated token address.
   */
  const getTokenAccount = async (ownerPublicKey, tokenMintAddress) => {
    let tokenAccounts = await connection.getTokenAccountsByOwner(
      ownerPublicKey,
      {
        mint: new PublicKey(tokenMintAddress),
      }
    );
    if (tokenAccounts.value.length > 0) {
      return tokenAccounts.value[0].pubkey;
    } else {
      // If the token account does not exist, create it
      const associatedTokenAddress = await Token.getAssociatedTokenAddress(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        tokenMintAddress,
        ownerPublicKey
      );

      const transaction = new Transaction().add(
        Token.createAssociatedTokenAccountInstruction(
          ASSOCIATED_TOKEN_PROGRAM_ID,
          TOKEN_PROGRAM_ID,
          tokenMintAddress,
          associatedTokenAddress,
          ownerPublicKey,
          new PublicKey(publicKey)
        )
      );

      transaction.feePayer = wallet.publicKey;
      const { blockhash } = await connection.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;

      const signedTransaction = await wallet.signTransaction(transaction);
      const signature = await connection.sendRawTransaction(
        signedTransaction.serialize()
      );

      console.log("Transaction successful with signature:", signature);
      return associatedTokenAddress;
    }
  };

  const sendTransaction = async (destination, lamports) => {
    try {
      window.Buffer = buffer.Buffer;
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(destination),
          lamports,
        })
      );

      transaction.feePayer = publicKey;
      const { blockhash } = await connection.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;
      const signedTransaction = await wallet.signTransaction(transaction);
      const signature = await connection.sendRawTransaction(
        signedTransaction.serialize()
      );
      await connection.confirmTransaction(signature, "processed");
      console.log("Transaction successful with signature:", signature);
      let event = new window.CustomEvent("Token Transfered", {
        detail: { success: true },
      });
      window.dispatchEvent(event);
    } catch (err) {
      console.error("Failed to send transaction:", err);
      let event = new window.CustomEvent("Token Transfered", {
        detail: { success: false },
      });
      window.dispatchEvent(event);
    }
  };

  /**
   * The function `sendTokenTransaction` facilitates the transfer of a specified amount of tokens from
   * one account to another using Solana blockchain.
   */
  const sendTokenTransaction = async (destination, amount) => {
    if (parseFloat(bonkBalance) < 1) {
      if (
        confirm("You don't have enough bonk, please swap some bonk token") ==
        true
      ) {
        window.open(
          "https://raydium.io/swap?outputMint=DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
        );
      }
      let event = new window.CustomEvent("Token Transfered", {
        detail: { success: false },
      });
      window.dispatchEvent(event);
      return;
    }
    try {
      const senderPublicKey = new PublicKey(publicKey);
      // Recipient's public key
      const recipientPublicKey = new PublicKey(destination);
      // Token mint address
      const tokenMintAddress = new PublicKey(tokenMint);
      const senderTokenAccount = await getTokenAccount(
        senderPublicKey,
        tokenMintAddress
      );
      // Get the associated token account of the recipient
      const recipientTokenAccount = await getTokenAccount(
        recipientPublicKey,
        tokenMintAddress
      );
      const senderTokenAccountInfo =
        await connection.getParsedTokenAccountsByOwner(senderPublicKey, {
          mint: tokenMintAddress,
        });
      if (senderTokenAccountInfo.value.length === 0) {
        throw new Error("Sender does not have a token account");
      }
      // Create the transaction
      const transaction = new Transaction().add(
        Token.createTransferInstruction(
          TOKEN_PROGRAM_ID,
          senderTokenAccount,
          recipientTokenAccount,
          senderPublicKey,
          [],
          amount
        )
      );
      transaction.feePayer = new PublicKey(publicKey);
      const { blockhash } = await connection.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;
      const signedTransaction = await wallet.signTransaction(transaction);
      const signature = await connection.sendRawTransaction(
        signedTransaction.serialize()
      );
      console.log("Transaction successful with signature:", signature);

      let updateBonkEvent = new CustomEvent("Update Bonk", {
        detail: {
          bonk_balance: (bonkBalance - 1).toString(),
        },
      });
      setBonkBalance(bonkBalance - 1);
      let event = new window.CustomEvent("Token Transfered", {
        detail: { success: true },
      });
      window.dispatchEvent(updateBonkEvent);
      window.dispatchEvent(event);
    } catch (err) {
      console.error("Failed to send transaction:", err);
      let event = new window.CustomEvent("Token Transfered", {
        detail: { success: false },
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        publicKey,
        connectWallet,
        disconnectWallet,
        signMessage,
        sendTransaction,
        sendTokenTransaction,
        getPoolBalance,
        openModal,
        setOpenModal,
        account,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
