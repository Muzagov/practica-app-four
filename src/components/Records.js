import React from "react";
import { useSelector } from "react-redux";
import "./Records.css";
import Record from "./Record";

function Records() {
  const opened = useSelector((state) => state.broadcasts.opened);
  const loading = useSelector((state) => state.records.loading);
  const records = useSelector((state) => state.records.records);

  if (opened === null) {
    return (
      <div className="choice">
        <i className="fas fa-long-arrow-alt-left" />
        Выберите трансляцию
      </div>
    );
  }

  if (loading) {
    return <div className="choice">идёт загрузка</div>;
  }

  return (
    <div>
      {records.map((record) => {
        return <Record record={record} />;
      })}
    </div>
  );
}

export default Records;
