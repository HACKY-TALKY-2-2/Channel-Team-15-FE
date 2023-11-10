import { ListItem, Text, Typography } from "@channel.io/bezier-react";
import { useState } from "react";
import { ChannelTalk } from "../../assets/Icon/svgs";
import { colors } from "../../theme/colors";

export const MyMission = () => {
  const [isClicked, setIsClicked] = useState(false);
  const myMissions = [
    {
      completed: false,
      content: "5분동안 스트레칭",
      description: "8:00pm",
    },
    {
      completed: true,
      content: "성공한 미션입니다.",
      description: "10:00am",
    },
    {
      completed: false,
      content: "10분 동안 산책",
      description: "1:00pm",
    },
    {
      completed: true,
      content: "성공한 미션입니다.",
      description: "10:00am",
    },
    {
      completed: true,
      content: "성공한 미션입니다.",
      description: "10:00am",
    },
    {
      completed: false,
      content: "10분 동안 산책",
      description: "1:00pm",
    },
    {
      completed: false,
      content: "20분 동안 산책",
      description: "1:00pm",
    },
    {
      completed: false,
      content: "30분 동안 산책",
      description: "1:00pm",
    },
    {
      completed: false,
      content: "30분 동안 산책",
      description: "1:00pm",
    },
    {
      completed: false,
      content: "30분 동안 산책",
      description: "1:00pm",
    },
  ];

  return (
    <div className="flex flex-col h-screen gap-3 px-4 py-2 overflow-scroll">
      <div className="flex items-center justify-between">
        <Text as="p" typo={Typography.Size30} bold className="p-4">
          my mission
        </Text>
        <div className="bgtxt-yellow-normal">
          <img
            src={ChannelTalk}
            alt=""
            width={30}
            height={30}
            color={colors["bgtxt-yellow-normal"]}
          />
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {myMissions.map((mission) => (
          <li key={mission.content}>
            {mission.completed ? (
              <ListItem
                active
                className="active !py-5 !px-4"
                content={mission.content}
                rightContent="완료"
                description={mission.description}
                onClick={function noRefCheck() {}}
              />
            ) : (
              <ListItem
                content={mission.content}
                description={mission.description}
                descriptionMaxLines={0}
                href=""
                optionKey="menu-item-0"
                rightContent="도전"
                className="!py-5 !px-4 !border !border-colors-bg-grey-dark !border-opacity-50"
                // className={`!py-5 ${isClicked ? "!bg-black !bg-opacity-5" : ""}`}
                onClick={() => {
                  setIsClicked((prev) => !prev);
                }}
              />
            )}
          </li>
          // <ListItem
          //   content="5분동안 스트레칭"
          //   description="8:00pm"
          //   descriptionMaxLines={0}
          //   href=""
          //   optionKey="menu-item-0"
          //   rightContent=""
          //   className="!py-5 !px-4 !border !border-colors-bg-grey-dark !border-opacity-50"
          //   // className={`!py-5 ${isClicked ? "!bg-black !bg-opacity-5" : ""}`}
          //   onClick={() => {
          //     setIsClicked((prev) => !prev);
          //   }}
          // />
          // <ListItem
          //   active
          //   className="active !py-5 !px-4"
          //   content="이것은 1번 아이템입니다."
          //   description="10:00am"
          //   onClick={function noRefCheck() {}}
          // />
        ))}

        {/* <Button
        text="Cancel"
        onClick={() => {
          console.log("cancel");
        }}
        />
        <Banner variant="blue" />
        
        <ProgressBar size="m" variant="green" width={400} value={1} />
      <ListMenuTitle content="this is title" rightAction={<div>title</div>} /> */}
      </ul>
    </div>
  );
};
