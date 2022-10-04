const {
    addTodoService,
    fetchTodoService,
    updateTodoService,
    removeTodoService,
    getTodoDateService
} = require('../services/TodoServices');


const addTodoController = async (req, res) => {
    try{
        const body = {
            userName: req.headers.userName,
            ...req.body
        }
       const data = await  addTodoService(body);
        res.status(201).json({
            status: 'Success',
            message: 'Todo is created',
            data: data
        });
    }catch (error){
        res.status(400).json({
            status: "Failed",
            message: 'Todo isn\'t created',
            error: error.message
        });
    }

}
const getTodosController = async (req, res) => {
    try{
        const query = {
            userName: req.headers.userName
        }

        const data = await fetchTodoService(query);

        res.status(200).json({
            status: 'Success',
            message: 'todo successful',
            data: data
        });
    }catch (error){
        res.status(400).json({
            status: "Failed",
            message: 'Didn"t get todos',
            error: error.message
        });
    }


}

const updateTodoController = async (req, res) => {


    try{
        const data = await updateTodoService(req);

        res.status(200).json({
            status: 'Success',
            message: 'todo is updated',
            data: data
        });
    }catch (error){
        res.status(400).json({
            status: "Failed",
            message: 'Todo isn\'t updated',
            error: error.message
        });
    }

}
const deleteTodoController = async (req, res) => {
    try {
        const data = await removeTodoService(req);
        res.status(201).json({
            status: "Success", message: "Todo deleted success", data
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed", message: "Failed to delete", error: error.message
        })
    }
}
const getTodoDataController = async (req, res) => {
    try {
        const data = await getTodoDateService(req);
        res.status(200).json({
            status: "Success",
            message: "Todo deleted success",
            data
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed", message: "Failed to get", error: error.message
        })
    }
}


module.exports = {
    addTodoController,
    getTodosController,
    updateTodoController,
    deleteTodoController,
    getTodoDataController

}