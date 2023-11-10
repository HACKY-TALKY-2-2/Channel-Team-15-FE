import instance from "../axiosModule";

export const clearMission = async () => {
  const { data: response } = await instance.post("/user/clearMission/1");
  return response.data;
};

export const clearImageMission = async () => {
  const { data: response } = await instance.post("/user/clearImageMission/1");
  return response.data;
};

export const addMission = async ({
  content,
  experiment,
  requireImage,
}: AddMissionType): Promise<any> => {
  const { data: response } = await instance.post<any>("/mission/add", {
    content,
    experiment,
    requireImage,
  });
  return response.data;
};

type AddMissionType = {
  content: string;
  experiment: number;
  requireImage: boolean;
};
