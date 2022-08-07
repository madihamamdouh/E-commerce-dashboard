/**
 * this file for customer operattions
 */
import axios from "axios";

function getCustomer(id){
    return axios({
        method:'get', 
        url:`/customers/${id}/`
    })

}   
function getCustomers(){
    return axios({
        method:'get', 
        url:`/customers/`
    })
} 
function addCustomer(_customer){
    return axios({
        method:'post', 
        url:`/customers/`, 
        data:{
            customer: _customer, 
        }

    })
}
function updateCustomer(id, updatedCustomer){
    return axios({
        method:'put', 
        url:`/customers/${id}`, 
        data:  updatedCustomer, 
    })
}
function deleteCustomer(id){
    return axios({
        method:'delete', 
        url:`/customers/${id}`,   
    })
}

export {getCustomer, getCustomers, updateCustomer,addCustomer, deleteCustomer, }
