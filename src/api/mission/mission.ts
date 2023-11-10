import instance from "../axiosModule";

export const clearMission = async () => {
  const { data: response } = await instance.post("/user/clearMission/1");
  return response.data;
};

export const clearImageMission = async () => {
  const { data: response } = await instance.post("/user/clearImageMission/1");
  return response.data;
};

export const addMission = async () => {
  const { data: response } = await instance.post("/mission/add");
  return response.data;
};
