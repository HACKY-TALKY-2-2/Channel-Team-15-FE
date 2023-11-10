import { ChannelSmileIcon } from "@channel.io/bezier-icons";
import {
  Button,
  ButtonGroup,
  ConfirmModal,
  ConfirmModalClose,
  ConfirmModalContent,
  ConfirmModalFooter,
  ConfirmModalHeader,
  ConfirmModalTrigger,
  ListItem,
} from "@channel.io/bezier-react";
import { useNavigate } from "react-router-dom";

interface mission {
  id: number;
  content: string;
  date: string;
  type: string;
  image: string;
}

const history: mission[] = [
  {
    id: 0,
    content: "역삼역 2번 출구 사진찍고 오기",
    date: "2023-11-10",
    type: "TEAM",
    image: "none",
  },
  {
    id: 1,
    content: "스트레칭 하기",
    date: "2023-11-10",
    type: "PERS",
    image: "none",
  },
  {
    id: 2,
    content: "눈 10분 동안 감고 있기",
    date: "2023-11-10",
    type: "PERS",
    image: "none",
  },
  {
    id: 3,
    content: "역삼역 2번 출구 사진찍고 오기",
    date: "2023-11-10",
    type: "TEAM",
    image: "none",
  },
  {
    id: 4,
    content: "역삼역 2번 출구 사진찍고 오기",
    date: "2023-11-10",
    type: "TEAM",
    image: "none",
  },
  {
    id: 5,
    content: "역삼역 2번 출구 사진찍고 오기",
    date: "2023-11-10",
    type: "TEAM",
    image: "none",
  },
  {
    id: 6,
    content: "역삼역 2번 출구 사진찍고 오기",
    date: "2023-11-10",
    type: "TEAM",
    image: "none",
  },
  {
    id: 7,
    content: "역삼역 2번 출구 사진찍고 오기",
    date: "2023-11-10",
    type: "TEAM",
    image: "none",
  },
];

export const Memory = () => {
  const navigate = useNavigate();
  return (
    <div>
      {history.map((mission) => (
        <ConfirmModal
          onHide={function noRefCheck() {}}
          onShow={function noRefCheck() {}}
        >
          <ConfirmModalTrigger>
            <ListItem
              active
              leftIcon={ChannelSmileIcon}
              content={mission.content}
              description={mission.date}
              descriptionMaxLines={0}
              href=""
              rightContent={mission.type}
              optionKey="menu-item-0"
              className="active !py-5 !px-4 !border my-3 !rounded-xl  !border-opacity-50"
            />
          </ConfirmModalTrigger>
          <ConfirmModalContent className="!h-max !max-w-md">
            <ConfirmModalHeader title={mission.content} />
            <img
              className="p-10"
              src={
                mission.image === ""
                  ? "https://s3.ap-northeast-2.amazonaws.com/inno.bucket.live/corp/logo/CP00001535_20230908102522.png"
                  : mission.image
              }
            />
            <ConfirmModalFooter
              rightContent={
                <ButtonGroup>
                  <ConfirmModalClose>
                    <Button text="Close" />
                  </ConfirmModalClose>
                </ButtonGroup>
              }
            />
          </ConfirmModalContent>
        </ConfirmModal>
      ))}
    </div>
  );
};
