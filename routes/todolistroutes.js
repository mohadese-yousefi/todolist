/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const TodolistController = require('../controllers/todolistcontroller');
const todolistController = new TodolistController();


router.get('/done/:name', (req, res, next) => {
    todolistController.done(req, res)
});

router.get('/index', (req, res, next) => {
    todolistController.index(res)
});

router.post('/store', (req, res, next) => {
    todolistController.store(req, res)
});

module.exports = router;