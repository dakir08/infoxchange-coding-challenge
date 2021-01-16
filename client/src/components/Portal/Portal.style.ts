import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DEFAULT_BORDER_RADIUS } from "../../style/global-style-constants";

export const StyledPortal = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export const StyledPortalBlackScreen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledPortalChildrenContainer = styled.div`
  z-index: 5;
  background-color: white;
  display: flex;
  padding: 2rem;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  position: relative;
`;

export const PortalCloseButtonStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.2rem;
`;
