const express = require("express");
const app = express();
const Todo = require("./Models/Todo");

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Todo

app.post("/todo", async(req, res) => {
    try{
        const { body } = req;
        let todo = await Todo.create({ title: body.title, date: body.date, time: body.time, status: body.status });
        res.send(todo);
    } catch (error) {
        console.log(error);
    }
})

app.get("/todo", async (req, res) => {
    try {
        let todos = await Todo.findAll();
        res.send(todos);
    } catch (error) {
        console.log(error);
    }
})

app.put("/todo/:id", async (req, res) => {
    try {
        const { body, params } = req;
        let todo = await Todo.update({ title: body.title, date: body.date, time: body.time, status: body.status }, {where: {id: params.id}});
        res.send(todo);
    } catch (error) {
           console.log(error);
    }
});

app.delete("/todo/:id", async (req, res) => {
    try {
        const { params } = req;
        await Todo.destroy({where: {id: params.id}});
        res.send("Deleted Successfully");
    } catch (error) {
           console.log(error);
    }
});

module.exports = app;