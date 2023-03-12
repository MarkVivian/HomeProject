const Express = require("express")
const Cors = require("cors")
// * this is connecting to the database.
const Database = require("./Database/Database")
// * this will deal with the sign in and Authentication logic
const { Auth, Sign } = require("./Authenticate")

const App = Express()
App.use(Cors())
App.use(Express.json())

                //FOR FETCH REQUESTS
App.get("/slider_images", (req, res)=>{
    const slider = new Database()
    slider.DatabaseConnection()
    .then(()=>{
        slider.ReadSpecificDatabase("sliderImages",["imageUrl", "imageText"])
        .then(()=>{
            res.status(200).send(slider.rows)
        })
    })
})

App.post("/AuthenticateMe", (req, res)=>{
    const body = req.body
    const Authenticate = new Database()
    Authenticate.DatabaseConnection()
    .then(()=>{
        Authenticate.ReadSpecificDatabase("userDetails", ["firstName", "userPassword"])
        .then(()=>{
            const {state, control} = Auth(Authenticate.rows, body)
            if(state){
                if(control){
                    res.status(200).send({"message": "Admin has logged in successfully", "status" : true, "control" : true})
                }else{
                res.status(200).send({"message": "user logged in successfully", "status" : true, "control" : false})
                }
            }else{
                res.status(200).send({"message": "invalid user details", "status" : false, "control": false})
            }
        })
    })
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

App.post("/AddMe", (req, res)=>{
    const body = JSON.parse(JSON.stringify(req.body))
    const signIn = new Database()
    signIn.DatabaseConnection()
    .then(()=>{
        signIn.ReadSpecificDatabase("userDetails", ["userEmail", "userNumber"])
        .then(()=>{
            if(Sign(signIn.rows, body)){
                signIn.WriteDatabase("userDetails", ["firstName","lastName", "userName","userPassword","userEmail", "userNumber"], [body.firstName, body.lastName, body.userName, body.userPassword, body.userEmail, body.userNumber])
                res.status(200).send({"message" : "you have been signed in successfully", "status" : true, "control" : false})
            }else{
                res.status(200).send({"message" : "your email or phone number is in use.", "status" : false, "control" : false})
            }
        })
    })
})

App.post("/testMe", (req, res)=>{
    res.status(200).send({"message": "Admin has logged in successfully", "status" : true, "control" : true, "body": req.body})
    console.log(req.body)
})

App.post("/testMwa", (req, res)=>{
    res.status(200).send({"message": "Admin has logged in successfully", "status" : true, "control" : true, "body": req.body})
    console.log(req.body)
})
const port = 3000              
App.listen(port, ()=>{
    console.log(`the port is running http://localhost:${port}`)
})