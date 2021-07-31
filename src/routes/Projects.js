import "./Style.css";
import { HiCode } from "react-icons/hi";
import { changeRoute } from "./../actions/index";
import { useDispatch } from "react-redux";
import { PROJECTS_DETAILS } from "../common/constant";

const Projects = () => {
  const dispatch = useDispatch();
  dispatch(changeRoute("projects"));

  const list = (data, index) => {
    return <li key={index}>{data}</li>;
  };

  const card = (data, index) => {
    return (
      <div key={index} className="card">
        <div className="card-head">
          <HiCode className="card-icon" />
          <a
            href={data.project_link}
            rel="noreferrer"
            target="_blank"
            className="card-title"
          >
            {data.project_name}
          </a>
        </div>
        <div className="mt-5">
          <ul className="un-ordered-list">
            {data.key_point.map((listData, listIndex) =>
              list(listData, listIndex)
            )}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="route-panel">
        <h1 className="heading">Some of my Project are</h1>
        <div className="project">
          {PROJECTS_DETAILS.map((data, index) => card(data, index))}
        </div>
      </div>
    </>
  );
};

export default Projects;
