import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LoadingAnimate, {
  LoadingAnimateType,
} from "@/components/loading-animate";
import { LayoutProps } from ".";
import styled from "styled-components";
import tw from "tailwind-styled-components";
const FlexColWrapA = styled(tw.div`flex flex-col`)``;
const ColWrapAA = styled(tw.div``)``;
const ColWrapAB = styled(tw.div``)``;
export default function LayoutScandary({ isLoading, children }: LayoutProps) {
  return (
    <>
      {isLoading && <LoadingAnimate type={LoadingAnimateType.DEFAULT} />}
      <FlexColWrap1>
        <ColWrapLeft1>
        </ColWrapLeft1>
      </FlexColWrap1>
    </>
  );
}
