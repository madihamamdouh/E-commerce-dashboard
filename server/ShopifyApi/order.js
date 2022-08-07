/**
 * this file is concerned to all function related to the orders of the shopify api using rest,
 * it includes the main CRUD operations of database and other related functions 
 */
import { Settings, CURRENCIES } from './settings.js'
import { Order, createUniqToken } from './global.js'
import axios from "axios";


const shop = 'iti-ism';
const version = "2022-07";
const resource = "orders";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism




function addNewOrder(myOrder) {

    // console.log(myOrder);
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}.json`
    return axios(
        {
            method: 'post',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                scopes: 'read_orders, write_orders',
            },
            data: {
                order: myOrder
            }
        }
    )
}

/**
 * NOT WORKING
 * @param {*} id 
 * @returns 
 */
// function editOrderData(id, updatedOrder) {

//     const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/2022-01/${resource}/${id}.json`
//     return axios(
//         {
//             method: 'put',
//             url: apiUrl,
//             headers: {
//                 "content-type": "application/json, charset=utf-8",
//                 'X-Shopify-Access-Token': `${token}`,
//             },
//             data: {

//                 order: updatedOrder
//             }
//         })
// }


function getOrderById(id) {
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${id}.json`;
    return axios(
        {
            method: 'get',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                'X-Shopify-Access-Token': `${token}`,
            },

        })
}

function getAllOrders() {

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}.json`
    return axios(
        {
            method: 'get',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                'X-Shopify-Access-Token': `${token}`,
            },

        })

}
/**
 * 
 * @param {*} id 
 * @returns 
 */
function deleteOrderById(id) {


    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${id}.json`
    return axios(
        {
            method: 'delete',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                'X-Shopify-Access-Token': `${token}`,
            },

        })

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

    const currency = orderDetails?.currency !== undefined ? orderDetails?.currency : Settings.Currency;
    const customer = orderDetails?.customer !== undefined ? orderDetails?.customer : {};
    const _line_items = orderLineItems !== undefined ? lineItems : [];
    const payment_terms = orderDetails?.payment_terms !== undefined ? orderDetails?.payment_terms : [];
   
    const order = {
        currency,
        customer,
        discount_applications:
            [
                {
                    type: "discount_code",
                    code: discounts?.code !== undefined ? discounts?.code : "123456",
                    value: discounts?.value !== undefined ? discounts?.value : "0.0",
                    value_type: "fixed_amount",
                    allocation_method: "across",
                    target_selection: "all",
                    target_type: "line_item",
                }
            ],
        // discount_codes,
        line_items: _line_items,
        payment_terms,
        // total_discounts,
        // total_price
    }
    console.log("***************************;kdnc;lwnw;rl****************************************");
    console.log(_line_items);
    console.log(order);
    return order;
}

function createLineItems(lineItemsDetails) {


    const price = lineItemsDetails?.price !== undefined ? lineItemsDetails?.price : "";
    const product_id = lineItemsDetails?.product_id !== undefined ? lineItemsDetails?.product_id : 0;
    const quantity = lineItemsDetails?.quantity !== undefined ? lineItemsDetails?.quantity : 0;
    const title = lineItemsDetails?.title !== undefined ? lineItemsDetails?.title : "";
    const variant_id = lineItemsDetails?.variant_id !== undefined ? lineItemsDetails?.variant_id : 0;
    const variant_title = lineItemsDetails?.variant_title !== undefined ? lineItemsDetails?.variant_title : "";
    const vendor = lineItemsDetails?.vendor !== undefined ? lineItemsDetails?.vendor : "";

    return {
        price,
        product_id,
        quantity,
        title,
        variant_id,
        variant_title,
        vendor
    }

}

/**
 * NOT WORKING 
 * @param {*} lineItemId 
 */
// function addLineItemToOrder(product,  lineItem = {price :String, product_id : Number, quantity : Number, title : String, variant_id : String,
//     variant_title : String, vendor:String}){

//         product.line_items.push(lineItem);
//         return product;
// }


/***************************************** FrontEnd Functions *******************************************/



export {
    addNewOrder, getAllOrders, createOrder, getOrderById, deleteOrderById,
}


