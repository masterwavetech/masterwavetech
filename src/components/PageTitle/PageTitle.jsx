import React from "react";
import "./PageTitleStyled.css";
import { Link } from "react-router-dom";

const PageTitle = ({ title }) => {
  return (
    <div className="page_title_wrapper">
      <div className="page-title-content">
        <h2>{title}</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{title}</li>
        </ul>
      </div>
    </div>
  );
};

export default PageTitle;
