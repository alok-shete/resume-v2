import "./Style.css";
import { changeRoute } from "./../actions/index";
import { useDispatch } from "react-redux";
export default function Skills() {
  const dispatch = useDispatch();
  dispatch(changeRoute("skills"));
  return (
    <>
      <div className="route-panel">
        <h1 className="heading">Technical Skills</h1>

        <ul className="un-ordered-list fs17">
          <li>Full Stack Web Development</li>
          <li>Problem Solving</li>
        </ul>

        <h1 className="heading">Tech Stacks</h1>
        <ul className="un-ordered-list fs17">
          <li>MERN Stack[MongoDB, Express.js, React.js, Node.js]</li>
          <li>MEAN Stack[MongoDB, Express.js, Angular, Node.js]</li>
        </ul>
        <h1 className="heading">Programming languages</h1>
        <ul className="un-ordered-list fs17">
          <li>Java</li>
          <li>Javascript</li>
          <li>C++</li>
          <li>C</li>
          <li>PHP</li>
          <li>Python</li>
        </ul>

        <h1 className="heading">Frontend</h1>
        <ul className="un-ordered-list fs17">
          <li>Javascript</li>
          <li>React.js</li>
          <li>Angular</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Jquery</li>
        </ul>
        <h1 className="heading">Backend</h1>
        <ul className="un-ordered-list fs17">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PHP</li>
        </ul>
        <h1 className="heading">Databases</h1>
        <ul className="un-ordered-list fs17">
          <li>MongoDB</li>
          <li>MySql</li>
          <li>pgsql</li>
        </ul>
        <h1 className="heading">Hosting Platforms</h1>
        <ul className="un-ordered-list fs17">
          <li>Heroku</li>
          <li>Firebase</li>
          <li>Netlify</li>
          <li>Github Pages</li>
        </ul>
        <h1 className="heading">Version Control</h1>
        <ul className="un-ordered-list fs17">
          <li>Git</li>
          <li>Github</li>
        </ul>
      </div>
    </>
  );
}
