const Todo = require('../models/todo');

exports.list = (req, res) => {
    res.render('index', { todos: Todo.getAll() });
};

exports.newForm = (req, res) => {
    res.render('new');
};

exports.create = (req, res) => {
    const { title } = req.body;
    if (title && title.trim()) {
        Todo.create(title.trim());
    }
    res.redirect('/');
};

exports.toggle = (req, res) => {
    Todo.toggle(Number(req.params.id));
    res.redirect('/');
};

exports.delete = (req, res) => {
    Todo.remove(Number(req.params.id));
    res.redirect('/');
};