/**
 * this file is concerned to all function related to the orders of the shopify api using rest,
 * it includes the main CRUD operations of database and other related functions 
 */

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
    addNewOrder, getAllOrders, getOrderById, deleteOrderById,
}


