import React from "react";
import "./Record.css";
function Record({ record }) {
  return (
    <div className="record">
      <div>{record.title}</div>
      <div>{record.content}</div>
    </div>
  );
}

export default Record;
