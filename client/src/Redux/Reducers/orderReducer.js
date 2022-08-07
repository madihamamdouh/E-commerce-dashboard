export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER_LIST_REQUEST":
      return { isFetching: true };
    case "ORDER_LIST_SUCCESS":
      return { isFetching: false, orders: action.payload };
    case "ORDER_LIST_FAIL":
      return { isFetching: false, error: action.payload };
    default:
      return state;
  }
};

// ORDER DETAILS
export const orderDetailsReducer = (
  state = { isFetching: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "ORDER_DETAILS_REQUEST":
      return { ...state, isFetching: true };
    case "ORDER_DETAILS_SUCCESS":
      return { isFetching: false, order: action.payload };
    case "ORDER_DETAILS_FAIL":
      return { isFetching: false, error: action.payload };
    default:
      return state;
  }
};

// ORDER DELIVERED
export const orderDeliveredReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_DELIVERED_REQUEST":
      return { isFetching: true };
    case "ORDER_DELIVERED_SUCCESS":
      return { isFetching: false, success: true };
    case "ORDER_DELIVERED_FAIL":
      return { isFetching: false, error: action.payload };
    case "ORDER_DELIVERED_RESET":
      return {};
    default:
      return state;
  }
};
