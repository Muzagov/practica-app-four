import React from "react";
import { useSelector } from "react-redux";
import "./Broadcasts.css";
import Broadcast from "./Broadcast";

function Broadcasts() {
  const broadcasts = useSelector((state) => state.broadcasts.broadcasts);

  return (
    <div className="broad">
      {broadcasts.map((broadcast) => {
        return <Broadcast broadcast={broadcast} />;
      })}
    </div>
  );
}

export default Broadcasts;
