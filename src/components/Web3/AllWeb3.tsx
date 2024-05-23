import React from "react";
import Nft1 from "./Nft/MajnuBhai";
import Link from "next/link";
import WalletLinker from "./WalletConnect/WalletLinker";
import CryptoConnector from "./WalletConnect/CryptoConnector";

const AllSignUp = () => {
  return (
    <div className="space-y-10 pt-10 ">
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">MajnuBhai NFT Component</h3>
          <Link href={"/components/Web3/Nft#majnubhai-nft-component"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <Nft1 />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            WalletLinker Component
          </h3>
          <Link href={"/components/Web3/Nft#walletlinker-component"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>

        <WalletLinker />
      </div>
      <div className=" ">
        <div className="flex my-2 justify-between">
          <h3 className="text-[20px] font-medium ">
            CryptoConnector Component
          </h3>
          <Link href={"/components/Web3/Nft#cryptoconnector-component"}>
            <button className="py-1 px-2 font-semibold  rounded-3xl text-[14px] bg-white text-blue-600">
              Get Code
            </button>
          </Link>
        </div>
        <CryptoConnector />
      </div>
    </div>
  );
};

export default AllSignUp;
