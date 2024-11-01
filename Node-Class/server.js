import Express from 'express'
import Path from 'path'

let app = Express()
let path_root = Path.resolve()
app.use(Express.static("static"))
app.use(Express.urlencoded())

app.listen('8000', function(pet, resp){
    console.log("Servidor Iniciado")
})

app.get("/", function(pet, resp){
    resp.send("<h1> El servidor esta arriba</h1>")
})

app.get("/home", function(pet, resp){
    let path_index = path_root + "/index.html"
    console.log(path_index)
    resp.sendFile(path_index)
})

app.get("/home_page", function(pet, resp){
    resp.sendFile(path_root + "/templates/home.html")
})

app.get("/register_page", function(pet, resp){
    resp.sendFile(path_root + "/templates/register.html")
})

app.post("/register_user", function(pet, resp){
    let {name, lastname, id, date, phone, email, passw} = pet.body
    console.log(name, lastname, id, date, phone, email, passw)
    resp.send("<h1> User Registrado </h1>")
})