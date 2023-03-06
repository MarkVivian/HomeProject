//* this package allows us to connect to the database and carry out the commands
const mysql2 = require("mysql2/promise")

class Database{
    // ! this will contain the public variables.
    constructor(){
        this.connection = null
        this.rows = null
        this.check = null
    }
    
    // ! this will connect to the database.
    async DatabaseConnection(){
        try{
            // ? this is connecting to the database.
            this.connection = await mysql2.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'M6a2r7k5',
                database: 'HouseFinder'
            })
            
            // ? this makes sure we can use the connection to the database.
            if(this.connection.ping()){
                console.log("the database is connected")
            }else{
                console.log("cannot ping the database")
            }
        }catch(err){
            console.log(`an error occured when connecting to the database ${err}`)
        }
    }
    
    // ! this will read the data from the database
    async ReadDatabase(tableName){
        try{

            const [rows, fields] = await this.connection.query(`SELECT * FROM ${tableName}`)
            console.log(rows)
            this.rows = rows;
        }catch(err){
            console.log(`an error occured when reading data from the database ${tableName} : ${err}`)
        }
    }
    
    // ! this will read  specific data from the database.
    async ReadSpecificDatabase(tableName, column){
        try{
            // ? this will read the data from the database and store it either in fields and rows.
            const [rows, fields] = await this.connection.query(`SELECT ${column} FROM ${tableName}`)
            console.log(rows)
            this.rows = rows;
        }catch(err){
            console.log(`an error occured when reading a specific column from the table ${tableName} on column ${column} : ${err}`)
        }
    }
    
    // ! this will write data to the database.
    async WriteDatabase(tableName, tables, data){
        try{
            // ? this will produce the required amount of ? seperated by a comma , by the length of the Array(data.length)
            const value = new Array(data.length).fill("?").join(",")
            
            // ? this is the script that will enter the data to the database.
            const sql =`INSERT INTO ${tableName} (${tables}) VALUES (${value})`
            
            // ? this will check for an error when connecting write the data to the table.
            this.connection.query(sql, data, (error, results, fields) => {
                if (error) throw error;
                console.log('Data inserted successfully');
              })
               
              // ? this is for testing purposes only.
              this.ReadDatabase(tableName)
        }catch(err){
            console.log(`an error occurred when writting data to the database ${err}`)
        }
    }    
}

module.exports = Database