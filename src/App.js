import "./App.css";
import BookList from "./components/index";
import { Provider } from "react-redux";
import store from "./store";
import Form from "./components/login/loginInput";
import Login from "./components/login/login";



function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <BookList /> */}
        {/* <Form /> */}
        <Login />
      </div>
    </Provider>
  );
}

export default App;
