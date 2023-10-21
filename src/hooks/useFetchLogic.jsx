import { useState, useEffect } from "react";

const BASE_URL = "https://rickandmortyapi.com/api/character";

const useFetchLogic = (page = 1) => {
  const [datas, setDatas] = useState([]);
  const [pagess, setPagess] = useState();
  const [loading, setLoading] = useState(true);

  // I know this protection isn't perfect, but I've lost the battle with pre-fetching ;)

  if (page > 42) {
    page = 42;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}?page=${page}`);
        const data = await response.json();
        setDatas(data.results);
        console.log("data.results:", data.results);
        console.log("data:", data);
        setPagess(data.info.pages);
        console.log("pagess:", pagess);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return { datas, loading, pagess };
};
export default useFetchLogic;
