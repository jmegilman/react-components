import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./app/store";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <h1>My Redux App</h1>
      <Outlet />
    </Provider>
  );
};

export default ReduxApp;
