const Express = require("express")
const Cors = require("cors")
const slider_images = require("./Data/slider_images.json")
const users = require("./Data/users.json")
const houses = require("./Data/houses.json")


const App = Express()
App.use(Cors())
App.use(Express.json())


                //FOR FETCH REQUESTS
App.get("/slider_images", (req, res)=>{
    res.send(slider_images)
    console.log("the slider_images has been sent")
})

App.get("/users", (req, res)=>{
    res.status(200).send(users)
    console.log("the data has been sent")
})


App.post("/newUsers", (req, res)=>{
    const data = req.body
    console.log("data received is ", data)
    res.status(200).send({message : "the data has been recieved"})
    WriteDataJson(data, "./Data/users.json")
})

App.get("/houses", (req, res)=>{
    res.status(200).send(houses)
    console.log("the houses have been sent")
})



                  //TEST THE CONNECTION
App.listen(3000, ()=>{
    console.log("the port is running")
})

