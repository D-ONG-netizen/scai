module.exports = {
  "phy-1": {
    courseware: {
      title: "OpenStax University Physics Vol 1 · 位置与速度",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/3-1-position-displacement-and-average-velocity",
      note: "一维运动学在线教材章节"
    },
    goals: [
      "能用 SI 单位与有效数字规范表达物理量",
      "区分位移、路程、平均速度与瞬时速度",
      "会使用匀加速直线运动公式"
    ],
    concepts: [
      { term: "位移与路程", def: "位移是从起点到终点的有向线段，只由初末位置决定；路程是实际轨迹总长度，一般不小于位移大小。", formula: "Δx = x₂ - x₁" },
      { term: "平均速度与瞬时速度", def: "平均速度等于位移除以时间；瞬时速度是时间间隔趋于 0 时的极限，等于位置-时间曲线的切线斜率。", formula: "v̄ = Δx/Δt;  v = dx/dt" },
      { term: "加速度", def: "加速度是速度的变化率，恒加速度运动中速度随时间线性变化，位移按时间二次变化。", formula: "v = v₀ + at;  x = x₀ + v₀t + ½at²" },
      { term: "自由落体", def: "忽略空气阻力时，所有物体在重力作用下具有相同加速度 g，方向竖直向下。", formula: "g ≈ 9.8 m/s²" }
    ],
    quote: { text: "运动学描述运动而不追问原因：它先用位置、速度和加速度把‘运动状态’完整刻画出来。", source: "按 Walker《Principles of Physics 12e》Ch 1-2 与 OpenStax University Physics Vol 1 原意整理" },
    example: {
      q: "汽车从静止以 a = 2 m/s² 匀加速 5 s，求末速度与位移。",
      steps: [
        "用 v = v₀ + at 求末速度；",
        "用 x = v₀t + ½at² 求位移；",
        "检查单位。"
      ],
      answer: "答案：v = 10 m/s，x = 25 m。"
    },
    checklist: [
      "能区分位移与路程",
      "能用图像读出瞬时速度",
      "能规范使用三个匀加速公式",
      "会做单位换算与量纲检查"
    ]
  },
  "phy-2": {
    courseware: {
      title: "OpenStax University Physics Vol 1 · 抛体运动",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/4-3-projectile-motion",
      note: "二维运动、矢量分解与抛体运动课件"
    },
    goals: [
      "能用分量形式处理二维运动",
      "会分解抛体运动为水平匀速与竖直匀加速",
      "能计算射程、最高点与相对速度"
    ],
    concepts: [
      { term: "矢量分量", def: "矢量可沿坐标轴分解为分量，用单位向量 i、j 表示；矢量的运算可转化为分量代数运算。", formula: "v = vₓi + vᵧj" },
      { term: "抛体运动", def: "忽略空气阻力时，水平方向速度不变，竖直方向加速度恒为 -g，两者独立。", formula: "x = v₀ₓt;  y = v₀ᵧt - ½gt²" },
      { term: "射程与最高点", def: "射程出现在落回同高度时，最高点处竖直速度为零。", formula: "R = v₀²sin2θ/g;  H = v₀²sin²θ/(2g)" },
      { term: "相对速度", def: "物体相对地面的速度等于相对参考系速度与参考系速度的矢量叠加。", formula: "v_AB = v_AC + v_CB" }
    ],
    quote: { text: "二维运动并不比一维更难：把速度沿两个垂直方向分解后，每个方向仍是一维运动。", source: "按 Walker《Principles of Physics 12e》Ch 3-4 与 OpenStax University Physics Vol 1 原意整理" },
    example: {
      q: "以 v₀ = 20 m/s、θ = 30° 抛出一球，求水平射程（g = 10 m/s²）。",
      steps: [
        "分解 v₀ₓ = v₀cosθ，v₀ᵧ = v₀sinθ；",
        "套用射程公式 R = v₀²sin2θ/g；",
        "代入数值。"
      ],
      answer: "答案：R = 400·sin60°/10 ≈ 34.6 m。"
    },
    checklist: [
      "能画出抛体轨迹并标注速度分量",
      "能独立计算最高点与落地时间",
      "会处理不同高度抛体问题",
      "能用矢量三角形解决相对速度问题"
    ]
  },
  "phy-3": {
    courseware: {
      title: "OpenStax University Physics Vol 1 · 牛顿第二定律",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law",
      note: "牛顿定律与摩擦力在线课件"
    },
    goals: [
      "能陈述牛顿三定律并识别作用对象",
      "会用 F = ma 建立运动方程",
      "能处理静摩擦、动摩擦与斜面问题"
    ],
    concepts: [
      { term: "牛顿第一定律", def: "不受外力或合力为零的物体保持静止或匀速直线运动，惯性使其保持原状态。", formula: "ΣF = 0 ⇒ v 恒定" },
      { term: "牛顿第二定律", def: "物体的加速度与合力成正比、与质量成反比，方向与合力相同。", formula: "ΣF = ma" },
      { term: "牛顿第三定律", def: "作用力与反作用力大小相等、方向相反，作用在不同物体上，因此不能相互抵消。", formula: "F_AB = -F_BA" },
      { term: "摩擦力", def: "静摩擦随外力的需要变化，达到最大静摩擦后开始滑动；动摩擦大小约等于 μₖN。", formula: "fₛ ≤ μₛN;  fₖ = μₖN" }
    ],
    quote: { text: "加速度与合外力成正比、与质量成反比：牛顿第二定律把‘力如何改变运动’浓缩成一个矢量方程。", source: "OpenStax University Physics Vol 1, Ch 5.3 原文要点；按 Walker Ch 5-6 对照整理" },
    example: {
      q: "质量 10 kg 的木块受水平力 40 N，动摩擦因数 μₖ = 0.2，求加速度。",
      steps: [
        "先求正压力 N = mg = 100 N；",
        "动摩擦 fₖ = μₖN = 20 N；",
        "由 F_net = F - fₖ = ma 求 a。"
      ],
      answer: "答案：a = 2 m/s²。"
    },
    checklist: [
      "能对每个物体画受力图",
      "能正确区分牛顿第三定律与平衡力",
      "会判断静摩擦方向",
      "能处理连接体与斜面问题"
    ]
  },
  "phy-4": {
    courseware: {
      title: "OpenStax University Physics Vol 1 · 功",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/7-1-work",
      note: "功、动能、势能与功率课件"
    },
    goals: [
      "会计算恒力做功并判断正负",
      "能应用动能定理",
      "掌握机械能守恒条件与功率计算"
    ],
    concepts: [
      { term: "功", def: "功等于力沿位移方向的分量与位移大小的乘积；力垂直于位移时做功为零。", formula: "W = Fdcosθ" },
      { term: "动能定理", def: "合外力做的功等于物体动能的变化量，与路径无关，只由初末速度决定。", formula: "W_net = ½mv² - ½mv₀²" },
      { term: "势能", def: "重力势能 U = mgh，弹性势能 U = ½kx²；保守力做功等于势能减少。", formula: "W_c = -ΔU" },
      { term: "机械能与功率", def: "只有保守力做功时机械能守恒；功率是做功的快慢，瞬时功率等于力乘以速度。", formula: "E = K + U;  P = Fv" }
    ],
    quote: { text: "能量既不会凭空产生也不会消失：功是能量转移的量度，机械能守恒只在没有耗散力时成立。", source: "按 Walker《Principles of Physics 12e》Ch 7-8 与 OpenStax University Physics Vol 1 原意整理" },
    example: {
      q: "用 50 N 的水平恒力推箱子移动 4 m，力与位移同向，求做功。",
      steps: [
        "夹角 θ = 0°；",
        "W = Fdcosθ；",
        "代入数值。"
      ],
      answer: "答案：W = 200 J。"
    },
    checklist: [
      "能判断力是否做功及正负",
      "能用动能定理求速度",
      "能写出守恒条件并列出能量方程",
      "会区分平均功率与瞬时功率"
    ]
  },
  "phy-5": {
    courseware: {
      title: "OpenStax University Physics Vol 1 · 冲量与碰撞",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/9-2-impulse-and-collisions",
      note: "动量、冲量、碰撞与质心课件"
    },
    goals: [
      "理解动量与冲量的关系",
      "能应用动量守恒定律",
      "区分弹性、非弹性与完全非弹性碰撞"
    ],
    concepts: [
      { term: "动量与冲量", def: "动量是质量与速度的乘积；冲量是力在时间上的累积，等于动量变化。", formula: "p = mv;  J = FΔt = Δp" },
      { term: "动量守恒", def: "系统合外力为零时，碰撞前后总动量不变，与碰撞细节无关。", formula: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂" },
      { term: "碰撞类型", def: "弹性碰撞动能也守恒；完全非弹性碰撞后粘在一起，动能损失最大。", formula: "弹性: ΔK = 0;  完全非弹性: v₁ = v₂" },
      { term: "质心", def: "质心是系统质量的加权平均位置，外力只改变质心运动，内力不影响质心。", formula: "r_cm = Σmᵢrᵢ/Σmᵢ" }
    ],
    quote: { text: "动量守恒来自牛顿第三定律：系统内部的作用力与反作用力相消，只剩下外部作用改变总动量。", source: "按 Walker《Principles of Physics 12e》Ch 9 与 OpenStax University Physics Vol 1 原意整理" },
    example: {
      q: "质量 2 kg 与 3 kg 两球分别以 4 m/s 与 -1 m/s 相向运动并完全非弹性碰撞，求共同速度。",
      steps: [
        "写出总动量 m₁u₁ + m₂u₂；",
        "完全非弹性碰撞后 v 相同；",
        "由动量守恒解 v。"
      ],
      answer: "答案：v = 1 m/s。"
    },
    checklist: [
      "能画出碰撞前后动量矢量",
      "能判断系统动量是否守恒",
      "能区分动能是否守恒",
      "会计算质心位置"
    ]
  },
  "phy-6": {
    courseware: {
      title: "OpenStax University Physics Vol 1 · 力矩",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/10-6-torque",
      note: "转动运动学、力矩与角动量课件"
    },
    goals: [
      "掌握转动运动学量及其与平动的对应",
      "会计算力矩与转动惯量",
      "理解角动量守恒条件"
    ],
    concepts: [
      { term: "力矩", def: "力矩等于力乘以力臂，是改变转动状态的原因；方向由右手定则决定。", formula: "τ = rFsinθ" },
      { term: "转动惯量", def: "转动惯量衡量物体转动的惯性，等于质量元乘以到轴距离平方之和；轴位置不同则不同。", formula: "I = Σmᵢrᵢ²;  圆盘 I = ½MR²" },
      { term: "转动动力学", def: "转动第二定律把力矩、转动惯量与角加速度联系起来，和平动的 F=ma 完全对应。", formula: "Στ = Iα" },
      { term: "角动量", def: "角动量 L = Iω，合外力矩为零时角动量守恒；无滑动滚动满足 v = ωR。", formula: "L = Iω;  v = ωR" }
    ],
    quote: { text: "转动与平动共享同一套物理思想：质量对应转动惯量，力对应力矩，动量对应角动量。", source: "按 Walker《Principles of Physics 12e》Ch 10-11 与 OpenStax University Physics Vol 1 原意整理" },
    example: {
      q: "半径 0.5 m 处施加 10 N 的切向力，求对转轴的力矩。",
      steps: [
        "切向力与力臂夹角为 90°；",
        "τ = rFsinθ；",
        "代入数值。"
      ],
      answer: "答案：τ = 5 N·m。"
    },
    checklist: [
      "能写出角位移、角速度、角加速度关系",
      "会计算常见刚体的转动惯量",
      "能用平行轴定理换算转动惯量",
      "能判断角动量守恒情形"
    ]
  },
  "phy-7": {
    courseware: {
      title: "OpenStax University Physics Vol 1 · 万有引力",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation",
      note: "平衡、引力与流体静力学课件"
    },
    goals: [
      "会用两个平衡条件解决静力学问题",
      "掌握万有引力定律与重力场",
      "理解压强、浮力与流体连续性"
    ],
    concepts: [
      { term: "静态平衡", def: "物体静止时合外力为零且对任意轴的合力矩为零；支点选取可任意但常选未知力作用点。", formula: "ΣF = 0;  Στ = 0" },
      { term: "万有引力", def: "任意两质点之间都存在引力，大小与质量乘积成正比、与距离平方成反比。", formula: "F = Gm₁m₂/r²;  G = 6.674×10⁻¹¹" },
      { term: "流体压强", def: "液体内部压强随深度线性增加，同一水平面压强相同；浮力等于排开流体重力。", formula: "P = P₀ + ρgh;  F_b = ρgV" },
      { term: "流体动力学", def: "理想流体满足连续性方程与伯努利方程：速度大处压强小，总能量沿流线守恒。", formula: "A₁v₁ = A₂v₂;  P + ½ρv² + ρgh = const" }
    ],
    quote: { text: "平衡不是没有力，而是所有力与力矩恰好相互抵消；流体问题则把压力看成无数微小接触力的总和。", source: "按 Walker《Principles of Physics 12e》Ch 12-14 与 OpenStax University Physics Vol 1 原意整理" },
    example: {
      q: "求水深 10 m 处相对大气压的液体压强（ρ = 1000 kg/m³，g = 10 m/s²）。",
      steps: [
        "液体压强 P = ρgh；",
        "代入密度、重力加速度与深度；",
        "结果为表压。"
      ],
      answer: "答案：P = 1.0×10⁵ Pa。"
    },
    checklist: [
      "能画出平衡物体的受力与力臂",
      "会解三点力平衡问题",
      "能计算浮力并判断漂浮条件",
      "会用连续性方程判断流速变化"
    ]
  },
  "phy-8": {
    courseware: {
      title: "OpenStax University Physics Vol 1 · 简谐运动",
      source: "OpenStax",
      url: "https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion",
      note: "振动、波动与热学在线课件"
    },
    goals: [
      "理解简谐运动的位移方程与能量",
      "掌握波动三要素与驻波",
      "会用热学公式与热力学第一定律"
    ],
    concepts: [
      { term: "简谐运动", def: "回复力与位移成正比且方向相反，物体做简谐运动；位移随时间按余弦变化。", formula: "x = Acos(ωt + φ);  ω = √(k/m)" },
      { term: "波动", def: "波速等于频率乘波长；机械波传播能量和动量，但不传播介质本身。", formula: "v = fλ" },
      { term: "热量与比热", def: "吸收的热量等于质量、比热容与温度变化之积；相变时温度不变但需潜热。", formula: "Q = mcΔT;  Q = mL" },
      { term: "热力学第一定律", def: "系统内能变化等于吸收热量减对外做功；绝热、等温、等压是三种典型过程。", formula: "ΔU = Q - W;  PV = nRT" }
    ],
    quote: { text: "振动是波动的源头：每个质点的简谐运动相互传递，就形成了空间中传播的波。", source: "按 Walker《Principles of Physics 12e》Ch 15-20 与 OpenStax University Physics Vol 1 原意整理" },
    example: {
      q: "质量 0.5 kg 的弹簧振子劲度系数 k = 200 N/m，求周期。",
      steps: [
        "先求角频率 ω = √(k/m)；",
        "周期 T = 2π/ω；",
        "代入数值。"
      ],
      answer: "答案：ω = 20 rad/s，T = π/10 ≈ 0.314 s。"
    },
    checklist: [
      "能写出简谐运动位移、速度、加速度关系",
      "能根据波形图读出振幅与波长",
      "会判断驻波波节位置",
      "能应用热力学第一定律分析过程"
    ]
  }
};
