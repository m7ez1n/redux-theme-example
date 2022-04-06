import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Container from "../components/container";
import Text from "../components/text";

import { Wrapper } from "./home";
import { GlobalReducerState } from "../store/reducers";

const Status = () => {
  const selectedTheme = useSelector(
    (state: GlobalReducerState) => state.theme.selectedTheme
  );

  return (
    <Container>
      <Wrapper>
        <Text>The {selectedTheme} theme has been selected</Text>
        <Link to="/">
          <Text>Home</Text>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Status;
