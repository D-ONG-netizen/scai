const fs = require("fs");
const path = require("path");

const ROOT = "C:/Users/DYH/Documents/ChatGPT/课本教程";
const SRC = path.join(ROOT, "freshman-hub-online");
const DST = path.join(ROOT, "freshman-hub-china");

const COPY_FILES = [
  "index.html",
  "data-courses.js",
  "data-meta.js",
  "config.local.js",
  "icon.svg",
  "sw.js",
  "manifest.json"
];

const URL_MAP = {
  "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr": "https://www.bilibili.com/video/BV1qW411N7FU/",
  "https://www.youtube.com/watch?v=rfG8ce4nNh0": "https://www.bilibili.com/video/BV1qW411N7FU/",
  "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/video_galleries/video-lectures/": "https://www.bilibili.com/video/BV1UW411k7Jv/",
  "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/pages/assignments/": "https://www.bilibili.com/video/BV1UW411k7Jv/",
  "https://tutorial.math.lamar.edu/problems/calci/CalcI.aspx": "https://www.bilibili.com/video/BV1UW411k7Jv/",
  "https://openstax.org/details/books/calculus-volume-1": "https://www.icourse163.org/course/TONGJI-53004",
  "https://www.khanacademy.org/math/ap-calculus-ab": "https://www.bilibili.com/video/BV1qW411N7FU/",
  "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab": "https://www.bilibili.com/video/BV1ys411472E/",
  "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D": "https://www.bilibili.com/video/av113095196280717/",
  "https://www.youtube.com/watch?v=PFDu9oVAE-g": "https://www.bilibili.com/video/BV1ys411472E/",
  "https://www.youtube.com/watch?v=gXbThCXjZFM": "https://www.bilibili.com/video/BV1ys411472E/",
  "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/video_galleries/video-lectures/": "https://www.bilibili.com/video/av113095196280717/",
  "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/syllabus/": "https://www.bilibili.com/video/av113095196280717/",
  "https://web.mit.edu/18.06/www/Spring10/psets.html": "https://www.bilibili.com/video/av113095196280717/",
  "https://www.khanacademy.org/math/linear-algebra": "https://www.bilibili.com/video/BV1ys411472E/",
  "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/assignments/": "https://www.bilibili.com/video/av113095196280717/",
  "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/": "https://www.bilibili.com/video/BV1G4wqz7EpN/",
  "https://www.youtube.com/playlist?list=PLyQSN7X0ro203puVhQsmCj9qhlFQ-As8e": "https://www.bilibili.com/video/BV1G4wqz7EpN/",
  "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/syllabus/": "https://www.bilibili.com/video/BV1G4wqz7EpN/",
  "https://www.khanacademy.org/science/ap-physics-1": "https://www.bilibili.com/video/BV1G4wqz7EpN/",
  "https://openstax.org/details/books/university-physics-volume-1": "https://www.icourse163.org/course/detail.htm?cid=1002416004",
  "http://hyperphysics.phy-astr.gsu.edu/hbase/index.html": "https://www.bilibili.com/video/BV1G4wqz7EpN/",
  "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/": "https://www.bilibili.com/video/BV1CxaUzrEDY/",
  "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/": "https://www.bilibili.com/video/BV1CxaUzrEDY/",
  "https://openstax.org/details/books/chemistry-atoms-first-2e": "https://www.icourse163.org/course/XJTU-1002331011",
  "https://chem.libretexts.org/Bookshelves/General_Chemistry": "https://www.bilibili.com/video/BV1go48ehEE6/",
  "https://www.khanacademy.org/science/chemistry": "https://www.bilibili.com/video/BV1go48ehEE6/",
  "https://www.youtube.com/playlist?list=PLRqDfxcafc23LXGoItpkYMKtUdHaQwSDC": "https://www.bilibili.com/video/BV1F3rhYwEgo/",
  "https://www.youtube.com/playlist?list=PLRqDfxcafc206fNQPkcBUFEMYje-UjtqA": "https://www.bilibili.com/video/BV1F3rhYwEgo/",
  "https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/syllabus/": "https://www.bilibili.com/video/BV1F3rhYwEgo/",
  "https://engineeringstatics.org/": "https://www.bilibili.com/video/BV1F3rhYwEgo/",
  "https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/pages/syllabus/": "https://www.bilibili.com/video/BV1F3rhYwEgo/",
  "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests": "https://www.chinaielts.org/",
  "https://ieltsliz.com/": "https://www.chinaielts.org/",
  "https://ielts-up.com/": "https://www.chinaielts.org/",
  "https://ielts.org/": "https://www.chinaielts.org/",
  "https://www.coursera.org/learn/machine-learning": "https://www.icourse163.org/course/NJUE-1469504163",
  "https://www.youtube.com/watch?v=aircAruvnKk": "https://www.bilibili.com/video/BV1sHU9BmEne/",
  "https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOBuUt6m2Zpq": "https://www.bilibili.com/video/BV1sHU9BmEne/",
  "https://www.kaggle.com/learn": "https://tianchi.aliyun.com/",
  "https://www.w3resource.com/python-exercises/": "https://www.bilibili.com/video/BV1sHU9BmEne/",
  "https://leetcode.com/problemset/": "https://leetcode.cn/problemset/",
  "https://pytorch.org/tutorials/": "https://www.bilibili.com/video/BV1sHU9BmEne/",
  "https://ocw.mit.edu/courses/8-022-physics-ii-electricity-and-magnetism-fall-2004/pages/assignments/": "https://www.bilibili.com/video/BV1G4wqz7EpN/",
  "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/problem-sets/": "https://www.bilibili.com/video/BV1H2pkzhE5d/",
  "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/syllabus/": "https://www.bilibili.com/video/BV1H2pkzhE5d/",
  "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/syllabus/": "https://www.bilibili.com/video/BV1CAxaeHEeH/",
  "https://openstax.org/details/books/calculus-volume-2": "https://www.bilibili.com/video/BV1CAxaeHEeH/",
  "https://www.khanacademy.org/math/statistics-probability": "https://www.bilibili.com/video/BV1H2pkzhE5d/",
  "https://github.com/Trinkle23897/THU-CST-Cracker": "https://www.icourse163.org/course/ZJU-232005"
};

