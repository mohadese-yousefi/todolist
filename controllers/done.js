const fs = require('fs');

const express = require('express');

const router = express.Router();

function updatelist (input){
    fs.readFile('./todolist.json', (err, data) => {
        var json = JSON.parse(data)
        for(const v of json){
            if(v.name == input){
                v.status = 'done'
                console.log(`change this status : ${input} done.`)
            }
        }
    
        fs.writeFile("./todolist.json", JSON.stringify(json), (err) => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully store');
                process.exit(0);
            }
        })
    })
};

router.get('/done/:name', (req, res, next) => {
    updatelist(req.params.name)
    res.redirect('/index');
});


module.exports = router;