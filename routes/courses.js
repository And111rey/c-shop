const { Router } = require("express")
const CourseModel = require("../models/courseModel") // import midel

const router = Router()



router.get("/", async (req, res) => {
    const courses = await CourseModel.getAll()
    res.status(200)
    //res.sendFile(path.join(__dirname, "views", "about.html"  ))
    res.render("courses", {
        title: "Courses",
        isCourses: true,
        courses: courses
    })
})

router.get("/:id",async (req, res) => {
    const course = await CourseModel.getById(req.params.id)
    console.log(req.params)
    res.render("course", {
        title: `Course ${course.title}`,
        course: course
    })
})


module.exports = router


