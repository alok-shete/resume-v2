import "./App.css";

import React, { useEffect, useRef } from "react";
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
import { GISTS_LINK } from "./common/constant";
import { useSelector } from "react-redux";

const App = () => {
  const mainViewRef = useRef();

  const activeRoute = useSelector((state) => state.changeRoute);

  useEffect(() => {
    mainViewRef.current?.scrollTo(0, 0);
  }, [activeRoute]);

  return (
    <Router>
      <div className="top-panel">Alok Shete | Portfolio</div>
      <div className="left-panel">
        <LeftNav />
      </div>
      <div className="right-panel">
        <RightNav />
      </div>
      <div ref={mainViewRef} className="main-panel">
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
          href={GISTS_LINK}
          rel="noreferrer"
          target="_blank"
          className="git-master"
        >
          <GoGist /> My Gists
        </a>
      </div>
    </Router>
  );
};

export default App;
