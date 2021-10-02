import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/home";
import ListEpisode from "./pages/listEpisode";
import ListOngoing from "./pages/ongoingAll";
import LisstMovie from "./pages/movieAll";
import SignIn from "./pages/sign";
import SignUp from "./pages/sign up";
import VideoPlayer from "./pages/videoPlayer";
import HomeNoAkun from "./component/homeNoAkun";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomeNoAkun></HomeNoAkun>
        </Route>
        <Route path="/home" exact><Home></Home></Route>
        <Route path="/home/list-episode" exact>
          <ListEpisode></ListEpisode>
        </Route>
        <Route path="/home/list-episode/video"><VideoPlayer></VideoPlayer></Route>
        <Route path="/home/ongoing-all"><ListOngoing></ListOngoing></Route>
        <Route path="/home/movie-all"><LisstMovie></LisstMovie></Route>
        <Route path="/sign-in">
          <SignIn></SignIn>
        </Route>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
