import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "components/Chat/Chat";
import Login from "components/Login/Login";
import { useStateValue } from "store/StateProvider";

function App() {
  const [state, dispatch] = useStateValue();

  const { user } = state;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* react router - chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
