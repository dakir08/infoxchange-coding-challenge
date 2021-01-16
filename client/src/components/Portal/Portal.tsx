import React from "react";
import ReactDOM from "react-dom";
import { StyledButton } from "../../shared/Button";
import Icon from "../Icon/Icon";
import { Close16 } from "../Icon/Icons";
import { usePortal } from "./Portal.logic";
import {
  PortalCloseButtonStyle,
  StyledPortal,
  StyledPortalBlackScreen,
  StyledPortalChildrenContainer,
} from "./Portal.style";

export interface PortalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export const Portal: React.FunctionComponent<PortalProps> = ({
  children,
  onClose,
}) => {
  const { target } = usePortal("portal");

  const renderPortal = () => (
    <StyledPortal>
      <StyledPortalBlackScreen onClick={onClose} />
      <StyledPortalChildrenContainer>
        {children}
        <StyledButton css={PortalCloseButtonStyle} onClick={onClose}>
          <Icon data={Close16} />
        </StyledButton>
      </StyledPortalChildrenContainer>
    </StyledPortal>
  );

  return ReactDOM.createPortal(renderPortal(), target);
};
