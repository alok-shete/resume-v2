import "./Style.css";
import { HiCode } from "react-icons/hi";
import { changeRoute } from "./../actions/index";
import { useDispatch } from "react-redux";

export default function Projects() {
  const dispatch = useDispatch();
  dispatch(changeRoute("projects"));
  return (
    <>
      <div className="route-panel">
        <h1 className="heading">Some of my Project are</h1>
        <div className="project">
          <div className="card">
            <div className="card-head">
              <HiCode className="card-icon" />
              <a
                href="https://github.com/alok-shete/expense-tracker"
                rel="noreferrer"
                target="_blank"
                className="card-title"
              >
                Expense Tracker
              </a>
            </div>
            <div className="mt-5">
              <ul className="un-ordered-list">
                <li>Daily Expense Tracker App</li>
                <li>Angular 10, HTML, CSS Bootstrap And Firebase</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <HiCode className="card-icon" />
              <a
                href="https://github.com/alok-shete/wemedia"
                rel="noreferrer"
                target="_blank"
                className="card-title"
              >
                Wemedia Platform
              </a>
            </div>
            <div className="mt-5">
              <ul className="un-ordered-list">
                <li>Freelance News Writing Site</li>
                <li>PHP, HTML, CSS, Bootstrap, Javascript And pgsql</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <HiCode className="card-icon" />
              <a
                href="https://github.com/alok-shete/cv-maker"
                rel="noreferrer"
                target="_blank"
                className="card-title"
              >
                CV Maker
              </a>
            </div>
            <div className="mt-5">
              <ul className="un-ordered-list">
                <li>Online Cv Maker</li>
                <li>PHP, HTML, CSS, Bootstrap, Javascript And MongoDb</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <HiCode className="card-icon" />
              <a
                href="https://github.com/alok-shete/Top-20-News-Reactjs"
                rel="noreferrer"
                target="_blank"
                className="card-title"
              >
                Top 20 News
              </a>
            </div>
            <div className="mt-5">
              <ul className="un-ordered-list">
                <li>Top 20 News in Different Country and Category</li>
                <li>React.js, HTML, CSS, Bootstrap and newsapi</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <HiCode className="card-icon" />
              <a
                href="https://github.com/alok-shete/teenylink"
                rel="noreferrer"
                target="_blank"
                className="card-title"
              >
                Teeny Link
              </a>
            </div>
            <div className="mt-5">
              <ul className="un-ordered-list">
                <li>Convert Long Url Into Short Url</li>
                <li>PHP, HTML,CSS Bootstrap And pgsql</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <HiCode className="card-icon" />
              <a
                href="https://github.com/alok-shete/tic-tac-toe"
                rel="noreferrer"
                target="_blank"
                className="card-title"
              >
                Tic Tac Toe
              </a>
            </div>
            <div className="mt-5">
              <ul className="un-ordered-list">
                <li>Tow Player Tic Tac Toe Game</li>
                <li>React.js HTML And CSS</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <HiCode className="card-icon" />
              <a
                href="https://github.com/alok-shete/chat-box"
                rel="noreferrer"
                target="_blank"
                className="card-title"
              >
                Chat Box
              </a>
            </div>
            <div className="mt-5">
              <ul className="un-ordered-list">
                <li>Private Simple Chat App</li>
                <li>React.js, HTML, CSS, Bootstrap And Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
