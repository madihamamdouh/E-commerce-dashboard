/**
 * this file is concerned to all function related to the orders of the shopify api using rest,
 * it includes the main CRUD operations of database and other related functions 
 */
import axios from "axios";


function getOrders() {

    return axios({
        method: 'get',
        url: '/orders/'
    })
}
function getOrder(id) {

    return axios({
        method: 'get',
        url: `/orders/${id}`,
    })
}
function addOrder(order = { currency: String, customer: {} },
    discounts = { code: String, value: String, },
    lineItems = [{
        price: String, product_id: Number, quantity: Number, title: String, variant_id: String,
        variant_title: String, vendor: String
    }]
    ) {
    const myOrder = createOrder(order, discounts, lineItems);
    return axios({
        method: 'post',
        url: '/orders/',
        data: myOrder,
    })

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
        method: 'delete',
        url: `/orders/${id}`,

    })
}

export {deleteOrder, getOrder, createOrder, addOrder,getOrders,}


