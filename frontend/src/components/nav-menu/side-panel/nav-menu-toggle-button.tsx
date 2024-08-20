import React, { useState } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const Button = tw.div`
  bg-blue-200  dark:bg-blue-900
  cursor-pointer
  h-full
  flex items-center justify-center
  text-2xl
`;

const Line = tw.div`
  h-1 
  bg-black dark:bg-white 
  transition-transform duration-300 ease-in-out
`;

const TopLine = styled(Line)<{ $isOpen: boolean }>`
  width: 90%;
  transform-origin: top left;
  ${({ $isOpen }) => $isOpen && "transform: translateX(6px) rotate(45deg);"}
  ${({ $isOpen }) => $isOpen && "width: 100%;"}
`;

const MiddleLine = styled(Line)<{ $isOpen: boolean }>`
  width: 80%;
  transition: opacity 0.2s;
  ${({ $isOpen }) => $isOpen && "opacity: 0;"}
`;

const BottomLine = styled(Line)<{ $isOpen: boolean }>`
  width: 100%;
  transform-origin: bottom left;
  ${({ $isOpen }) => $isOpen && "transform: translateX(6px) rotate(-45deg);"}
`;

const Wrapper = tw.div`
  w-20 h-12
  rounded-full
  fixed top-[45vh] -left-20 md:left-6
  transition-[left] duration-800
  overflow-hidden
  pl-8
  z-[35]
`;

interface Props {
  toggleButton: () => void;
  isOpen: boolean;
}

export default function NavMenuToggleButton({ toggleButton, isOpen }: Props) {
  return (
    <Wrapper>
      <Button onClick={toggleButton}>
        {isOpen ? "<<" : ">>"}
      </Button>
    </Wrapper>
  );
}
