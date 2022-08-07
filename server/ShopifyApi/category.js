/**
 * this file for customer operattions
 */
 import axios from "axios";
 
 
 const shop = 'iti-ism';
 const version = "2022-07";
 const resource = "custom_collections";
 const token = "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";//iti-ism
 const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
 const passsword = "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"//iti-ism
 

 function addNewCategory(category){


    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}.json`
  
      return axios(
        {
 
            method: 'post',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                scopes: 'read_collections, write_collections',
            },
            data: { custom_collection : {...category} }
        }
    )
 }
 function editCategory(id, updatedCategory){

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${id}.json`;
    return axios({

        method: 'put', 
        url: apiUrl, 
        data:{
            custom_collection : updatedCategory, 
        }
    })

 }

 function deleteCategoryById(id){

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${id}.json`;
    return axios({
        method: 'delete', 
        url: apiUrl, 
    })
 }

function getCategoryById(catId){
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${catId}.json`;
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
 
function getAllCategories(){

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}.json`;
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


function addProductToCategory(productId, catId){

    const collectionRes = 'collects';
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${collectionRes}.json`;

    return axios(
        {
 
            method: 'post',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                scopes: 'read_collections, write_collections',
            },
            data: { collect : {
                collection_id : catId, 
                product_id: productId,
            } }
        }
    )

 }

 function getAllCollects(){

    const collectionRes = 'collects';
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${collectionRes}.json`;
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
 

export {getAllCategories, addNewCategory, addProductToCategory, getAllCollects, getCategoryById,  deleteCategoryById, editCategory}