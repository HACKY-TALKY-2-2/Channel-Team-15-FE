import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { Icon, IconSize, Text, Typography } from "@channel.io/bezier-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../api/auth/auth";
import { To } from "../../routes/route";

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: any) => setEmail(event.target.value);
  const handlePassword = (event: any) => setPassword(event.target.value);

  const submitInformation = () => {
    setEmail("");
    setPassword("");
    logIn(email, password);
    navigate(To.Home);
  };

  const goSignUp = () => {
    navigate(To.SignUp);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <Icon
          source={ChannelBtnSmileFilledIcon}
          size={IconSize.XL}
          className="mx-0"
        />
        <Text as="p" typo={Typography.Size30} bold className="p-4">
          Sign In
        </Text>
      </div>

      <form className="w-full px-[60px] space-y-10" action="#" method="POST">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-xl font-bold leading-6 text-gray-900"
              >
                Email Address
              </label>
            </div>
            <div className="mt-3">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleEmail}
                required
                className="block w-full px-6 py-5 text-gray-900 border-0 shadow-sm rounded-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xl font-bold leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-3">
              <input
                id="password"
                name="password"
                type="password"
                onChange={handlePassword}
                autoComplete="current-password"
                required
                className="block w-full p-6 py-5 text-gray-900 border-0 shadow-sm rounded-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center w-full p-4 font-bold leading-6 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={submitInformation}
        >
          Sign In
        </button>
        <div className="block text-xl font-bold leading-6 text-gray-900 justify-center">
          <label onClick={goSignUp}>회원가입</label>
        </div>
      </form>
    </div>
  );
};
