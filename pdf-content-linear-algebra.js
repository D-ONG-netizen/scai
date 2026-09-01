module.exports = {
  "la-1": {
    courseware: {
      title: "MIT 18.06 · 线性代数课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      note: "Strang 课程主页，Lec 1 对应线性方程组的几何"
    },
    goals: [
      "能用分量与几何两种方式理解向量",
      "掌握向量的加、减、数乘与线性组合",
      "会用点积与叉积解决正交与面积问题"
    ],
    concepts: [
      { term: "向量", def: "向量同时具有大小和方向，可用坐标表示；零向量起点终点重合，方向未定义。", formula: "v = (v₁, v₂, ..., vₙ)" },
      { term: "线性组合", def: "把若干个向量分别缩放后相加，得到它们的线性组合；所有线性组合的集合称为张成空间 span。", formula: "c₁v₁ + c₂v₂ + ... + cₖvₖ" },
      { term: "点积", def: "点积把两个向量映射为一个数，等于对应分量乘积之和；点积为 0 说明两向量正交。", formula: "u·v = |u||v|cosθ = Σuᵢvᵢ" },
      { term: "叉积", def: "叉积结果仍是一个向量，方向垂直于原两向量，长度等于平行四边形面积。", formula: "|u×v| = |u||v|sinθ" }
    ],
    quote: { text: "线性代数的第一个画面是线性方程组：每一行是一条直线或一个平面，解就是它们共同经过的点。", source: "按 Poole《Linear Algebra: A Modern Introduction 4e》Ch 1 与 MIT 18.06 讲义原意整理" },
    example: {
      q: "已知 u = (1, 2)，v = (3, 1)，求 u·v 与 |u|。",
      steps: [
        "点积按对应分量相乘后相加：1·3 + 2·1；",
        "模长等于各分量平方和的平方根；",
        "检查结果。"
      ],
      answer: "答案：u·v = 5，|u| = √5。"
    },
    checklist: [
      "能画图表示向量加法与数乘",
      "能判断向量组是否线性相关",
      "会快速计算二维点积与叉积",
      "能解释点积为 0 的几何含义"
    ]
  },
  "la-2": {
    courseware: {
      title: "MIT 18.06 · 线性代数课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      note: "Lec 2 对应消元与增广矩阵"
    },
    goals: [
      "能把线性方程组写成增广矩阵",
      "会用初等行变换完成高斯消元",
      "能通过秩判断解的唯一性"
    ],
    concepts: [
      { term: "线性方程组", def: "所有未知数都只出现一次方的方程组；每个方程对应一个几何约束。", formula: "a₁x₁ + a₂x₂ + ... = b" },
      { term: "初等行变换", def: "交换两行、某行乘非零常数、某行加另一行的倍数，三种变换不改变解集。", formula: "Rᵢ ↔ Rⱼ;  Rᵢ ← cRᵢ;  Rᵢ ← Rᵢ + cRⱼ" },
      { term: "高斯消元", def: "用初等行变换把增广矩阵化为行阶梯形，再自下而上回代求出未知数。", formula: "增广矩阵 [A | b] → 行阶梯形" },
      { term: "秩与解的结构", def: "系数矩阵的秩 r 小于未知数个数时出现自由变量；矛盾行 0=d 表示无解。", formula: "r = n ⇒ 唯一解;  r < n ⇒ 无穷多解" }
    ],
    quote: { text: "消元法是线性代数的第一台机器：它不改变解，只把方程组整理成容易回代的三角形。", source: "按 Poole《Linear Algebra: A Modern Introduction 4e》Ch 2 与 MIT 18.06 讲义原意整理" },
    example: {
      q: "解方程组 x + y = 3，2x - y = 0。",
      steps: [
        "写出增广矩阵 [1 1 | 3; 2 -1 | 0]；",
        "第二行减第一行的 2 倍，得 [1 1 | 3; 0 -3 | -6]；",
        "回代求得 x 与 y。"
      ],
      answer: "答案：x = 1，y = 2。"
    },
    checklist: [
      "能把任意线性方程组正确写成增广矩阵",
      "能规范完成行变换并避免计算错误",
      "能识别自由变量并写出参数解",
      "能根据秩说明无解、唯一解或无穷多解"
    ]
  },
  "la-3": {
    courseware: {
      title: "MIT 18.06 · 线性代数课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      note: "Lec 3 对应矩阵乘法与逆矩阵"
    },
    goals: [
      "掌握矩阵乘法规则及其不交换性",
      "会判断矩阵可逆并计算逆矩阵",
      "能理解线性变换与矩阵的一一对应"
    ],
    concepts: [
      { term: "矩阵乘法", def: "(AB) 的第 i 行第 j 列元素等于 A 第 i 行与 B 第 j 列的点积；矩阵乘法一般不满足交换律。", formula: "(AB)ᵢⱼ = Σₖ AᵢₖBₖⱼ" },
      { term: "逆矩阵", def: "若 AB = BA = I，则 A 可逆且 B = A⁻¹；行列式非零是可逆的必要条件。", formula: "A⁻¹ = adj(A)/det(A)" },
      { term: "线性变换", def: "线性变换保持加法与数乘：T(u+v) = T(u) + T(v)，T(cu) = cT(u)；每个线性变换都可用矩阵表示。", formula: "T(x) = Ax" },
      { term: "秩", def: "秩等于线性无关行（列）的最大个数，也等于行空间与列空间的维数。", formula: "rank(A) = dim(row(A)) = dim(col(A))" }
    ],
    quote: { text: "矩阵是线性变换的坐标表达：乘一个矩阵，就是对向量做一次线性变形，变形后空间维数由秩决定。", source: "按 Poole《Linear Algebra: A Modern Introduction 4e》Ch 3 与 MIT 18.06 讲义原意整理" },
    example: {
      q: "设 A = [[1, 2], [3, 4]]，判断 A 是否可逆。",
      steps: [
        "计算 det(A) = 1·4 - 2·3；",
        "行列式非零说明可逆；",
        "用公式写出 A⁻¹。"
      ],
      answer: "答案：det(A) = -2 ≠ 0，可逆；A⁻¹ = [[-2, 1], [1.5, -0.5]]。"
    },
    checklist: [
      "能口算 2×2 矩阵乘法",
      "会计算 2×2 与 3×3 行列式",
      "能用伴随矩阵或消元法求逆",
      "能验证一个映射是否线性"
    ]
  },
  "la-4": {
    courseware: {
      title: "MIT 18.06 · 线性代数课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      note: "Lec 18-21 对应行列式与特征值"
    },
    goals: [
      "掌握行列式性质并能计算 2×2、3×3 行列式",
      "会写特征方程并求特征值与特征向量",
      "理解对角化 A = PDP⁻¹ 的条件"
    ],
    concepts: [
      { term: "行列式", def: "行列式把方阵映射为一个数，判断可逆性、体积缩放与特征值乘积；交换两行改变符号。", formula: "det(AB) = det(A)det(B);  det(Aᵀ) = det(A)" },
      { term: "特征值与特征向量", def: "若 Ax = λx 且 x ≠ 0，则 λ 是特征值，x 是对应特征向量；特征向量方向在变换下不变。", formula: "det(A - λI) = 0" },
      { term: "对角化", def: "若 n 阶矩阵有 n 个线性无关特征向量，可写成 A = PDP⁻¹，D 为特征值对角阵。", formula: "A = PDP⁻¹ ⇒ Aᵏ = PDᵏP⁻¹" },
      { term: "迹与行列式", def: "特征值之和等于矩阵的迹（主对角线之和），特征值之积等于行列式。", formula: "Σλᵢ = tr(A);  Πλᵢ = det(A)" }
    ],
    quote: { text: "特征向量是矩阵变换中最‘稳定’的方向：沿这些方向，变换只是简单地拉伸或压缩。", source: "按 Poole《Linear Algebra: A Modern Introduction 4e》Ch 4 与 MIT 18.06 讲义原意整理" },
    example: {
      q: "求 A = [[2, 1], [1, 2]] 的特征值。",
      steps: [
        "写特征方程 det(A - λI) = (2-λ)² - 1 = 0；",
        "展开为 λ² - 4λ + 3 = 0；",
        "因式分解求 λ。"
      ],
      answer: "答案：λ = 3 与 λ = 1。"
    },
    checklist: [
      "能快速计算 3×3 行列式",
      "能写出特征多项式并求根",
      "能解 (A-λI)x = 0 得到特征向量",
      "能判断矩阵是否可对角化"
    ]
  },
  "la-5": {
    courseware: {
      title: "MIT 18.06 · 线性代数课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      note: "Lec 16 对应投影与最小二乘"
    },
    goals: [
      "理解正交与正交补的概念",
      "会计算向量在子空间上的正交投影",
      "能用正规方程求解最小二乘问题"
    ],
    concepts: [
      { term: "正交投影", def: "把向量投影到另一向量方向上，得到距离最短的近似；投影与原向量的差垂直。", formula: "proj_u(v) = (v·u/|u|²)u" },
      { term: "Gram-Schmidt", def: "把一组线性无关向量逐次减去已有方向上的投影，得到一组正交基，再单位化即得标准正交基。", formula: "e₁ = v₁/|v₁|,  e₂ = v₂ - (v₂·e₁)e₁ ..." },
      { term: "最小二乘", def: "当 Ax = b 无解时，求 x 使 |Ax - b| 最小，等价于解正规方程。", formula: "AᵀAx̂ = Aᵀb" },
      { term: "最佳逼近", def: "x̂ 使得 Ax̂ 是 b 在列空间中的投影，残差 b - Ax̂ 属于左零空间。", formula: "b - Ax̂ ⊥ col(A)" }
    ],
    quote: { text: "最小二乘的本质是把无解的方程组替换为‘在列空间里找最近点’，而最近点就是投影点。", source: "按 Poole《Linear Algebra: A Modern Introduction 4e》Ch 5 与 MIT 18.06 讲义原意整理" },
    example: {
      q: "把 b = (1, 2) 投影到 u = (1, 1) 上。",
      steps: [
        "计算 b·u = 3，|u|² = 2；",
        "投影系数为 3/2；",
        "系数乘 u 得到投影向量。"
      ],
      answer: "答案：proj_u(b) = (3/2, 3/2)。"
    },
    checklist: [
      "能判断两向量是否正交",
      "会计算子空间投影矩阵",
      "能完成两步 Gram-Schmidt 正交化",
      "会用正规方程求最小二乘解"
    ]
  },
  "la-6": {
    courseware: {
      title: "MIT 18.06 · 线性代数课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      note: "Lec 10 对应四个基本子空间"
    },
    goals: [
      "能验证一个集合是否构成向量空间或子空间",
      "理解线性无关、基与维数",
      "掌握四个基本子空间与秩-零化度定理"
    ],
    concepts: [
      { term: "向量空间与子空间", def: "向量空间对加法和数乘封闭；子空间是非空子集，且对这两种运算仍然封闭。", formula: "0 ∈ W;  u+v ∈ W;  cu ∈ W" },
      { term: "基与维数", def: "基是一组线性无关且能张成空间的向量，基中向量个数就是维数。", formula: "dim(V) = |basis(V)|" },
      { term: "四个基本子空间", def: "矩阵 A 的行空间、列空间、零空间与左零空间分别描述行的组合、列的组合及其解结构。", formula: "row(A), col(A), null(A), null(Aᵀ)" },
      { term: "秩-零化度定理", def: "列空间维数（秩）加上零空间维数（零化度）等于矩阵的列数。", formula: "rank(A) + nullity(A) = n" }
    ],
    quote: { text: "四个基本子空间把矩阵的全部信息拆开：列空间说明能到达哪里，零空间说明哪些输入被压成零。", source: "按 Poole《Linear Algebra: A Modern Introduction 4e》Ch 6 与 MIT 18.06 讲义原意整理" },
    example: {
      q: "对 A = [[1, 0], [0, 0]]，求 rank 与 nullity。",
      steps: [
        "A 只有一列非零，秩为 1；",
        "未知数个数 n = 2；",
        "由秩-零化度定理求零化度。"
      ],
      answer: "答案：rank = 1，nullity = 1，零空间由 (0,1) 张成。"
    },
    checklist: [
      "能验证子空间三条封闭性质",
      "会找列空间与零空间的一组基",
      "能写出秩-零化度定理",
      "能解释线性变换的核与像"
    ]
  },
  "la-7": {
    courseware: {
      title: "MIT 18.06 · 线性代数课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      note: "Lec 29 对应 SVD 与低秩近似"
    },
    goals: [
      "会用范数计算向量距离",
      "理解 SVD 的分解结构与几何含义",
      "能用奇异值做低秩近似"
    ],
    concepts: [
      { term: "范数与距离", def: "欧氏范数是向量到原点的长度，两向量距离等于差向量的范数。", formula: "‖v‖ = √(v·v);  d(u,v) = ‖u - v‖" },
      { term: "SVD", def: "任意矩阵都可分解为两个正交矩阵和一个对角矩阵，对角元即奇异值。", formula: "A = UΣVᵀ" },
      { term: "奇异值", def: "奇异值是 AᵀA 特征值的平方根，按大小排序；最大奇异值对应最显著的数据方向。", formula: "σᵢ = √λᵢ(AᵀA)" },
      { term: "低秩近似", def: "只保留最大的 k 个奇异值，可得到秩不超过 k 的最佳近似矩阵，是 PCA 与压缩的基础。", formula: "A ≈ UₖΣₖVₖᵀ" }
    ],
    quote: { text: "SVD 告诉我们在所有正交变换下，矩阵究竟沿哪些方向拉伸了数据、拉伸了多少。", source: "按 Poole《Linear Algebra: A Modern Introduction 4e》Ch 7 与 MIT 18.06 讲义原意整理" },
    example: {
      q: "对对角矩阵 A = diag(3, 1, 0)，写出奇异值。",
      steps: [
        "AᵀA = diag(9, 1, 0)；",
        "奇异值是特征值的平方根；",
        "按大小排列。"
      ],
      answer: "答案：σ = 3, 1, 0。"
    },
    checklist: [
      "能计算二维向量距离",
      "能写出 SVD 分解中各矩阵的维度",
      "知道奇异值与特征值的关系",
      "能解释保留前 k 个奇异值的意义"
    ]
  },
  "la-8": {
    courseware: {
      title: "MIT 18.06 · 线性代数课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      note: "编码理论拓展可配合 Lec 20 之后的讲义"
    },
    goals: [
      "理解线性码的生成矩阵与校验矩阵",
      "会用汉明距离判断纠错能力",
      "能把线性空间观点应用到信息编码"
    ],
    concepts: [
      { term: "线性码", def: "线性码是向量空间 GF(2)ⁿ 中的子空间，用生成矩阵 G 编码，用校验矩阵 H 检测错误。", formula: "c = mG;  Hc = 0" },
      { term: "汉明距离", def: "两个码字之间不同的位数称为汉明距离；最小距离 d 决定检错与纠错能力。", formula: "检错 d-1 位，纠错 ⌊(d-1)/2⌋ 位" },
      { term: "有限域", def: "GF(2) 只有 0 和 1，加法与减法相同，都是异或运算；线性代数在有限域上依然成立。", formula: "1 + 1 = 0 mod 2" },
      { term: "应用", def: "汉明码、QR 码、磁盘 RAID 与网络纠错都依赖线性码的代数结构。", formula: "[7,4] 汉明码: d = 3" }
    ],
    quote: { text: "编码理论把线性代数的向量空间搬进信息世界：用校验方程把噪声产生的大空间压缩回合法码字集合。", source: "按 Poole《Linear Algebra: A Modern Introduction 4e》Ch 8 原意整理" },
    example: {
      q: "已知 [7,4] 汉明码最小距离为 3，它能纠正几位错误？",
      steps: [
        "最小距离 d = 3；",
        "纠错能力为 ⌊(d-1)/2⌋；",
        "代入计算。"
      ],
      answer: "答案：最多纠正 1 位错误。"
    },
    checklist: [
      "能写出生成矩阵与校验矩阵的关系",
      "能计算两个二进制码字的汉明距离",
      "能根据最小距离判断纠错能力",
      "能举出线性码的现实应用"
    ]
  }
};
