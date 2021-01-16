import React from "react";
import {
  StyledInputLabel,
  StyledInputLabelTextLabel,
} from "./InputLabel.style";

export interface InputLabelProps {
  id: string;
  labelName: string;
  renderInput: (props: string) => JSX.Element;
}

export const InputLabel: React.FunctionComponent<InputLabelProps> = ({
  id,
  labelName,
  renderInput,
}) => {
  return (
    <StyledInputLabel>
      <StyledInputLabelTextLabel htmlFor={id}>
        {labelName}
      </StyledInputLabelTextLabel>
      {renderInput(id)}
    </StyledInputLabel>
  );
};
