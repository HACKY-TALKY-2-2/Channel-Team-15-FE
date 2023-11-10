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
} from "@channel.io/bezier-react";

export const Home = () => {
  return (
    <div>
      <Button
        text="Cancel"
        onClick={() => {
          console.log("cancel");
        }}
      />

      <ProgressBar size="m" variant="green" width={400} value={1} />
      <ListMenuTitle content="this is title" rightAction={<div>title</div>} />
    </div>
  );
};
