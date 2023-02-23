const {slider_images} = require("./Data/Data.json")
const Express = require("express")
const Cors = require("cors")

const App = Express()

App.use(Cors())
App.use(Express.json())

App.get("/slider_images", (req, res)=>{
    res.send(slider_images)
    console.log("the slider_images has been sent")
})

App.post("/api/sign", (req, res)=>{
    try{
    	console.log(req)
	console.log(req.body)
    }catch(er){
	console.log("an error has occured")
     }
    res.send(JSON.stringify({message : "the data has been recieved. no errors"}))
})

App.listen(3000, ()=>{
    console.log("the port is running")
})

