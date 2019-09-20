const Database = require('../database');
const statuscontroller = require('./helpers');


class ToDoListController {    
     constructor() { 
            this.db = new Database('./todo')
            this.statuscontroller = new statuscontroller
    }

     store(req, res){
        this.db.run("insert into worklist (name,date) values ($name, $date);",
                     {$name: req.body.name, $date: req.body.date}
                     )
            .then(this.statuscontroller.success(res))
            .catch(this.statuscontroller.notFindError(res));
     }

     done(req, res){
        console.log(req.params.id)
        this.db.run("UPDATE worklist SET status = $status WHERE id= $id;", 
                     {$status:true, $id: req.params.id}
                  )
        .then(this.statuscontroller.success(res))
        .catch(this.statuscontroller.notFindError(res));
   }

       index(res){
         this.db.all(`SELECT * FROM worklist WHERE status= false;`)
         .then(this.statuscontroller.success(res))
         .catch(this.statuscontroller.notFindError(res));
         
     }
    
}

module.exports = ToDoListController;
