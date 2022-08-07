import {
    addNewProduct, addProductImage, deleteProductById,
    editProductData, getAllProducts, getProductById, getProductImages} from "./ShopifyApi/product.js";
import express from 'express';
import { addNewCustomer, deleteCustomerById, getAllCustomers, getCustomerById } from './ShopifyApi/customer.js';
import {addNewCategory, deleteCategoryById, editCategory, getAllCategories, getCategoryById } from './ShopifyApi/category.js';
import { addNewOrder, deleteOrderById, getAllOrders, getOrderById } from './ShopifyApi/order.js';

const app = express();
const port = 5000;

app.use(express.json())

/********************* products handler *******************/
app.route('/products/')
    .get((req, res) => {
        getAllProducts()
            .then((response) => {

                console.log(response.data['products']);
                res.json(response.data)
            })
            .catch((e) => {
                console.log(e);
                res.status(501).send(e);
            })

    })
    .post((req, res) => {
        const product = req.body['product'];
        console.log(product);
        addNewProduct(product)
            .then((response) => {
                console.log(response.data);
                res.send("Done")
            })
            .catch((error) => {
                console.log(error.response);
                res.send('Done')
            })
    })

app.route(`/products/:productId`)
    .get((req, res) => {
        const id = req.params.productId;
        console.log(id);
        getProductById(id)
            .then((response) => {
                console.log(response.data['product']);
                res.json(response.data['product']);
            })
            .catch((er) => {
                console.log(er.response);
                res.status(501).send(e);
            })
    })

    .put((req, res) => {
        const updatedProduct = req.body;
        const id = req.params.productId;

        editProductData(id, updatedProduct)
            .then((response) => {
                console.log(response.data['product'].images);
                res.send('updated');
            })
            .catch((er) => {
                console.log("er.response");
                res.status(501).send(er);
            })

    })
    .delete((req, res) => {
        const id = req.params.productId;
        console.log(id);
        deleteProductById(id)
            .then((response) => {
                console.log(response.data);
                res.send('deleted')
            })
            .catch((er) => {
                console.log(er);
                res.status(501).send(er);
            })
    });

app.route("/products/:productId/images")
    .get((req, res) => {

        const productId = req.params.productId;
        getProductImages(productId)
            .then((response) => {
                // console.log('sent');
                res.json(response.data['images'])
            })
            .catch((e) => {
                console.log(e.response);
                res.status(501).send(e);
            })
    })
    .post((req, res) => {
        const image = req.body['image'];
        const id = req.params.productId;
        console.log(image);
        console.log(req.params.productId);

        addProductImage(id, image)
            .then((response) => {
                console.log(response.data['image']);
                res.json(response.data['image']);
            })
            .catch((er) => {
                console.log(er.response);
                res.status(501).send(er);
            })
    })
/********************* customers handler *******************/
app.route('/customers/')
    .get((req, res) => {
        getAllCustomers()
            .then((response) => {
                console.log(response.data['customers']);
                res.json(response.data)
            })
            .catch((er) => {
                console.log();
                res.status(500).send('error')
            })
    })
    .post((req, res) => {

        const custoner = req.body['customer'];
        console.log(custoner);
        addNewCustomer(custoner)
            .then((response) => {
                console.log(response.data['customer']);
                res.json(response.data['customer'])
            })
            .catch((er) => {
                console.log(er.response);
                res.status(500).send(er);
            })
    })

app.route('/customers/:customerId')
    .get((req, res) => {
        const id = req.params.customerId;
        getCustomerById(id)
            .then((response) => {

                console.log(response.data);
                res.json(response.data)
            })
            .catch((e) => {
                console.log(e.response);
            })

    })
    .put((req, res) => {

        const id = req.params.customerId;
        const updatedCustomer = req.body;
        console.log(id);
        console.log(updatedCustomer);
        editProductData(id, updatedCustomer)
            .then((response) => {
                console.log(response.data);
                res.send("done");
            })
            .catch((er) => {
                console.log(er.response);
                res.status(500).send(er)
            })
    })
    .delete((req, res) => {
        const id = req.params.customerId;
        deleteCustomerById(id)
            .then((response) => {
                console.log(response.data);
                res.json(response.data)
            })
            .catch((er) => {
                console.log(er.response);
                res.status(500).send(er);
            })
    });
/********************* orders handler *******************/
app.route('/orders/')
    .get((req, res) => {

        getAllOrders()
            .then((response) => {
                console.log(response.data);
                res.json(response.data['orders'])
            })
            .catch((er) => {
                console.log(er.response);
                res.status(500).send(er);
            })
    })
    .post((req, res) => {

        const order = req.body;
        addNewOrder(order)
        .then((response) => {
            console.log(response.data);
            res.json(response.data['order'])
        })
        .catch((er) => {
            console.log(er.response);
            res.status(500).send(er);
        })
    })

app.route('/orders/:orderId')
    .get((req, res) => {
        const id = req.params.orderId;
        getOrderById(id)
        .then((response) => {
            console.log(response.data);
            res.json(response.data['order'])
        })
        .catch((er) => {
            console.log(er.response);
            res.status(500).send(er);
        })

    })
    .put((req, res) => {

        const id = req.params.orderId;
        const updatedOrder = req.body;
        console.log(updatedOrder);
        editOrderData(id, updatedOrder)
        .then((response) => {
            console.log(response.data['order'].line_items);
            res.json(response.data['order'])
        })
        .catch((er) => {
            console.log(er.response);
            res.status(500).send(er);
        })


    })
    .delete((req, res) => {

        const id = req.params.orderId;
        deleteOrderById(id)
        .then((response) => {
            console.log(response.data);
            res.json(response.data)
        })
        .catch((er) => {
            console.log(er.response);
            res.status(500).send(er);
        })

    });

/********************* category handler *******************/
app.route('/collections/')
    .get((req, res) => {

        getAllCategories()
            .then((response) => {
                console.log(response.data['custom_collections']);
                res.json(response.data['custom_collections']);
            })
            .catch((er) => {
                console.log(er.response);
                res.status(501).send(wer.response)
            })
    })
    .post((req, res) => {
        const category = req.body['collection'];
        addNewCategory(category)
            .then((response) => {
                console.log(response.data["custom_collection"]);
                res.json(response.data["custom_collection"]);
            })
            .catch((er) => {
                console.log(er.response);
                res.status(501).send(er.response)
            })
    })

app.route('/collections/:catId')
    .get((req, res) => {
        const id = req.params.catId;
        getCategoryById(id)
            .then((response) => {
                console.log(response.data["custom_collection"]);
                res.json(response.data["custom_collection"]);
            })
            .catch((er) => {
                console.log(er.response);
                res.status(501).send(er.response)
            })
    })
    .put((req, res) => {
        const id = req.params.catId;
        const updatedCategory = req.body;
        editCategory(id, updatedCategory)
            .then((response) => {
                console.log(response.data['custom_collection']);
                res.send(response.data['custom_collection'])
            })
            .catch((er) => {
                console.log(er.response);
                res.status(501).send(er)
            })
    })
    .delete((req, res) => {
        const id = req.params.catId;
        console.log("done!");
        deleteCategoryById(id)
            .then((response) => {
                console.log(response.data['custom_collection']);
                res.send('Done!')
            })
            .catch((er) => {
                console.log(er.response);
                res.status(501).send(er)
            })
    });
/******************* port listener *******************************/
app.listen(port, () => {

    console.log(`listeneing to port ${port}`);
})
