import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/getUser";
import { QUERY_KEYS } from "@/constants/QUERY_KEYS";
export const useGetUser = () => {
  return useQuery({
    queryKey: QUERY_KEYS.USER,
    queryFn: getUser,
  });
};
