const {v4: uuidv4} = require('uuid');
const Users = require("../models/user.model");

const getAllUsers = async (req, res) => {
    try{
        const users = await Users.find();
        res.status(200).json(users); 
    } catch(error){
        res.status(500).send(error.message);
    }
};

const getOneUsers = async (req, res) => {
    try {
        const user = await Users.findOne({id: req.params.id});
        res.status(200).json({user});
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const createUser = async (req, res) => {
    try{
        const newUser = new Users({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save();
        res.status(201).json({newUser});
    } catch (error){
        res.status(500).send(error);
    }
   
};


const updateUser = async (req, res) => {
    try{
        const user = await Users.findOne({ id: req.params.id });
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save();
        res.status(201).json({user});
    } catch (error){
        res.status(200).send(error);
    }
};


const deleteUser = async (req, res) => {
    try {
        await Users.deleteOne({id: req.params.id});
        res.status(200).json({ message: 'user is deleted' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};



module.exports = { getAllUsers, getOneUsers, createUser, updateUser, deleteUser };