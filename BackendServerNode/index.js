const Express = require("express")
const Cors = require("cors")
// * this will connect to the slider images
const slider_images = require("./Database/slider_images.json")
// * this is connecting to the database.
const Database = require("./Database/Database")
// * this connects to the function with authentication code.
const Auth = require("./Authentication/Auth")

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
    /*
    if(Auth(body)){
        res.status(200).send({
            message : "user approved",
            status : true
    })
    }else{
        res.status(200).send({
            message : "user rejected",
            status : false
        })
    }
    */
})
Auth("hello world")

                
      
                
                
                
App.listen(3003, ()=>{
    console.log("the port is running")
})

