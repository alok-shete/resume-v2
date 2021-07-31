import "./Style.css";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { VscGithubInverted } from "react-icons/vsc";
import {
  GITHUB_LINK,
  GITHUB_USER_NAME,
  HOME_TYPING_TEXT,
} from "../common/constant";
const Home = () => {
  return (
    <>
      <div className="content-center">
        <div className="text-center">
          <div>Hi, I am</div>
          <strong>Alok Shete</strong>
          <br />
          <ReactTypingEffect
            text={HOME_TYPING_TEXT}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />
          <div>
            <a href={GITHUB_LINK} rel="noreferrer" target="_blank">
              <button className="btn-git">
                <VscGithubInverted className="btn-git-logo" />{" "}
                {GITHUB_USER_NAME}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
