import Profile from "../components/Profile";
import UserContextProvider from "./context/UserContextProivder";
import "./App.css";
import Login from "../components/Login";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai</h1>

      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
