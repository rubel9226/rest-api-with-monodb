const express = require('express');
const router = express.Router();

const { getAllUsers, getOneUsers,createUser, deleteUser, updateUser } = require('../controllers/user.controller');


router.get('/api/users', getAllUsers);
router.get('/api/users/:id', getOneUsers); 
router.delete('/api/users/:id', deleteUser); 
router.patch('/api/users/:id', updateUser); 
router.post('/api/users', createUser);

// router.get('/api/users', getAllUsers);




module.exports = router;