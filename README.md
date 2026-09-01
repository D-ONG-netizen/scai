#  ME Study Hub

这个库的目的是让同学在全英语教学模式下进行课前的预习和课后的复习，能够高效抓住本课中的知识点，并进行易错点练习，更好的掌握知识，建立完整的学习基础，加快适应大学生活

机械大一全教材学习网站，双击 `index.html` 即可使用，无需安装或构建。

## 已整合教材

- Essential Calculus 2e（Stewart）+ 同济《高等数学（上册）》第八版
- Linear Algebra: A Modern Introduction 4e（Poole）
- Principles of Physics 12e（Walker）
- Chemistry: Atoms First 4e（Burdge）
- Engineering Mechanics Statics 9e + Dynamics 9e（Meriam），合并版作备用对照

## 功能

- 总览页：9 个课程模块、本周任务、Quiz 完成度、视频数量
- 16 周计划：周次切换、每日时间槽、真实课表 CSV/JSON 导入
- 教材地图：6 本教材的章节、学期归属与课程映射
- 教材对比：同济高数 vs Stewart vs Poole，含中英术语对照
- 课程页：知识点、易错点、高频考点、匹配视频、PDF 讲义、在线题库
- PDF 资料库：61 份每课 PDF，含随堂练习、答案解析与在线题库链接
- 全局搜索：`Ctrl+K` 或顶栏搜索按钮，可检索课程、知识点、视频、教材和每周计划
- 学习进度：每课可标记“已学 / 待复习 / 未开始”，首页显示进度条与今日复习队列
- 学习笔记：每课内嵌笔记框，自动保存在本机浏览器
- 数据备份：设置中可导出/导入学习数据，本地文件不包含 API Key
- 离线支持：通过本地服务访问时自动注册 PWA，核心页面与 PDF 讲义可离线打开
- 课件上传：支持 `.txt/.md/.pdf/.docx/.pptx`，解析后保存在浏览器本地
- AI 助手：默认 DeepSeek，可换 Base URL 与模型；未联网或请求失败时自动使用离线模式

## PDF 资料

每份 PDF 位于 `pdfs/<课程>/<课程ID>.pdf`，包含：

- 核心知识点、易错点、高频考点
- 随堂练习与参考答案、解析
- 建议练习任务与在线题库链接

网站导航中的“PDF 资料库”可一键打开全部讲义，课程页的每节课也提供直接打开入口。

## AI 配置

API Key 存放在 `config.local.js`，该文件已被 `.gitignore` 忽略，不会进入版本库。设置面板也可修改 Base URL、模型和 Key，修改后保存在浏览器 `localStorage`。

## 重新生成 PDF 讲义

1. `node export-data.cjs`
2. `node build-lesson-extra.cjs`
3. `node generate-lesson-pdfs-html.cjs`

输出到 `pdfs/`，并自动更新 `pdfs/index.json`。新版讲义包含本课思维导图、学习目标、课本概念精要、课本原文要点、典型例题、本课在线课件、视频、随堂练习与学习自查清单。每课思维导图总览位于 `mindmaps/`，课程页可直接打开对应页。

## 本地数据

浏览器本地存储键：`scai_llm_config`、`scai_uploaded_courseware`、`scai_quiz_scores`、`scai_progress`、`scai_notes`、`scai_plan_week`、`scai_timetable`。设置面板中的“清除本地数据”可一键清空。

## 课表导入格式

CSV 示例：

```csv
星期,节次,开始时间,结束时间,课程,教室
周一,1,08:30,10:05,高等数学,A101
```

JSON 示例：

```json
[{"day":"周一","period":"1","start":"08:30","end":"10:05","course":"高等数学","room":"A101"}]
```
