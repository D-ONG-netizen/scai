module.exports = {
  "py-1": {
    courseware: {
      title: "Python 官方教程 · 入门",
      source: "Python.org",
      url: "https://docs.python.org/3/tutorial/introduction.html",
      note: "变量、数据类型、流程控制与函数官方教程"
    },
    goals: [
      "掌握变量、基本数据类型与输入输出",
      "会用 if、for、while 控制流程",
      "会定义与调用函数并理解作用域"
    ],
    concepts: [
      { term: "变量与类型", def: "Python 变量是对象的引用，常见类型有 int、float、str、bool；用 type() 检查类型。", formula: "x = 3;  y = \"hello\"" },
      { term: "条件与循环", def: "if/elif/else 按条件分支，for 遍历可迭代对象，while 按条件重复；注意缩进即代码块。", formula: "if x > 0: ... else: ..." },
      { term: "函数", def: "def 定义函数，参数按位置或关键字传递，return 返回结果；函数可设置默认参数。", formula: "def f(a, b=1): return a + b" },
      { term: "作用域", def: "局部变量只在函数内可见，global 关键字可声明使用全局变量，避免随意修改。", formula: "LEGB: Local → Enclosing → Global → Builtin" }
    ],
    quote: { text: "程序 = 数据结构 + 算法；Python 先用简单清晰的语法把变量、分支、循环和函数这四个积木搭起来。", source: "按嵩天《Python语言程序设计》第1-4章与 Python 官方教程原意整理" },
    example: {
      q: "写一个函数，输入 n 返回 1 到 n 的和。",
      steps: [
        "def sum_n(n): 初始化 s = 0；",
        "for i in range(1, n+1): s += i；",
        "return s。"
      ],
      answer: "答案：return sum(range(1, n+1)) 或循环累加。"
    },
    checklist: [
      "能说出 5 种基本数据类型",
      "能正确缩进写分支与循环",
      "会定义带默认参数的函数",
      "能解释局部变量与全局变量"
    ]
  },
  "py-2": {
    courseware: {
      title: "Python 官方教程 · 数据结构",
      source: "Python.org",
      url: "https://docs.python.org/3/tutorial/datastructures.html",
      note: "列表、字典、集合、元组与文件读写官方教程"
    },
    goals: [
      "掌握四大内置容器的特点与常用方法",
      "会用列表推导式简化代码",
      "能读写文本文件并处理异常"
    ],
    concepts: [
      { term: "容器类型", def: "list 有序可变，tuple 有序不可变，set 无序唯一，dict 键值映射；选择容器取决于查询与修改需求。", formula: "d = {\"key\": value}" },
      { term: "列表操作", def: "append、extend、insert、pop 修改列表；切片 [start:stop:step] 复制子序列。", formula: "lst[-1] 取最后一个元素" },
      { term: "文件读写", def: "with open(path, \"r\") 自动关闭文件；写文件用 \"w\"，追加用 \"a\"，注意编码 encoding=\"utf-8\"。", formula: "with open(f, encoding=\"utf-8\") as fh: ..." },
      { term: "异常处理", def: "try/except 捕获异常，finally 保证收尾；不要把大段代码塞进 except。", formula: "try: ... except ValueError: ..." }
    ],
    quote: { text: "选择正确的容器就是选择正确的时间复杂度：查询用字典，去重用集合，有序序列用列表。", source: "按嵩天《Python语言程序设计》第5-7章与 Python 官方教程原意整理" },
    example: {
      q: "用列表推导式生成 0 到 9 的平方列表。",
      steps: [
        "遍历 range(10)；",
        "对每个 x 计算 x**2；",
        "放入新列表。"
      ],
      answer: "答案：[x**2 for x in range(10)]。"
    },
    checklist: [
      "能说出四种容器的区别",
      "会正确使用切片",
      "能安全读写 UTF-8 文件",
      "能处理文件不存在异常"
    ]
  },
  "py-3": {
    courseware: {
      title: "NumPy 官方教程 · 绝对入门",
      source: "NumPy",
      url: "https://numpy.org/doc/stable/user/absolute_beginners.html",
      note: "ndarray、向量化与广播机制官方教程"
    },
    goals: [
      "理解 ndarray 与 Python 列表的区别",
      "会用数组切片、索引与条件筛选",
      "掌握广播机制与常用数学函数"
    ],
    concepts: [
      { term: "ndarray", def: "NumPy 数组是同质、连续内存的多维数组，支持向量化运算，性能远高于 Python 循环。", formula: "np.array([1, 2, 3])" },
      { term: "索引与切片", def: "二维数组用 a[i, j] 索引，切片 a[:, 1] 取列，布尔掩码 a[a > 0] 条件筛选。", formula: "a[行, 列]" },
      { term: "广播", def: "形状不匹配的数组在运算时按规则扩展，标量与数组、行向量与列向量都可广播。", formula: "a + 1;  a + b (形状兼容)" },
      { term: "常用函数", def: "np.sum、np.mean、np.std、np.dot 与 np.linalg 模块覆盖统计与线性代数运算。", formula: "np.dot(A, B) = A @ B" }
    ],
    quote: { text: "用数组思考，而不是用循环思考：向量化让一行代码替代一整个 for 循环。", source: "按 NumPy 官方教程与数据科学入门课程原意整理" },
    example: {
      q: "计算数组 a = np.array([[1,2],[3,4]]) 每列的和。",
      steps: [
        "axis=0 表示沿行方向压缩；",
        "np.sum(a, axis=0)；",
        "检查结果形状。"
      ],
      answer: "答案：array([4, 6])。"
    },
    checklist: [
      "能创建不同形状的 ndarray",
      "会用布尔掩码筛选数据",
      "能解释广播规则",
      "会使用 axis 参数控制聚合方向"
    ]
  },
  "py-4": {
    courseware: {
      title: "Pandas 官方教程 · 10 分钟入门",
      source: "Pandas",
      url: "https://pandas.pydata.org/docs/user_guide/10min.html",
      note: "Series、DataFrame、筛选与聚合官方教程"
    },
    goals: [
      "理解 Series 与 DataFrame 结构",
      "会按条件筛选、排序与分组",
      "能合并两个表并处理缺失值"
    ],
    concepts: [
      { term: "Series 与 DataFrame", def: "Series 是带索引的一维数组，DataFrame 是带行索引与列名的二维表结构。", formula: "df = pd.DataFrame({...})" },
      { term: "筛选与排序", def: "df[df[\"score\"] > 80] 条件筛选，df.sort_values(\"score\") 排序，df.dropna() 处理缺失。", formula: "df.loc[条件, 列]" },
      { term: "分组聚合", def: "df.groupby(\"class\").mean() 按类别聚合，可同时计算均值、计数与求和。", formula: "df.groupby(by).agg({\"x\": \"mean\"})" },
      { term: "合并数据", def: "pd.merge 按键连接两个表，inner/left/right/outer 控制保留哪些行。", formula: "pd.merge(a, b, on=\"id\", how=\"inner\")" }
    ],
    quote: { text: "Pandas 把电子表格带进 Python：一行筛选、一行分组，数据清洗的效率来自表级操作。", source: "按 Pandas 官方教程原意整理" },
    example: {
      q: "求 df 中 score 大于 90 的人数。",
      steps: [
        "条件筛选 df[df[\"score\"] > 90]；",
        "取行数 len(...)；",
        "输出结果。"
      ],
      answer: "答案：len(df[df[\"score\"] > 90])。"
    },
    checklist: [
      "能读取 CSV 到 DataFrame",
      "会组合多个筛选条件",
      "能用 groupby 做分组统计",
      "能完成两表 merge"
    ]
  },
  "py-5": {
    courseware: {
      title: "scikit-learn 官方教程 · 快速入门",
      source: "scikit-learn",
      url: "https://scikit-learn.org/stable/getting_started.html",
      note: "数据集划分、特征与模型训练官方教程"
    },
    goals: [
      "区分监督学习与无监督学习",
      "理解特征、标签与训练测试划分",
      "会用 sklearn 完成一个分类流水线"
    ],
    concepts: [
      { term: "机器学习任务", def: "监督学习从带标签样本学习映射，无监督学习发现数据内在结构；分类、回归、聚类是三类基本任务。", formula: "X（特征） → y（标签）" },
      { term: "训练与测试", def: "数据划分为训练集与测试集，模型只在训练集上学，用测试集评估泛化能力。", formula: "train_test_split(X, y, test_size=0.2)" },
      { term: "模型与流水线", def: "sklearn 统一接口 fit(X, y) / predict(X)，Pipeline 把预处理与模型串成一步。", formula: "pipe.fit(X_train, y_train)" },
      { term: "评估指标", def: "分类用准确率、精确率、召回率与 F1，回归用均方误差；指标选择取决于问题。", formula: "accuracy = 正确数/总数" }
    ],
    quote: { text: "机器学习的本质是从数据中学习规律，但评估只能在它没见过的测试数据上进行才有意义。", source: "按南京财经《机器学习》MOOC 与 scikit-learn 官方教程原意整理" },
    example: {
      q: "为什么模型要在训练集上 fit，在测试集上预测？",
      steps: [
        "训练集用于学习参数；",
        "测试集模拟未来新数据；",
        "避免用评估数据参与学习造成过拟合假象。"
      ],
      answer: "答案：只有用未见数据评估，才能反映真实泛化能力。"
    },
    checklist: [
      "能区分监督与无监督任务",
      "会划分训练测试集",
      "能调用一个 sklearn 分类器",
      "会解释准确率与过拟合"
    ]
  },
  "py-6": {
    courseware: {
      title: "PyTorch 官方教程 · 60 分钟入门",
      source: "PyTorch",
      url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html",
      note: "张量、自动微分与训练循环官方教程"
    },
    goals: [
      "理解张量及其与 NumPy 的转换",
      "掌握自动微分与梯度下降",
      "能搭建并训练一个简单神经网络"
    ],
    concepts: [
      { term: "张量", def: "张量是多维数组，支持 GPU 计算与自动求导；requires_grad=True 的张量会记录计算图。", formula: "torch.randn(3, 3)" },
      { term: "自动微分", def: "autograd 自动记录前向运算，调用 backward() 后从 loss 反向计算每个参数的梯度。", formula: "loss.backward();  w.grad" },
      { term: "神经网络模块", def: "nn.Module 组织层与参数，nn.Linear、nn.ReLU 等层可叠加为网络。", formula: "model = nn.Sequential(nn.Linear(...), nn.ReLU(), ...)" },
      { term: "训练循环", def: "每次迭代：前向传播 → 计算损失 → 清空梯度 → 反向传播 → 优化器更新参数。", formula: "zero_grad → backward → step" }
    ],
    quote: { text: "深度学习的训练循环高度统一：把数据变成张量，把模型变成模块，让优化器在梯度方向上更新参数。", source: "按 PyTorch 官方教程原意整理" },
    example: {
      q: "写出训练循环中一步参数更新的正确顺序。",
      steps: [
        "optimizer.zero_grad() 清空旧梯度；",
        "loss.backward() 计算梯度；",
        "optimizer.step() 更新参数。"
      ],
      answer: "答案：zero_grad → backward → step。"
    },
    checklist: [
      "能创建张量并转换 NumPy",
      "会使用 requires_grad 与 backward",
      "能定义两层全连接网络",
      "能独立写一个完整训练循环"
    ]
  },
  "prep-1": {
    courseware: {
      title: "OpenStax Calculus Volume 3 · 多元函数",
      source: "OpenStax",
      url: "https://openstax.org/books/calculus-volume-3/pages/4-1-functions-of-several-variables",
      note: "级数、偏导数与重积分先修课件"
    },
    goals: [
      "衔接高数下的级数与多元微积分",
      "掌握偏导数与多重积分基本概念",
      "理解泰勒级数与向量场直觉"
    ],
    concepts: [
      { term: "多元函数", def: "多元函数有多个自变量，定义域是空间中的点集；偏导数固定其余变量求单变量导数。", formula: "fₓ = ∂f/∂x" },
      { term: "多重积分", def: "二重积分沿两个方向切薄片，把区域上的函数值求和取极限，用于计算体积与平均值。", formula: "∬_D f(x,y) dA" },
      { term: "级数衔接", def: "幂级数与泰勒展开在高数下继续用于逼近函数，收敛半径是关键。", formula: "R = 1/lim|aₙ₊₁/aₙ|" },
      { term: "向量场", def: "向量场给空间中每点分配一个向量，梯度、散度与旋度描述场的变化。", formula: "∇f = (fₓ, fᵧ, f_z)" }
    ],
    quote: { text: "多元微积分把单变量极限、导数与积分推广到空间：沿每个方向求偏导，再把所有方向合成整体。", source: "按 Stewart《Essential Calculus 2e》Ch 8-13 原意整理" },
    example: {
      q: "对 f(x,y) = x²y + y³，求 fₓ。",
      steps: [
        "把 y 看作常数；",
        "对 x 求导；",
        "保留 y 的幂次。"
      ],
      answer: "答案：fₓ = 2xy。"
    },
    checklist: [
      "能写幂级数收敛半径",
      "会求二元函数偏导数",
      "能理解二重积分几何意义",
      "知道梯度方向与最陡上升方向一致"
    ]
  },
  "prep-2": {
    courseware: {
      title: "OpenStax University Physics Vol 2",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-2/pages/5-1-electric-charge",
      note: "电磁学、电路与光学先修课件"
    },
    goals: [
      "理解电荷、电场与电势概念",
      "掌握电路基本定律",
      "了解波动光学与近代物理线索"
    ],
    concepts: [
      { term: "电场与电势", def: "电荷激发电场，单位正电荷受力定义电场；电势是单位电荷的势能，电场沿电势降低方向。", formula: "E = F/q;  V = U/q" },
      { term: "电路定律", def: "欧姆定律 V = IR，基尔霍夫定律处理复杂回路的电压与电流约束。", formula: "V = IR;  ΣV = 0;  ΣI = 0" },
      { term: "电磁波", def: "变化的电场与磁场相互激发形成电磁波，真空光速 c = 3×10⁸ m/s。", formula: "c = fλ" },
      { term: "近代物理", def: "光子、相对论与量子现象打破经典直觉，是下学期现代物理的核心。", formula: "E = mc²;  E = hν" }
    ],
    quote: { text: "电磁学用场替代超距作用：电荷不直接接触，而是通过它激发的场把力与能量传递出去。", source: "按 Walker《Principles of Physics 12e》Ch 21-44 与 OpenStax University Physics Vol 2 原意整理" },
    example: {
      q: "电阻 10 Ω 两端电压 5 V，求电流。",
      steps: [
        "用欧姆定律 I = V/R；",
        "代入数值；",
        "检查单位。"
      ],
      answer: "答案：I = 0.5 A。"
    },
    checklist: [
      "能计算点电荷电场",
      "会用基尔霍夫定律列方程",
      "能分析 RC 电路充放电趋势",
      "能说出电磁波谱顺序"
    ]
  },
  "prep-3": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 反应速率",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/17-1-chemical-reaction-rates",
      note: "动力学、化学平衡、热力学与电化学先修课件"
    },
    goals: [
      "衔接动力学与化学平衡",
      "掌握热力学基本状态函数",
      "能用能斯特方程分析电化学"
    ],
    concepts: [
      { term: "反应速率", def: "速率用浓度变化率表示，速率常数随温度按阿伦尼乌斯方程变化。", formula: "k = Ae^(-Ea/RT)" },
      { term: "平衡与自由能", def: "平衡常数与吉布斯自由能变化关系为 ΔG° = -RTlnK，决定反应自发方向。", formula: "ΔG < 0 自发" },
      { term: "熵与焓", def: "熵衡量混乱度，吉布斯自由能综合焓与熵判断反应方向与平衡位置。", formula: "ΔG = ΔH - TΔS" },
      { term: "电化学", def: "电池电动势与反应吉布斯自由能关系为 ΔG = -nFE，能斯特方程处理非标准浓度。", formula: "E = E° - (RT/nF)lnQ" }
    ],
    quote: { text: "化学下学期的三条主线是‘多快’（动力学）、‘多远’（平衡）与‘能否自发’（热力学）。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 14-26 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "某反应 ΔH = -50 kJ/mol，ΔS = -100 J/(mol·K)，求 300 K 时 ΔG。",
      steps: [
        "把 ΔS 换为 kJ/(mol·K)；",
        "代入 ΔG = ΔH - TΔS；",
        "判断正负。"
      ],
      answer: "答案：ΔG = -20 kJ/mol < 0，自发。"
    },
    checklist: [
      "能写出阿伦尼乌斯方程",
      "能用 ΔG 判断自发方向",
      "会用平衡常数计算浓度",
      "能使用能斯特方程修正电动势"
    ]
  },
  "prep-4": {
    courseware: {
      title: "MIT 18.05 · 概率统计课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/syllabus/",
      note: "课程主页含讲义入口，覆盖概率公理与随机变量"
    },
    goals: [
      "理解概率公理与条件概率",
      "掌握离散与连续随机变量",
      "理解大数定律与中心极限定理"
    ],
    concepts: [
      { term: "概率公理", def: "概率是非负、总概率为 1 且对互斥事件可加的度量；条件概率刻画已知信息后的概率更新。", formula: "P(A|B) = P(A∩B)/P(B)" },
      { term: "随机变量", def: "随机变量把样本空间映射为数，离散型用概率质量函数，连续型用概率密度函数。", formula: "E[X] = Σxp(x);  E[X] = ∫xf(x)dx" },
      { term: "方差与标准差", def: "方差衡量随机变量相对均值的离散程度，标准差是方差的平方根。", formula: "Var(X) = E[(X-μ)²]" },
      { term: "中心极限定理", def: "大量独立同分布随机变量之和近似正态，样本均值因此可按正态近似做统计推断。", formula: "X̄ ≈ N(μ, σ²/n)" }
    ],
    quote: { text: "概率论把不确定性变成可计算的量：概率公理定义规则，随机变量把规则翻译成数学对象。", source: "按浙大《概率论与数理统计》与 MIT 18.05 讲义原意整理" },
    example: {
      q: "P(A) = 0.4，P(B) = 0.5，A、B 互斥，求 P(A∪B)。",
      steps: [
        "互斥意味着交集为空；",
        "加法公式 P(A∪B) = P(A) + P(B)；",
        "代入。"
      ],
      answer: "答案：0.9。"
    },
    checklist: [
      "能使用贝叶斯公式",
      "能求离散随机变量期望",
      "会识别常见分布",
      "能解释中心极限定理的用途"
    ]
  },
  "prep-5": {
    courseware: {
      title: "Python 官方教程 · 类",
      source: "Python.org",
      url: "https://docs.python.org/3/tutorial/classes.html",
      note: "OOP、数据结构与 MATLAB 先修官方教程"
    },
    goals: [
      "掌握类、对象、继承与多态",
      "会用常用数据结构解决问题",
      "了解 MATLAB 与 Python 的语法差异"
    ],
    concepts: [
      { term: "类与对象", def: "类是对象的模板，定义属性与方法；对象是类的实例，self 指向实例本身。", formula: "class Dog: def __init__(self, name): ..." },
      { term: "继承与多态", def: "子类继承父类方法与属性，可重写方法实现多态，调用方只需依赖公共接口。", formula: "class Cat(Animal): ..." },
      { term: "数据结构", def: "栈、队列、链表、树与图各有适用场景，Python 的 list、deque、heapq 提供常用实现。", formula: "栈: push/pop;  队列: append/popleft" },
      { term: "MATLAB 基础", def: "MATLAB 以矩阵为基本对象，脚本与函数文件分工明确，与 Python 的 NumPy 语法互有对应。", formula: "A = [1 2; 3 4]" }
    ],
    quote: { text: "面向对象把数据和操作它的函数封装成对象，让大型程序的职责边界更清晰。", source: "按 C++/Java OOP、数据结构与 MATLAB 入门课程原意整理" },
    example: {
      q: "Python 中 `self` 的作用是什么？",
      steps: [
        "self 指当前实例；",
        "在方法内访问实例属性与调用其他方法；",
        "调用时自动传入，无需手动写。"
      ],
      answer: "答案：self 代表当前对象实例，用于访问实例属性与方法。"
    },
    checklist: [
      "能定义类并创建对象",
      "能使用继承重写方法",
      "能实现栈与队列",
      "能把简单 MATLAB 脚本翻译为 Python"
    ]
  }
};
