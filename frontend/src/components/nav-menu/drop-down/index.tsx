import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const DropMenuContainer = styled(tw.div`
  fixed z-40 top-16 left-0 w-full
  bg-gradient-to-t from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit
  backdrop-blur-xl
  overflow-y-auto
`)`
  height: calc(100vh - 4rem);
`;

interface Props {
  isOpen: boolean;
}

const Items = {
  Home: "/",
  About: "/about",
  Contact: "/contact",
  Services: "/services",
  Blog: "/blog",
//   "1Home": "/",
//   "1About": "/about",
//   "1Contact": "/contact",
//   "1Services": "/services",
//   "1Blog": "/blog",
//   "2Home": "/",
//   "2About": "/about",
//   "2Contact": "/contact",
//   "2Services": "/services",
//   "2Blog": "/blog",
//   "3Home": "/",
//   "3About": "/about",
//   "3Contact": "/contact",
//   "3Services": "/services",
//   "3Blog": "/blog",
//   "4Home": "/",
//   "4About": "/about",
//   "4Contact": "/contact",
//   "4Services": "/services",
//   "4Blog": "/blog",
};

const DropDownItem = styled(tw.a`
    block px-4 py-2 m-2 text-lg text-gray-700 dark:text-gray-200
    hover:bg-gray-200 dark:hover:bg-gray-700 rounded
    text-center
`)`
  font-size: 1.25rem; /* Increase font size */
  letter-spacing: 0.1em; /* Add letter spacing */
  border: 1px solid gray; /* Add border to all four sides */

  @media (min-width: 640px) {
    /* Apply styles for screen sizes larger than sm */
    font-size: 1.5rem; /* Larger font size */
    font-weight: bold; /* Bold text */
    letter-spacing: 0.1em; /* More spacing between letters */
  }
`;

const CollpsableContainer = styled(tw.div`
    bg-gray-400/40 dark:bg-gray-700/25
    rounded
    text-center
    overflow-y-auto
    m-2
    max-h-[0]
  `)<{ $isOpen: boolean }>`
    transition: max-height 0.3s ease-in-out;
    ${({ $isOpen }) => $isOpen && "max-height: 70vh;"}
    border: 1px solid gray;
  `;

function Collpsable() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <DropDownItem onClick={() => setIsOpen((prev) => !prev)}>
                More
            </DropDownItem>
            <CollpsableContainer $isOpen={isOpen}>
                {Object.entries(Items).map(([name, path]) => (
                    <DropDownItem key={name} href={path}>
                        {name}
                    </DropDownItem>
                ))}
            </CollpsableContainer>
        </div>
    );
}
export default function DropDownMenu(props: Props) {
  const { isOpen } = props;
  if (!isOpen) return null;
  return (
    <DropMenuContainer>
      <Collpsable />
      {Object.entries(Items).map(([name, path]) => (
        <DropDownItem key={name} href={path}>
          {name}
        </DropDownItem>
      ))}
    </DropMenuContainer>
  );
}
