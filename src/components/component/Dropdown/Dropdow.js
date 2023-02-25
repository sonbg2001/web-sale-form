import { useState } from "react";
import "./Dropdown.scss";
function Dropdown({ title }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="dropdown"
      onBlur={() => {
        setShow(false);
      }}
      onClick={() => {
        setShow(!show);
      }}
    >
      <button
        className={
          show
            ? "btn btn-secondary dropdown-toggle show"
            : "btn btn-secondary dropdown-toggle"
        }
        type="button"
        data-bs-toggle="dropdown"
      >
        {title}
      </button>
      <ul
        className={show ? "dropdown-menu show" : "dropdown-menu"}
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a className="dropdown-item" href="/">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
