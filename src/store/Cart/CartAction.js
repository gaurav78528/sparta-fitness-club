import * as types from "./CartType";
export const getCart = (payload) => {
  return { type: types.Cart_Update, payload };
};

export const cart_length_fn = () => {
  return { type: types.cart_length };
};

export const deletecart = (id) => {
  return { type: types.cart_Delete, payload: id };
};

export const empty_cart = () => {
  return { type: types.EMPTY_CART };
};
