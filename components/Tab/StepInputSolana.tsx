import { Box } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { MdContentPasteGo, MdOutlineKeyboardArrowDown } from "react-icons/md";

const StepInputSolana = ({
  setStepProgress,
  addressSolana,
  setAddressSolana,
}: any) => {
  const handleNextStep = () => {
    if (
      addressSolana === null ||
      addressSolana === undefined ||
      addressSolana === ""
    ) {
      return toast.error("Input your SOL address.");
    }
    setStepProgress(3);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCancelStep = () => {
    setStepProgress(1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setAddressSolana(text);
    } catch (error: any) {
      return toast.error(error);
    }
  };

  return (
    <StyledComponent>
      <TextSubject>Input your SOL Address to Transfer your NFT’s.</TextSubject>
      <TextBody>SOL Address</TextBody>
      <SectionInputSolAddress>
        <InputAddress
          component="input"
          placeholder="Paste your Solana Address"
          value={addressSolana}
          onChange={(e: any) => {
            setAddressSolana(e.target.value);
          }}
        />
        <SectionPaste onClick={() => handlePasteClipboard()}>
          <TextPaste>Paste</TextPaste>
          <IconPaste>
            <MdContentPasteGo />
          </IconPaste>
        </SectionPaste>
      </SectionInputSolAddress>
      <TextBody>Select Network</TextBody>
      <SectionSelectNetwork>
        <InputAddress component="input" placeholder="SOLANA" disabled />
        <IconSelectNetwork>
          <MdOutlineKeyboardArrowDown />
        </IconSelectNetwork>
      </SectionSelectNetwork>
      <SectionEstimateGas>
        <TextEstimateGas>Estimated Gas Fee</TextEstimateGas>
        <TextEstimateGas>0.002 ETH</TextEstimateGas>
      </SectionEstimateGas>

      <SectionButtonStep>
        <ButtonCancel onClick={() => handleCancelStep()}>Back</ButtonCancel>
        <ButtonNext onClick={() => handleNextStep()}>Next</ButtonNext>
      </SectionButtonStep>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const TextSubject = styled(Box)`
  font-family: Gochi Hand;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: white;
`;

const TextBody = styled(Box)`
  margin-top: 30px;
  margin-bottom: 10px;
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

const SectionInputSolAddress = styled(Box)`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(51, 55, 65, 1);
  border-radius: 6px;
  padding: 0px 10px;
  box-sizing: border-box;

  transition: 0.2s;
  &:hover {
    border: 1px solid white;
    > div:nth-child(1) {
      color: white !important;
    }
  }
`;

const SectionSelectNetwork = styled(Box)`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(51, 55, 65, 1);
  border-radius: 6px;
  padding: 0px 10px;
  box-sizing: border-box;
  user-select: none;
  transition: 0.2s;

  &:hover {
    border: 1px solid white;
  }
`;

const InputAddress = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  margin-right: 20px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0);
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

const SectionButtonStep = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
`;

const ButtonCancel = styled(Box)`
  display: flex;
  width: 130px;
  height: 40px;
  border: 1px solid rgba(51, 55, 65, 1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin-right: 10px;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    background-color: white;
    border: 1px solid white;
    color: rgba(51, 55, 65, 1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonNext = styled(Box)`
  display: flex;
  width: 130px;
  height: 40px;
  background-color: rgba(255, 63, 218, 1);
  border: 1px solid rgba(255, 63, 218, 1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  font-family: Gochi Hand;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin-right: 10px;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    background-color: white;
    border: 1px solid white;
    color: rgba(255, 63, 218, 1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SectionPaste = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    > div:nth-child(1) {
      text-shadow: 0px 0px 3px rgba(255, 63, 218, 1);
    }
    > div:nth-child(2) {
      color: white;
    }
  }
`;

const TextPaste = styled(Box)`
  display: flex;
  font-family: Gochi Hand;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  transition: 0.2s;
  margin-right: 5px;
  color: rgba(255, 63, 218, 1);
`;

const IconPaste = styled(Box)`
  display: flex;
  transition: 0.2s;
  transform: rotateY(180deg);
  font-size: 20px;
  color: rgba(148, 150, 156, 1);
`;

const IconSelectNetwork = styled(Box)`
  display: flex;
  color: rgba(206, 207, 210, 1);
  font-size: 20px;
`;

const SectionEstimateGas = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const TextEstimateGas = styled(Box)`
  font-family: Gochi Hand;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(206, 207, 210, 1);
`;

export default StepInputSolana;
