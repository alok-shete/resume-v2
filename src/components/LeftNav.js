import "./LeftNav.css";

import {
  VscExtensions,
  VscHome,
  VscCode,
  VscGithubInverted,
  VscSettingsGear,
} from "react-icons/vsc";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { changeRoute } from "./../actions/index";
import {
  GITHUB_LINK,
  GMAIL_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
} from "../common/constant";

const LeftNav = () => {
  const dispatch = useDispatch();
  const activeRoute = useSelector((state) => state.changeRoute);
  return (
    <>
      <ul className="left-nav">
        {/* home */}
        <li className="left-nav-item mt-0">
          <Link
            to="/"
            className={activeRoute === "" ? "left-nav-active" : ""}
            onClick={() => dispatch(changeRoute(""))}
            data-tip="Home"
          >
            <VscHome className="left-nav-icon " />
            <ReactTooltip />
          </Link>
        </li>

        {/* skills */}
        <li className="left-nav-item">
          <Link
            to="/skills"
            className={activeRoute === "skills" ? "left-nav-active" : ""}
            data-tip="Skills"
            onClick={() => dispatch(changeRoute("skills"))}
          >
            <VscCode className="left-nav-icon" />
            <ReactTooltip />
          </Link>
        </li>
        {/* Projects */}
        <li className="left-nav-item">
          <Link
            to="/projects"
            className={activeRoute === "projects" ? "left-nav-active" : ""}
            data-tip="Projects"
            onClick={() => dispatch(changeRoute("projects"))}
          >
            <VscExtensions className="left-nav-icon" />
            <ReactTooltip />
          </Link>
        </li>
        {/* gmail */}
        <li className="left-nav-item">
          <a
            href={GMAIL_LINK}
            title="Reach out directly to me"
            rel="noreferrer"
            target="_blank"
            data-tip="Gmail"
          >
            <SiGmail className="left-nav-icon" />
            <ReactTooltip />
          </a>
        </li>
        {/* linkedin */}
        <li className="left-nav-item">
          <a
            href={LINKEDIN_LINK}
            rel="noreferrer"
            target="_blank"
            data-tip="Linkedin"
          >
            <FaLinkedin className="left-nav-icon" />
            <ReactTooltip />
          </a>
        </li>
        {/* github */}
        <li className="left-nav-item">
          <a
            href={GITHUB_LINK}
            rel="noreferrer"
            target="_blank"
            data-tip="Github"
          >
            <VscGithubInverted className="left-nav-icon" />
            <ReactTooltip />
          </a>
        </li>
        <li className="left-nav-item">
          <a
            href={INSTAGRAM_LINK}
            rel="noreferrer"
            target="_blank"
            data-tip="Instagram"
          >
            <FaInstagram className="left-nav-icon" />
            <ReactTooltip />
          </a>
        </li>
      </ul>

      <div className="left-bottom-nav">
        <ul className="left-nav">
          {/* about */}
          <li className="left-nav-item">
            <Link
              to="/about"
              className={activeRoute === "about" ? "left-nav-active" : ""}
              data-tip="About"
              onClick={() => dispatch(changeRoute("about"))}
            >
              <IoPersonCircleOutline className="left-nav-icon " />
              <ReactTooltip />
            </Link>
          </li>
          {/* setting */}
          <li className="left-nav-item">
            <a href="#home" data-tip="Upcoming">
              <VscSettingsGear className="left-nav-icon " />
              <ReactTooltip />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftNav;
