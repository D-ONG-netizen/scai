module.exports = {
  "cal-1": {
    courseware: {
      title: "OpenStax Calculus Volume 1 · 极限章节课件",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-1/pages/2-1-a-preview-of-calculus",
      note: "函数、极限与连续的免费在线教材章节"
    },
    goals: [
      "能用定义域、值域、复合函数和反函数完整描述一个函数",
      "能用左右极限理解极限存在条件，并熟练运用四则运算法则",
      "会按定义判断连续性与间断点类型"
    ],
    concepts: [
      { term: "函数", def: "函数是从定义域到值域的对应规则：每个输入 x 恰好对应一个输出 f(x)。复合函数 (f∘g)(x) 表示先 g 后 f，反函数则把对应关系逆过来。", formula: "y = f(x),  (f∘g)(x) = f(g(x))" },
      { term: "极限", def: "当 x 无限接近 a（但不等于 a）时，f(x) 无限接近 L，就称 f(x) 在 x→a 时的极限为 L。极限研究的是逼近过程，不要求 f(a) 存在。", formula: "lim(x→a) f(x) = L" },
      { term: "连续", def: "函数在 a 处连续需要同时满足三个条件：f(a) 有定义、lim f(x) 存在、两者相等。可去、跳跃与无穷间断是三类典型间断。", formula: "lim(x→a) f(x) = f(a)" },
      { term: "两个重要极限", def: "sin x / x 在 x→0 时趋于 1，(1 + 1/x)^x 在 x→∞ 时趋于 e。它们常用于把复杂极限拆成标准形式。", formula: "lim(x→0) sin x/x = 1;  lim(x→∞)(1+1/x)^x = e" }
    ],
    quote: { text: "函数、极限、连续是微积分的第一组语言：先弄清定义域边界与极限的趋向性，才能理解导数与积分。", source: "按 Stewart《Essential Calculus 2e》Ch 1 与同济《高等数学》上册第1章原意整理" },
    example: {
      q: "求 lim(x→0) (sin 3x)/(2x)。",
      steps: [
        "把原式写成 (3/2) · (sin 3x)/(3x)；",
        "令 u = 3x，当 x→0 时 u→0；",
        "由重要极限 lim(u→0) sin u/u = 1 得结果。"
      ],
      answer: "答案：3/2。核心是把 sin 3x 的 3x 看作一个整体，再套用 sin u/u → 1。"
    },
    checklist: [
      "能画出函数草图并写出定义域、值域",
      "会分别求分段点左右极限",
      "能判断间断点类型并说明理由",
      "能默写两个重要极限及其适用条件"
    ]
  },
  "cal-2": {
    courseware: {
      title: "OpenStax Calculus Volume 1 · 导数定义",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative",
      note: "导数与微分概念的在线教材章节"
    },
    goals: [
      "能写出导数的极限定义并解释其几何意义",
      "能熟练使用四则、链式和高阶求导法则",
      "能用微分进行简单线性近似"
    ],
    concepts: [
      { term: "导数定义", def: "函数在 a 点的导数等于割线斜率的极限值，表示曲线在该点的切线斜率与瞬时变化率。", formula: "f'(a) = lim(h→0) [f(a+h)-f(a)]/h" },
      { term: "求导法则", def: "和的导数等于导数的和；乘积法则把两个因子的导数交错组合；商法则类似但分母要平方。", formula: "(fg)' = f'g + fg';  (f/g)' = (f'g - fg')/g²" },
      { term: "链式法则", def: "复合函数求导时，先对外层函数求导，再乘以内层函数的导数，逐层传递。", formula: "dy/dx = dy/du · du/dx" },
      { term: "微分与高阶导数", def: "dy = f'(x)dx 描述自变量的微小变化 dx 引起的因变量近似变化；f'' 反映变化率本身的变化。", formula: "dy = f'(x) dx;  f''(x) = (f')'(x)" }
    ],
    quote: { text: "导数的本质是瞬时变化率：它把‘平均变化’压缩到某个瞬间，正是这一极限思想开启了整个微积分。", source: "按 Stewart《Essential Calculus 2e》Ch 2 与同济《高等数学》上册第2章原意整理" },
    example: {
      q: "设 f(x) = x² sin x，求 f'(x)。",
      steps: [
        "识别为两个函数 x² 与 sin x 的乘积；",
        "套用乘积法则 f'g + fg'；",
        "代入导数 2x 与 cos x。"
      ],
      answer: "答案：f'(x) = 2x sin x + x² cos x。"
    },
    checklist: [
      "能用极限定义求简单函数在某点导数",
      "能背出常见函数导数表",
      "能处理三层以上复合函数的链式求导",
      "能说明可导与连续的关系"
    ]
  },
  "cal-3": {
    courseware: {
      title: "OpenStax Calculus Volume 1 · 导数与函数形状",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph",
      note: "单调性、极值与最值的在线课件"
    },
    goals: [
      "能用中值定理解释导数与平均变化率的关系",
      "能通过一阶、二阶导数判断单调性与凹凸性",
      "会求闭区间上的最值和极值"
    ],
    concepts: [
      { term: "中值定理", def: "连续且可导的函数在区间内至少存在一点，其切线斜率等于两端点连线的斜率。", formula: "f'(c) = [f(b)-f(a)]/(b-a)" },
      { term: "单调性", def: "f' > 0 时函数上升，f' < 0 时函数下降；导数符号变化处往往对应极值。", formula: "f'(x) > 0 ⇒ f 递增;  f'(x) < 0 ⇒ f 递减" },
      { term: "极值与最值", def: "极值是局部概念，发生在临界点或不可导点；闭区间最值还需比较端点。", formula: "临界点: f'(x) = 0 或 f' 不存在" },
      { term: "洛必达法则", def: "对 0/0 或 ∞/∞ 型极限，可把分子分母分别求导后取极限，条件是求导后极限存在。", formula: "lim f/g = lim f'/g'" }
    ],
    quote: { text: "导数不仅给出变化率，还给出函数曲线的方向：正导数意味着上升，二阶导数则决定弯曲方向。", source: "按 Stewart《Essential Calculus 2e》Ch 3 与同济《高等数学》上册第3章原意整理" },
    example: {
      q: "求 f(x) = x³ - 3x 的极值。",
      steps: [
        "求导 f'(x) = 3x² - 3 = 3(x-1)(x+1)；",
        "临界点 x = ±1；",
        "由 f''(x) = 6x 判定：x=1 时凹向上为极小，x=-1 时为极大。"
      ],
      answer: "答案：x = -1 处极大值 2，x = 1 处极小值 -2。"
    },
    checklist: [
      "会画单调性与凹凸性表格",
      "能区分极大值、极小值与全局最值",
      "能用二阶导数检验临界点",
      "会用洛必达法则处理 0/0 型极限"
    ]
  },
  "cal-4": {
    courseware: {
      title: "OpenStax Calculus Volume 1 · 定积分",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-1/pages/5-2-the-definite-integral",
      note: "黎曼和、定积分与微积分基本定理在线课件"
    },
    goals: [
      "能用黎曼和极限理解定积分定义",
      "能陈述并应用微积分基本定理",
      "会计算简单定积分并解释其几何意义"
    ],
    concepts: [
      { term: "定积分", def: "定积分把区间无限细分后求和取极限，几何上对应曲线与 x 轴围成的有向面积。", formula: "∫(a→b) f(x) dx = lim Σ f(xᵢ*)Δx" },
      { term: "微积分基本定理", def: "若 F 是 f 的原函数，则定积分等于原函数在端点的差。它把求面积与求导数联系起来。", formula: "∫(a→b) f(x) dx = F(b) - F(a)" },
      { term: "不定积分", def: "不定积分是所有原函数的集合，结果是函数族而不是数值，需要加常数 C。", formula: "∫ f(x) dx = F(x) + C" },
      { term: "积分性质", def: "定积分具有线性性、可加性和保号性，并允许交换上下限改变符号。", formula: "∫(a→b)(f±g) = ∫f ± ∫g;  ∫(a→b) = -∫(b→a)" }
    ],
    quote: { text: "定积分是无穷多个微小矩形之和的极限；微积分基本定理则告诉我们，求面积可以反过来用求导的逆运算完成。", source: "按 Stewart《Essential Calculus 2e》Ch 4 与同济《高等数学》上册第4-5章原意整理" },
    example: {
      q: "计算 ∫(0→1) x² dx。",
      steps: [
        "找到原函数 F(x) = x³/3；",
        "代入上端 x=1 得 1/3；",
        "减去下端 x=0 的值 0。"
      ],
      answer: "答案：1/3。"
    },
    checklist: [
      "会用等分区间估计定积分",
      "能写出微积分基本定理两个方向",
      "能正确使用牛顿-莱布尼茨公式",
      "能利用奇偶性与对称性简化积分"
    ]
  },
  "cal-5": {
    courseware: {
      title: "OpenStax Calculus Volume 1 · 指数与对数函数",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-1/pages/1-5-exponential-and-logarithmic-functions",
      note: "反函数、指数对数与洛必达法则在线课件"
    },
    goals: [
      "能写出反函数的定义并画出对称图像",
      "掌握 e^x 与 ln x 的求导公式",
      "会结合洛必达法则处理指对数极限"
    ],
    concepts: [
      { term: "反函数", def: "反函数交换输入与输出：f 的定义域变为 f⁻¹ 的值域，两者图像关于 y=x 对称。", formula: "f(f⁻¹(x)) = x" },
      { term: "指数与对数导数", def: "自然指数函数的导数仍是它自己，自然对数函数的导数等于 1/x，这是整个微积分最常用的两个公式。", formula: "d(e^x)/dx = e^x;  d(ln x)/dx = 1/x" },
      { term: "指对数恒等式", def: "对数把乘法变成加法，指数把加法变回乘法；换底公式用于统一底数。", formula: "ln(ab) = ln a + ln b;  a^x = e^(x ln a)" },
      { term: "洛必达法则", def: "当极限出现 0·∞、∞-∞、1^∞ 等不定式时，先变形为 0/0 或 ∞/∞，再求导取极限。", formula: "0·∞ → 0/0 或 ∞/∞" }
    ],
    quote: { text: "指数与对数是互为反函数的两面：一个描述‘倍增’，一个描述‘增长到某个倍数所需的时间’。", source: "按 Stewart《Essential Calculus 2e》Ch 5 与同济《高等数学》上册第3章原意整理" },
    example: {
      q: "求 d/dx ln(x² + 1)。",
      steps: [
        "把 x² + 1 看作内层函数 u；",
        "外层 ln u 的导数是 1/u；",
        "乘以内层导数 2x。"
      ],
      answer: "答案：2x/(x² + 1)。"
    },
    checklist: [
      "会求反函数并检查定义域值域互换",
      "能默写指数对数求导公式",
      "会用换底公式和指对数恒等式",
      "能识别并变形不定式再使用洛必达法则"
    ]
  },
  "cal-6": {
    courseware: {
      title: "OpenStax Calculus Volume 2 · 分部积分",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts",
      note: "换元、分部、三角与部分分式积分技巧课件"
    },
    goals: [
      "能识别何时使用换元积分",
      "会正确选择分部积分中的 u 与 dv",
      "能处理三角积分、有理函数与反常积分"
    ],
    concepts: [
      { term: "换元积分", def: "当被积函数是复合函数结构时，令内层为 u，把 dx 换成 du 后转化为简单积分。", formula: "∫ f(g(x))g'(x) dx = ∫ f(u) du" },
      { term: "分部积分", def: "适用于两个不同类函数相乘，选择导数变简单的一项作为 u，另一项作为 dv。", formula: "∫ u dv = uv - ∫ v du" },
      { term: "部分分式", def: "把有理分式拆成若干简单分式之和，再逐项积分；分母不可约时用配方法。", formula: "1/((x-a)(x-b)) = A/(x-a) + B/(x-b)" },
      { term: "反常积分", def: "积分区间无限或函数在区间内无界时，先写成极限再积分，判断极限是否有限。", formula: "∫(a→∞) f(x) dx = lim(t→∞) ∫(a→t) f(x) dx" }
    ],
    quote: { text: "积分技巧的核心不是死记公式，而是识别结构：换元看复合，分部看乘积，部分分式看有理式。", source: "按 Stewart《Essential Calculus 2e》Ch 6 与同济《高等数学》上册第4-5章原意整理" },
    example: {
      q: "求 ∫ x e^x dx。",
      steps: [
        "令 u = x，dv = e^x dx；",
        "则 du = dx，v = e^x；",
        "套用分部积分公式。"
      ],
      answer: "答案：(x - 1)e^x + C。"
    },
    checklist: [
      "能判断换元后上下限是否改变",
      "能按 LIATE 顺序选择 u 与 dv",
      "会拆分分母为一次因式乘积的有理函数",
      "能判断反常积分是否收敛"
    ]
  },
  "cal-7": {
    courseware: {
      title: "OpenStax Calculus Volume 2 · 切片法求体积",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-2/pages/2-2-determining-volumes-by-slicing",
      note: "面积、体积、弧长与可分离微分方程课件"
    },
    goals: [
      "能用切片法、圆盘法和壳层法求旋转体体积",
      "能写出弧长与旋转曲面面积公式",
      "会解可分离变量微分方程与初值问题"
    ],
    concepts: [
      { term: "面积与体积", def: "把区域切成薄片，每片面积乘厚度再求和取极限；圆盘法旋转轴在边界外，壳层法旋转轴在区域内部。", formula: "V = π∫(a→b)[R(x)]² dx（圆盘法）" },
      { term: "弧长", def: "曲线长度由无穷多小线段的极限给出，公式把 dx 与 dy 合成 dl。", formula: "L = ∫(a→b) √(1 + [f'(x)]²) dx" },
      { term: "可分离方程", def: "若导数可写成 x 的函数与 y 的函数之积，就把变量分到两边再分别积分。", formula: "dy/dx = g(x)h(y) ⇒ ∫ dy/h(y) = ∫ g(x) dx" },
      { term: "初值问题", def: "通解含任意常数，利用给定点求出常数后得到满足条件的特解。", formula: "y(x₀) = y₀ 确定 C" }
    ],
    quote: { text: "积分应用把几何量统一为‘切薄片、求和、取极限’的同一套程序，是微积分建模能力的直接体现。", source: "按 Stewart《Essential Calculus 2e》Ch 7 与同济《高等数学》上册第6-7章原意整理" },
    example: {
      q: "求解可分离方程 dy/dx = x/y。",
      steps: [
        "分离变量得 y dy = x dx；",
        "两边积分：y²/2 = x²/2 + C；",
        "整理为隐式通解。"
      ],
      answer: "答案：x² - y² = C'（或 y² = x² + 2C）。"
    },
    checklist: [
      "能画图确定积分变量与上下限",
      "能区分圆盘法与壳层法的适用场景",
      "会验证可分离方程并正确积分",
      "能用初值条件确定通解常数"
    ]
  },
  "cal-8": {
    courseware: {
      title: "OpenStax Calculus Volume 2 · 数列与级数",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences",
      note: "级数判敛、幂级数与多元微积分先修课件"
    },
    goals: [
      "能判断数列与级数是否收敛",
      "掌握 p-级数、比较、比值与根值判敛法",
      "理解幂级数、泰勒级数与多元函数先修概念"
    ],
    concepts: [
      { term: "数列与级数", def: "级数是数列部分和的极限；部分和趋于有限数则级数收敛，否则发散。", formula: "S = lim(n→∞) Σ(k=1→n) aₖ" },
      { term: "判敛法", def: "p-级数、比较判别、比值判别和根值判别分别适合不同结构；先看通项是否趋于 0 是必要条件。", formula: "Σ1/nᵖ 收敛 ⇔ p > 1;  lim aₙ₊₁/aₙ < 1 ⇒ 收敛" },
      { term: "幂级数与泰勒级数", def: "幂级数把函数展开成 x 的幂次和；泰勒公式用导数构造多项式近似。", formula: "f(x) = Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ" },
      { term: "多元函数先修", def: "多元函数有多个自变量，偏导数固定其余变量求导，为下学期多元微积分铺路。", formula: "fₓ = ∂f/∂x;  fᵧ = ∂f/∂y" }
    ],
    quote: { text: "级数研究‘无限项之和’是否具有有限意义，幂级数则把函数转化为可逐项运算的多项式世界。", source: "按 Stewart《Essential Calculus 2e》Ch 8-13 原意整理" },
    example: {
      q: "判断等比级数 Σ(n=0→∞) (1/2)ⁿ 是否收敛，并求其和。",
      steps: [
        "公比 r = 1/2，满足 |r| < 1；",
        "等比级数公式 S = a/(1-r)；",
        "代入 a=1 得和。"
      ],
      answer: "答案：收敛，和为 2。"
    },
    checklist: [
      "能先检查通项是否趋于 0",
      "能选出合适的判敛法并说明理由",
      "会求等比级数与简单幂级数的收敛域",
      "能写出常用函数在 x=0 处的泰勒展开"
    ]
  }
};
