import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const baseURL = "http://localhost:3000";
const API = axios.create({ baseURL });

const defaultFn = () => {};

const defaultCallBack = {
  onSuccess: defaultFn,
  onError: defaultFn,
};

const query = {
  get: async (endpoint) => {
    const response = await API.get(endpoint);
    return response.data;
  },

  post: async ({ endpoint, payload }) => {
    const response = await API.post(endpoint, payload);
    return response;
  },
  patch: async ({ endpoint, payload }) => {
    const response = await API.patch(endpoint, payload);
    return response;
  },
  delete: async ({ endpoint, id }) => {
    const response = await API.delete(`${endpoint}/${id}`);
    return response;
  },
};

const runCRUD = ({ CRUD, ...rest }) => {
  return query[CRUD](rest);
};

const useAPIQuery = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: mutateData } = useMutation({
    // mutationFn: (args) => query.post(args),
    mutationFn: (args) => runCRUD(args),
  });

  const runQuery = {
    get: (endpoint, callBack = {}) => {
      const { onSuccess, onError } = { ...defaultCallBack, ...callBack };
      const { data, isSuccess, isError } = useQuery({
        queryFn: () => query.get(endpoint),
        queryKey: [endpoint],
        retry: 0,
      });
      isSuccess && onSuccess();
      isError && onError();
      return { data };
    },
    post: (endpoint, payload, callBack = {}) => {
      mutateData({ payload, endpoint, CRUD: "post" }, { ...defaultCallBack, ...callBack });
    },
    patch: (endpoint, payload, callBack = {}) => {
      mutateData({ payload, endpoint, CRUD: "patch" }, { ...defaultCallBack, ...callBack });
    },
    delete: (endpoint, id, callBack = {}) => {
      mutateData({ endpoint, id, CRUD: "delete" }, { ...defaultCallBack, ...callBack });
    },
  };

  return { runQuery, queryClient };
};

export default useAPIQuery;
