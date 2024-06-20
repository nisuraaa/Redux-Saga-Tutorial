import { PRODUCT_LIST,SEARCH_PRODUCT } from "./constant";

export const productList =  () => {
  return {
    type: PRODUCT_LIST,
    data: "apple",
  };
};

export const productSearch = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query
  };
}