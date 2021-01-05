import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import AppMovie from "./Appmovie";
import Login from "./Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Home from "./Home";
import Director from "./director";
import Journalistes from "./journalistes";
import Autheur from "./autheur";
import Acteurs from "./acteurs";
import { BrowserRouter, Route } from "react-router-dom";
import Film from "./Film";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route excat path="/AppMovie" component={AppMovie} />
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Directors" component={Director} />
        <Route path="/Journalistes" component={Journalistes} />
        <Route path="/autheurs" component={Autheur} />
        <Route path="/acteurs" component={Acteurs} />
        <Route path="/Film" component={Film} />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
