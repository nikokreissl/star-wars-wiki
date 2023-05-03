import styled from "styled-components";
import Link from "next/link";

export default function LinkComponent({ children, href }) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

const StyledLink = styled(Link)`
  margin: 20px;
  color: var(--star-wars-yellow);
  &:visited {
    color: var(--star-wars-yellow);
  }
`;
