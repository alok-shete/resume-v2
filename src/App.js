import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GoGist } from "react-icons/go";

// import components
import About from "./routes/About";
import Experience from "./routes/Experience";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Skills from "./routes/Skills";
import PageNotFound from "./routes/PageNotFound";

import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";

function App() {
  return (
    <Router>
      <div className="top-panel">Alok Shete | Portfolio</div>
      <div className="left-panel">
        <LeftNav />
      </div>
      <div className="right-panel">
        <RightNav />
      </div>
      <div className="main-panel">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
      <div className="footer-panel">
        <a
          href="https://gist.github.com/alok-shete"
          rel="noreferrer"
          target="_blank"
          className="git-master"
        >
          <GoGist /> My Gists
        </a>
      </div>
    </Router>
  );
}

export default App;
