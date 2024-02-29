import { styled } from "styled-components";
import { Box } from "@mui/material";
import Image from "next/image";
import { dataContactLinks } from "../data/link";

const Header = () => {
  const handleOpenLink = (each: any) => {
    if (each.disable) {
      return;
    }
    window.open(each.link);
  };

  return (
    <StyledComponent>
      <SectionLogo>
        <img src={"/assets/images/Logo.png"} width={"100%"} alt="logo" />
      </SectionLogo>
      <SectionName>Wassiverse</SectionName>
      <SectionContactLink>
        {dataContactLinks.map((each: any, index: any) => {
          return (
            <ButtonEachContact key={index} onClick={() => handleOpenLink(each)}>
              {each.icon}
            </ButtonEachContact>
          );
        })}
        <SectionMark>
          <img
            src={"/assets/images/linkMark.png"}
            width={"100%"}
            alt="linkMark"
          />
        </SectionMark>
      </SectionContactLink>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SectionLogo = styled(Box)`
  display: flex;
  width: 48px;
  > img {
    aspect-ratio: 1;
  }
`;

const SectionName = styled(Box)`
  display: flex;
  font-family: "Gochi Hand";
  font-size: 40px;
  font-weight: 400;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff3fda;
`;

const SectionContactLink = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;
`;

const ButtonEachContact = styled(Box)`
  display: flex;
  font-size: 30px;
  color: #85888e;
  margin-left: 20px;
  > a {
    text-decoration: none;
  }

  cursor: pointer;
  transition: 0.2s;
  user-select: none;
  &:hover {
    color: white;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const SectionMark = styled(Box)`
  display: flex;
  position: absolute;
  left: -240px;
  top: 10px;
  width: 270px;
`;

export default Header;
