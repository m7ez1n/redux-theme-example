import styled from "styled-components";
import { useSelector } from "react-redux";

import { ThemeProps } from "../common/themeProps";
import { GlobalReducerState } from "../store/reducers";

const StyledContainer = styled.main<ThemeProps>`
  height: 100vh;
  width: 100vw;
  background-color: ${({ selectedTheme }) =>
    selectedTheme === "dark" ? "#272643" : "#fafafa"};
`;

const Container = ({ children }: { children: React.ReactNode }) => {
  const selectedTheme = useSelector(
    (state: GlobalReducerState) => state.theme.selectedTheme
  );

  return (
    <StyledContainer selectedTheme={selectedTheme}>{children}</StyledContainer>
  );
};

export default Container;
