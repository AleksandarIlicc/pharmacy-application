import React from "react";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <aside className="side-bar">
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/statistics">Statistics</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
