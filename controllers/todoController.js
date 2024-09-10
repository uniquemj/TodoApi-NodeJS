const Todos = require('../models/todoModel')
const {getPostData, writeDataToFile} = require('../utils')

//@desc Get All Todos
//@route GET /api/todos
const getTodos = async (req, res,) =>{
    try{
        const todos = await Todos.findAll()
        res.statusCode = 200
        res.end(JSON.stringify(todos))
    } catch (err) {
        console.log(err)
    }
}

//@desc Get Single Todo
//@route GET /api/todos/:id
const getTodoById = async(req, res, id) =>{
    try{
        const todo = await Todos.findById(id)
        if(!todo){
            res.statusCode = 404
            res.end(JSON.stringify({message: "Todo Not Found"}))
        } else {
            res.statusCode = 200
            res.end(JSON.stringify(todo))
        }
    } catch(err){
        console.log(err)
    }
}

//@desc Create a Todo
//@route POST /api/todos
const createTodo = async(req, res) =>{
    try{
        const body = await getPostData(req)
        const { title, isCompleted } = body
            
        const todo = {
            title, 
            isCompleted
        }

        const newTodo = await Todos.create(todo)
        res.statusCode = 201
        res.end(JSON.stringify(newTodo))
    } catch(err){
        console.log(err)
    }
}

//@desc Update Todo by Id
//@route PUT /api/todos/:id
const updateTodo = async(req, res, id) =>{
    try{
        const todo = await Todos.findById(id)

        if(!todo){
            res.statusCode = 404
            res.end(JSON.stringify({message: "Todo Not Found"}))
        } else {
            const body = await getPostData(req)
            const { title, isCompleted } = body
                
            const todoData = {
                title: title || todo.title, 
                isCompleted: isCompleted || todo.isCompleted
            }

            const updateTodo = await Todos.update(id, todoData)
            res.statusCode = 200
            res.end(JSON.stringify(updateTodo))
        }
    } catch(err){
        console.log(err)
    }
}

//@desc Delete Todo by Id
//@route DELETE /api/todos/:id
const deleteTodo = async(req, res, id) =>{
    try{
        const todo = await Todos.findById(id)

        if(!todo){
            res.statusCode = 404
            res.end(JSON.stringify({message: "Todo Not Found"}))
        } else {
            const delTodo = Todos.remove(id)
            res.end(JSON.stringify({message: `Todo with ${id} is removed`}))
        }
    } catch(err){
        console.log(err)
    }
}
module.exports =  {getTodos, getTodoById, createTodo, updateTodo, deleteTodo}