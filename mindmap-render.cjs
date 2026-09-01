const CONTENT = require("./pdf-content.js");

const COLORS = {
  teal: { c: "#2E6E5E", bg: "#E4F0EB", line: "#6FA392" },
  blue: { c: "#3B6F8F", bg: "#E3EDF3", line: "#7FA5BC" },
  gold: { c: "#9A7400", bg: "#F5EDD8", line: "#C4A85F" },
  rust: { c: "#B4522F", bg: "#F7E4DC", line: "#D09174" },
  plum: { c: "#6C5B84", bg: "#ECE7F1", line: "#A594BB" },
  slate: { c: "#4E6470", bg: "#E6ECEE", line: "#8FA5AD" }
};

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function branchHtml(n, label, color, items, icon) {
  const p = COLORS[color];
  return `
    <div class="mm-branch" style="--c:${p.c};--bg:${p.bg};--line:${p.line}">
      <div class="mm-head"><span class="mm-no">${n}</span><span class="mm-icon">${icon}</span><b>${esc(label)}</b></div>
      <div class="mm-items">${items.map(i => `<span class="mm-item">${esc(i)}</span>`).join("")}</div>
    </div>`;
}

function mindmapHTML(course, lesson) {
  const extra = CONTENT[lesson.id] || {};
  const cw = extra.courseware || {};
  const firstVideo = (lesson.videos || [])[0];
  const branches = [
    branchHtml("01", "学习目标", "teal", (extra.goals || []).slice(0, 3), "G"),
    branchHtml("02", "核心概念", "blue", (lesson.points || []).slice(0, 5), "C"),
    branchHtml("03", "公式与要点", "gold", (extra.concepts || []).filter(x => x.formula).slice(0, 4).map(x => `${x.term}：${x.formula}`), "F"),
    branchHtml("04", "易错点", "rust", (lesson.pitfalls || []).slice(0, 4), "W"),
    branchHtml("05", "高频考点", "plum", (lesson.exams || []).slice(0, 4), "E"),
    branchHtml("06", "资源", "slate", [
      cw.title ? `${cw.title}（${cw.source || "课件"}）` : "在线课件",
      firstVideo ? `${firstVideo.title}（${firstVideo.source || "视频"}）` : "配套视频",
      `教材：${lesson.chapters}`
    ].filter(Boolean), "R")
  ];
  return `
  <section class="mindmap">
    <div class="mm-root">
      <div class="mm-kicker">LESSON ${esc(lesson.id.toUpperCase())}</div>
      <div class="mm-title">${esc(lesson.title)}</div>
      <div class="mm-en">${esc(lesson.en || "")}</div>
      <div class="mm-meta">${esc(lesson.week || "")} · ${esc(course.textbook || "")}</div>
    </div>
    <div class="mm-spine"></div>
    <div class="mm-branches">${branches.join("")}</div>
  </section>`;
}

function mindmapCSS() {
  return `
  .mindmap{display:grid;grid-template-columns:52mm 4mm 1fr;gap:0;padding-top:4px}
  .mm-root{align-self:center;background:#1F2A26;color:#FBFBF7;border-radius:8px;padding:10px 9px;box-shadow:0 2px 5px rgba(31,42,38,.16)}
  .mm-kicker{font:700 6.5pt/1.2 Consolas,monospace;letter-spacing:.1em;color:#F0C987;margin-bottom:2px}
  .mm-title{font:800 13.5pt/1.25 "Microsoft YaHei UI","Microsoft YaHei",sans-serif}
  .mm-en{font-size:7.2pt;color:#C9D6D0;margin-top:2px}
  .mm-meta{font-size:6.6pt;color:#9FB3AA;margin-top:3px;line-height:1.5}
  .mm-spine{position:relative}
  .mm-spine::before{content:"";position:absolute;left:1.9mm;top:0;bottom:0;width:0.6mm;background:#1F2A26}
  .mm-branches{display:grid;gap:3mm;align-content:center;padding-left:2mm}
  .mm-branch{position:relative;background:var(--bg);border:0.5mm solid var(--line);border-radius:5px;padding:2.4mm 3mm 2.6mm;break-inside:avoid}
  .mm-branch::before{content:"";position:absolute;right:100%;top:5.8mm;width:3mm;height:0.55mm;background:var(--line)}
  .mm-head{display:flex;align-items:center;gap:1.5mm;margin-bottom:1.5mm}
  .mm-no{font:700 6.5pt/1 Consolas,monospace;color:#FBFBF7;background:var(--c);border-radius:2px;padding:1mm 1.3mm}
  .mm-icon{width:4mm;height:4mm;border-radius:50%;background:var(--c);color:#FBFBF7;font:700 6.3pt/4mm Consolas,monospace;text-align:center}
  .mm-head b{font-size:8.6pt;color:var(--c)}
  .mm-items{display:flex;flex-wrap:wrap;gap:1.2mm}
  .mm-item{font-size:7pt;line-height:1.45;background:#FBFBF7;color:#26332E;border:0.3mm solid var(--line);border-radius:3px;padding:1mm 1.8mm;max-width:100%}
  `;
}

module.exports = { mindmapHTML, mindmapCSS };
