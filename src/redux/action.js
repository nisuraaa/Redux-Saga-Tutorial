import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("Action is called",data);
  return {
    type: ADD_TO_CART,
    data
  };
};
export const removeToCart = (data) => {
  console.warn("Action is e",data);
  return {
    type: REMOVE_FROM_CART,
    data
  };
};
export const emptyCart = (data) => {
  console.warn("Action is d",data);
  return {
    type: EMPTY_CART,
    data
  };
};
