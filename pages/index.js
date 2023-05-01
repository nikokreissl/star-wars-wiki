import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { objectToArray } from "@/utils/object-to-array";
import { iconList } from "@/public/icons/icons";

export default function Home() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/");
      const data = await response.json();
      setAllData(objectToArray(data));
    }
    fetchData();
  }, []);

  if (!allData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <StyledHomeSearchText>
        What are you searching for, young jedi?
      </StyledHomeSearchText>
      <StyledItemsList>
        {allData.map((data) => {
          return (
            <li key={data.itemName}>
              <StyledItemLink href={data.link}>
                {iconList.find((icon) => icon.iconFor === data.itemName).icon}
                {data.itemName}
              </StyledItemLink>
            </li>
          );
        })}
      </StyledItemsList>
    </>
  );
}

const StyledHomeSearchText = styled.p`
  margin: 15px;
  text-align: center;
`;

const StyledItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 30px;
  justify-content: center;
  list-style-type: none;
  margin-top: 50px;
`;

const StyledItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 200px;
  color: var(--star-wars-yellow);
  border: 3px solid var(--star-wars-yellow);
  border-radius: 5px;
  padding: 15px;
  &:visited {
    color: var(--star-wars-yellow);
  }
  &:hover {
    color: white;
    border: 3px solid white;
  }
`;