const CDN_MAP = {
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js": "https://cdn.bootcdn.net/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js": "https://cdn.bootcdn.net/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  "https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js": "https://cdn.bootcdn.net/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js",
  "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js": "https://cdn.bootcdn.net/ajax/libs/jszip/3.10.1/jszip.min.js"
};

const TITLE_MAP = {
  "Paul's Online Notes · Calculus I Practice Problems": "B站 宋浩高等数学视频课",
  "OpenStax Calculus Volume 1": "同济大学高等数学 MOOC",
  "Khan Academy AP Calculus AB": "B站 3Blue1Brown 微积分的本质",
  "MIT 18.06SC Linear Algebra": "B站 宋浩线性代数 2.0",
  "MIT 18.06 Spring 2010 Problem Sets": "B站 宋浩线性代数 2.0",
  "Khan Academy Linear Algebra": "B站 3Blue1Brown 线性代数的本质",
  "OpenStax University Physics Volume 1": "哈尔滨工业大学大学物理 MOOC",
  "Khan Academy AP Physics 1": "B站 大学物理速成",
  "HyperPhysics": "B站 大学物理速成",
  "OpenStax Chemistry: Atoms First 2e": "西安交通大学大学化学 MOOC",
  "LibreTexts General Chemistry": "B站 大学化学速成课",
  "Khan Academy Chemistry": "B站 大学化学速成课",
  "MIT 2.001 Mechanics and Materials I": "B站 工程力学速成课",
  "MIT 2.003 Engineering Dynamics": "B站 工程力学速成课",
  "Engineering Statics: Open and Interactive": "B站 工程力学速成课",
  "Jeff Hanson 静力学播放列表": "B站 工程力学速成课",
  "Jeff Hanson 动力学播放列表": "B站 工程力学速成课",
  "British Council IELTS Practice Tests": "雅思中国官网",
  "IELTS Liz": "雅思中国官网",
  "IELTS-Up": "雅思中国官网",
  "PyTorch 官方教程": "B站 Python + AI 视频课",
  "Kaggle Learn": "阿里天池",
  "LeetCode Problem Set": "LeetCode 中国题库",
  "MIT 18.05 Problem Sets": "B站 浙大概率论视频课",
  "清华大学课程资料仓库": "浙江大学概率论 MOOC",
  "CS50 计算机科学导论": "B站 Python + AI 视频课",
  "w3resource Python Exercises": "B站 Python 视频课",
  "MIT 18.06 线性代数": "宋浩线性代数 2.0",
  "MIT 18.06 Linear Algebra": "宋浩线性代数 2.0",
  "MIT 18.06 Problem Sets": "宋浩线性代数 2.0 配套练习",
  "Jeff Hanson 静力学课程": "B站 工程力学静力学课程",
  "Jeff Hanson 动力学课程": "B站 工程力学动力学课程",
  "British Council IELTS Practice": "雅思中国官网模考",
  "OpenStax Calculus Volume 2": "B站 宋浩高等数学 2.0",
  "Khan Academy Statistics and Probability": "B站 浙大概率论",
  "MIT 18.01 视频课堂": "宋浩高等数学视频课",
  "MIT 18.01 习题与考试": "宋浩高等数学练习课",
  "MIT 8.01 Classical Mechanics": "B站 大学物理速成课",
  "MIT 8.01 Problem Sets": "B站 大学物理速成课",
  "MIT 5.111 Principles of Chemical Science": "B站 北京大学普通化学",
  "MIT 5.111 Resource Index": "B站 大学化学速成课",
  "MIT 18.02 Multivariable Calculus": "B站 宋浩高等数学 2.0",
  "MIT 18.05 Probability and Statistics": "B站 浙大概率论",
  "MIT 18.02SC Multivariable Calculus": "B站 宋浩高等数学 2.0",
  "MIT 8.02 Electricity and Magnetism": "B站 大学物理速成课"
};

