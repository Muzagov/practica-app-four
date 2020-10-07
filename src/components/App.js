import React, { useEffect } from "react";
import Broadcasts from "./Broadcasts";
import { useDispatch, useSelector } from "react-redux";
import { loadBroadcasts } from "../redux/actions";
import "./App.css";
import Records from "./Records";

function App() {
  const loading = useSelector((state) => state.broadcasts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBroadcasts());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? "Идёт загрузка..." : <Broadcasts />}
      <Records />
    </div>
  );
}

export default App;
