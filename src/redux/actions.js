export function loadBroadcasts() {
  return (dispatch) => {
    dispatch({ type: "load_broadcasts_start" });

    fetch("http://151.248.117.7:5005/api/onlines/")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_broadcasts_success",
          payload: json,
        });
      });
  };
}

export function loadRecords(id) {
  return (dispatch) => {
    dispatch({ type: "load_records_start" });
    dispatch({ type: "set_opened", payload: id });

    fetch(`http://151.248.117.7:5005/api/onlines/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_records_success",
          payload: json,
        });
      });
  };
}