if (fs.existsSync(DST)) {
  if (path.resolve(DST) !== path.resolve(ROOT, "freshman-hub-china")) {
    throw new Error("unsafe target: " + DST);
  }
  fs.rmSync(DST, { recursive: true, force: true });
}
fs.mkdirSync(DST, { recursive: true });
for (const file of COPY_FILES) {
  fs.copyFileSync(path.join(SRC, file), path.join(DST, file));
}
fs.cpSync(path.join(SRC, "pdfs"), path.join(DST, "pdfs"), { recursive: true });

const coursesPath = path.join(DST, "data-courses.js");
let courses = fs.readFileSync(coursesPath, "utf8");
for (const [from, to] of Object.entries(URL_MAP)) {
  courses = courses.split(from).join(to);
}
for (const [from, to] of Object.entries(TITLE_MAP)) {
  courses = courses.split(from).join(to);
}
courses = courses
  .split('source: "YouTube/OCW"').join('source: "Bilibili"')
  .split('source: "YouTube"').join('source: "Bilibili"')
  .split('source: "Khan Academy"').join('source: "Bilibili"')
  .split('source: "OpenStax"').join('source: "Bilibili"')
  .split('source: "British Council"').join('source: "雅思中国官网"')
  .split('source: "Kaggle"').join('source: "阿里天池"')
  .split('source: "OCW"').join('source: "Bilibili"')
  .split('source: "MIT OCW"').join('source: "Bilibili"');
courses = courses
  .replace(/\/pages\/syllabus\//g, "/")
  .replace(/\/pages\/resource-index\//g, "/")
  .replace(/\/pages\/assignments\//g, "/")
  .replace(/\/video_galleries\/video-lectures\//g, "/")
  .replace(/\/pages\/problem-sets\//g, "/");
courses = courses
  .split("英文原版经典课堂").join("中文全程讲解")
  .split("英文原版经典训练").join("中文全程训练")
  .split("英文原版经典力学").join("大学物理速成全程课")
  .split("英文原版化学原理").join("普通化学全程课")
  .split("多元微积分英文原版").join("高等数学下册全程课")
  .split("概率统计 Problem Sets").join("概率统计配套练习")
  .split("Gilbert Strang 经典课程").join("宋浩线性代数全程课")
  .split("Gilbert Strang 配套习题").join("宋浩线性代数配套练习")
  .split("经典力学题集入口").join("大学物理速成课程入口")
  .split("化学原理全套资料").join("大学化学速成课程入口");
const forbidden = /youtube\.com|ocw\.mit\.edu|openstax\.org|khanacademy\.org|tutorial\.math\.lamar\.edu|engineeringstatics\.org|hyperphysics|kaggle\.com|leetcode\.com|pytorch\.org|ieltsliz|ielts-up|takeielts|britishcouncil|github\.com|web\.mit\.edu|coursera\.org|w3resource\.com/;
if (forbidden.test(courses)) {
  throw new Error("foreign URL remains in china data-courses");
}
fs.writeFileSync(coursesPath, courses, "utf8");

const indexPath = path.join(DST, "index.html");
let index = fs.readFileSync(indexPath, "utf8");
for (const [from, to] of Object.entries(CDN_MAP)) {
  index = index.split(from).join(to);
}
fs.writeFileSync(indexPath, index, "utf8");

fs.writeFileSync(
  path.join(DST, "README-中国使用说明.md"),
  `# SCAI ME1 国内分享版

这个版本是专门给中国大陆朋友使用的分享版：

- 当前在线入口：https://brewpage.app/scai-china/XMuwlRle9D/index.html
- 所有视频和练习链接已替换为 B站、中国大学MOOC、国家高等教育智慧教育平台、雅思中国官网、LeetCode 中国、阿里天池等国内可访问平台
- 不包含 AI 功能、DeepSeek 地址或任何 API Key
- 61 份 PDF 讲义全部放在站内，可直接打开、下载和打印
- 支持离线 PWA，打开过一次后断网也能看

## 使用说明

1. 直接打开入口地址
2. 首页可查看 16 周计划、学习进度和今日复习
3. 进入某门课程后，先看“课程配套视频库”建立直觉，再打开每课的 PDF 讲义
4. 每份 PDF 都包含：概念拆解、核心知识点、易错点、高频考点、本课视频、随堂练习、答案解析、在线题库
5. 设置中可导出/导入学习数据，进度和笔记只保存在浏览器本地

## 本地备份

如需重新部署，把本目录上传到 Gitee Pages、腾讯云 COS 或阿里云 OSS 即可。
`
);

console.log("CHINA BUILD READY -> " + DST);
