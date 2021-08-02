import Chat from "./chat/chat";
import Process from "./process/process";
import Home from "./home/home.js";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function AppMain(props) {
  socket.io.engine.on('upgrade', (t) => {
    console.log('change')
  })
  const { username, roomname } = useParams();
  // console.log(useParams())
  // console.log(username, roomname)
  return (
    <>
      <div className="right">
        <Chat
          username={username}
          roomname={roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>
          <Route path="/chat/:roomname/:username" component={AppMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;