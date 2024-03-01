import { Box } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

const StepTransferSuccess = ({ setStepProgress }: any) => {
  const handleNextStep = () => {
    setStepProgress(1);
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

  return (
    <StyledComponent>
      <SecionIconProcessing>
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
      </SecionIconProcessing>
      <TextTransferBig>NFT’s Transferred Successfully!</TextTransferBig>
      <TextTransferDescription>
        Check your Solana Wallet for the assets.
      </TextTransferDescription>
      <SectionButtonStep>
        {/* <ButtonCancel onClick={() => handleCancelStep()}>Return</ButtonCancel> */}
        <ButtonNext onClick={() => handleNextStep()}>Return</ButtonNext>
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

  .success-checkmark {
    width: 80px;
    /* height: 115px; */
    margin: 0 auto;

    .check-icon {
      width: 80px;
      height: 80px;
      position: relative;
      border-radius: 50%;
      box-sizing: content-box;
      border: 4px solid rgba(21, 183, 158, 1);

      &::before {
        top: 3px;
        left: -2px;
        width: 30px;
        transform-origin: 100% 50%;
        border-radius: 100px 0 0 100px;
      }

      &::after {
        top: 0;
        left: 30px;
        width: 60px;
        transform-origin: 0 50%;
        border-radius: 0 100px 100px 0;
        animation: rotate-circle 4.25s ease-in;
      }

      &::before,
      &::after {
        content: "";
        height: 100px;
        position: absolute;
        /* background: #ffffff; */
        transform: rotate(-45deg);
      }

      .icon-line {
        height: 5px;
        background-color: rgba(21, 183, 158, 1);
        display: block;
        border-radius: 2px;
        position: absolute;
        z-index: 10;

        &.line-tip {
          top: 46px;
          left: 14px;
          width: 25px;
          transform: rotate(45deg);
          animation: icon-line-tip 0.75s;
        }

        &.line-long {
          top: 38px;
          right: 8px;
          width: 47px;
          transform: rotate(-45deg);
          animation: icon-line-long 0.75s;
        }
      }

      .icon-circle {
        top: -4px;
        left: -4px;
        z-index: 10;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        box-sizing: content-box;
        border: 4px solid rgba(21, 183, 158, 0.5);
      }

      .icon-fix {
        top: 8px;
        width: 5px;
        left: 26px;
        z-index: 1;
        height: 85px;
        position: absolute;
        transform: rotate(-45deg);
        /* background-color: #ffffff; */
      }
    }
  }

  @keyframes rotate-circle {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }

  @keyframes icon-line-tip {
    0% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    54% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    70% {
      width: 50px;
      left: -8px;
      top: 37px;
    }
    84% {
      width: 17px;
      left: 21px;
      top: 48px;
    }
    100% {
      width: 25px;
      left: 14px;
      top: 45px;
    }
  }

  @keyframes icon-line-long {
    0% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    65% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    84% {
      width: 55px;
      right: 0px;
      top: 35px;
    }
    100% {
      width: 47px;
      right: 8px;
      top: 38px;
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

export default StepTransferSuccess;
