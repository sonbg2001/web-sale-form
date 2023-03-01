export const searchProduct = (data) => {
  return {
    type: "products/search",
    payload: data,
  };
};

export const addProductToCart = (data) => {
  return {
    type: "cart/addProduct",
    payload: data,
  };
};
export const deleteAllCart = () => {
  return {
    type: "cart/deleteAll",
  };
};

export const deleteProduct = (data) => {
  return {
    type: "cart/deleteProduct",
    payload: data,
  };
};
