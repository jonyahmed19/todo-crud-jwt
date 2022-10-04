const express = require('express');
const {registerProfile,
    loginController,
    getProfileController,
    updateProfileController
    } = require('../controllers/UserController');
const {addTodoController,
    updateTodoController,
    getTodosController,
    deleteTodoController,
    getTodoDataController } = require('../controllers/TodoController')
const tokenVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware')
const router = express.Router();

router.post('/register', registerProfile);
router.post('/login', loginController);
router.get('/profile',tokenVerifyMiddleware ,getProfileController);
router.get('/updateprofile/:id',tokenVerifyMiddleware ,updateProfileController);
router.post('/addtodo', tokenVerifyMiddleware, addTodoController)
router.get('/gettodos', tokenVerifyMiddleware, getTodosController)
router.put('/updatetodo/:todoid', tokenVerifyMiddleware, updateTodoController)
router.delete('/deletetodo/:todoid', tokenVerifyMiddleware, deleteTodoController)
router.get('/gettodosdate/', tokenVerifyMiddleware, getTodoDataController)





module.exports = {
    router
}













