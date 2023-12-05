import { useState, useEffect } from "react";

const ENDPOINTS = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

// const ENDPOINT = ENDPOINTS.characters;

const useLogic = (category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if(!category){
          return
        }
        const URL = ENDPOINTS[category]
        const response = await fetch(URL);
        const data = await response.json();
        setData(data.results); // wprowadzamy dane do use state
        console.log("data", data)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false); //zeby się nie kręciło w nieskończoność
      }
    }
    fetchData();
  }, [category]);

  return { data, loading };
};

export default useLogic;
