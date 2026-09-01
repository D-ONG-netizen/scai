module.exports = {
  "chem-1": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 化学语境",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/1-1-chemistry-in-context",
      note: "物质分类、原子结构与周期表在线教材章节"
    },
    goals: [
      "能区分元素、化合物与混合物",
      "理解原子序数、质量数与同位素",
      "能根据周期表位置推断元素性质"
    ],
    concepts: [
      { term: "物质分类", def: "物质由纯物质与混合物组成；纯物质又分元素和化合物，混合物可分均相与非均相。", formula: "元素 → 原子;  化合物 → 分子/离子" },
      { term: "原子结构", def: "原子由质子、中子和电子组成，质子数决定元素种类，中子数不同产生同位素。", formula: "Z = p⁺;  A = Z + n" },
      { term: "周期表", def: "周期表按原子序数排列，同一族具有相似化学性质；金属、非金属与类金属分区清晰。", formula: "族 = 最外层电子数（主族）" },
      { term: "原子量", def: "原子量是同位素质量按丰度加权的平均值；摩尔把原子尺度与宏观质量联系起来。", formula: "1 mol = 6.022×10²³ 个粒子" }
    ],
    quote: { text: "化学研究的起点是物质的分类与组成：先确定是什么物质、由什么粒子构成，再讨论它如何变化。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 1-2 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "碳-14 的质子数为 6，求其中子数。",
      steps: [
        "质量数 A = 14；",
        "中子数 = A - Z；",
        "代入 Z = 6。"
      ],
      answer: "答案：中子数 = 8。"
    },
    checklist: [
      "能举例说明元素与化合物区别",
      "会计算原子中质子、中子、电子数",
      "能根据周期表位置判断金属性",
      "能理解摩尔与原子量的关系"
    ]
  },
  "chem-2": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 电子构型",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/3-4-electronic-structure-of-atoms-electron-configurations",
      note: "量子数、原子轨道与电子构型课件"
    },
    goals: [
      "理解光量子与能级概念",
      "掌握四个量子数的含义",
      "会写主族元素的电子构型"
    ],
    concepts: [
      { term: "电磁辐射与光子", def: "光由光子组成，光子能量与频率成正比、与波长成反比；原子吸收或发射光子时发生能级跃迁。", formula: "E = hν = hc/λ" },
      { term: "量子数", def: "主量子数 n 决定能层，角量子数 l 决定轨道形状，磁量子数与自旋量子数进一步细分轨道。", formula: "n = 1,2,3...;  l = 0...(n-1)" },
      { term: "电子构型", def: "电子按 Aufbau 原理、泡利不相容原理与洪特规则填充轨道，先填低能量轨道。", formula: "1s² 2s² 2p⁶ ..." },
      { term: "周期规律", def: "同一周期电离能总体增大，同一族原子半径自上而下增大；电子构型解释元素周期性质。", formula: "半径: 同族 ↓↑ 随周期数增大" }
    ],
    quote: { text: "电子不是沿固定轨道绕核旋转，而是按量子化能级分布在轨道中；电子构型决定元素的一切化学行为。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 3-4 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "写出氧（Z = 8）的基态电子构型。",
      steps: [
        "按能量顺序 1s、2s、2p 填充；",
        "共 8 个电子；",
        "用简写形式写出。"
      ],
      answer: "答案：1s² 2s² 2p⁴。"
    },
    checklist: [
      "能计算光子能量与波长",
      "能说出四个量子数含义",
      "能写前 20 号元素电子构型",
      "能解释洪特规则并画轨道图"
    ]
  },
  "chem-3": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 路易斯结构",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/4-4-lewis-symbols-and-structures",
      note: "离子键、共价键、路易斯结构与 VSEPR 课件"
    },
    goals: [
      "区分离子键与共价键的形成条件",
      "会画常见分子的路易斯结构",
      "能用 VSEPR 预测分子几何形状"
    ],
    concepts: [
      { term: "化学键", def: "离子键由电子转移形成正负离子间静电吸引；共价键由原子共享电子对形成。", formula: "电负性差 > 1.7 偏离子键" },
      { term: "路易斯结构", def: "路易斯结构用点表示价电子，遵循八隅体规则；中心原子周围电子对数为 4 时最稳定。", formula: "价电子 = 族数（主族）" },
      { term: "VSEPR 理论", def: "电子对相互排斥使分子采取最舒展构型；电子对包括成键对与孤对。", formula: "AX₂ 直线;  AX₃ 平面三角;  AX₄ 四面体" },
      { term: "键的极性", def: "电负性差异导致键的极性，分子对称可抵消键矩，使整体非极性。", formula: "CO₂ 直线非极性;  H₂O 弯曲极性" }
    ],
    quote: { text: "分子形状不是随意的：电子对之间的排斥力决定了原子如何排列，而形状又决定分子的极性。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 5-7 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "用 VSEPR 预测 CO₂ 的几何形状。",
      steps: [
        "中心碳有 4 个价电子，与两个氧各形成双键；",
        "中心原子周围没有孤对；",
        "两个成键电子对互相远离。"
      ],
      answer: "答案：直线形，键角 180°，分子非极性。"
    },
    checklist: [
      "能根据电负性判断键型",
      "能画出 H₂O、NH₃、CH₄ 的路易斯结构",
      "能预测中心原子杂化类型",
      "能判断分子是否极性"
    ]
  },
  "chem-4": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 化学式与摩尔",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/6-2-determining-empirical-and-molecular-formulas",
      note: "经验式、分子式、摩尔与化学计量在线课件"
    },
    goals: [
      "能配平化学反应方程式",
      "会用摩尔比进行化学计量计算",
      "会判断限制反应物并计算产率"
    ],
    concepts: [
      { term: "化学方程式", def: "配平方程式使反应前后每种原子数目相等，系数表示粒子数或摩尔数之比。", formula: "2H₂ + O₂ → 2H₂O" },
      { term: "摩尔比", def: "方程式系数给出各物质之间的摩尔比例，可用于把已知物质的量换算到其他物质。", formula: "n_B = n_A × (系数_B/系数_A)" },
      { term: "限制反应物", def: "最先耗尽、决定产物上限的反应物是限制反应物；理论产量按它计算。", formula: "理论产量 → 实际产量/理论产量" },
      { term: "溶液浓度", def: "物质的量浓度等于溶质物质的量除以溶液体积，是溶液化学计量计算的基础。", formula: "M = n/V (mol/L)" }
    ],
    quote: { text: "摩尔是化学计量的桥梁：方程式中的系数直接对应摩尔数，从而把宏观质量与微观粒子数联系起来。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 8-9 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "4 mol H₂ 与足量 O₂ 反应，求生成水的物质的量。",
      steps: [
        "写出配平方程 2H₂ + O₂ → 2H₂O；",
        "H₂ 与 H₂O 摩尔比为 1:1；",
        "按比例换算。"
      ],
      answer: "答案：生成 4 mol H₂O。"
    },
    checklist: [
      "能快速配平常见方程式",
      "能完成质量-摩尔-粒子数换算",
      "能判断限制反应物并求理论产量",
      "会用物质的量浓度计算溶液反应"
    ]
  },
  "chem-5": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 量热法",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/9-2-calorimetry",
      note: "焓、热化学与赫斯定律课件"
    },
    goals: [
      "区分系统、环境与热和功",
      "会用 Q = mcΔT 计算热量",
      "能应用赫斯定律求反应焓变"
    ],
    concepts: [
      { term: "热力学体系", def: "研究对象是系统，其余为环境；热量 Q 与功 W 是能量的两种传递方式。", formula: "ΔU = Q + W（化学习惯）" },
      { term: "焓变", def: "恒压下反应吸收或放出的热量用焓变 ΔH 表示；放热反应 ΔH < 0，吸热反应 ΔH > 0。", formula: "ΔH = H(产物) - H(反应物)" },
      { term: "量热法", def: "热量可由温度变化与比热容计算：Q = mcΔT，量热计隔热良好时热量守恒。", formula: "q = mcΔT;  水 c = 4.18 J/(g·°C)" },
      { term: "赫斯定律", def: "反应焓变只取决于初末状态，可以拆成若干步反应之和；标准生成焓用于计算任意反应。", formula: "ΔH° = ΣΔHf°(产物) - ΣΔHf°(反应物)" }
    ],
    quote: { text: "能量变化遵循守恒律：放出的热一定等于系统内能的减少或焓的降低，计算时只关心始态与终态。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 10 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "200 g 水温度升高 5°C，求吸收的热量。",
      steps: [
        "用 q = mcΔT；",
        "代入 m = 200 g，c = 4.18，ΔT = 5；",
        "单位换算为 kJ。"
      ],
      answer: "答案：q ≈ 4180 J = 4.18 kJ。"
    },
    checklist: [
      "能判断吸热放热与 ΔH 符号",
      "会用量热计数据求比热或焓变",
      "能利用赫斯定律组合反应",
      "能用标准生成焓计算反应焓变"
    ]
  },
  "chem-6": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 气体压强",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/8-1-gas-pressure",
      note: "气体定律、相态与溶液课件"
    },
    goals: [
      "掌握理想气体方程与气体定律",
      "理解分子动理论的基本假设",
      "会计算溶液浓度与依数性质"
    ],
    concepts: [
      { term: "理想气体方程", def: "压强、体积、物质的量与温度由 PV = nRT 联系起来，标准状况下 1 mol 气体约 22.4 L。", formula: "PV = nRT;  R = 0.0821 L·atm/(mol·K)" },
      { term: "气体定律", def: "波义耳、查理与阿伏伽德罗定律分别是恒温、恒压与恒温恒压下的特殊关系。", formula: "P₁V₁ = P₂V₂;  V/T = const" },
      { term: "分子间作用力", def: "色散力、偶极-偶极作用与氢键决定物质沸点与相态；氢键最强。", formula: "氢键: N-H, O-H, F-H" },
      { term: "溶液与依数性质", def: "溶质降低蒸气压、升高沸点、降低冰点并产生渗透压，变化量正比于粒子浓度。", formula: "ΔT_b = iK_bm;  Π = iMRT" }
    ],
    quote: { text: "理想气体把分子看成无体积、无相互作用的质点，虽然简化，却准确解释了大多数常见气体行为。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 11-13 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "0.5 mol 气体在 300 K、1 atm 下求体积。",
      steps: [
        "改写理想气体方程 V = nRT/P；",
        "代入 n、R、T、P；",
        "计算结果。"
      ],
      answer: "答案：V ≈ 12.3 L。"
    },
    checklist: [
      "能灵活改写理想气体方程",
      "会进行气体分压计算",
      "能比较分子间作用力强弱",
      "能计算溶液依数性质"
    ]
  },
  "chem-7": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 平衡常数",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/13-2-equilibrium-constants",
      note: "反应速率、化学平衡与勒夏特列原理课件"
    },
    goals: [
      "理解反应速率与速率方程",
      "会写平衡常数表达式",
      "能应用勒夏特列原理判断平衡移动"
    ],
    concepts: [
      { term: "反应速率", def: "反应速率是浓度随时间的变化率；速率方程用浓度幂次表示，阶数由实验确定。", formula: "rate = k[A]ᵐ[B]ⁿ" },
      { term: "碰撞理论", def: "反应需要分子有效碰撞，活化能是反应必须跨越的能量门槛；催化剂降低活化能。", formula: "E_a 越低，速率越大" },
      { term: "平衡常数", def: "平衡时产物浓度幂次乘积与反应物浓度幂次乘积之比为常数 K，只随温度变化。", formula: "K = [C]ᶜ[D]ᵈ/[A]ᵃ[B]ᵇ" },
      { term: "勒夏特列原理", def: "改变浓度、压强或温度时，平衡向抵消该变化的方向移动；催化剂不改变平衡位置。", formula: "加压 → 向气体分子数少的方向移动" }
    ],
    quote: { text: "化学平衡不是反应停止，而是正逆反应速率相等；外界条件改变时，系统会自发调整以削弱这种改变。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 14-18 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "对反应 N₂ + 3H₂ ⇌ 2NH₃，写出 K 表达式。",
      steps: [
        "产物在分子，反应物在分母；",
        "系数作为指数；",
        "只包含气体或溶液浓度。"
      ],
      answer: "答案：K = [NH₃]²/([N₂][H₂]³)。"
    },
    checklist: [
      "能根据数据确定反应级数",
      "能正确写出 K 表达式",
      "能判断浓度、压强、温度对平衡的影响",
      "能区分催化剂与反应条件对平衡的作用"
    ]
  },
  "chem-8": {
    courseware: {
      title: "OpenStax Chemistry: Atoms First 2e · 电极电势",
      source: "OpenStax",
      url: "https://openstax.org/books/chemistry-atoms-first-2e/pages/16-3-electrode-and-cell-potentials",
      note: "氧化还原、电化学与有机化学先修课件"
    },
    goals: [
      "会配平氧化还原反应",
      "理解原电池与电解池的组成",
      "能用标准电极电势判断反应方向"
    ],
    concepts: [
      { term: "氧化还原", def: "氧化是失去电子、氧化数升高；还原是得到电子、氧化数降低；氧化剂本身被还原。", formula: "Zn → Zn²⁺ + 2e⁻（氧化）" },
      { term: "电化学电池", def: "原电池把自发反应的化学能转化为电能，电解池用外加电能驱动非自发反应。", formula: "阳极氧化，阴极还原" },
      { term: "电极电势", def: "标准电极电势衡量还原能力，电池电动势等于正极减负极；E° > 0 表示反应自发。", formula: "E°cell = E°cathode - E°anode" },
      { term: "能斯特方程", def: "非标准浓度下电动势随浓度变化，能斯特方程把 E° 修正为实际 E。", formula: "E = E° - (0.0592/n)logQ（25°C）" }
    ],
    quote: { text: "电化学把电子转移的氧化还原反应拆成两个半反应，电流的方向就是电子定向流动的方向。", source: "按 Burdge《Chemistry: Atoms First 4e》Ch 19-26 与 OpenStax Chemistry Atoms First 2e 原意整理" },
    example: {
      q: "判断 Zn/Zn²⁺ ‖ Cu²⁺/Cu 电池是否自发（E°Zn²⁺/Zn = -0.76 V，E°Cu²⁺/Cu = +0.34 V）。",
      steps: [
        "Cu 为正极、Zn 为负极；",
        "E°cell = 0.34 - (-0.76)；",
        "看 E°cell 符号。"
      ],
      answer: "答案：E°cell = +1.10 V > 0，反应自发。"
    },
    checklist: [
      "能标出各元素氧化数变化",
      "能判断电极与离子流向",
      "会用标准电极电势排序",
      "能识别常见有机官能团"
    ]
  }
};
