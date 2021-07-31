import "./Style.css";
import { changeRoute } from "./../actions/index";
import { useDispatch } from "react-redux";
import { EXPERIENCE_DETAILS } from "../common/constant";

const Experience = () => {
  const dispatch = useDispatch();
  dispatch(changeRoute("experience"));

  const cart = (data, index) => {
    return (
      <div key={index}>
        <h1 className="heading">{data.company_name}</h1>
        <div className="mt-5">
          <ul className="un-ordered-list fs17">
            <li>
              <span className="text-white">Role : </span> {data.role}
            </li>
            <li>
              <span className="text-white">Technologies : </span>
              {data.technologies}
            </li>
            <li>
              <span className="text-white">Duration : </span>
              {data.duration}
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
    );
  };

  return (
    <>
      <div className="route-panel">
        {EXPERIENCE_DETAILS.map((data, index) => cart(data, index))}
      </div>
    </>
  );
};

export default Experience;
