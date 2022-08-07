const collections = {

    product: 'product',
    customer: 'customer',
    order: 'order',
    category: 'collection'

}

/**
 * 1 - collections/ category : image{src, alt, height, width}, id , title.
 * 
 * 2 - products : id, images, options {size, color, material}, description, 
 * product variants[{imageId, price, product_id, title}]
 *  product_type(for filter and search),vendor,  status(active, archieved), tags str(for filter and search), title str.
 * 
 * 3 - product_Images : id, product_id, position, src, width, height, updated_at.
 * 
 * 4  - order :  id, cart_token,token, currency, created_at, closed_at, customer, total_price
 *               line_items{quantity, variant_id }, discount_applications{code:"", type:"discount_code",
 *               value : "", value_type : 'fixed_amount', target_selection:"all", target_type:"line_item"},
 *               discount_codes:[{code:"", amount:"", type:"fixed_amount"}]   
 * 
 * 5 - customer : id, address{city, country, address} email , phone[](for diffirent formats), first_name, last_name, currency,  
 *                total_spent,  orders_count, verified_email
 */


/**
 * this function create random token based on the creation time 
 * each time it is called
 * using javascript
 * @returns 
 */
 function createUniqToken(){
    const time = Date.now();
    const randNum = Math.ceil(Math.random() * 10000); 
    let code  =  time + randNum + "";
    let token = "";
    for (let i = 0 ; i< code.length; i++){
          if(i%2 == 0){
            token += code.charAt(i);
          }
        token += code.charAt(i) + String.fromCharCode(Math.ceil(Math.random() * 27 ) + 96);
    }    
        return token;                           
}

/**
 * category class  
 */
class Category {

    constructor(title, image) {

        this.title = title;
        this.image = image;

    }
}

/**
 * 
 */
class Product {

    /**
     * 
     * @param {*} title 
     * @param {*} status 
     * @param {*} product_details 
     */
    constructor(title, status, product_details) {

        this.title = title;
        this.status = status;
        this.product_details = product_details;

    }
}

class Product_Image {

    /**
     * 
     * @param {*} product_id 
     * @param {*} position 
     * @param {*} src 
     * @param {*} size 
     */
    constructor(product_id, position, src, size) {

        this.product_id = product_id;
        this.position = position;
        this.src = src;
        this.size = size;

    }
}

class Order {

    /**
     * 
     * @param {*} cart_token 
     * @param {*} currency 
     * @param {*} created_at 
     * @param {*} closed_at 
     * @param {*} customer 
     */
    constructor(cart_token, currency, created_at, closed_at, customer, productId) {

        this.cart_token = cart_token;
        this.currency = currency;
        this.created_at = created_at;
        this.closed_at = closed_at;
        this.customer = customer;
        this.productId = productId;
    }
}

/**
 * 
 */
class Customer {
    /**
     * 
     * @param {*} first_name 
     * @param {*} last_name 
     * @param {*} phone 
     * @param {*} email 
     * @param {*} address 
     */
    constructor(first_name, last_name, phone, email, address, testField) {

        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.testField = testField;

    }

}





const Currencies = {

    EGPYPT: 'EGP',
    CANADA: 'CAD',
    EUOROP: 'EUR',
    JAPAN: 'JPY',
    SUDIA: 'SAR'

}

export {
    Customer, Product, Order, Currencies, Product_Image, Category, createUniqToken
}