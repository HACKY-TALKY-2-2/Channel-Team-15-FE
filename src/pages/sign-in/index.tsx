import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { Icon, IconSize } from "@channel.io/bezier-react";
import React from "react";

export const SignIn = () => {
  return (
    <div className="flex items-center place-items-center min-h-full flex-1 flex-col mt-20 px-6 py-5 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm  mt-20">
        {/* <div className="mb-20 object-center"> */}
        <Icon
          source={ChannelBtnSmileFilledIcon}
          size={IconSize.XL}
          className="mx-0"
        />
        {/* </div> */}
        <h2 className="!text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div className="!my-10">
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
                required
                className="p-3 block w-full h-11 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="!my-10">
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
                autoComplete="current-password"
                required
                className="p-3 block w-full h-11 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="!mt-12">
            <button
              type="submit"
              className="flex my-10 w-full h-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
