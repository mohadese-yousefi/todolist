const sqlite3 = require('sqlite3').verbose()
const Promise = require('bluebird')
const DbError = require('./dberror')

class Database {
  constructor(file_path, dbSchema=null) {
    this.db = new sqlite3.Database(file_path, (err) => {
      if (err) {
        console.log('Could not connect to database', err)
      } else {
        console.log('Connected to database')
      }
    })
    this.dbSchema = this.dbSchema
  }

  schema(){
        this.db.exec(this.dbSchema, function(err){
        if (err) {
            console.log('Error in schema',err)
        }
        });
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      let stmt = this.db.prepare(sql);
      stmt.db.run(sql, params, function (err,  ) {
      if (this.changes === 1) {
          resolve(true);
      } else if (this.changes === 0) {
          reject(
              new DbError(21, "Entity not found")
          )
      } else {
          console.log(err);
          reject(
              new DbError(11, "Invalid arguments")
          )
          }
        })
    })
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject()
        } else {
          resolve(rows)
        }
      })
    })
  }
}
module.exports = Database;