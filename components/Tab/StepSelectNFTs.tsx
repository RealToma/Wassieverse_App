import { Box } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { PiSquaresFourBold, PiSquaresFourFill } from "react-icons/pi";
import NFTSimpleCard from "../Card/NFTSimpleCard";

const StepSelectNFTs = ({ arraySelected, setArraySelected }: any) => {
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
      <SectionButtonStep></SectionButtonStep>
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
`;

export default StepSelectNFTs;
