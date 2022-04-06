import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import GlobalStyles from "./styles/global";

import Home from "./pages/home";
import Status from "./pages/status";

import { store } from "./store";

const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    <GlobalStyles />
  </>
);

export default App;
