const express = require('express');
const { Todo } = require('../models');
const router = express.Router();

router.get('/', (req,res,next) => {
	Todo.findAll().then((todos) => {
		res.render('index', {
			title: 'NodeTodo',
			todos: todos,
		});
	});
});

router.post('/', (req, res, next) => {
	console.log("POST TODO: "+JSON.stringify(req.body));
	Todo.create({
		title: req.body.title,
		content: req.body.content,
		duedate: req.body.duedate,
		prior: req.body.priority,
	}).then((todo) => {
		res.send(todo);
	});
});


module.exports = router;
