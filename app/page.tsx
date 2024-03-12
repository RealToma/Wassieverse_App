"use client";

import { styled } from "styled-components";
import { Box } from "@mui/material";
import Header from "@/components/layout/header";
import BridgeProgressBar from "@/components/ProgressBar/BridgeProgressBar";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { dataNFTsList } from "@/components/data/NFT";
import StepSelectNFTs from "@/components/Tab/StepSelectNFTs";
import StepInputSolana from "@/components/Tab/StepInputSolana";
import StepTransferNFT from "@/components/Tab/StepTransferNFT";
import StepTransferSuccess from "@/components/Tab/StepTransferSuccess";
import { abiWassieverse } from "@/lib/abi";
import { ethers } from "ethers";
import axios from "axios";
import LoadingEffectMain from "@/components/Loading/LoadingEffectMain";

export default function Home() {
  const { address, isConnected } = useAccount();
  const [stepProgress, setStepProgress] = useState(0);
  const [addressSolana, setAddressSolana] = useState();
  const [arraySelected, setArraySelected] = useState<any>([]);
  const [flagLoadingNFTs, setFlagLoadingNFTs] = useState(false);

  const addressContractNFT =
    process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? (process.env.NEXT_PUBLIC_ADDRESS_CONTRACT_TEST as any)
      : (process.env.NEXT_PUBLIC_ADDRESS_CONTRACT_MAIN as any);

  const contract = {
    address: addressContractNFT,
    abi: abiWassieverse,
  };

  const resultBalance = useReadContract({
    ...contract,
    functionName: "balanceOf",
    args: [address],
  });

  // const resultTotalSupply: any = useReadContract({
  //   ...contract,
  //   functionName: "totalSupply",
  //   args: [],
  // });

  const provider = new ethers.providers.InfuraProvider(
    process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? "goerli" : "homestead",
    process.env.NEXT_PUBLIC_KEY_INFRA
  );
  const contractNFT = new ethers.Contract(
    addressContractNFT,
    abiWassieverse,
    provider
  );
  // console.log("result:", Number(result.data));

  const checkRevealData = (link: any) => {
    if (link !== undefined || link !== null || link !== "") {
      if (link.slice(-4) === "json") {
        return true;
      }
      return false;
    }
    return false;
  };

  const getOwnedNFTs = async () => {
    try {
      setFlagLoadingNFTs(true);
      const totalSupply = await contractNFT.totalSupply();
      // console.log("totalSupply:", Number(totalSupply._hex));
      const arrayOwnedTokenIDs = [];
      for (var i = 0; i < Number(totalSupply._hex); i++) {
        let resultAddress = await contractNFT.ownerOf(i);
        // console.log("resultAddress:", resultAddress);
        if (resultAddress === address) {
          arrayOwnedTokenIDs.push(i);
        }
      }
      // console.log("arrayOwnedTokenIDs:", arrayOwnedTokenIDs);

      const arrayInfoOwnedNFTs = [];
      if (arrayOwnedTokenIDs.length !== 0) {
        for (var i = 0; i < arrayOwnedTokenIDs.length; i++) {
          let resultURI = await contractNFT.tokenURI(arrayOwnedTokenIDs[i]);
          // console.log("resultURI:", resultURI);
          // console.log("link:", resultURI.slice(7, resultURI.length));
          const fetchIPFS = await axios.get(
            "https://ipfs.io/ipfs/" + resultURI.slice(7, resultURI.length)
          );
          // console.log("fetchIPFS:", fetchIPFS.data);
          let tempInfoNFT;
          if (checkRevealData(resultURI) === false) {
            tempInfoNFT = {
              id: i,
              name: "Unrevealed",
              description: "This is unrevealed NFT.",
              image:
                "https://ipfs.io/ipfs/" +
                fetchIPFS.data.image.slice(7, fetchIPFS.data.image.length),
              flagSelected: false,
            };
          } else {
            tempInfoNFT = {
              id: i,
              name: fetchIPFS.data.name,
              description: fetchIPFS.data.description,
              image:
                "https://ipfs.io/ipfs/" +
                fetchIPFS.data.image.slice(7, fetchIPFS.data.image.length),
              flagSelected: false,
            };
          }
          arrayInfoOwnedNFTs.push(tempInfoNFT);
        }
        // console.log("arrayInfoOwnedNFTs:", arrayInfoOwnedNFTs);
        setArraySelected(arrayInfoOwnedNFTs);
        setFlagLoadingNFTs(false);
      }
    } catch (error) {
      console.log("error of getOwnedNFTs:", error);
    }
  };

  useEffect(() => {
    if (isConnected && address !== undefined) {
      getOwnedNFTs();
      setStepProgress(1);
    } else {
      setStepProgress(0);
    }
  }, [isConnected, address]);

  return (
    <StyledComponent>
      <SectionInside>
        <Header />
        <SectionBridge>
          <BridgeProgressBar stepProgress={stepProgress} />
          <SectionContent>
            {stepProgress === 0 ? (
              <SectionContentLeft01>
                <ConnectButton />
              </SectionContentLeft01>
            ) : (
              <SectionContentLeft02>
                <SectionConnected>
                  <TextConnectedWallet>Connected Wallet</TextConnectedWallet>
                  <ConnectButton></ConnectButton>
                </SectionConnected>
                {stepProgress === 1 ? (
                  <StepSelectNFTs
                    arraySelected={arraySelected}
                    setArraySelected={setArraySelected}
                    setStepProgress={setStepProgress}
                  />
                ) : stepProgress === 2 ? (
                  <StepInputSolana
                    setStepProgress={setStepProgress}
                    addressSolana={addressSolana}
                    setAddressSolana={setAddressSolana}
                  />
                ) : stepProgress === 3 ? (
                  <StepTransferNFT setStepProgress={setStepProgress} />
                ) : (
                  <StepTransferSuccess setStepProgress={setStepProgress} />
                )}
              </SectionContentLeft02>
            )}

            <SectionBackImage>
              <img
                src={"/assets/images/wassie1.png"}
                width={"100%"}
                height={"100%"}
                alt="wassie"
              />
            </SectionBackImage>
          </SectionContent>
        </SectionBridge>
      </SectionInside>
      {flagLoadingNFTs ? <LoadingEffectMain text={"Loading NFTs"} /> : <></>}
    </StyledComponent>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: 100%;
  padding: 32px;
  box-sizing: border-box;
`;

const SectionInside = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 30px;
  background-color: #252525;
  padding: 30px;
  box-sizing: border-box;
`;

const SectionBridge = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 120px;
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 200px;
  padding: 0px 100px;
  box-sizing: border-box;
  /* align-items: center; */
`;

const SectionContentLeft01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SectionContentLeft02 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const SectionBackImage = styled(Box)`
  display: flex;
  width: 450px;
  margin-left: 100px;
  height: fit-content;
`;

const TextConnectedWallet = styled(Box)`
  font-family: Gochi Hand;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

const SectionConnected = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
