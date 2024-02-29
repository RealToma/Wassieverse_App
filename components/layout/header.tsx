import { styled } from "styled-components";
import { Box } from "@mui/material";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <StyledComponent>
      <SectionLogo>
        <Image
          src={"/assets/images/Logo.png"}
          width={48}
          height={48}
          alt="logo"
        />
      </SectionLogo>
      <SectionName>Wassiverse</SectionName>
      <ConnectButton />
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

export default Header;
