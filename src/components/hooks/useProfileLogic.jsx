import { useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { UserContext } from "../hooks/UserContext";

function useProfileLogic() {
  const { user } = useContext(UserContext);
  const {
    data: books,
    error,
    isLoading,
    isError,
  } = useQuery("books", () => axios.get("http://localhost:3000/books"));

  return { user, books: books?.data, error, isLoading, isError };
}

export default useProfileLogic;
