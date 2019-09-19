const Database = require('../database');
const statuscontroller = require('./helpers');

class ToDoListController {    
     constructor() { 
            this.db = new Database('./todo')
            this.statuscontroller = new statuscontroller
    }

     store(req, res){
        this.db.run(`insert into worklist (name,date) values ('${req.body.name}', '${req.body.date}');`)
            .then(this.statuscontroller.success(res))
            .catch(this.statuscontroller.notFindError(res));
     }

     done(req, res){
        this.db.run(`UPDATE worklist SET status = true WHERE id= '${req.param.id}';`)
        .then(this.statuscontroller.success(res))
        .catch(this.statuscontroller.notFindError(res));
        console.log('change status to done')
   }

       index(res){
         this.db.all(`SELECT * FROM worklist WHERE status= false;`)
         .then(this.statuscontroller.success(res))
         .catch(this.statuscontroller.notFindError(res));
         
     }
    
}

module.exports = ToDoListController;
