import React from "react";

import "./Post.css";

const post = (props) => (
  <div className="card" styleName="width: 5rem;" onClick={props.clicked}>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
      <p className="card-text">{props.author}</p>
    </div>
  </div>
);

export default post;
