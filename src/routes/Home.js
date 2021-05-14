import "./Style.css";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { VscGithubInverted } from "react-icons/vsc";
export default function Home() {
  return (
    <>
      <div className="content-center">
        <div className="text-center">
          <div>Hi, I am</div>
          <strong>Alok Shete</strong>
          <br />
          <ReactTypingEffect
            text={[
              "Full Stack Web Developer",
              "Problem Solver",
              "MREN Stack Developer",
              "Quick Learner",
              "MEAN Stack Developer",
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />
          <div>
            <a
              href="https://github.com/alok-shete/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn-git">
                <VscGithubInverted className="btn-git-logo" /> alok-shete
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
