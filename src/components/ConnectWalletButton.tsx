// src/components/ConnectWalletButton.js
import React, { useCallback, useEffect, useState } from "react";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { Network } from "aptos";
const ConnectWalletButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const { account, disconnect, signAndSubmitTransaction } = useWallet();
  const aptosConfig = new AptosConfig({ network: Network.DEVNET });
  const amountConfig = 100000000;
  const aptos = new Aptos(aptosConfig);
  let isBuying = false;
  useEffect(() => {
    if (account?.address) {
      let event = new window.CustomEvent("Wallet Connected", {
        detail: { wallet_address: account.address.toString() },
      });
      window.dispatchEvent(event);
      getBalance().then((result) => {
        console.log(`balance is: ${result}`);
        if (result) {
          let updateBonkEvent = new CustomEvent("Update Bonk", {
            detail: {
              bonk_balance: (parseFloat(result) / amountConfig).toString(),
            },
          });
          window.dispatchEvent(updateBonkEvent);
        }
      });
    }
  }, [account?.address, isLoaded]);
  useEffect(() => {
    if(!account?.address) return;
    window.addEventListener("Mint NFT", mintNFT);

    return () => {
      window.removeEventListener("Mint NFT", mintNFT);
    }
  }, [account?.address]);
  const handleLoaded = () => {
    setisLoaded(true);
  };
  const handleDisconnectWallet = () => {
    disconnect();
    let updateBonkEvent = new CustomEvent("Update Bonk", {
      detail: {
        bonk_balance: "0",
      },
    });
    window.dispatchEvent(updateBonkEvent);
    let disconnectEvent = new window.CustomEvent("Wallet Disconnected", {
      detail: { wallet_address: "" },
    });
    window.dispatchEvent(disconnectEvent);
  };

  const handleConnectWallet = () => {
    if (account?.address) {
      let event = new window.CustomEvent("Wallet Connected", {
        detail: { wallet_address: account.address.toString() },
      });
      window.dispatchEvent(event);
      getBalance().then((result) => {
        console.log(`balance is: ${result}`);
        if (result) {
          let updateBonkEvent = new CustomEvent("Update Bonk", {
            detail: {
              bonk_balance: (parseFloat(result) / amountConfig).toString(),
            },
          });
          window.dispatchEvent(updateBonkEvent);
        }
      });
    } else {
      setOpenModal(true);
    }
  };

  const getBalance = async () => {
    if (account?.address) {
      type Coin = { coin: { value: string } };

      const resource = await aptos.getAccountResource<Coin>({
        accountAddress: account.address,
        resourceType: "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
      });

      console.log(`balance is: ${resource.coin.value}`);
      return resource.coin.value;
    }
  };

  const PayToken = async () => {
    if (!account?.address) return;
    const response = await signAndSubmitTransaction({
      sender: account.address,
      data: {
        function: "0x1::aptos_account::transfer_coins",
        typeArguments: ["0x1::aptos_coin::AptosCoin"],
        functionArguments: [
          "0xb299f0b1a0f0e78be11bf935ffe97721c562c60111571cc7c7abfeb6e21d05cd",
          0.01 * amountConfig,
        ],
      },
    });
    // if you want to wait for transaction
    try {
      await aptos.waitForTransaction({ transactionHash: response.hash });
      getBalance().then((result) => {
        console.log(`balance is: ${result}`);
        if (result) {
          let updateBonkEvent = new CustomEvent("Update Bonk", {
            detail: {
              bonk_balance: (parseFloat(result) / amountConfig).toString(),
            },
          });
          window.dispatchEvent(updateBonkEvent);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleMinusAptos = () => {
    PayToken()
      .then(() => {
        let event = new window.CustomEvent("Token Transfered", {
          detail: { success: true },
        });
        window.dispatchEvent(event);
      })
      .catch(() => {
        let event = new window.CustomEvent("Token Transfered", {
          detail: { success: false },
        });
        window.dispatchEvent(event);
      });
  };

  const handleGetPoolBalance = async () => {
    type Coin = { coin: { value: string } };

    const resource = await aptos.getAccountResource<Coin>({
      accountAddress:
        "0xb299f0b1a0f0e78be11bf935ffe97721c562c60111571cc7c7abfeb6e21d05cd",
      resourceType: "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
    });

    console.log(`balance is: ${parseFloat(resource.coin.value)}`);
    let event = new CustomEvent("Update Pool", {
      detail: {
        pool_balance: parseFloat(resource.coin.value) / amountConfig,
      },
    });
    window.dispatchEvent(event);
  };

  const checkCollection = async () => {
    if (account?.address == undefined) return false;
    try {
      const collection =
        await aptos.getCollectionDataByCreatorAddressAndCollectionName({
          creatorAddress: account.address,
          collectionName: "AtomGameCollection",
        });
      if (collection) {
        return [true, collection.collection_id];
      } else return false;
    } catch (error) {
      return await checkCollection();
    }
  };

  const createCollection = async () => {
    if (account?.address == undefined) return false;
    try {
      const response = await signAndSubmitTransaction({
        sender: account.address,
        data: {
          function:
            "0xb533aa89f105c426dfe9dc7f41ae0c57513d8b245faecf7d468c6830c63122c7::GameNFT::create_collection",
          typeArguments: [],
          functionArguments: [
            "Atom Game Collection on Aptos",
            "AtomGameCollection",
            "https://static.ybox.vn/2022/8/4/1659578024342-Logo%20ATOM.jpg",
          ],
        },
      });
      await aptos.waitForTransaction({ transactionHash: response.hash });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const mintNFT = async (event) => {
    if (account?.address == undefined) return;
    let hasCollection = await checkCollection();
    if (hasCollection == false) {
      let reuslt = await createCollection();
      if (reuslt == false) return;
    }
    try {
      const response = await signAndSubmitTransaction({
        sender: account.address,
        data: {
          function:
            "0xb533aa89f105c426dfe9dc7f41ae0c57513d8b245faecf7d468c6830c63122c7::GameNFT::mint_nft",
          typeArguments: [],
          functionArguments: [
            "Atom NFT on Aptos",
            event.detail.name,
            event.detail.uri,
            "AtomGameCollection",
            "2",
          ],
        },
      });
      await aptos.waitForTransaction({ transactionHash: response.hash });
      handleGetOwnedNFT();
    } catch (error) {
      console.log("Hello error: " + error);
    }
    isBuying = false;
  };

  const getNFT = async (collectionAddress: string) => {
    if (account?.address == undefined) return;
    try {
      const nfts = await aptos.getAccountOwnedTokensFromCollectionAddress({
        accountAddress: account?.address,
        collectionAddress: collectionAddress,
      });
      let updateNFTEvent = new CustomEvent("Update NFT List", {
        detail: {
          success: true,
          nfts: nfts,
        },
      });
      console.log(updateNFTEvent);
      window.dispatchEvent(updateNFTEvent);
    } catch (error) {
      getNFT(collectionAddress);
    }
  };

  const handleGetOwnedNFT = async () => {
    checkCollection().then(async (result) => {
      if (result[0]) {
        getNFT(result[1]);
      } else {
        let updateNFTEvent = new CustomEvent("Update NFT List", {
          detail: {
            success: false,
            nfts: [],
          },
        });
        window.dispatchEvent(updateNFTEvent);
      }
    });
  };
  return (
    <div>
      <button id="disconnectBtn" onClick={handleDisconnectWallet}>
        Disconnect Wallet
      </button>
      <button id="sendTransaction" onClick={handleMinusAptos}>
        sendTransaction
      </button>
      <div>
        <button id="connectBtn" onClick={handleConnectWallet}>
          Connect to Aptos Wallet
        </button>
        <WalletSelector isModalOpen={openModal} setModalOpen={setOpenModal} />
      </div>
      <button id="getPoolBalance" onClick={handleGetPoolBalance}>
        getPoolBalance
      </button>
      <button id="getNFT" onClick={handleGetOwnedNFT}>
        Get NFT
      </button>
      <button id="isLoaded" onClick={handleLoaded}>
        Is Loaded
      </button>
    </div>
  );
};

export default ConnectWalletButton;
