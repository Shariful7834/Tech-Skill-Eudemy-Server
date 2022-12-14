const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
const course_categories = require("./course_categories.json");
const courses = require("./courses.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Application server are running");
});

// app.get("/course-categories", (req, res) => {
//   res.send(course_categories);
// });

app.get("/courses", (req, res) => {
  res.send(courses);
});

// app.get("/courses/:id", (req, res) => {
//   const id = req.params.id;
//   if (id === "06") {
//     res.send(courses);
//   } else {
//     const category_course = courses.filter((n) => n.course_id === id);
//     res.send(category_course);
//   }
// });

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((n) => n._id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`The Application are running on the port ${port}`);
});
