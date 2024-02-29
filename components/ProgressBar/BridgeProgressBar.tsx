import { styled } from "styled-components";
import { Box } from "@mui/material";
import { RiPushpin2Line } from "react-icons/ri";

const BridgeProgressBar = ({ stepProgress }: any) => {
  return (
    <StyledComponent>
      <SectionLineProgress>
        <img src={"/assets/images/lineProgress.png"} width={"100%"} alt="" />

        <SectionStatsConnectWallet>
          <SectionIconCurrent>
            <SectionRotateRect></SectionRotateRect>
            <IconCurrent>
              <img
                src={"/assets/images/icons/pinned.png"}
                width={"100%"}
                alt=""
              />
            </IconCurrent>
          </SectionIconCurrent>
          <SectionTextGroup>
            <TextSubject>Connect Your Wallet</TextSubject>
            <TextDescription>
              Connect your wallet to load your NFT’s
            </TextDescription>
          </SectionTextGroup>
        </SectionStatsConnectWallet>

        <SectionStatsSelectNFT>
          <SectionIconCurrent>
            <SectionRotateRect></SectionRotateRect>
            <IconCurrent>
              <img
                src={"/assets/images/icons/pinned.png"}
                width={"100%"}
                alt=""
              />
            </IconCurrent>
          </SectionIconCurrent>
          <SectionTextGroup>
            <TextSubject>Select Your NFT’s</TextSubject>
            <TextDescription>
              Select the NFT’s that you want to transfer
            </TextDescription>
          </SectionTextGroup>
        </SectionStatsSelectNFT>

        <SectionTransferNFT>
          <SectionIconCurrent>
            <SectionRotateRect></SectionRotateRect>
            <IconCurrent>
              <img
                src={"/assets/images/icons/pinned.png"}
                width={"100%"}
                alt=""
              />
            </IconCurrent>
          </SectionIconCurrent>
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

const SectionRotateRect = styled(Box)`
  min-width: 44px;
  height: 44px;
  border-radius: 6px;
  background-color: #00cfff;
  transform: rotate(-45deg);
`;

const IconCurrent = styled(Box)`
  /* display: flex;

  transform: rotate(-45deg); */
  width: 18px;
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
