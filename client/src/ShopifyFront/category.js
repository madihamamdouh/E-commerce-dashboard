/**
 * this file for customer operattions
 */
 import axios from "axios";
 
  /**
 * 
 * @param {*} _collection 
 * @returns 
 */
function addCategory(_collection){

    return  axios({
        method:'post', 
        url : '/collections/', 
        data : {
            collection : _collection
        }
    })
}/**
 * 
 * @param {*} id 
 * @param {*} updatedCategory 
 * @returns 
 */
function updateCategory(id, updatedCategory){

    return axios({
        method : "put", 
        url:`/collections/${id}`, 
        data: updatedCategory
    })
}/**
 * 
 * @param {*} id 
 * @returns 
 */
function deleteCategory(id){

    return axios({
        method:"delete", 
        url:`/collections/${id}`, 
    })
}
/**
 * 
 * @param {*} id 
 * @returns 
 */
function getCategory(id){

    return axios({
        method:'get', 
        url:`/collections/${id}`, 
    })
}
/**
 * 
 * @returns 
 */
function getCategories(){
    return axios({
        method:'get', 
        url:`/collections/`, 
    })
}

export { getCategories,  getCategory, addCategory, updateCategory, deleteCategory}