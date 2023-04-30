const userModel = require("../dao/models/user.model");


getSession = async (email, password) => {
    return await userModel.findOne({email, password});
}

getEmail = async (email) => {
    return await userModel.findOne(email);
}

createUser = async (user)=>{
    const { firstName,lastName, email, age, password,rol} = user
    return await userModel.create({firstName , lastName, email, age, password, rol })
}

getUserId = async (id) => {
    return await userModel.findById({ id})
}

module.exports = {
    getSession,
    getEmail,
    createUser,
    getUserId
}