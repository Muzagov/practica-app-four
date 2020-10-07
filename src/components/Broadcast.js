import React from "react";
import "./Broadcast.css";
import { useDispatch, useSelector } from "react-redux";
import { loadRecords } from "../redux/actions";

function Broadcast(props) {
  const opened = useSelector((state) => state.broadcasts.opened);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(loadRecords(id));
  };
  return (
    <div
      key={props.broadcast._id}
      className={`title ${opened === props.broadcast._id ? "active" : ""}`}
      onClick={() => handleClick(props.broadcast._id)}
    >
      {props.broadcast.title}
    </div>
  );
}

export default Broadcast;
