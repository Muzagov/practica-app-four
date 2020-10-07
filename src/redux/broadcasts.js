const initialState = {
  loading: true,
  opened: null,
  broadcasts: [],
};

export default function broadcasts(state = initialState, action) {
  switch (action.type) {
    case "load_broadcasts_start":
      return {
        ...state,
        loading: true,
      };

    case "set_opened":
      return {
        ...state,
        opened: action.payload,
      };

    case "load_broadcasts_success":
      return {
        ...state,
        loading: false,
        broadcasts: action.payload,
      };

    default:
      return state;
  }
}
