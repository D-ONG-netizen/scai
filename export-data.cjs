const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = __dirname;
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of ["data-courses.js", "data-meta.js"]) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: f });
}

const out = path.join(dir, "build", "courses.json");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(sandbox.window.SCAI_COURSES, null, 2), "utf8");

const lessons = sandbox.window.SCAI_COURSES.reduce((n, c) => n + c.lessons.length, 0);
console.log("EXPORTED courses=" + sandbox.window.SCAI_COURSES.length + " lessons=" + lessons + " -> " + out);
