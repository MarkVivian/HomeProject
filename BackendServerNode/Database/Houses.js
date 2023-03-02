const mysql2 = require("mysql2/promise")


class HouseDatabase{
    // this is the only way to make the public variables in javascript.
    constructor(){
      this.connection = null
      this.houseInfo = null
      this.houseImages = null
    }

    async GetHouseInfo(){
        const [rows, fields] = await this.connection.query("SELECT * FROM houseDetails")
        this.houseInfo = rows;
    }
    
    async GetHouseImages(){
        const [rows, fields] = await this.connection.query("SELECT * FROM houseImages")
        this.houseImages = rows;
    }

    async SendHouseInfo(info){
        console.log("the data is being writted")
        const sql = "INSERT INTO houseDetails (houseName, freeHouses, houseLocation) VALUES (?, ?, ?)";
        const values = [info.houseName, info.freeHouses, info.houseLocation];
       
        this.connection.query(sql, values, (error, results, fields) => {
          if (error) throw error;
          console.log('Data inserted successfully');
        });
        console.log("the data has been written")
    }
    
    async SendHouseImages(info){
        console.log("the data is being written...")
        const sql = "INSERT INTO houseImages (houseId, imageUrl) VALUES(?, ?)"
        const values = [info.houseId, info.imageUrl]
        
        this.connection.query(sql, values, (error, results, fields)=>{
            if(error) throw error;
            console.log("data inserted succesfully")
        })
        console.log("the data has been written")
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
module.exports = HouseDatabase;