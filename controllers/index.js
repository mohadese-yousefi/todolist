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


module.exports = router;
