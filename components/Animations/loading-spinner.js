import styled from "styled-components";
import Image from "next/image";
import Lightsaber from "../../public/gifs/light-saber.gif";

export default function LoadingSpinner() {
  return (
    <StyledLoadingContainer>
      <p>Loading...</p>
      <Image src={Lightsaber} alt="Loading..." width={250} height={250} />
    </StyledLoadingContainer>
  );
}

const StyledLoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
