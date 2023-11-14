import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getBooks = async () => {
  const data = await axios.get("http://localhost:3000/books");
  return data;
};

const useProfileLogic = () => {
  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });
  console.log("books.data", books.data);
  return { data: books };
};
export default useProfileLogic;
