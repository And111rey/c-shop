const { Router } = require("express")
const CourseModel = require("../models/courseModel")

const router = Router()

router.get("/", (req, res) => {
    res.status(200)
    //res.sendFile(path.join(__dirname, "views", "about.html"  ))
    res.render("add", {
        title: "Add course",
        isAdd: true
    })
})

router.post("/", async (req, res) => {
    console.log(req.body)
    res.redirect("/courses")
    const course = new CourseModel(req.body.title, req.body.price, req.body.img)
    
    await course.save()
    
})



// check code youself
// check code youself
// check code youself 


module.exports = router

