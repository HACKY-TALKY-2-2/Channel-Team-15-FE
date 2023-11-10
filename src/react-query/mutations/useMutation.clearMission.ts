import { useMutation } from "@tanstack/react-query";
import { clearMission } from "../../api/mission/mission";

export default function useMutationClearMission() {
  return useMutation({
    mutationFn: clearMission,
    onSuccess: () => {},
    onError: () => {},
  });
}
