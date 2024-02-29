import { Box } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { PiSquaresFourBold, PiSquaresFourFill } from "react-icons/pi";
import NFTSimpleCard from "../Card/NFTSimpleCard";
import toast from "react-hot-toast";

const StepSelectNFTs = ({
  arraySelected,
  setArraySelected,
  setStepProgress,
}: any) => {
  const [flagSelectAll, setFlagSelectAll] = useState(false);

  const handleSelectAll = () => {
    setFlagSelectAll(!flagSelectAll);
    if (!flagSelectAll) {
      setArraySelected(
        arraySelected.map((each: any) => ({ ...each, flagSelected: true }))
      );
    } else {
      setArraySelected(
        arraySelected.map((each: any) => ({ ...each, flagSelected: false }))
      );
    }
  };

  const handleNextStep = () => {
    const countSelected = arraySelected.filter(
      (each: any) => each.flagSelected
    ).length;
    if (countSelected <= 0) {
      toast.error("Please select NFTs.");
    }
    setStepProgress(1);
  };

  return (
    <StyledComponent>
      <SectionNFTSelectedStats>
        <TextSelectedNFTCounts>
          {arraySelected.filter((each: any) => each.flagSelected).length} out of{" "}
          {arraySelected.length}
        </TextSelectedNFTCounts>
        <ButtonSelectAll onClick={() => handleSelectAll()}>
          <IconAll>
            {flagSelectAll ? <PiSquaresFourFill /> : <PiSquaresFourBold />}
          </IconAll>
          <TextSelectAll>
            {flagSelectAll ? "Deselect All" : "Select All"}
          </TextSelectAll>
        </ButtonSelectAll>
      </SectionNFTSelectedStats>
      <SectionDisplayNFTs>
        {arraySelected.map((each: any, index: any) => {
          return (
            <NFTSimpleCard
              each={each}
              key={index}
              index={index}
              arraySelected={arraySelected}
              setArraySelected={setArraySelected}
            />
          );
        })}
      </SectionDisplayNFTs>
      <SectionButtonStep>
        <ButtonCancel
          onClick={() => {
            setArraySelected(
              arraySelected.map((each: any) => ({
                ...each,
                flagSelected: false,
              }))
            );
          }}
        >
          Cancel
        </ButtonCancel>
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

const SectionNFTSelectedStats = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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

const SectionDisplayNFTs = styled(Box)`
  display: grid;
  width: 100%;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
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

export default StepSelectNFTs;
