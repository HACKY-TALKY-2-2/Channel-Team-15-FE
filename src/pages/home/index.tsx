import { Text, Typography, Icon } from "@channel.io/bezier-react";

import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { useRecoilValue } from "recoil";
import { experimentState, nicknameState } from "../../recoil/atoms";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { To } from "../../routes/route";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../api/me/me";
import useQueryGetMe from "../../react-query/queries/useQuery.getMe";

export const messages = [
  "좋은 하루에요",
  "오늘 하루도 화이팅!",
  "허리 피고! 영차영차!",
  "오늘도 수고했어요",
  "힘들땐 역시 치맥!",
  "내가 응원해요~",
  "둥둥이가 항상 응원할께요",
  "둥~~둥~~",
];

export const colors = ["red", "blue", "teal", "pink", "grey", "black"];

export const Home = () => {
  const { data: meData, isLoading, isError } = useQueryGetMe();
  console.log(meData);
  const experiment = useRecoilValue(experimentState);
  const nickname = useRecoilValue(nicknameState);
  const [doongDoongColor, setDoonDoongColor] = useState("blue");
  const [message, setMessage] = useState("");
  const talkDoongDoong = () => {
    const ranNum = Math.random();
    setMessage(messages[Math.floor(ranNum * messages.length)]);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const navigate = useNavigate();

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
        {colors.map((color) => (
          <div
            className="rounded-full w-9 h-9"
            style={{ backgroundColor: color }}
            onClick={() => setDoonDoongColor(color)}
          ></div>
        ))}
      </div>

      <div className="absolute flex flex-col items-center justify-center translate-x-1/2 translate-y-1/2 h-1/2">
        <div className="w-full">
          <Text as="p" typo={Typography.Size15} bold>
            {message}
          </Text>
        </div>

        <div onClick={talkDoongDoong}>{DoongDoongIcon(doongDoongColor)}</div>
      </div>

      <div
        className="rounded-[8px] max-w-[400px] w-full px-[50px] fixed bottom-0 p-4 flex justify-around"
        style={{ backgroundColor: "#5E56F04D" }}
      >
        <button
          className="py-4 px-8 bg-colors-bgtxt-blue-light rounded-[8px]"
          onClick={() => {
            navigate(To.MyMission);
          }}
        >
          <Text as="p" typo={Typography.Size15} bold>
            밥주기
          </Text>
        </button>

        <button
          onClick={() => {
            navigate(To.Memory);
          }}
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

export const DoongDoongIcon = (color: string) => {
  return (
    <Icon
      source={ChannelBtnSmileFilledIcon}
      style={{ width: "200px", height: "200px" }}
      color={
        color === "red"
          ? "bgtxt-red-normal"
          : color === "blue"
          ? "bgtxt-blue-normal"
          : color === "teal"
          ? "bgtxt-teal-normal"
          : color === "pink"
          ? "bgtxt-pink-light"
          : color === "grey"
          ? "bgtxt-absolute-black-light"
          : "txt-black-darkest"
      }
    />
  );
};
