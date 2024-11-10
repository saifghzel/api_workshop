import axios from "axios";
import { GETDRINKS } from "./actionTypes";

export const getDrinks = (options) => async (dispatch) => {
  try {
    const response = await axios.request(options);
    dispatch({
      type: GETDRINKS,
      payload: response.data,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
