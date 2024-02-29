"use client";

import { styled } from "styled-components";
import { Box } from "@mui/material";
import Header from "@/components/Layout/Header";
import BridgeProgressBar from "@/components/ProgressBar/BridgeProgressBar";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { dataNFTsList } from "@/components/Data/NFT";
import StepSelectNFTs from "@/components/Tab/StepSelectNFTs";
import StepInputSolana from "@/components/Tab/StepInputSolana";

export default function Home() {
  const { address, isConnected } = useAccount();
  const [stepProgress, setStepProgress] = useState(0);
  const [addressSolana, setAddressSolana] = useState();
  const [arraySelected, setArraySelected] = useState<any>([]);

  useEffect(() => {
    if (isConnected) {
      setStepProgress(1);
      let tempArray = [];
      for (var i = 0; i < dataNFTsList.length; i++) {
        const dataEach = {
          id: i,
          name: dataNFTsList[i].name,
          imgSrc: dataNFTsList[i].imgSrc,
          flagSelected: false,
        };
        tempArray.push(dataEach);
      }
      setArraySelected(tempArray);
    } else {
      setStepProgress(0);
    }
  }, [isConnected]);

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
                ) : (
                  <></>
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
