import { Fragment, useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import NavMenuToggleButton from "./nav-menu-toggle-button";
const SideBarContainer = styled(tw.div`
  flex flex-col
  lg:w-60 md:w-16 h-full
  fixed top-0 -left-16 md:left-0 z-40
  transition-[left] duration-500
  border-r border-gray-300 dark:border-neutral-800 
  bg-gradient-to-r from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit
  backdrop-blur-xl


`)``;
const Logo = styled(tw.div`
  h-48 via-blue-200 dark:bg-black text-black dark:text-white
  flex flex-col lg:flex-row items-center justify-center 
    `)``;
const Text = styled(tw.div`
    text-xl font-bold lg:text-4xl
    w-full lg:w-auto flex justify-center
`)``;
const Menu = styled(tw.div``)``;
const Item = styled(tw.div`flex`)``;
const Icon = styled(tw.div`w-16 h-16 flex items-center justify-center bg-blue-200 border border-gray-300 dark:border-neutral-800`)``;
const Label = styled(tw.div`w-0 lg:w-auto flex-grow overflow-hidden h-16 flex items-center justify-center bg-black text-slate-200 border-b-[1px] border-gray-600/80 dark:border-neutral-800 text-xl font-mono`)``;
const Items = [
    { label: "Home", link: "/", icon: <Icon className="bg-orange-500/70">🏠</Icon> },
    { label: "About", link: "/about", icon: <Icon className="bg-blue-500/70">📖</Icon> },
    { label: "Contact", link: "/contact", icon: <Icon className='bg-teal-500/70'>📞</Icon> },
    { label: "Services", link: "/services", icon: <Icon className="bg-amber-500/70">🛠️</Icon> },
    { label: "Blog", link: "/blog", icon: <Icon className="bg-green-500/70">📰</Icon> },
];

export default function SidePanel() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
        <SideBarContainer>
            <Logo>{"DRY-OK".split('').map((v, i) => <Text key={i}>{v}</Text>)}</Logo>
            <Menu>
                {Items.map((item, index) => (
                    <Item key={index}>
                        <>{item.icon}</>
                        <Label>{item.label}</Label>
                    </Item>
                ))}
            </Menu>
        </SideBarContainer>
            <NavMenuToggleButton
            toggleButton={() => setIsOpen((prev) => !prev)}
            isOpen={isOpen}
            />
    </Fragment>
  )
}
