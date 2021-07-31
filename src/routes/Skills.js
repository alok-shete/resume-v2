import "./Style.css";
import { changeRoute } from "./../actions/index";
import { useDispatch } from "react-redux";
import React from "react";
import { SKILLS_DETAILS } from "../common/constant";
const Skills = () => {
  const dispatch = useDispatch();
  dispatch(changeRoute("skills"));
  const list = (data, index) => <li key={index}> {data} </li>;

  const card = (data, index) => {
    return (
      <React.Fragment key={index}>
        <h1 className="heading"> {data.skill} </h1>
        <ul className="un-ordered-list fs17">
          {data.key_point.map((listData, listIndex) =>
            list(listData, listIndex)
          )}
        </ul>
      </React.Fragment>
    );
  };
  return (
    <>
      <div className="route-panel">
        {SKILLS_DETAILS.map((data, index) => card(data, index))}
      </div>
    </>
  );
};

export default Skills;
