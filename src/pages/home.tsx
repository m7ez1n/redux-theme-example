import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsMoon } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import Button from "../components/button";
import Container from "../components/container";
import Text from "../components/text";

import { GlobalReducerState } from "../store/reducers";
import { ThemeActions } from "../store/theme/theme.actions";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state: GlobalReducerState) => state.theme.selectedTheme
  );

  return (
    <Container>
      <Wrapper>
        <Button onClick={() => dispatch(ThemeActions.setTheme())}>
          {selectedTheme === "dark" ? <BsMoon /> : <FaRegLightbulb />}
        </Button>
        <Link to="/status">
          <Text>Status</Text>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Home;
