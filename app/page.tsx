"use client";

import { styled } from "styled-components";
import { Box } from "@mui/material";
import Header from "@/components/Layout/Header";
import BridgeProgressBar from "@/components/ProgressBar/BridgeProgressBar";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { PiSquaresFourBold } from "react-icons/pi";

export default function Home() {
  const { address, isConnected } = useAccount();
  const [stepProgress, setStepProgress] = useState(0);
  const [countsSelected, setCountSelected] = useState(0);
  const [flagSelectAll, setFlagSelectAll] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setStepProgress(1);
    } else {
      setStepProgress(0);
    }
  }, [isConnected]);

  const handleSelectAll = () => {
    setFlagSelectAll(!flagSelectAll);
  };

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
                <SectionNFTSelectedStats>
                  <TextSelectedNFTCounts>
                    {countsSelected} out of 12
                  </TextSelectedNFTCounts>
                  <ButtonSelectAll onClick={() => handleSelectAll()}>
                    <IconAll>
                      <PiSquaresFourBold />
                    </IconAll>
                    <TextSelectAll>Select all</TextSelectAll>
                  </ButtonSelectAll>
                </SectionNFTSelectedStats>
              </SectionContentLeft02>
            )}

            <SectionBackImage>
              <img
                src={"/assets/images/wassie1.png"}
                width={"100%"}
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

const SectionNFTSelectedStats = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const TextSelectedNFTCounts = styled(Box)`
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

const ButtonSelectAll = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: rgba(206, 207, 210, 0.7);

  transition: 0.2s;
  &:hover {
    color: white;
  }
`;

const IconAll = styled(Box)`
  /* display: flex; */
  font-size: 20px;
  margin-right: 5px;
`;

const TextSelectAll = styled(Box)`
  /* display: flex; */
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
