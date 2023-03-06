const Express = require("express")
const Cors = require("cors")
const slider_images = require("./Database/slider_images.json")
const UserDatabase = require("./Database/Users")
const Database = require("./Database/Database")

const App = Express()
App.use(Cors())
App.use(Express.json())


                //FOR FETCH REQUESTS
App.get("/slider_images", (req, res)=>{
    res.send(slider_images)
    console.log("the slider_images has been sent")
})


                // USER AND OWNER API
App.post("/postUsers", (req, res)=>{
    const data = req.body
    const User = new UserDatabase()
    User.DatabaseConnection()
    .then(()=>{
        User.SendUsersToDatabase(data)
    })
    res.status(200).send({message : "the user data has been recieved successfully"});
})

App.post("/postOwners", (req, res)=>{
    const data = req.body
    const User = new UserDatabase()
    User.DatabaseConnection()
    .then(()=>{
      User.SendOwnersToDatabase(data)      
    })
    res.status(200).send({message : "the owner data has been recieved successfully"});
})

App.get("/getUsers", (req, res)=>{
    const User = new UserDatabase()
    User.DatabaseConnection()
    .then(()=>{
        User.GetUserFromDatabase()
        .then(()=>{
            res.status(200).send(User.userInfo)
        })
    })
    console.log("the user data has been sent");
})

App.get("/getOwners", (req, res)=>{
    const User = new Database()
    User.DatabaseConnection()
    .then(()=>{
        User.GetOwnerFromDatabase()
        .then(()=>{
            res.status(200).send(User.ownerInfo)
        })
    })
    console.log("the owner data has been sent")
})

                  //TEST THE CONNECTION
App.listen(3000, ()=>{
    console.log("the port is running")
})

