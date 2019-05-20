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
	if(req.body.title == "" || req.body.content == "" || req.body.duedate == ""){
		console.log("빈칸이 있는 경우입니다.")
		res.status(400).send({msg:"빈 칸이 있습니다."});
	}else{
		Todo.create({
			title: req.body.title,
			content: req.body.content,
			duedate: req.body.duedate,
			prior: req.body.priority,
		}).then((todo) => {
			res.send(todo);
		});
	}
});

router.delete('/:id', (req,res,next) => {
	const id = req.params.id;
	console.log("DELETE ID(" + id + ")");
	Todo.destroy({where: {id: id}})
	.then((result)=>{
		console.log("DELETE COMPLETED");
		console.log(result);
		res.send('DELETE SUCCESSFULLY COMPLETED');
	})
	.catch((err) => {
		console.log("DELETE ERROR: " + err);
		res.status(400).send({msg:"삭제 실패. 관리자에게 문의"});
	})
});

router.put('/:id', (req, res, next)=>{
	const id = req.params.id;
	console.log("UPDATE ID:" + id);
	Todo.update(
		{
		title: req.body.title,
		content: req.body.content,
		duedate: req.body.duedate,
		prior: req.body.priority,//check 추가하기
		},
		{where:{id:id}},
		).then((todo) => {
		res.send(todo);
	}).catch((err) => {
		console.log("UPDATE ERROR: " + err);
		res.status(400).send({msg:"수정 실패. 관리자에게 문의"});
	})
})

module.exports = router;
