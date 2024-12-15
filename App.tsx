import RootNavigation from "./navigation/RootNavigation";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./firebaseConfig";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
