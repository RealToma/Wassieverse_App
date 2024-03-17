import { Box } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

const StepTransferNFT = ({ setStepProgress }: any) => {
  // const handleNextStep = () => {
  //   setStepProgress(4);
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  const handleCancelStep = () => {
    setStepProgress(2);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledComponent>
      <SecionIconProcessing>
        <span className="loader"></span>
      </SecionIconProcessing>
      <TextTransferBig>Transfer in progress...</TextTransferBig>
      <TextTransferDescription>
        Please wait until we process is done.
      </TextTransferDescription>
      <SectionButtonStep>
        <ButtonCancel onClick={() => handleCancelStep()}>Back</ButtonCancel>
        {/* <ButtonNext onClick={() => handleNextStep()}>Next</ButtonNext> */}
      </SectionButtonStep>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const SecionIconProcessing = styled(Box)`
  display: flex;
  margin-top: 50px;
  margin-bottom: 30px;

  .loader {
    position: relative;
    width: 80px;
    height: 80px;
    background: rgba(255, 63, 218, 1);
    transform: rotateX(65deg) rotate(45deg);
    // remove bellows command for perspective change
    //transform: perspective(200px) rotateX(65deg) rotate(45deg);
    color: #00cfff;
    animation: layers1 0.6s linear infinite alternate;
  }
  .loader:after {
    content: "";
    position: absolute;
    inset: 0;
    background: white;
    animation: layerTr 0.6s linear infinite alternate;
  }

  @keyframes layers1 {
    0% {
      box-shadow: 0px 0px 0 0px;
    }
    90%,
    100% {
      box-shadow: 20px 20px 0 -4px;
    }
  }
  @keyframes layerTr {
    0% {
      transform: translate(0, 0) scale(1);
    }
    100% {
      transform: translate(-30px, -30px) scale(1);
    }
  }
`;

const TextTransferBig = styled(Box)`
  font-family: Gochi Hand;
  font-size: 58px;
  font-weight: 400;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  margin-bottom: 5px;
`;

const TextTransferDescription = styled(Box)`
  font-family: Gochi Hand;
  font-size: 40px;
  font-weight: 400;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(148, 150, 156, 1);
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

export default StepTransferNFT;
