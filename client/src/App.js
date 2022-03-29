import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
