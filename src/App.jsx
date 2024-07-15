"use client";
import { useState } from "react";
import "./App.css";
import ConnectWalletButton from "./components/ConnectWalletButton";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
function App() {
  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      onError={(error) => {
        console.log("error", error);
      }}
    >
      <div>
        <ConnectWalletButton />
      </div>
    </AptosWalletAdapterProvider>
  );
}

export default App;
