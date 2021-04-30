import "./Style.css";
export default function Experience() {
  return (
    <>
      <div className="route-panel">
        <h1 className="heading">Code-Gurukul</h1>
        <div className="mt-5">
          <ul className="un-ordered-list fs17">
            <li>
              <span className="text-white">Role:</span>Software Developer
            </li>
            <li>Tea</li>
            <li>Coca Cola</li>
            <ul className="sub-un-ordered-list un-ordered-list fs17">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Coca Cola</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}
