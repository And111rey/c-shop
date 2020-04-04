const express = require("express")
const path = require("path")
const exhbs = require("express-handlebars") // conntct express-handlebars for working with HTML trmplate
const homeRoute = require("./routes/home")
const addRoute = require("./routes/add")
const coursesRoute = require("./routes/courses")

const app = express()


///////////...................costumization express-handlebars...................//
const hbs = exhbs.create({ // confifuration object
    defaultLayout: "main",  // naming main-file(start file) fot template
    extname: "hbs"          // set extention
})

app.engine("hbs", hbs.engine) // registaration "hbs"
app.set('view engine', "hbs") // now we can using "hbs"
app.set("views", "views") // set patams: 1) constantly; 2) folder name where we saving html-trmplates 
////////////////////////////////////////////

app.use(express.static("pablic"))

app.use(express.urlencoded({extended: true }))

//...................SYMPLE SYNTAX..........
//app.get('/', (req, res)=> {
//    res.status(200)
//    //res.sendFile(path.join(__dirname, "views", "index.html")) //send file that we created is html
//    //after create customization, we should use next code
//    res.render("index", {
//        title: "Main page",
//        isHome: true
//    })
//})
//...............................................
 app.use("/",homeRoute)
 app.use("/add",addRoute)
 app.use("/courses",coursesRoute)






const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log(PORT, () => {
        console.log(`Server is runing on port ${PORT}`)
    })
})
