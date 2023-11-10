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
import React from "react";

export const Memory = () => {
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
  return (
    <div className="mx-8">
      <p className="text-4xl font-bold leading-25 text-gray-900 my-10">
        Memory With Doong-Doong
      </p>
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
                // className={`!py-5 ${isClicked ? "!bg-black !bg-opacity-5" : ""}`}
                // onClick={() => {
                //   setIsClicked((prev) => !prev);
                // }}
              />
            </ConfirmModalTrigger>
            <ConfirmModalContent className="!h-max !max-w-md">
              <ConfirmModalHeader title={mission.content} />
              <img
                className="p-10"
                src="https://s3.ap-northeast-2.amazonaws.com/inno.bucket.live/corp/logo/CP00001535_20230908102522.png"
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

      {/* <ul role="list" className="divide-y divide-gray-100">
        {history.map((Mission) => (
          <ConfirmModal
            onHide={function noRefCheck() {}}
            onShow={function noRefCheck() {}}
          >
            <ConfirmModalTrigger>
              <li
                key={Mission.id}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <Icon source={ChannelSmileIcon} size={IconSize.S} />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {Mission.content}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {Mission.date}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end"></div>
              </li>
            </ConfirmModalTrigger>
            <ConfirmModalContent>
              <ConfirmModalHeader
                description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
                title="Are you absolutely sure?"
              />
              <ConfirmModalFooter
                rightContent={
                  <ButtonGroup>
                    <ConfirmModalClose>
                      <Button color="monochromeLight" text="닫기" />
                    </ConfirmModalClose>
                  </ButtonGroup>
                }
              />
            </ConfirmModalContent>
          </ConfirmModal>
        ))}
      </ul> */}
    </div>
  );
};
