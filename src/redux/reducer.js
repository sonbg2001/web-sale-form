import data from "../data";

const initeState = {
  products: data.products,
  filters: {
    search: "",
    category: "",
    sort: "",
  },
  users: data.users,
  cart: [
    {
      productId: 1,
      size: 1,
      color: "red",
      number: 3,
    },
  ],
};
const rootReducer = (state = initeState, action) => {
  switch (action.type) {
    case "products/sortProduct":
      return {
        ...state,
      };
    case "products/search":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    case "cart/addProduct":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "cart/deleteAll":
      return {
        ...state,
        cart: [],
      };

    case "cart/deleteProduct":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          // eslint-disable-next-line eqeqeq
          return item.productID != action.payload;
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
