const cartsModel = require("../dao/models/carts.model");

const getCartsId = async (id) => {
    return await cartsModel.findById(id).lean().populate('products.product');
}

const Create = async (carts)=>{
    return await cartsModel.create(carts);
} 	

const updateToCart = async(cid,cart)=>{
    return await cartsModel.updateOne({_id:cid},cart)
}

module.exports = {
    getCartsId,
    Create,
    updateToCart
}