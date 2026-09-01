const urls = [
  "https://www.icourse163.org/course/TONGJI-53004",
  "https://www.icourse163.org/course/TONGJI-481001",
  "https://www.icourse163.org/course/TONGJI-1003168003",
  "https://www.icourse163.org/course/BIT-268001",
  "https://www.icourse163.org/course/ZJU-199001",
  "https://www.icourse163.org/course/NEU-1002660001",
  "https://www.icourse163.org/course/ZJU-232005",
  "https://www.icourse163.org/course/HUST-1001907004",
  "https://www.icourse163.org/course/NJUE-1469504163",
  "https://www.icourse163.org/course/XJTU-1002331011",
  "https://www.icourse163.org/course/TONGJI-44005",
  "https://www.icourse163.org/course/detail.htm?cid=1002416004",
  "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
  "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/pages/assignments/",
  "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/syllabus/",
  "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/",
  "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/problem-sets/",
  "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D",
  "https://www.youtube.com/playlist?list=PLRqDfxcafc23LXGoItpkYMKtUdHaQwSDC",
  "https://www.youtube.com/playlist?list=PLRqDfxcafc206fNQPkcBUFEMYje-UjtqA",
  "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
  "https://www.bilibili.com/video/BV1d7wAzsE8V/",
  "https://www.bilibili.com/video/BV1Zm4y1C76M/",
  "https://www.bilibili.com/video/BV1hMdhBCEm2/",
  "https://github.com/Trinkle23897/THU-CST-Cracker",
  "https://pytorch.org/tutorials/"
];

async function check(u) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), 12000);
  try {
    const r = await fetch(u, {
      redirect: "follow",
      signal: c.signal,
      headers: { "user-agent": "Mozilla/5.0" }
    });
    return { u, status: r.status };
  } catch (e) {
    return { u, status: "ERR", err: e.message };
  } finally {
    clearTimeout(t);
  }
}

(async () => {
  const results = [];
  for (let i = 0; i < urls.length; i += 5) {
    results.push(...await Promise.all(urls.slice(i, i + 5).map(check)));
  }
  results.forEach(r => console.log(r.status + "\t" + r.u + (r.err ? "  (" + r.err + ")" : "")));
  const failures = results.filter(r => r.status === "ERR" || r.status >= 400);
  if (failures.length) {
    console.log("\nFAILURES: " + failures.length);
    process.exitCode = 1;
  } else {
    console.log("\nALL CORE LINKS REACHABLE");
  }
})();
