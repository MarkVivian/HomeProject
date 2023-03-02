const Express = require("express")
const Cors = require("cors")
const slider_images = require("./Data/slider_images.json")
const user = require("./Data/Users")
const houses = require("./Data/Houses")


const App = Express()
App.use(Cors())
App.use(Express.json())


                //FOR FETCH REQUESTS
App.get("/slider_images", (req, res)=>{
    res.send(slider_images)
    console.log("the slider_images has been sent")
})

App.post("/postUsers", (req, res)=>{

})

App.get("/getUsers", (req, res)=>{

})


                  //TEST THE CONNECTION
App.listen(3000, ()=>{
    console.log("the port is running")
})

