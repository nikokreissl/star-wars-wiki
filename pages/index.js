import { Inter } from "next/font/google";
import styled from "styled-components";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/");
      const data = await response.json();
      setAllData(allData);
    }
    fetchData();
  }, []);
  return (
    <>
      <StyledHomeSearchText>
        What are you searching for, young jedi?
      </StyledHomeSearchText>
    </>
  );
}

const StyledHomeSearchText = styled.p`
  margin: 15px;
  text-align: center;
`;
