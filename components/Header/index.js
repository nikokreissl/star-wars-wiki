import styled from "styled-components";

export default function Header() {
  return <StyledHeadline>STAR WARS</StyledHeadline>;
}

const StyledHeadline = styled.h1`
  color: var(--star-wars-yellow);
  text-align: center;
`;
