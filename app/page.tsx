"use client";

import { styled } from "styled-components";
import { Box } from "@mui/material";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <StyledComponent>
      <SectionInside>
        <Header />
      </SectionInside>
    </StyledComponent>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: 100%;
  padding: 32px;
  box-sizing: border-box;
`;

const SectionInside = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 30px;
  background-color: #252525;
  padding: 30px;
  box-sizing: border-box;
`;
