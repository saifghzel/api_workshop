import { GETDRINKS } from "./actionTypes";

const initalDrinks = {
  data: [],
  loading: true,
};

const reducer = (state = initalDrinks, { type, payload }) => {
  switch (type) {
    case GETDRINKS:
      return { ...state, data: payload, loading: false };
    default:
      return initalDrinks;
  }
};
export default reducer;
