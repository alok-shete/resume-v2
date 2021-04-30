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

export default function LeftNav() {
  const dispatch = useDispatch();
  const activeRoute = useSelector((state) => state.chnageRoute);
  return (
    <>
      <ul className="left-nav">
        {/* home */}
        <li className="left-nav-item">
          {activeRoute === "" ? (
            <Link
              to="/"
              className="left-nav-active"
              onClick={() => dispatch(changeRoute(""))}
              data-tip="Home"
            >
              <VscHome className="left-nav-icon " />
              <ReactTooltip />
            </Link>
          ) : (
            <Link
              to="/"
              onClick={() => dispatch(changeRoute(""))}
              data-tip="Home"
            >
              <VscHome className="left-nav-icon " />
              <ReactTooltip />
            </Link>
          )}
        </li>

        {/* skills */}
        <li className="left-nav-item">
          {activeRoute === "skills" ? (
            <Link
              to="/skills"
              className="left-nav-active"
              data-tip="Skills"
              onClick={() => dispatch(changeRoute("skills"))}
            >
              <VscCode className="left-nav-icon" />
              <ReactTooltip />
            </Link>
          ) : (
            <Link
              to="/skills"
              data-tip="Skills"
              onClick={() => dispatch(changeRoute("skills"))}
            >
              <VscCode className="left-nav-icon" />
              <ReactTooltip />
            </Link>
          )}
        </li>
        {/* Projects */}
        <li className="left-nav-item">
          {activeRoute === "projects" ? (
            <Link
              to="/projects"
              data-tip="Projects"
              className="left-nav-active"
              onClick={() => dispatch(changeRoute("projects"))}
            >
              <VscExtensions className="left-nav-icon" />
              <ReactTooltip />
            </Link>
          ) : (
            <Link
              to="/projects"
              data-tip="Projects"
              onClick={() => dispatch(changeRoute("projects"))}
            >
              <VscExtensions className="left-nav-icon" />
              <ReactTooltip />
            </Link>
          )}
        </li>
        {/* gmail */}
        <li className="left-nav-item">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=shetealok@gmail.com&amp;tf=1"
            title="Reach out directly to the co-founders"
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
            href="https://www.linkedin.com/in/alok-shete/"
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
            href="https://github.com/alok-shete/"
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
            href="https://www.instagram.com/alok_shete/"
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
            {activeRoute === "about" ? (
              <Link
                to="/about"
                data-tip="About"
                className="left-nav-active"
                onClick={() => dispatch(changeRoute("about"))}
              >
                <IoPersonCircleOutline className="left-nav-icon " />
                <ReactTooltip />
              </Link>
            ) : (
              <Link
                to="/about"
                data-tip="About"
                onClick={() => dispatch(changeRoute("about"))}
              >
                <IoPersonCircleOutline className="left-nav-icon " />
                <ReactTooltip />
              </Link>
            )}
          </li>
          {/* setting */}
          <li className="left-nav-item">
            <a href="#home" data-tip="Setting">
              <VscSettingsGear className="left-nav-icon " />
              <ReactTooltip />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
