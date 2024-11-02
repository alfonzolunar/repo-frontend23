import express from 'express'
import path from 'path'

const app = express()
const dir_front = path.resolve() + "/react-states-23/build/index.html"
app.use(express.static("react-states-23/build"))
app.use(express.urlencoded())
app.use(express.json())

const port = 4568
app.listen(port, function(pet, resp){
    console.log("Server inciado en el puerto " + port)
})

app.get("/", (pet, resp)=>{
    resp.sendFile(dir_front)
})

app.post("/register_user", (req, resp)=>{
    let {id, name, lastname, birthday} = req.body
    console.log(id, name, lastname, birthday)
    resp.send("Usuario creado")
})

app.post("/consult_user", (req, resp)=>{
    let user_data = req.body
    console.log(user_data)
    let data = {
        "status": "Ok",
        "id": user_data.id,
        "text": user_data.text
    }
    resp.send(data)
})