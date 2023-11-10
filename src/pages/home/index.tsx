import {
  BezierProvider,
  LightFoundation,
  Text,
  Button,
  Border,
  Tooltip,
  Emoji,
  ListMenuTitle,
  ProgressBar,
  Spinner,
  Banner,
  Icon,
} from "@channel.io/bezier-react";

import {
  BulletIcon,
  ChannelBtnSmileFilledIcon,
} from "@channel.io/bezier-icons";
import { useRecoilValue } from "recoil";
import { experimentState, nicknameState } from "../../recoil/atoms";
import { FormEvent, useState } from "react";

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
    <div className="h-screen w-screen flex flex-col">
      <div
        className="flex flex-row items-center"
        style={{ backgroundColor: "#5E56F04D" }}
      >
        <div className="m-6 w-24 h-24 border-2 flex justify-center items-center rounded-full text-3xl">
          {`${experiment.level}`}
        </div>
        <div className="text-4xl">{`${nickname}의 둥둥이`}</div>
      </div>
      <div className="flex gap-4 justify-center mt-6">
        <div
          className="w-9 h-9 rounded-full"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            setDoonDoongColor("red");
          }}
        ></div>
        <div
          className="w-9 h-9 rounded-full"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            setDoonDoongColor("blue");
          }}
        ></div>
        <div
          className="w-9 h-9 rounded-full"
          style={{ backgroundColor: "teal" }}
          onClick={() => {
            setDoonDoongColor("teal");
          }}
        ></div>
        <div
          className="w-9 h-9 rounded-full"
          style={{ backgroundColor: "pink" }}
          onClick={() => {
            setDoonDoongColor("pink");
          }}
        ></div>
      </div>

      <div>{message !== "" ? <div>{message}</div> : null}</div>

      <div className="h-1/2 flex justify-center items-center">
        {doongDoongColor === "red" ? <RedIcon /> : null}
        {doongDoongColor === "blue" ? <BlueIcon /> : null}
        {doongDoongColor === "teal" ? <TealIcon /> : null}
        {doongDoongColor === "pink" ? <GreyIcon /> : null}
      </div>

      <div
        className="flex flex-row items-center justify-around py-8 fixed left-0 bottom-0 w-full"
        style={{ backgroundColor: "#5E56F04D" }}
      >
        <div
          className=" border-2 w-2/5 h-24 flex items-center justify-center text-3xl rounded-lg"
          onClick={talkDoongDoong}
        >
          밥주기
        </div>
        <div className=" border-2 w-2/5 h-24 flex items-center justify-center text-3xl rounded-lg">
          동동이의 추억
        </div>
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
