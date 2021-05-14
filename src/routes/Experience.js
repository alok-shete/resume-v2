import "./Style.css";
import { changeRoute } from "./../actions/index";
import { useDispatch } from "react-redux";

export default function Experience() {
  const dispatch = useDispatch();
  dispatch(changeRoute("experience"));
  return (
    <>
      <div className="route-panel">
        <h1 className="heading">Code-Gurukul</h1>
        <div className="mt-5">
          <ul className="un-ordered-list fs17">
            <li>
              <span className="text-white">Role :</span> Software Developer
              Intern
            </li>
            <li>
              <span className="text-white">Technologies :</span>HTML, CSS,
              Bootstrap, Javascript, PHP, MYSQL
            </li>
            <li>
              <span className="text-white">Duration :</span> 6 Months
            </li>
            {/* <li>
              <span className="text-white">Description :</span>
            </li>
            <ul className="un-ordered-list sub-un-ordered-list  fs17">
              <li>h</li>
            </ul> */}
          </ul>
        </div>
      </div>
    </>
  );
}
