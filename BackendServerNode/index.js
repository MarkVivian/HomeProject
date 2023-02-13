const Express = require("express")
const Cors = require("cors")

const App = Express()

App.get('/', (req, res) => {
    res.send("hello wolrd")
})



App.listen(3000, ()=>{
    console.log("the port is running")
})

//to run the server we use node filename.js