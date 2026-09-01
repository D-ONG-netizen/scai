module.exports = {
  "mech-1": {
    courseware: {
      title: "Engineering Statics · 第1章 基本概念",
      source: "Baker & Haynes",
      url: "https://engineeringstatics.org/Chapter_01.html",
      note: "矢量、力与力矩的开源静力学课件"
    },
    goals: [
      "能区分标量与矢量并规范表示力",
      "会计算共点力系的合力",
      "掌握力对点的矩与力偶"
    ],
    concepts: [
      { term: "力", def: "力是矢量，具有大小、方向和作用点；刚体上力可沿作用线滑移而不改变外效应。", formula: "F = F(cosθ i + sinθ j)" },
      { term: "力系与合力", def: "共点力系可用平行四边形法则逐次合成；合力是所有分力的矢量和。", formula: "R = ΣF = (ΣFₓ)i + (ΣFᵧ)j" },
      { term: "力矩", def: "力对点的矩等于力与力臂的乘积，方向由右手定则确定；力偶是大小相等、方向相反且不共线的两力。", formula: "M₀ = Fd;  M = r × F" },
      { term: "自由体图思维", def: "把物体从周围环境分离，只画外力，是静力学所有问题的共同起点。", formula: "受力分析 → 平衡方程" }
    ],
    quote: { text: "静力学研究力系的合成与平衡：先把结构看成一组可分离的物体，再对每个物体列出力与矩的平衡。", source: "按 Meriam《Engineering Mechanics: Statics 9e》Ch 1-2 与 Baker & Haynes《Engineering Statics》原意整理" },
    example: {
      q: "两个力 F₁ = 100 N 水平向右、F₂ = 100 N 竖直向上作用在同一点，求合力大小。",
      steps: [
        "分解到 x、y 方向；",
        "合力分量 Rₓ = 100，Rᵧ = 100；",
        "求模长。"
      ],
      answer: "答案：R = 100√2 ≈ 141.4 N，方向 45°。"
    },
    checklist: [
      "能按规范画力的分量三角形",
      "会计算二维共点力系合力",
      "能区分力矩与力偶",
      "能用右手定则判断力矩方向"
    ]
  },
  "mech-2": {
    courseware: {
      title: "Engineering Statics · 第3章 平衡",
      source: "Baker & Haynes",
      url: "https://engineeringstatics.org/Chapter_03.html",
      note: "自由体图、约束反力与平衡方程课件"
    },
    goals: [
      "能规范画出自由体图",
      "会列出平面力系平衡方程",
      "能确定常见支座的约束反力"
    ],
    concepts: [
      { term: "自由体图", def: "自由体图把研究对象隔离，画出所有作用在其上的外力与力偶，并标注尺寸和角度。", formula: "FBD: 物体 + 外力 + 约束反力" },
      { term: "平衡方程", def: "平面一般力系需要三个独立方程：合力为零的两个分量方程与合力矩为零的一个方程。", formula: "ΣFₓ = 0;  ΣFᵧ = 0;  ΣM₀ = 0" },
      { term: "约束反力", def: "铰链提供两个正交分力，滚动支座提供法向反力，固定端还提供反力偶。", formula: "铰链: Rₓ, Rᵧ;  固定端: Rₓ, Rᵧ, M" },
      { term: "两力与三力构件", def: "两力构件受力沿两端连线；三力构件若平衡且不平行，三力必汇交于一点。", formula: "三力平衡 ⇒ 汇交" }
    ],
    quote: { text: "自由体图是静力学的第一语言：约束的每一种形式都对应一组反力，画出它之后平衡方程只是代数的开始。", source: "按 Meriam《Engineering Mechanics: Statics 9e》Ch 3 与 Baker & Haynes《Engineering Statics》原意整理" },
    example: {
      q: "简支梁中点承受 10 kN 集中力，求两端支座反力。",
      steps: [
        "画自由体图并设 Rₐ、Rᵦ 竖直向上；",
        "由 ΣMₐ = 0 求 Rᵦ；",
        "由 ΣFᵧ = 0 求 Rₐ。"
      ],
      answer: "答案：Rₐ = Rᵦ = 5 kN。"
    },
    checklist: [
      "能画出梁、桁架节点的自由体图",
      "能正确标注未知反力方向",
      "会选合适矩心减少方程数",
      "能识别两力构件与三力构件"
    ]
  },
  "mech-3": {
    courseware: {
      title: "Engineering Statics · 第6章 桁架",
      source: "Baker & Haynes",
      url: "https://engineeringstatics.org/Chapter_06.html",
      note: "结点法、截面法与桁架分析课件"
    },
    goals: [
      "理解桁架与二力杆假设",
      "会用结点法求杆件内力",
      "会用截面法快速求解关键杆"
    ],
    concepts: [
      { term: "桁架假设", def: "桁架由铰接二力杆组成，载荷只作用在结点上；每根杆只受拉或受压。", formula: "二力杆: 内力沿杆轴线" },
      { term: "结点法", def: "依次取结点为隔离体，每个结点有两个平衡方程，可解两个未知杆力。", formula: "ΣFₓ = 0;  ΣFᵧ = 0（结点）" },
      { term: "截面法", def: "用截面切断若干杆，取部分桁架为隔离体，利用三个平衡方程直接求被切杆的内力。", formula: "ΣFₓ = 0;  ΣFᵧ = 0;  ΣM = 0（截面部分）" },
      { term: "零力杆", def: "无载荷的两杆结点，或三杆结点中两杆共线且第三杆无外力时，可快速识别零力杆。", formula: "两杆结点无载荷 ⇒ 两杆均为零力杆" }
    ],
    quote: { text: "桁架分析把整体结构拆成铰接杆系，每根杆只有拉压两种状态，结点法与截面法就是两套解题工具。", source: "按 Meriam《Engineering Mechanics: Statics 9e》Ch 4 与 Baker & Haynes《Engineering Statics》原意整理" },
    example: {
      q: "在无载荷的两杆结点处，两杆内力有什么特点？",
      steps: [
        "取结点为隔离体；",
        "只有两个杆力，平衡要求合力为零；",
        "判断杆力。"
      ],
      answer: "答案：两杆均为零力杆。"
    },
    checklist: [
      "能识别零力杆",
      "能用结点法从只有两个未知力的结点开始",
      "会选截面避免过多未知量",
      "能判断杆件受拉还是受压"
    ]
  },
  "mech-4": {
    courseware: {
      title: "Engineering Statics · 第7章 形心",
      source: "Baker & Haynes",
      url: "https://engineeringstatics.org/Chapter_07.html",
      note: "分布载荷、形心与惯性矩开源课件"
    },
    goals: [
      "会把分布载荷化为等效集中力",
      "会计算简单组合图形的形心",
      "掌握惯性矩与平行轴定理"
    ],
    concepts: [
      { term: "分布载荷", def: "分布载荷用单位长度的力表示，其合力大小等于载荷图面积，作用点在图形形心。", formula: "R = ∫w(x)dx;  x̄ = ∫xw(x)dx/R" },
      { term: "形心", def: "形心是面积的一阶矩除以面积；对称图形的形心在对称轴上，组合图形按面积加权平均。", formula: "x̄ = ΣAᵢx̄ᵢ/ΣAᵢ" },
      { term: "惯性矩", def: "惯性矩是面积元乘以到轴距离平方的积分，衡量截面抵抗弯曲的能力。", formula: "Iₓ = ∫y²dA;  矩形 I = bh³/12" },
      { term: "平行轴定理", def: "对任意平行轴的惯性矩等于对质心轴惯性矩加上面积乘轴距平方。", formula: "I = I_cm + Ad²" }
    ],
    quote: { text: "分布力看似复杂，但它的合力与作用位置都由图形的面积与形心决定，于是几何工具进入力学。", source: "按 Meriam《Engineering Mechanics: Statics 9e》Ch 5 + App A 与 Baker & Haynes《Engineering Statics》原意整理" },
    example: {
      q: "求底边 b、高 h 的矩形对底边的形心位置。",
      steps: [
        "对称性确定水平位置在 b/2；",
        "竖直形心等于面积矩/面积；",
        "对矩形积分或查表。"
      ],
      answer: "答案：形心距底边 h/2。"
    },
    checklist: [
      "能计算三角形、矩形分布载荷合力",
      "会把组合图形拆成规则子图形",
      "会查表并运用平行轴定理",
      "能区分形心与重心、质心"
    ]
  },
  "mech-5": {
    courseware: {
      title: "Engineering Statics · 第9章 摩擦",
      source: "Baker & Haynes",
      url: "https://engineeringstatics.org/Chapter_09.html",
      note: "干摩擦、楔块与虚功原理开源课件"
    },
    goals: [
      "掌握静摩擦与动摩擦规律",
      "会分析临界滑动问题",
      "理解虚功原理的基本思想"
    ],
    concepts: [
      { term: "干摩擦", def: "静摩擦在滑动前随外力增大而增大，存在上限 μₛN；滑动后动摩擦近似恒定 μₖN。", formula: "f ≤ μₛN;  f = μₖN（滑动）" },
      { term: "摩擦角", def: "最大静摩擦时合力与法线夹角为摩擦角，临界状态等价于合力方向确定。", formula: "tanφₛ = μₛ" },
      { term: "楔块与自锁", def: "楔块通过斜面放大作用力；当摩擦角大于楔角时机构发生自锁。", formula: "自锁: α ≤ φₛ" },
      { term: "虚功原理", def: "理想约束系统处于平衡时，主动力在任意虚位移上做的总虚功为零。", formula: "δW = ΣF·δr = 0" }
    ],
    quote: { text: "摩擦问题要先判断是静止、临界还是滑动状态；临界状态用 f = μₛN，而虚功原理则避开复杂反力直接写平衡。", source: "按 Meriam《Engineering Mechanics: Statics 9e》Ch 6-7 与 Baker & Haynes《Engineering Statics》原意整理" },
    example: {
      q: "重 100 N 的物块，μₛ = 0.3，求恰好开始滑动所需的水平力。",
      steps: [
        "正压力 N = 100 N；",
        "临界摩擦 f = μₛN；",
        "水平推力需达到该值。"
      ],
      answer: "答案：F = 30 N。"
    },
    checklist: [
      "能判断摩擦是否为临界值",
      "会画摩擦锥与摩擦角",
      "能分析楔块放大效应",
      "会用虚功原理求平衡位置"
    ]
  },
  "mech-6": {
    courseware: {
      title: "MIT 2.003SC · 工程动力学课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/syllabus/",
      note: "课程主页含讲义入口，对应质点运动学"
    },
    goals: [
      "掌握位置、速度、加速度的求导关系",
      "会用自然坐标与极坐标描述曲线运动",
      "能处理相对运动问题"
    ],
    concepts: [
      { term: "运动学基本量", def: "速度是位置对时间的导数，加速度是速度对时间的导数；反向求解需要积分与初始条件。", formula: "v = dr/dt;  a = dv/dt" },
      { term: "匀加速运动", def: "恒加速度下三个经典方程在直线运动与抛体分量中反复出现。", formula: "v = v₀ + at;  s = v₀t + ½at²" },
      { term: "自然坐标", def: "沿轨迹建立切向与法向坐标：切向加速度改变速度大小，法向加速度改变方向。", formula: "aₜ = dv/dt;  aₙ = v²/ρ" },
      { term: "相对运动", def: "绝对运动等于牵连运动加相对运动，速度与加速度都要按矢量相加。", formula: "v_A = v_B + v_A/B" }
    ],
    quote: { text: "运动学先描述‘怎么动’，动力学再解释‘为什么动’；坐标系选得好，复杂轨迹也能化为简单分量。", source: "按 Meriam《Engineering Mechanics: Dynamics 9e》Ch 1-2 与 MIT 2.003SC 讲义原意整理" },
    example: {
      q: "v = 3t²，t = 0 时 s = 0，求 t = 2 s 的位移。",
      steps: [
        "位移是速度对时间的积分；",
        "s = ∫3t²dt = t³ + C；",
        "用初始条件确定 C。"
      ],
      answer: "答案：s = 8 m。"
    },
    checklist: [
      "能用微积分正反求运动量",
      "能计算圆周运动向心加速度",
      "会分解切向与法向加速度",
      "能写出相对速度方程"
    ]
  },
  "mech-7": {
    courseware: {
      title: "MIT 2.003SC · 工程动力学课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/syllabus/",
      note: "课程主页含讲义入口，对应质点动力学"
    },
    goals: [
      "能对质点建立运动微分方程",
      "会用动能定理处理做功问题",
      "会用冲量动量定理处理碰撞"
    ],
    concepts: [
      { term: "牛顿第二定律", def: "质点动力学方程是 F = ma，常写成分量形式或切法向形式。", formula: "ΣF = ma;  ΣFₙ = mv²/ρ" },
      { term: "功与能", def: "质点动能定理：合外力做功等于动能变化；保守力做功与路径无关。", formula: "T₂ - T₁ = ∫F·dr" },
      { term: "冲量与动量", def: "冲量等于动量变化，短时强作用问题用冲量动量关系比用牛顿定律更直接。", formula: "∫Fdt = mv₂ - mv₁" },
      { term: "约束与自由度", def: "约束减少系统自由度，常用广义坐标与虚功原理处理复杂约束。", formula: "自由度 = 坐标数 - 约束数" }
    ],
    quote: { text: "动力学给同一个运动提供了牛顿、功能力、冲量动量三条路径：换一个角度，往往换一条更短的路。", source: "按 Meriam《Engineering Mechanics: Dynamics 9e》Ch 3-4 与 MIT 2.003SC 讲义原意整理" },
    example: {
      q: "质量 2 kg 质点受恒力 10 N，从静止开始运动 3 s，求末速度。",
      steps: [
        "加速度 a = F/m；",
        "v = v₀ + at；",
        "代入数值。"
      ],
      answer: "答案：v = 15 m/s。"
    },
    checklist: [
      "能建立直线与曲线运动的微分方程",
      "会用能量法跳过加速度细节",
      "会计算冲量并求碰撞前后速度",
      "能识别保守力与势能"
    ]
  },
  "mech-8": {
    courseware: {
      title: "MIT 2.003SC · 工程动力学课程讲义入口",
      source: "MIT OCW",
      url: "https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/syllabus/",
      note: "课程主页含讲义入口，对应刚体动力学"
    },
    goals: [
      "掌握刚体平面运动的速度与加速度关系",
      "会写刚体定轴转动的动力学方程",
      "理解自由振动与固有频率"
    ],
    concepts: [
      { term: "刚体平面运动", def: "刚体平面运动可分解为平动加绕质心转动，瞬时中心法可简化速度分析。", formula: "v_P = v_C + ω × r_P/C" },
      { term: "定轴转动", def: "定轴转动的动力学方程与平动 F=ma 对应，转动惯量关于固定轴计算。", formula: "ΣM₀ = I₀α" },
      { term: "刚体动能与角动量", def: "刚体动能等于质心平动动能加绕质心转动动能；角动量守恒适用于合外力矩为零的系统。", formula: "T = ½mv_C² + ½I_Cω²" },
      { term: "振动先修", def: "小角度摆与弹簧振子满足简谐方程，固有频率只由系统参数决定。", formula: "ωₙ = √(k/m);  θ̈ + (g/L)θ = 0" }
    ],
    quote: { text: "刚体动力学把‘转动惯性’纳入方程，瞬时中心与角动量守恒是简化刚体问题的两把钥匙。", source: "按 Meriam《Engineering Mechanics: Dynamics 9e》Ch 5-8 与 MIT 2.003SC 讲义原意整理" },
    example: {
      q: "求单摆小角度振动的固有频率（摆长 L，重力 g）。",
      steps: [
        "写出小角度运动方程 θ̈ + (g/L)θ = 0；",
        "对比标准简谐方程；",
        "读出固有频率。"
      ],
      answer: "答案：ωₙ = √(g/L)。"
    },
    checklist: [
      "能找平面运动刚体的瞬时中心",
      "会计算定轴转动角加速度",
      "能用能量法解刚体动力学",
      "能判断单自由度系统固有频率"
    ]
  }
};
