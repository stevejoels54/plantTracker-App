import React from "react";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/stateConfig";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
