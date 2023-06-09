import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/Animations/loading-spinner";
import LinkComponent from "@/components/Links";
import styled from "styled-components";
import Link from "next/link";

export default function Detailpage() {
  const [detailData, setDetaildata] = useState();
  const router = useRouter();
  const { item, id } = router.query;

  useEffect(() => {
    async function fetchDetailData() {
      const response = await fetch(`https://swapi.dev/api/${item}/${id}/`);
      const data = await response.json();
      setDetaildata(data);
    }
    fetchDetailData();
  }, [item, id]);

  async function fetchSubArrayData(itemAndId) {
    const response = await fetch(`https://swapi.dev/api/${itemAndId}`);
    const data = await response.json();
    console.log(data);
    // if (data.name) {
    //   return data.name;
    // } else {
    //   return data.title;
    // }
  }

  if (!detailData) {
    return <LoadingSpinner />;
  }

  const array = Object.entries(detailData).map(([key, value]) => ({
    key,
    value,
  }));

  const detailedDataArray = array
    .filter((item) => item.key !== "created")
    .filter((item) => item.key !== "edited")
    .filter((item) => item.key !== "url")
    .filter((item) => item.value.length > 0);
  return (
    <>
      <LinkComponent href={`/listings?${item}`}>Back</LinkComponent>
      <StyledDetailList>
        {detailedDataArray.map((detailData) => (
          <StyledDetailItem key={detailData.key}>
            {Array.isArray(detailData.value) ? (
              <>
                <StyledSubListParagraph>
                  {detailData.key}
                </StyledSubListParagraph>
                <StyledSubList>
                  {detailData.value.map((i) => (
                    <StyledDetailItem key={i}>
                      <LinkComponent href={`/listings/${i.substr(22)}`}>
                        {detailData.key.substr(0, detailData.key.length - 1)}{" "}
                        {i.substr(
                          23 + detailData.key.length,
                          i.length - (24 + detailData.key.length)
                        )}
                      </LinkComponent>
                    </StyledDetailItem>
                  ))}
                </StyledSubList>
              </>
            ) : detailData.value.includes("http") ? (
              <StyledDetailListLink
                href={`/listings/${detailData.value.substr(22)}`}
              >
                {detailData.key}
              </StyledDetailListLink>
            ) : (
              `${detailData.key.replace(/_/g, " ")}: ${detailData.value}`
            )}
          </StyledDetailItem>
        ))}
      </StyledDetailList>
    </>
  );
}

const StyledDetailList = styled.ol`
  margin: 20px;
`;

const StyledDetailItem = styled.li`
  margin-left: 20px;
  color: var(--star-wars-yellow);
`;

const StyledSubListParagraph = styled.p`
  color: var(--star-wars-yellow);
`;

const StyledSubList = styled.ul`
  padding: 0;
`;

const StyledDetailListLink = styled(Link)`
  color: var(--star-wars-yellow);
  &:visited {
    color: var(--star-wars-yellow);
  }
`;

// {detailData.key.substr(0, detailData.key.length - 1)}{" "}
//                         {i.substr(
//                           23 + detailData.key.length,
//                           i.length - (24 + detailData.key.length)
//                         )}
