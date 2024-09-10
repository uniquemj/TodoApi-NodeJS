const todos = require('../data/data.json')
const {v4: uuidv4} = require('uuid')
const {writeDataToFile} = require('../utils')

const findAll = () =>{
    return new Promise((resolve, reject)=>{
        resolve(todos)
    })
}

const findById = (id) =>{
    return new Promise((resolve, reject)=>{  
        const todo = todos.find((todo)=>todo.id === id)
        resolve(todo)
    })
}

const create = (todo) =>{
    return new Promise((resolve, reject) =>{
        const newTodo = {id: uuidv4(), ...todo}
        todos.push(newTodo)
        writeDataToFile('./data/data.json', todos)
        resolve(newTodo)
    })
}

const update = (id, todo) =>{
    return new Promise((resolve, reject)=>{
        const index = todos.findIndex((t)=>t.id === id)
        todos[index] = {id, ...todo}
        writeDataToFile('./data/data.json', todos)
        resolve(todos[index])
    })
}

const remove = (id) =>{
    return new Promise((resolve, reject)=>{
        const newTodos = todos.filter((t)=>t.id !== id)
        writeDataToFile('./data/data.json', newTodos)
        resolve()
    })
}


module.exports =  {findAll, findById, create, update, remove}