import "./App.css";

import { VscSourceControl, VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";

import { DiHtml5, DiCss3Full, DiReact } from "react-icons/di";

import { useSelector, useDispatch } from "react-redux";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { changeRoute } from "./actions/index";

// import components
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LeftNav from "./components/LeftNav";

function App() {
  const dispatch = useDispatch();
  const activeRoute = useSelector((state) => state.chnageRoute);
  console.log(activeRoute);
  return (
    <Router>
      <div className="top-panel">Alok Shete</div>
      <div className="main-panel">
        <div className="left-panel">
          <LeftNav />
        </div>
        <div className="right-panel">
          <ul className="right-nav">
            {/* home link */}
            <li className="right-nav-item">
              {activeRoute === "" ? (
                <Link
                  to="/"
                  className="right-nav-active"
                  onClick={() => dispatch(changeRoute(""))}
                >
                  <IoLogoJavascript
                    style={{
                      color: "#EFD81D",
                      fontSize: "13px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "}
                  home.js
                </Link>
              ) : (
                <Link to="/" onClick={() => dispatch(changeRoute(""))}>
                  <IoLogoJavascript
                    style={{
                      color: "#EFD81D",
                      fontSize: "13px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "}
                  home.js
                </Link>
              )}
            </li>
            {/* project link */}
            <li className="right-nav-item">
              {activeRoute === "projects" ? (
                <Link
                  to="/projects"
                  className="right-nav-active"
                  onClick={() => dispatch(changeRoute("projects"))}
                >
                  <DiHtml5
                    style={{
                      color: "#E64C18",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "} project.html
                </Link>
              ) : (
                <Link
                  to="/projects"
                  onClick={() => dispatch(changeRoute("projects"))}
                >
                  <DiHtml5
                    style={{
                      color: "#E64C18",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "} project.html
                </Link>
              )}
            </li>
            {/* skills link */}
            <li className="right-nav-item">
              {activeRoute === "skills" ? (
                <Link
                  to="/skills"
                  className="right-nav-active"
                  onClick={() => dispatch(changeRoute("skills"))}
                >
                  <DiCss3Full
                    style={{
                      color: "#1579B8",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "} skills.css
                </Link>
              ) : (
                <Link
                  to="/skills"
                  onClick={() => dispatch(changeRoute("skills"))}
                >
                  <DiCss3Full
                    style={{
                      color: "#1579B8",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "} skills.css
                </Link>
              )}
            </li>
            {/* experience link */}
            <li className="right-nav-item">
              {activeRoute === "experience" ? (
                <Link
                  to="/experience"
                  className="right-nav-active"
                  onClick={() => dispatch(changeRoute("experience"))}
                >
                  <VscJson
                    style={{
                      color: "#FBC02D",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "} experience.json
                </Link>
              ) : (
                <Link
                  to="/experience"
                  onClick={() => dispatch(changeRoute("experience"))}
                >
                  <VscJson
                    style={{
                      color: "#FBC02D",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "} experience.json
                </Link>
              )}
            </li>
            {/* about link */}
            <li className="right-nav-item">
              {activeRoute === "about" ? (
                <Link
                  to="/about"
                  className="right-nav-active"
                  onClick={() => dispatch(changeRoute("about"))}
                >
                  <DiReact
                    style={{
                      color: "#00D9FF",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "} about.jsx
                </Link>
              ) : (
                <Link
                  to="/about"
                  onClick={() => dispatch(changeRoute("about"))}
                >
                  <DiReact
                    style={{
                      color: "#00D9FF",
                      fontSize: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                  {"  "} about.jsx
                </Link>
              )}
            </li>
          </ul>

          <div className="route-content">
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
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <div className="footer-panel">
        <div className="git-master">
          <VscSourceControl /> Master
        </div>
      </div>
    </Router>
  );
}

export default App;
