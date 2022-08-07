/**
 * this file for product operattions
 */
import axios from "axios";

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

export {deleteProduct, getProduct, updateProduct, addProduct, getProducts,  getImages, addImage}