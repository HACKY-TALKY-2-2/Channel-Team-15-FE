import instance from "../axiosModule";

export const getMe = async () => {
  const { data: response } = await instance.post("/user/doongdoongInfo");
  return response.data;
};
