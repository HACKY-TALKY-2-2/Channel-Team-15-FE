import axios from "axios";

export const clearMission = async () => {
  const { data: response } = await axios.post("http://192.168.8.10:8080/user/clearMission/1");
  return response.data;
};

export const clearImageMission = async () => {
  const { data: response } = await axios.post("http://192.168.8.10:8080/user/clearImageMission/1");
  return response.data;
};

export const addMission = async () => {
  const { data: response } = await axios.post("http://192.168.8.10:8080/mission/add");
  return response.data;
};
