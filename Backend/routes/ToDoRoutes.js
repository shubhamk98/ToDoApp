const {Router} = require('express');
const { getToDo, saveToDo, deleteTodo, updateToDo } = require('../controllers/ToDocontroller');

const router = Router()

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/delete',deleteTodo)
router.post('/update',updateToDo)

module.exports =  router;
