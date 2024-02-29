"use client";

import { styled } from "styled-components";
import { Box } from "@mui/material";
import Header from "@/components/Layout/Header";
import BridgeProgressBar from "@/components/ProgressBar/BridgeProgressBar";
import { useState } from "react";

export default function Home() {
  const [stepProgress, setStepProgress] = useState(0);

  return (
    <StyledComponent>
      <SectionInside>
        <Header />
        <SectionContent>
          <BridgeProgressBar stepProgress={stepProgress} />
        </SectionContent>
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

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 120px;
`;
