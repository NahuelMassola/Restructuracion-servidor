const productModel = require("../dao/models/products.model");


const addProduct = async (product) => {
    return await productModel.create(product);
}

const getProduct = async (page = 1, limit = 6 , sort = '', query ={}) => {
    return  await productModel.paginate(query, { page, limit, sort:{price:sort}});
}

const getProductId = async (id) => {
    return await productModel.findById(id);
}

const UpdateProduct = async (id, product) => {
    return await productModel.updateOne({_id:id}, product);
}

const DeleteProductId = async (id) => {
    return await productModel.deleteOne({_id:id});
}



module.exports = {
    addProduct,
    getProduct,
    getProductId,
    UpdateProduct,
    DeleteProductId
}