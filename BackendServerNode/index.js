const Express = require("express")
const Cors = require("cors")
const users = require("./Data/users.json")
const slider_images = require("./Data/slider_images.json")

const App = Express()

App.use(Cors())
App.use(Express.json())

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

function WriteDataJson(values, path){
    const fs = require("fs");

    // Load the existing JSON file data
    const existingData = fs.readFileSync(path, 'utf-8');

    // Parse the JSON data into a JavaScript object
    const jsonData = JSON.parse(existingData);

    // Modify the object with the new data
    jsonData.push(values);

    // Convert the modified object back into a JSON string
    const updatedData = JSON.stringify(jsonData, null, 2);

    // Write the new JSON string to the file system
    fs.writeFileSync(path, updatedData, 'utf-8');
}


App.listen(3000, ()=>{
    console.log("the port is running")
})

