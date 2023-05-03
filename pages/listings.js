import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LinkComponent from "@/components/Links";
import styled from "styled-components";
import LoadingSpinner from "@/components/Animations/loading-spinner";

export default function ListingsPage() {
  const router = useRouter();
  const path = router.asPath.substr(10);

  const [listingData, setListingData] = useState();
  const [apiUrl, setApiUrl] = useState(`https://swapi.dev/api/${path}/`);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();

  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setListingData(data);
      setNextPage(data.next);
      setPreviousPage(data.previous);
    }
    fetchData();
  }, [apiUrl]);

  if (!listingData) {
    return <LoadingSpinner />;
  }

  function handelNextClick() {
    setApiUrl(nextPage);
    setPageCount(pageCount + 1);
  }

  function handelPreviousClick() {
    setApiUrl(previousPage);
    setPageCount(pageCount - 1);
  }

  return (
    <>
      <LinkComponent href={"/"}>back</LinkComponent>
      <StyledListingText>
        Ahh, {path} it is. Yes, hrrmmm.. What you are looking for good luck
        finding.
      </StyledListingText>
      <StyledResultHeadline>results</StyledResultHeadline>
      <StyledDetailList>
        {listingData.results.map((result) => (
          <li key={result.url}>
            <LinkComponent href={result.url}>
              {result.name ? result.name : result.title}
            </LinkComponent>
          </li>
        ))}
      </StyledDetailList>
      <StyledNavigationContainer>
        <StyledNavigationButton
          disabled={listingData.previous ? false : true}
          onClick={handelPreviousClick}
        >
          Previous
        </StyledNavigationButton>
        <p>Count: {pageCount}</p>
        <StyledNavigationButton
          disabled={listingData.next ? false : true}
          onClick={handelNextClick}
        >
          Next
        </StyledNavigationButton>
      </StyledNavigationContainer>
    </>
  );
}

const StyledResultHeadline = styled.h2`
  color: var(--star-wars-yellow);
  margin: 15px;
`;

const StyledListingText = styled.p`
  margin: 15px;
  text-align: center;
`;

const StyledDetailList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledNavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledNavigationButton = styled.button`
  width: 100px;
  background: transparent;
  color: var(--star-wars-yellow);
  padding: 10px;
  border: 1px solid var(--star-wars-yellow);
  border-radius: 10px;
  &:disabled {
    border-color: gray;
    color: gray;
  }
`;
