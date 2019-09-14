const path = require('path');
const fs = require('fs');

const express = require('express');

const router = express.Router();

function appendlist(todo){
    if (!fs.existsSync('./todolist.json')) {
        fs.writeFile('./todolist.json', '[]', { flag: 'wx' }, function (err) {
            if (err) throw err;
            console.log("It's saved!");
        });
      }
    fs.readFile('./todolist.json', (err, data) => {
        var json = JSON.parse(data)
        json.push(todo)
    
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

router.get('/store', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'store.html'));
});

router.post('/store', (req, res, next) => {
    appendlist(req.body)
    res.json('store successful')    
})


module.exports = router;