import { styled } from "styled-components";
import { Box } from "@mui/material";
import { RiPushpin2Line } from "react-icons/ri";

const BridgeProgressBar = ({ stepProgress }: any) => {
  return (
    <StyledComponent>
      <SectionLineProgress>
        <img src={"/assets/images/lineProgress.png"} width={"100%"} alt="" />

        <SectionStatsConnectWallet>
          {stepProgress === 0 ? (
            <SectionIconCurrent>
              <SectionIconRotateRect></SectionIconRotateRect>
              <IconCurrent>
                <img
                  src={"/assets/images/icons/pinned.png"}
                  width={"100%"}
                  alt=""
                />
              </IconCurrent>
            </SectionIconCurrent>
          ) : (
            <SectionIconCurrent>
              <SectionIconCircleBig></SectionIconCircleBig>
              <IconProcessed>
                <img
                  src={"/assets/images/icons/checked.png"}
                  width={"100%"}
                  alt=""
                />
              </IconProcessed>
            </SectionIconCurrent>
          )}

          <SectionTextGroup>
            <TextSubject>Connect Your Wallet</TextSubject>
            <TextDescription>
              Connect your wallet to load your NFT’s
            </TextDescription>
          </SectionTextGroup>
        </SectionStatsConnectWallet>

        <SectionStatsSelectNFT>
          {stepProgress === 0 ? (
            <SectionIconCurrent>
              <SectionIconCircleSmall></SectionIconCircleSmall>
              <IconCurrent></IconCurrent>
            </SectionIconCurrent>
          ) : stepProgress === 1 ? (
            <SectionIconCurrent>
              <SectionIconRotateRect></SectionIconRotateRect>
              <IconCurrent>
                <img
                  src={"/assets/images/icons/pinned.png"}
                  width={"100%"}
                  alt=""
                />
              </IconCurrent>
            </SectionIconCurrent>
          ) : (
            <SectionIconCurrent>
              <SectionIconCircleBig></SectionIconCircleBig>
              <IconProcessed>
                <img
                  src={"/assets/images/icons/checked.png"}
                  width={"100%"}
                  alt=""
                />
              </IconProcessed>
            </SectionIconCurrent>
          )}
          <SectionTextGroup>
            <TextSubject>Select Your NFT’s</TextSubject>
            <TextDescription>
              Select the NFT’s that you want to transfer
            </TextDescription>
          </SectionTextGroup>
        </SectionStatsSelectNFT>

        <SectionTransferNFT>
          {stepProgress === 2 ? (
            <SectionIconCurrent>
              <SectionIconRotateRect></SectionIconRotateRect>
              <IconCurrent>
                <img
                  src={"/assets/images/icons/pinned.png"}
                  width={"100%"}
                  alt=""
                />
              </IconCurrent>
            </SectionIconCurrent>
          ) : stepProgress === 3 ? (
            <SectionIconCurrent>
              <SectionIconCircleBig></SectionIconCircleBig>
              <IconProcessed>
                <img
                  src={"/assets/images/icons/checked.png"}
                  width={"100%"}
                  alt=""
                />
              </IconProcessed>
            </SectionIconCurrent>
          ) : (
            <SectionIconCurrent>
              <SectionIconCircleSmall></SectionIconCircleSmall>
              <IconCurrent></IconCurrent>
            </SectionIconCurrent>
          )}
          <SectionTextGroup>
            <TextSubject>Transfer Your NFT’s</TextSubject>
            <TextDescription>
              Transfer your existing NFT’s on SOLANA network
            </TextDescription>
          </SectionTextGroup>
        </SectionTransferNFT>
      </SectionLineProgress>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionLineProgress = styled(Box)`
  display: flex;
  width: 100%;
  position: relative;
  user-select: none;
`;

const SectionStatsConnectWallet = styled(Box)`
  display: flex;
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SectionStatsSelectNFT = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SectionTransferNFT = styled(Box)`
  display: flex;
  position: absolute;
  right: 15%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SectionIconCurrent = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SectionIconRotateRect = styled(Box)`
  min-width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: #00cfff;
  transform: rotate(-45deg);
`;

const SectionIconCircleBig = styled(Box)`
  min-width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: #00cfff;
`;

const SectionIconCircleSmall = styled(Box)`
  width: 16px;
  height: 16px;
  box-shadow: 0px 0px 4px 5px rgba(0, 207, 255, 0.2);
  border-radius: 100%;
  background-color: #00cfff;

  animation: shadow-animation 2s infinite;
  @keyframes shadow-animation {
    0% {
      box-shadow: 0px 0px 3px 5px rgba(0, 207, 255, 0.3);
    }
    50% {
      box-shadow: 0px 0px 3px 5px rgba(0, 207, 255, 0);
    }
    100% {
      box-shadow: 0px 0px 3px 5px rgba(0, 207, 255, 0.3);
    }
  }
`;

const IconCurrent = styled(Box)`
  /* display: flex;

  transform: rotate(-45deg); */
  width: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const IconProcessed = styled(Box)`
  /* display: flex;

  transform: rotate(-45deg); */
  width: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SectionTextGroup = styled(Box)`
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  width: max-content;
`;

const TextSubject = styled(Box)`
  font-family: Gochi Hand;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: #00cfff;
`;

const TextDescription = styled(Box)`
  font-family: Gochi Hand;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #94969c;

  margin-top: 5px;
`;

export default BridgeProgressBar;
