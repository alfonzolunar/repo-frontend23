import ex from 'express'
import path from 'path'


let app = ex()
let path_frontend = path.resolve() + "/frontend/build/index.html"

app.use(ex.static("frontend/build"))


let port = 8000

app.listen(port, function(req, resp){
    console.log("Servidor iniciado en el puerto "+ port)
})

app.get("/", (req, resp)=> {
    resp.sendFile(path_frontend)
})

app.get("/register_page", (req, resp)=> {
    resp.sendFile(path_frontend)
})

app.get("/consult_page", (req, resp)=> {
    resp.sendFile(path_frontend)
})

app.get("/contact_page", (req, resp)=> {
    resp.sendFile(path_frontend)
})

app.post("/register_user", (req, resp)=>{
    let {id, name, lastname, birthday} = req.body
    console.log(id, name, lastname, birthday)
    resp.send("Usuario creado")
})