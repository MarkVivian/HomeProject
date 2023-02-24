const Express = require("express")
const Cors = require("cors")
const Data = require("./Data/Data.json")

const {slider_images, users} = Data

const App = Express()

App.use(Cors())
App.use(Express.json())

App.get("/slider_images", (req, res)=>{
    res.send(slider_images)
    console.log("the slider_images has been sent")
})

App.get("/Login", (req, res)=>{
    res.status(200).send(users)
    console.log("the data has been sent")
})


App.listen(3000, ()=>{
    console.log("the port is running")
})

