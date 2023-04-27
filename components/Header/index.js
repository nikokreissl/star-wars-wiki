import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeader>STAR WARS</StyledHeader>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  background-image: url("/images/stars-background.png");
  background-repeat: repeat;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeader = styled.h1`
  color: #ffe81f;
  text-align: center;
`;
