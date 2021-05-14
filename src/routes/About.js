import "./Style.css";
import { changeRoute } from "./../actions/index";
import { useDispatch } from "react-redux";

export default function About() {
  const dispatch = useDispatch();
  dispatch(changeRoute("about"));
  return (
    <>
      <div className="route-panel">
        <h1 className="heading">Hi there! I am Alok Shete</h1>
        <div className="mt-5">
          <ul className="un-ordered-list fs17">
            <li>A passionate Full Stack Developer from India.</li>
            <li>
              Being a Passionate learner,I constantly explore in different
              fields to strengthen my it skill,
            </li>
            <li>
              I recently passed the Master of Computer Science From MIT WPU
            </li>
            <li>and looking for a full time opportunity in IT.</li>
            <li>
              feel free to take a look at my latest project on the web portfolio
            </li>
            <li>
              am a Full Stack Develope having good knowledge in the various web
              technologies to provide a robust synopsis for high level
              overviews.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
