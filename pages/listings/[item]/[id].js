import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/Animations/loading-spinner";
import LinkComponent from "@/components/Links";
import { StyledDetailList } from "../index";

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

  if (!detailData) {
    return <LoadingSpinner />;
  }

  // function formatString(str) {
  //   const formattedStr = str.replace(/_/g, " ");
  //   const capitalizedStr =
  //     formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1);

  //   return capitalizedStr;
  // }

  const array = Object.entries(detailData).map(([key, value]) => ({
    key,
    value,
  }));

  console.log(array);

  const detailedDataArray = array
    .filter((item) => item.key !== "created")
    .filter((item) => item.key !== "edited")
    .filter((item) => item.key !== "url");

  console.log(detailedDataArray);

  return (
    <>
      <LinkComponent href={`/listings?${item}`}>Back</LinkComponent>
      <ul>
        {detailedDataArray.map((detailData) => (
          <li key={detailData.key}>
            {Array.isArray(detailData.value) && detailData.value.length > 1 ? (
              <>
                <p>{detailData.key}</p>
                <ul>
                  {detailData.value.map((i) => (
                    <li key={i}>
                      <LinkComponent href={"/"}>
                        episode {i.substr(i.length - 2, 1)}
                      </LinkComponent>
                    </li>
                  ))}
                </ul>
              </>
            ) : detailData.value.includes("http") ? (
              <LinkComponent href={detailData.value}>
                {detailData.key}
              </LinkComponent>
            ) : (
              `${detailData.key}: ${detailData.value}`
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
