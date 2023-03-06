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
App.get("/AuthenticateMe", (req, res)=>{
    body = req.body
    if(AthenticateUser(body)){
        res.status(200).send({
            message : "user approved",
            status : true
    })
    }
})

function AthenticateUser(body){
    return true
}
                
      
                
                
                
App.listen(3000, ()=>{
    console.log("the port is running")
})

