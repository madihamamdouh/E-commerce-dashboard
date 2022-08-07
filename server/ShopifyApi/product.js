/**
 * this file for product operattions
 */
import axios from "axios";

import { getAllCollects } from './category.js'


const shop = 'iti-ism';
const version = "2022-07";
const resource = "products";
const token = "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";//iti-ism
const apiKey = "f9435203660033c2fe73a34c23ffd4dd";// iti-ism
const passsword = "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"//iti-ism



async function addNewProduct(product) {

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}.json`;
    return axios({

        method: 'post',
        url: apiUrl,
        headers: {
            "content-type": "application/json, charset=utf-8",
            'X-Shopify-Access-Token': `${token}`,
        },
        data: {

            product: product
        }
    })
}

function editProductData(id, /* object contain the product id and any other properties to be updated */ updatedProduct) {

    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${id}.json`
    return axios(
        {
            method: 'put',
            url: apiUrl,
            headers: {
                "content-type": "application/json, charset=utf-8",
                'X-Shopify-Access-Token': `${token}`,
            },
            data: {
                product: {...updatedProduct}
            }

        })



}


function addProductImage(productId, newImage){

    return axios({
        method:'post', 
        url: `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${productId}/images.json`, 
        data : {
            image : newImage,   
        }
    })
}

function deleteProductById(id) {


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


function getProductById(productId) {
    const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${productId}.json`;
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



function getAllProducts() {

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


function getProductImages(productId) {
 const apiUrl = `https://${apiKey}:${passsword}@${shop}.myshopify.com/admin/api/${version}/${resource}/${productId}/images.json`;
    return axios({
        method : 'get', 
        url: apiUrl, 
    })

}


function createNewProduct(productDetails, productVariants) {

    const body_html = productDetails.body_html !== undefined ? productDetails.body_html : "";
    const images = productDetails.images !== undefined ? productDetails.images : [];
    const product_type = productDetails.product_type !== undefined ? productDetails.product_type : "";
    const title = productDetails.title !== undefined ? productDetails.title : "";
    const variants = productVariants;
    const vendor = productDetails.vendor !== undefined ? productDetails.vendor : "";
    return {

        body_html,
        images,
        product_type,
        title,
        variants,
        vendor
    }
}

function createNewVariant(variantDetails) {

    // price, title, productId, imageId, 

    const prodPrice = variantDetails.price !== undefined ? variantDetails.price : "0.0";
    const prodTitle = variantDetails.title !== undefined ? variantDetails.title : "";
    const productId = variantDetails.product_id !== undefined ? variantDetails.product_id : 0;
    const imageId = variantDetails.image_id !== undefined ? variantDetails.image_id : 0;
    const prodPosition = variantDetails.position !== undefined ? variantDetails.position : 0;
    const prodWwight = variantDetails.weight !== undefined ? variantDetails.weight : 0;

    return [
        {

            image_id: imageId,
            position: prodPosition,
            price: prodPrice,
            product_id: productId,
            title: prodTitle,
            weight: prodWwight,

        }
    ]
}

function addNewVariant(product, variant) {

    product.variants.push(variant);
    return product;
}

/*************************************** FrontEnd Functions*************************************************/

/**
 * 
 * @returns 
 */

function getProducts() {

    return axios({

        method: 'get',
        url: '/products'
    })
}
/**
 * 
 * @param {*} id 
 * @returns 
 */
function getProduct(id){

    return axios({

        method:'get', 
        url:`/products/${id}`
    })
}
/**
 * 
 * @param {*} product 
 * @returns 
 */
function addProduct(_product){

  return  axios({

        method:'post', 
        url:'/products/', 
        data:{
            product: _product, 
        }
    })
}

function deleteProduct(id){

   return axios({
        method:'delete', 
        url:`/products/:${id}`, 
    })
}

function updateProduct(id, updatedProduct){

   return  axios({
        method:'put', 
        url:`/products/${id}`, 
        data: updatedProduct
    })
}
function getImages(productId){
    return axios({
        method:'get',
        url: `/products/${productId}/images`, 
    })
}
function addImage(productId, _src, _width, _height, _alt){

    return axios({

        method:'post', 
        url:`/products/${productId}/images`, 
        data:{
            image: {
                product_id: productId, 
                src : _src, 
                width: _width,
                height : _height ,
                alt : _alt
            }, 
        }
    })

}

export { getAllProducts, addNewProduct, getProductById, deleteProduct, editProductData, deleteProductById,
        getProduct, updateProduct, addProduct, getProducts, createNewProduct, createNewVariant, addNewVariant ,
         addProductImage, getProductImages, getImages, addImage}