import { Text, Typography, Icon } from "@channel.io/bezier-react";

import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { useRecoilValue } from "recoil";
import { experimentState, nicknameState } from "../../recoil/atoms";
import { useState } from "react";
import { Tooltip } from "antd";

export const Home = () => {
  const experiment = useRecoilValue(experimentState);
  const nickname = useRecoilValue(nicknameState);
  const [doongDoongColor, setDoonDoongColor] = useState("blue");
  const [message, setMessage] = useState("");
  const talkDoongDoong = () => {
    setMessage("좋은하루에요");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="relative flex flex-col h-screen">
      <div
        className="flex flex-row items-center rounded-[8px]"
        style={{ backgroundColor: "#5E56F04D" }}
      >
        <button className="flex items-center justify-center w-24 h-16 m-6 text-3xl rounded-full bg-colors-bg-grey-dim-lightest">
          <Text
            as="p"
            typo={Typography.Size18}
            bold
          >{`${experiment.level}`}</Text>
        </button>
        <Text as="p" typo={Typography.Size24} bold className="p-4">
          {`${nickname}의 둥둥이`}
        </Text>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <div
          className="rounded-full w-9 h-9"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            setDoonDoongColor("red");
          }}
        ></div>
        <div
          className="rounded-full w-9 h-9"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            setDoonDoongColor("blue");
          }}
        ></div>
        <div
          className="rounded-full w-9 h-9"
          style={{ backgroundColor: "teal" }}
          onClick={() => {
            setDoonDoongColor("teal");
          }}
        ></div>
        <div
          className="rounded-full w-9 h-9"
          style={{ backgroundColor: "pink" }}
          onClick={() => {
            setDoonDoongColor("pink");
          }}
        ></div>
      </div>

      <div className="absolute flex flex-col items-center justify-center translate-x-1/2 translate-y-1/2 h-1/2">
        <div className="w-full">
          <Text as="p" typo={Typography.Size15} bold>
            {message}
          </Text>
        </div>

        <div>
          {doongDoongColor === "red" ? <RedIcon /> : null}
          {doongDoongColor === "blue" ? <BlueIcon /> : null}
          {doongDoongColor === "teal" ? <TealIcon /> : null}
          {doongDoongColor === "pink" ? <GreyIcon /> : null}
        </div>
      </div>

      <div
        className="rounded-[8px] max-w-[400px] w-full px-[50px] fixed bottom-0 p-4 flex justify-around"
        style={{ backgroundColor: "#5E56F04D" }}
      >
        <button
          onClick={talkDoongDoong}
          className="py-4 px-8 bg-colors-bgtxt-blue-light rounded-[8px]"
        >
          <Text as="p" typo={Typography.Size15} bold>
            밥주기
          </Text>
        </button>
        <button
          onClick={() => {}}
          className="py-4 px-8 bg-colors-bgtxt-blue-light rounded-[8px]"
        >
          <Text as="p" typo={Typography.Size15} bold>
            동동이의 추억
          </Text>
        </button>
      </div>
    </div>
  );
};

export const BlueIcon = () => {
  return (
    <Icon
      source={ChannelBtnSmileFilledIcon}
      style={{ width: "200px", height: "200px" }}
      color="bgtxt-blue-normal"
    />
  );
};

export const RedIcon = () => {
  return (
    <Icon
      source={ChannelBtnSmileFilledIcon}
      style={{ width: "200px", height: "200px" }}
      color="bgtxt-red-normal"
    />
  );
};

export const TealIcon = () => {
  return (
    <Icon
      source={ChannelBtnSmileFilledIcon}
      style={{ width: "200px", height: "200px" }}
      color="bgtxt-teal-normal"
    />
  );
};

export const GreyIcon = () => {
  return (
    <Icon
      source={ChannelBtnSmileFilledIcon}
      style={{ width: "200px", height: "200px" }}
      color="bgtxt-pink-normal"
    />
  );
};
