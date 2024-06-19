import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART Condition ", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART Condition ", action);
      const remaining = data.filter((item)=>item.id !== action.data)
      return [...remaining];
    case EMPTY_CART:
      console.warn("ADD_TO_CART Condition ", action);
      return [];

    default:
      return data;
  }
};
