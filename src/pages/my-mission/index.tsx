import { ListItem, Text, Typography } from "@channel.io/bezier-react";
import { ChannelTalk } from "../../assets/Icon/svgs";
import { colors } from "../../theme/colors";
import { useNavigate } from "react-router-dom";
import { To } from "../../routes/route";
import useMutationClearMission from "../../react-query/mutations/useMutation.clearMission";

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

export const MyMission = () => {
  const navigate = useNavigate();

  const { mutateAsync: clearMission } = useMutationClearMission();
  console.log(clearMission);

  return (
    <div className="flex flex-col h-screen gap-3 px-4 py-2 overflow-scroll">
      <div className="flex items-center justify-between">
        <Text as="p" typo={Typography.Size30} bold className="p-4">
          my mission
        </Text>
        <button
          className="bgtxt-yellow-normal"
          onClick={() => navigate(To.Home)}
        >
          <img
            src={ChannelTalk}
            alt=""
            width={30}
            height={30}
            color={colors["bgtxt-yellow-normal"]}
          />
        </button>
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
                onClick={() => {}}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
