import "./Style.css";
import { changeRoute } from "./../actions/index";
import { useDispatch } from "react-redux";
import { PERSONAL_DETAILS } from "../common/constant";

const About = () => {
  const dispatch = useDispatch();
  dispatch(changeRoute("about"));

  const list = (data, index) => <li key={index}>{data}</li>;
  return (
    <>
      <div className="route-panel">
        <h1 className="heading">{PERSONAL_DETAILS.title}</h1>
        <div className="mt-5">
          <ul className="un-ordered-list fs17">
            {PERSONAL_DETAILS.key_point.map((data, index) => list(data, index))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
