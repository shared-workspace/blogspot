import { Fragment, use, useRef } from "react";
import TopBar from "./top-bar";
import useMediaQuery from "@/hook/use-media-query";
import { BREAKPOINT } from "@/constants/breakpoints";
import SidePanel from "./side-panel";
export default function NavMenu() {
    useMediaQuery(`(min-width: ${BREAKPOINT.MD})`, () => {});
    return (
        <Fragment>
            <TopBar />  
            <SidePanel />
        </Fragment>
    )
}