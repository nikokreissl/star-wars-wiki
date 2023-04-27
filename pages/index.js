import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setPeopleData(data);
    }
    fetchData();
  }, []);

  return <>Index</>;
}
