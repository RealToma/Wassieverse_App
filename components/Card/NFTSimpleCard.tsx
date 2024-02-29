import { styled } from "styled-components";
import { Box } from "@mui/material";
import { useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";

const NFTSimpleCard = ({ each }: any) => {
  const [flagSelected, setFlagSelected] = useState(false);

  return (
    <StyledComponent
      onClick={() => {
        setFlagSelected(!flagSelected);
      }}
      active={flagSelected ? 1 : 0}
    >
      <img src={each.imgSrc} width={"100%"} alt={each.name} />
      {flagSelected ? (
        <IconSelected>
          <FaSquareCheck />
        </IconSelected>
      ) : (
        <></>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 20px;
  border: ${({ active }: any) =>
    active ? "2px solid rgba(0, 207, 255, 1)" : "2px solid rgba(0, 0, 0, 0)"};
  overflow: hidden;
  > img {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    transition: 0.3s;
  }

  transition: 0.2s;
  cursor: pointer;
  &:hover {
    /* border: 2px solid rgba(0, 207, 255, 1); */
    > img {
      transform: scale(1.2);
    }
  }
`;

const IconSelected = styled(Box)`
  display: flex;
  position: absolute;
  color: rgba(0, 207, 255, 1);
  font-size: 20px;
  top: 10px;
  right: 10px;
`;

export default NFTSimpleCard;
