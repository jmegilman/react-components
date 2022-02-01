import store from "./app/store";
import { Provider } from "react-redux";
import Counter from "./features/counter";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <h1>My Redux App</h1>
      <Counter />
    </Provider>
  );
};

export default ReduxApp;
