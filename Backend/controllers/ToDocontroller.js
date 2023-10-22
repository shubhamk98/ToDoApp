const todoModel = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
  const todo = await todoModel.find();
  res.send(todo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  todoModel.create({ text }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
}

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body

  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Sucessfully...."))
    .catch((err) => console.log(err));
}

module.exports.deleteTodo = async (req, res) => {
    console.log("request body = ")
    console.log(req.body)
  const { _id } = req.body
  todoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Sucessfully...."))
    .catch((err) => console.log(err));
}

