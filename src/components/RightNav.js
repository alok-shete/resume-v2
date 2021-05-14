import "./RightNav.css";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { DiHtml5, DiCss3Full, DiReact } from "react-icons/di";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { changeRoute } from "../actions/index";
export default function RightNav() {
  const dispatch = useDispatch();
  const activeRoute = useSelector((state) => state.chnageRoute);
  return (
    <div className="right-panel-scroll-menu">
      <Link
        to="/"
        className={activeRoute === "" ? "right-nav-active" : ""}
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

      <Link
        to="/projects"
        className={activeRoute === "projects" ? "right-nav-active" : ""}
        onClick={() => dispatch(changeRoute("projects"))}
      >
        <DiHtml5
          style={{
            color: "#E64C18",
            fontSize: "15px",
            verticalAlign: "middle",
          }}
        />
        {"  "} projects.html
      </Link>

      <Link
        to="/skills"
        className={activeRoute === "skills" ? "right-nav-active" : ""}
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

      <Link
        to="/experience"
        className={activeRoute === "experience" ? "right-nav-active" : ""}
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

      <Link
        to="/about"
        className={activeRoute === "about" ? "right-nav-active" : ""}
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
    </div>
  );
}
