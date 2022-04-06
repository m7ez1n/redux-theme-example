import { useSelector } from "react-redux";
import styled from "styled-components";

import { ChildrenType } from "../common/childrenType";
import { ThemeProps } from "../common/themeProps";
import { GlobalReducerState } from "../store/reducers";

const StyledText = styled.main<ThemeProps>`
  font-size: 1.8rem;
  margin: 1.4rem;
  color: ${({ selectedTheme }) =>
    selectedTheme !== "dark" ? "#272643" : "#fafafa"};
`;

const Text = ({ children }: ChildrenType) => {
  const selectedTheme = useSelector(
    (state: GlobalReducerState) => state.theme.selectedTheme
  );

  return <StyledText selectedTheme={selectedTheme}>{children}</StyledText>;
};

export default Text;
