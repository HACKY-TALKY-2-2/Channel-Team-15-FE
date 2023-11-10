import instance from "../axiosModule";

export const signUp = async (email: string, password: string, name: string) => {
  const { data: response } = await instance.post("/user/signup", {
    email,
    password,
    name,
  });
  return response.data;
};

export const logIn = async (email: string, password: string) => {
  const response = await instance.post("/user/login", {
    email,
    password,
  });
  return response.data;
};

export const logOut = async () => {
  const { data: response } = await instance.get("/user/logout");
  return response.data;
};
