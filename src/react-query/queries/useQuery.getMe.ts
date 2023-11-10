import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../api/me/me";

export default function useQueryGetMe() {
  return useQuery({
    queryFn: getMe,
    queryKey: ["me"],
  });
}
