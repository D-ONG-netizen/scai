const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const courses = JSON.parse(fs.readFileSync(path.join(ROOT, "build", "courses.json"), "utf8"));
const content = require(path.join(ROOT, "pdf-content.js"));

let page = 0;
const extra = {};
for (const course of courses) {
  for (const lesson of course.lessons) {
    page += 1;
    const cw = content[lesson.id] && content[lesson.id].courseware;
    extra[lesson.id] = {
      mindmapPage: page,
      courseware: cw || null
    };
  }
}

const out = "window.SCAI_LESSON_EXTRA=" + JSON.stringify(extra, null, 2) + ";\n";
fs.writeFileSync(path.join(ROOT, "lesson-extra.js"), out, "utf8");
console.log("LESSON EXTRA DONE lessons=" + Object.keys(extra).length);
