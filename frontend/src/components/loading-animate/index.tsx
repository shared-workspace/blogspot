import styled from "styled-components";
import { Spinner } from "./spinner";

export enum LoadingAnimateType {
  DEFAULT = "spinner",
}

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function LoadingAnimate({
  type,
}: { type?: LoadingAnimateType }) {
  switch (type) {
    default:
    case LoadingAnimateType.DEFAULT:
      return (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      );
  }
}
