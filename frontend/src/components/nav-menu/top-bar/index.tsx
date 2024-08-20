import tw from "tailwind-styled-components";
import NavMenuToggleButton from "./nav-menu-toggle-button";
import { Fragment, useEffect, useState } from "react";
import DropDownMenu from "../drop-down";

const TopBarContainer = tw.div`
  flex
  w-full h-16
  fixed left-0 top-0 md:-top-16 z-50
  transition-[top] duration-500
  border-b border-gray-300 dark:border-neutral-800 
  bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit
  backdrop-blur-xl
`;

interface Props {}

export default function TopBar(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
      if (isOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <Fragment>
      <TopBarContainer>
        <NavMenuToggleButton
          toggleButton={() => setIsOpen((prev) => !prev)}
          isOpen={isOpen}
        />
      </TopBarContainer>
      <DropDownMenu isOpen={isOpen} />
    </Fragment>
  );
}
