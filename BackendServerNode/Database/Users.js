const mysql2 = require("mysql2/promise")


class UserDatabase{
    // this is the only way to make the public variables in javascript.
    constructor(){
      this.connection = null
      this.userInfo = null
      this.ownerInfo = null
    }

    async GetUserFromDatabase(){
        const [rows, fields] = await this.connection.query("SELECT * FROM userDetails")
        this.userInfo = rows
    }
    
    async GetOwnerFromDatabase(){
        const [rows, fields] = await this.connection.query("SELECT * FROM ownerDetails")
        this.ownerInfo = rows
    }

    async SendUsersToDatabase(info){
        console.log("the data is being writted......")
        const sql = "INSERT INTO userDetails (firstName, lastName, userPassword, userEmail, userNumber) VALUES (?, ?, ?, ?, ?)";
        const values = [info.firstName, info.lastName, info.userPassword, info.userEmail, info.userNumber];
       
        this.connection.query(sql, values, (error, results, fields) => {
          if (error) throw error;
          console.log('Data inserted successfully');
        });
        console.log("the data has been written......")
    }
    
    async SendOwnersToDatabase(info){
        console.log("the data is being writted......")
        const sql = "INSERT INTO ownerDetails (firstName, lastName, ownerPassword, ownerEmail, ownerNumber) VALUES (?, ?, ?, ?, ?)";
        const values = [info.firstName, info.lastName, info.ownerPassword, info.ownerEmail, info.ownerNumber];
       
        this.connection.query(sql, values, (error, results, fields) => {
          if (error) throw error;
          console.log('Data inserted successfully');
        });
        console.log("the data has been written......")
    }

    async DatabaseConnection(){
        try{
            this.connection = await mysql2.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'M6a2r7k5',
                database: 'HouseFinder'
            })
            
            // this will check the database connection
            if(this.connection.ping()){
                console.log("the connection is good")
            }
        }catch(err){
            console.log(`error occurred when connecting to the database. ${err}`)
        }
    }
}
module.exports = UserDatabase;