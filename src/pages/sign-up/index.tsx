import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { Icon, IconSize, Text, Typography } from "@channel.io/bezier-react";
import React from "react";

export const SignUp = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <Icon
          source={ChannelBtnSmileFilledIcon}
          size={IconSize.XL}
          className="mx-0"
        />
        <Text as="p" typo={Typography.Size30} bold className="p-4">
          Sign Up
        </Text>
      </div>

      <form className="w-full px-[60px] space-y-10" action="#" method="POST">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="p-3 block text-xl font-bold leading-6 text-gray-900"
              >
                Email Address
              </label>
            </div>
            <div className="!mt-3">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="p-3 block w-full h-11 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="p-3 block text-xl font-bold leading-6 text-gray-900"
              >
                Name
              </label>
            </div>
            <div className="!mt-3">
              <input
                id="name"
                name="name"
                type="name"
                required
                className="p-3 block w-full h-11 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="p-3 block text-xl font-bold leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="!mt-3">
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

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="p-3 block text-xl font-bold leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="!mt-3">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                className="p-3 block w-full h-11 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="!my-12">
            <button
              type="submit"
              className="flex my-18 w-full h-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
