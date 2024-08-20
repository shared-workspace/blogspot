import React, { useState } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const Button = tw.div`
  w-8 h-6 
  flex flex-col justify-between 
  cursor-pointer
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
  h-full
  flex items-center
  px-4
`;

interface Props {
  toggleButton: () => void;
  isOpen: boolean;
}

export default function NavMenuToggleButton({ toggleButton, isOpen }: Props) {
  return (
    <Wrapper>
      <Button onClick={toggleButton}>
        <TopLine $isOpen={isOpen} />
        <MiddleLine $isOpen={isOpen} />
        <BottomLine $isOpen={isOpen} />
      </Button>
    </Wrapper>
  );
}
