import "./Style.css";
import { HiCode } from "react-icons/hi";

export default function Projects() {
  return (
    <>
      <div className="route-panel">
        <h1 className="heading">Some of my Project are</h1>
        <div>
          <div className="card">
            <div className="card-head">
              <HiCode className="card-icon" />
              <span className="card-title">Expence Tracker</span>
            </div>
            <div className="mt-5">
              <ul className="un-ordered-list">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Coca Cola</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
