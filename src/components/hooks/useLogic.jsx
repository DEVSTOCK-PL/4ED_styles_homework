import { useState, useEffect } from "react";

const ENDPOINTS = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

const useLogic = (category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!category) {
          return;
        }
        const URL = ENDPOINTS[category];
        const response = await fetch(URL);
        const data = await response.json();
        setData(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [category]);

  return { data, loading };
};

export default useLogic;
