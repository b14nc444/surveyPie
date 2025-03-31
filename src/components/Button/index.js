import styled from "styled-components";

import { PRIMARY, SECONDARY, TERTIARY } from "../../constants/color";

const colorMap = {
  PRIMARY: {
    DEFAULT: PRIMARY.BUTTON.DEFAULT,
    HOVER: PRIMARY.BUTTON.HOVER,
    PRESSED: PRIMARY.BUTTON.PRESSED,
    DISABLED: PRIMARY.BUTTON.DISABLED,
  },
  SECONDARY: {
    DEFAULT: SECONDARY.BUTTON.DEFAULT,
    HOVER: SECONDARY.BUTTON.HOVER,
    PRESSED: SECONDARY.BUTTON.PRESSED,
    DISABLED: SECONDARY.BUTTON.DISABLED,
  },
  TERTIARY: {
    DEFAULT: TERTIARY.BUTTON.DEFAULT,
    HOVER: TERTIARY.BUTTON.HOVER,
    PRESSED: TERTIARY.BUTTON.PRESSED,
    DISABLED: TERTIARY.BUTTON.DISABLED,
  },
};

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;

  color: ${({ type }) => colorMap[type].DEFAULT.COLOR};
  background-color: ${({ type }) => colorMap[type].DEFAULT.BACKGROUND_COLOR};
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid ${({ type }) => colorMap[type].DEFAULT.BORDER};

  &:hover {
    color: ${({ type }) => colorMap[type].HOVER.COLOR};
    background-color: ${({ type }) => colorMap[type].HOVER.BACKGROUND_COLOR};
    border: 1px solid ${({ type }) => colorMap[type].HOVER.BORDER};
  }

  &:active {
    color: ${({ type }) => colorMap[type].PRESSED.COLOR};
    background-color: ${({ type }) => colorMap[type].PRESSED.BACKGROUND_COLOR};
    border: 1px solid ${({ type }) => colorMap[type].PRESSED.BORDER};
  }

  &:disabled {
    background-color: ${({ type }) => colorMap[type].DISABLED.BACKGROUND_COLOR};
    color: ${({ type }) => colorMap[type].DISABLED.COLOR};
    border: 1px solid ${({ type }) => colorMap[type].DISABLED.BORDER};
    cursor: not-allowed;
  }
`;

export default Button;
