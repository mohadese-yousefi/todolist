const path = require('path');
const fs = require('fs');

const express = require('express');

const router = express.Router();

function index(){
    var rawdata = fs.readFileSync('todolist.json');
    var todo = JSON.parse(rawdata);
    var todolist = [];
    for(const v of todo){
        if(v.status == 'todo'){
            todolist.push(v)
        }
    }
    return todolist
};

router.get('/index', (req, res, next) => {
    var worklist = index()
    res.render(path.join(__dirname, '../', 'views', 'index.html'), {name: worklist});
});


module.exports = router;
