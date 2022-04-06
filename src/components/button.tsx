import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { ChildrenType } from "../common/childrenType";
import { ThemeProps } from "../common/themeProps";
import { GlobalReducerState } from "../store/reducers";

const StyledButton = styled.button<ThemeProps>`
  background-color: ${({ selectedTheme }) =>
    selectedTheme !== "dark" ? "#272643" : "#fafafa"};
  color: ${({ selectedTheme }) =>
    selectedTheme !== "dark" ? "#fafafa" : "#272643"};

  font-size: 1.6rem;
  padding: 0.8rem 2rem;
  border: 0.2rem solid
    ${({ selectedTheme }) => (selectedTheme === "dark" ? "#272643" : "#fafafa")};
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<unknown> & ChildrenType) => {
  const selectedTheme = useSelector(
    (state: GlobalReducerState) => state.theme.selectedTheme
  );

  return (
    <StyledButton {...props} selectedTheme={selectedTheme}>
      {children}
    </StyledButton>
  );
};

export default Button;
