import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import CalendarBoard from "./components/CalendarBoard/container";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

import rootReducer from "./redux/rootReducer";
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <CalendarBoard />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
