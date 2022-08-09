/**
 * this file is concerned to all function related to the orders of the shopify api using rest,
 * it includes the main CRUD operations of database and other related functions
 */
import axios from "axios";
import { Settings } from "./settings";

function getOrders() {
  return axios({
    method: "get",
    url: "/orders/",
  });
}
function getOrder(id) {
  return axios({
    method: "get",
    url: `/orders/${id}`,
  });
}
function addOrder(
  order = { currency: String, customer: {} },
  discounts = { code: String, value: String },
  lineItems = [
    {
      price: String,
      product_id: Number,
      quantity: Number,
      title: String,
      variant_id: String,
      variant_title: String,
      vendor: String,
    },
  ]
) {
  const myOrder = createOrder(order, discounts, lineItems);
  return axios({
    method: "post",
    url: "/orders/",
    data: myOrder,
  });
}
/**
 * NOT Working
 * @param {*} id
 * @param {*} updatedOrder
 * @returns
 */
// function updateOrder(id, updatedOrder) {

//     return axios({

//         method: 'put',
//         url: `/orders/${id}`,
//         data: updatedOrder,

//     })
// }

function deleteOrder(id) {
  axios({
    method: "delete",
    url: `/orders/${id}`,
  });
}

/**
 *
 * @param {*} customerId
 * @param {*} productId
 * @param {*} quantity
 * @param {*} options
 * @returns
 */
function createOrder(orderDetails, discounts, lineItems) {
  const orderLineItems = createLineItems(lineItems);

  const currency =
    orderDetails?.currency !== undefined
      ? orderDetails?.currency
      : Settings.Currency;
  const customer =
    orderDetails?.customer !== undefined ? orderDetails?.customer : {};
  const _line_items = orderLineItems !== undefined ? lineItems : [];
  const payment_terms =
    orderDetails?.payment_terms !== undefined
      ? orderDetails?.payment_terms
      : [];

  const order = {
    currency,
    customer,
    discount_applications: [
      {
        type: "discount_code",
        code: discounts?.code !== undefined ? discounts?.code : "123456",
        value: discounts?.value !== undefined ? discounts?.value : "0.0",
        value_type: "fixed_amount",
        allocation_method: "across",
        target_selection: "all",
        target_type: "line_item",
      },
    ],
    // discount_codes,
    line_items: _line_items,
    payment_terms,
    // total_discounts,
    // total_price
  };

  console.log(_line_items);
  console.log(order);
  return order;
}

/**
 *
 * @param {*} lineItemsDetails
 * @returns
 */
function createLineItems(lineItemsDetails) {
  const price =
    lineItemsDetails?.price !== undefined ? lineItemsDetails?.price : "";
  const product_id =
    lineItemsDetails?.product_id !== undefined
      ? lineItemsDetails?.product_id
      : 0;
  const quantity =
    lineItemsDetails?.quantity !== undefined ? lineItemsDetails?.quantity : 0;
  const title =
    lineItemsDetails?.title !== undefined ? lineItemsDetails?.title : "";
  const variant_id =
    lineItemsDetails?.variant_id !== undefined
      ? lineItemsDetails?.variant_id
      : 0;
  const variant_title =
    lineItemsDetails?.variant_title !== undefined
      ? lineItemsDetails?.variant_title
      : "";
  const vendor =
    lineItemsDetails?.vendor !== undefined ? lineItemsDetails?.vendor : "";

  return {
    price,
    product_id,
    quantity,
    title,
    variant_id,
    variant_title,
    vendor,
  };
}

export { deleteOrder, getOrder, addOrder, getOrders };
