import { Text, Typography, ProgressBar, Icon } from "@channel.io/bezier-react";
import { ChannelTalk } from "../../assets/Icon/svgs";
import { colors } from "../../theme/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

import { ChannelBtnFilledIcon } from "@channel.io/bezier-icons";
import { useNavigate } from "react-router-dom";
import { To } from "../../routes/route";

export const TeamMission = () => {
  const notify = () => toast("사람들을 모아서 미션을 성공해보세요!");
  const navigate = useNavigate();

  // useEffect(() => {
  //   notify();
  // }, []);

  return (
    <div className="flex flex-col gap-3 px-4 py-2">
      <div className="flex items-center justify-between mb-2">
        <Text as="p" typo={Typography.Size30} bold className="p-4">
          team mission
        </Text>
        <div className="bgtxt-yellow-normal">
          {/* <Icon source={ChannelBtnFilledIcon} color="bgtxt-green-lighter" /> */}
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
      </div>
      <ProgressBar size="m" value={0.75} width="100%" />
      <div className="flex justify-center mt-[80px]">
        <button onClick={notify}>
          <img src="/img/ghost2.png" />
        </button>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};
