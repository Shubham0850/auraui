import React from "react";
import Nft1 from "./Nft/MajnuBhai";
import WalletLinker from "./WalletConnect/WalletLinker";
import CryptoConnector from "./WalletConnect/CryptoConnector";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllSignUp = () => {
  return (
    <div>
      <ComponentWrapper
        title="MajnuBhai NFT"
        previewLink="/components/web3/Nft#majnubhai-nft-component"
      >
        <Nft1 />
      </ComponentWrapper>
      <ComponentWrapper
        title="WalletLinker Component"
        previewLink="/components/web3/WalletConnect#walletlinker-component"
      >
        <WalletLinker />
      </ComponentWrapper>
      <ComponentWrapper
        title="CryptoConnector Component "
        previewLink="/components/web3/WalletConnect#cryptoconnector-component"
      >
        <CryptoConnector />
      </ComponentWrapper>
    </div>
  );
};

export default AllSignUp;
