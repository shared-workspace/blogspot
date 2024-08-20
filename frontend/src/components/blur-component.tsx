import styled from "styled-components";
import tw from "tailwind-styled-components";

const Wrapper = styled(tw.div`
    fixed top-0 left-0 w-full h-full z-50
    flex flex-col
`)``;

const BlurEffect = styled(tw.div`
`)``;
const TopBar = styled(tw(BlurEffect)`
  h-16
  bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit
  backdrop-blur-xl
`)``;

const BottomContainer = styled(tw(BlurEffect)`
  flex-grow
  bg-gradient-to-t from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit
  backdrop-blur-lg
`)``;

export default function BlurComponent() {
  return (
    <Wrapper>
      <TopBar />
      <BottomContainer />
    </Wrapper>
  );
}
