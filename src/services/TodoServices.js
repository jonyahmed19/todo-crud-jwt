const TodoModel = require('../models/TodoModel')
const addTodoService = async (data) =>{
    const todo = await TodoModel.create(data);
    return todo;
}
const fetchTodoService = async (data) =>{
        const projection = {
            todoSubject: 1,
            todoDescription: 1,
            todoStatus: 1
        }
    const todos = await TodoModel.find(data, projection)
    return todos;
}
const updateTodoService = async (data) =>{
    const query = {
        ...data.body
    }
    const cond = {
        _id: data.params.todoid
    }
    const todos = await TodoModel.updateOne(cond, query)
    return todos;


}
const removeTodoService = async (data) =>{
    const cond = {
        _id: data.params.todoid
    }
    const todo = await TodoModel.deleteOne(cond)
    return todo;
}
const getTodoDateService = async (data) =>{
    const userName= data.headers['userName'];

   const startDate = new Date (data.headers['startdate']);
   const endDate = new Date (data.headers['enddate']);

    const projection = {
        todoSubject: 1,
        todoDescription: 1,
        todoStatus: 1
    }
    const todos = await TodoModel.find({
        userName: userName,
        createdAt: {$gte: startDate, $lte: endDate}

    }, projection)
    return todos;
}


module.exports = {
    addTodoService,
    fetchTodoService,
    updateTodoService,
    removeTodoService,
    getTodoDateService
}
