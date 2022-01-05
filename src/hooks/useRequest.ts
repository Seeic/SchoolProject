import { useQuery } from "react-query";
import axios from "axios";

const axiosPost = async (id: string) => {
  axios.get(`https://localhost:8080/board?:${id || ""}`, {
    params: { limit: 151 },
  });
};
