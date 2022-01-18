import * as types from "./actionTypes";

export const defualtState = {
  products: [], // {fetch api data}
  cart: [], // {id, titile, price, img, qty}
  text: [],
};

const reducer = (state = defualtState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    qty: item.qty + 1,
                    fullPrice: item.price * (item.qty + 1),
                  }
                : item
            )
          : [...state.cart, { ...item, qty: 1, fullPrice: item.price }],
      };
    case types.MINUS_PRODUCT:
      const primaryCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              qty: item.qty - 1,
              fullPrice: item.price * (item.qty - 1),
            }
          : item
      );
      const finalCart = primaryCart.filter(
        (basketItem) => basketItem.qty !== 0
      );
      return {
        ...state,
        cart: finalCart,
      };
    case types.REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(
          (basketItem) => basketItem.id !== action.payload.id
        ),
      };
    case types.CALL_API:
      return {
        ...state,
        products: action.payload,
      };
    case types.GET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case types.REMOVE_ALL_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((basketItem) => basketItem.id.qty > 0),
      };
    default:
      return state;
  }
};

export default reducer;
