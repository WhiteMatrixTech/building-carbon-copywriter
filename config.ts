/**
 * 首页相关文案
 */
 export const home = {
  /**
   * 首页轮播图
   */
  carousels: [
    {
      title: 'xxx',
      subtitle: 'xxxxxx',
      bgImage: 'xxx'
    }
  ],
  /**
   * 项目快速入口
   */
  projects: [
   {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(1).png',
      title: '南京长江二桥项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(3).png',
      title: '建宁西路过江隧道项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(9).png',
      title: '南京绕城高速项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(5).png',
      title: '鼓楼区医院项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(6).png',
      title: '南京地铁四号线项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(2).png',
      title: '南京长江大桥项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(7).png',
      title: '南京长江三桥项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(3).png',
      title: '和燕路过江通道项目',
      link: '/'
    },
        {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(4).png',
      title: '浦口快速路项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(1).png',
      title: '南京长江二桥项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(7).png',
      title: '南京长江五桥项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(8).png',
      title: '仙新路过江通道项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(10).png',
      title: '南中国第二历史档案馆项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(8).png',
      title: '横江大道项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(9).png',
      title: '宁合高速公路项目',
      link: '/'
    },
    {
      cover: 'https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(4).png',
      title: '宁马高速公路项目',
      link: '/'
    }
  ]
}

/**
 * 项目总览
 */
export const projectView = {
  // 项目列表
  projectList: [
    {
      id: 'CJEQ-01',
      name: '南京长江二桥项目',
      currentValue: '2039.14 / 3020.55',
      designValue: '',
      percentage: '',
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '8000',
      department: '桥梁部门'
    },
    {
      id: 'JNXLGJSD-02',
      name: '建宁西路过江隧道项目',
      currentValue: '2910.3 / 4021.52',
      designValue: '',
      percentage: '',
      status: 1, // 1 正常 0 预警  可参考
      type: 2, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '3000',
      department: '隧道部门'
    },
    {
      id: 'RCGS-03',
      name: '南京绕城高速项目',
      currentValue: '703.12 / 780.33',
      designValue: '',
      percentage: '',
      status: 2, // 1 正常 0 预警  可参考
      type: 3,  //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '2000',
      department: '道路部门'
    },
    {
      id: 'GLYY-04',
      name: '鼓楼区医院项目',
      currentValue: '1034.35 / 2308.43',
      designValue: '',
      percentage: '',
      status: 1, // 1 正常 0 预警  可参考
      type: 4, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '3500',
      department: '建筑部门'
    },
    {
      id: 'DTSHX-05',
      name: '南京地铁四号线项目',
      currentValue: '2201.09 / 2300.78',
      designValue: '3020.55t',
      percentage: '67.51%',
      status: 0, // 1 正常 0 预警  可参考
      type: 5, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '5000',
      department: '地铁部门'
    },
    {
      id: 'CJDQ-06',
      name: '南京长江大桥项目',
      currentValue: '57440.15 / 80600.13',
      designValue: '',
      percentage: '',
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '35000',
      department: '桥梁部门'
    },
    {
      id: 'CJSQ-07',
      name: '南京长江三桥项目',
      currentValue: '8200.49 / 10302.55',
      designValue: '',
      percentage: '',
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '12000',
      department: '桥梁部门'
    },
    {
      id: 'HYLGJTD-08',
      name: '和燕路过江通道项目',
      currentValue: '6900.73 / 6550.23',
      designValue: '',
      percentage: '',
      status: 0, // 1 正常 0 预警  可参考
      type: 2, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '7500元',
      department: '隧道部门'
    },
    {
      id: 'CJEQ-10',
      name: '南京长江二桥项目',
      currentValue: '22402.59 / 47620.78',
      designValue: '',
      percentage: '',
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '12500',
      department: '桥梁部门'
    },
    {
      id: 'PKKSL-09',
      name: '浦口快速路项目',
      currentValue: '393.15 / 600.3',
      designValue: '',
      percentage: '',
      status: 1, // 1 正常 0 预警  可参考
      type: 3, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '2000',
      department: '道路部门'
    },
    {
      id: 'ZYSC-02',
      name: '南京长江五桥项目',
      currentValue: '4849.33 / 7293.15',
      designValue: '',
      percentage: '',
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: '5000',
      department: '桥梁部门'
    }
  ],
  // 项目类型select列表
  projectType: [
    {
      name: '桥梁项目',
      value: '1'
    },
    {
      name: '隧道项目',
      value: '2'
    },
    {
      name: '道路项目',
      value: '3'
    },
    {
      name: '建筑项目',
      value: '4'
    },
    {
      name: '地铁项目',
      value: '5'
    }
  ],
  // 月度select列表数据
  monthList: ['月度统计','季度统计','年度统计']
}

/**
 * 项目检索
 */

export const projectQuery = {
  // 项目名称
  projectName: [
    {
      label: '南京跨省高架项目',
      value: 1,
      id: 1
    },
    {
      label: '上海跨省高架项目',
      value: 101,
      id: 101
    },
    {
      label: '武汉跨省高架项目',
      value: 201,
      id: 201
    },
    {
      label: '长春跨省高架项目',
      value: 301,
      id: 301
    },
    {
      label: '湖南跨省高架项目',
      value: 4011,
      id: 4011
    },
    {
      label: '北京跨省高架项目',
      value: 501,
      id: 501
    },
    {
      label: '深圳跨省高架项目',
      value: 61,
      id: 61
    },
    {
      label: '南京1跨省高架项目',
      value: 62,
      id: 62
    },
    {
      label: '南京2跨省高架项目',
      value: 63,
      id: 63
    },
    {
      label: '南京3跨省高架项目',
      value: 64,
      id: 64
    },
    {
      label: '南京4跨省高架项目',
      value: 65,
      id: 65
    },
    {
      label: '南京5跨省高架项目',
      value: 66,
      id: 66
    },
  ],
  // 项目标段
  projectSection: [
    {
      label: '标段1：桥梁基础工程',
      value: 2,
      parent: '01',
      id: 2
    },
    {
      label: '标段2：桥面及附属工程',
      value: 3,
      id: 3,
      parent: '01'
    }
  ],
  // 子工程,
  subProject: [
    {
      label: '基础及下部构造',
      value: 4,
      id: 4,
      parent: '02'
    },
    {
      label: '上部分构造现场浇筑',
      value: 5,
      id: 5,
      parent: '03'
    }
  ],
  // 构造
  projectConstruct: [
    {
      label: '桥台',
      value: 6,
      id: 6,
      parent: '04'
    },
    {
      label: '桥墩',
      value: 7,
      id: 7,
      parent: '04'
    },
    {
      label: '桥面',
      value: 8,
      id: 8,
      parent: '05'
    },
    {
      label: '测试测试',
      value: 123,
      id: 123,
      parent: '2222'
    }
  ],
  // 构建
  projectComponent: [
    {
      label: '桥台A',
      value: 9,
      id: 9,
      parent: '06'
    },
    {
      label: '桥台B',
      value: 10,
      id: 10,
      parent: '06'
    },
    {
      label: '桥墩A',
      value: 11,
      id: 11,
      parent: '07'
    },
    {
      label: '桥墩B',
      value: 12,
      id: 12,
      parent: '07'
    },
    {
      label: '桥面A',
      value: 13,
      id: 13,
      parent: '08'
    }
  ],
  // 工序
  projectProcess: [
    {
      label: '扩大基础',
      value: 14,
      id: 14,
      parent: '09'
    },
    {
      label: '台身施工',
      value: 15,
      id: 15,
      parent: '09'
    },
    {
      label: '台背回填',
      value: 16,
      id: 16,
      parent: '09'
    }
  ],
  // 材料 
  projectMaterial: [
    {
      label: '混凝土',
      value: 17,
      id: 17,
      parent: '14'
    },
    {
      label: '砂浆',
      value: 18,
      id: 18,
      parent: '14'
    },
    {
      label: '地板',
      value: 19,
      id: 19,
      parent: '15'
    },
    {
      label: '钢筋',
      value: 20,
      id: 20,
      parent: '15'
    }
  ],
  // 供应商
  projectSupplier: [
    {
      label: '南京宁新普迪混凝土有限公司',
      value: 21,
      id: 21,
      parent: '17'
    },
    {
      label: '南京新港混凝土有限公司',
      value: 22,
      id: 22,
      parent: '17'
    },
    {
      label: '南京恒基混凝土有限公司',
      value: 23,
      id: 23,
      parent: '17'
    },
    {
      label: '苏州荣平砂浆建材有限公司',
      value: 24,
      id: 24,
      parent: '18'
    },
    {
      label: '杭州久亚发建筑材料有限公司',
      value: 25,
      id: 25,
      parent: '18'
    }
  ],
}

/**
 * 材料总览
 */
 export const materialsView = {
  // 材料列表
  materialsList: [
    {
      id: 'DYPDHNT-30',
      type: 1, //1 混凝土 2 装饰石材 3 砂浆 4 地板 5 钢筋 6 空调板 7 木材 8 陶瓷 9 水泥 10 陶瓷
      name: '商品混凝土',
      specification: 'C30',
      carbon: '450.246kgCO2/t',
      level: 2,
      department: '南京普迪混凝土有限公司'
    },
    {
      id: 'PDCSNJNHNT-20',
      type: 1, //1 混凝土 2 装饰石材 3 砂浆 4 地板 5 钢筋 6 空调板 7 木材 8 陶瓷 9 水泥 10 陶瓷
      name: '纯水泥胶凝混凝土',
      specification: 'C20',
      carbon: '451.372kgCO2/m3',
      level: 3,
      department: '南京普迪混凝土有限公司'
    },
    {
      id: 'ZLSCSMB-800',
      type: 2, //1 混凝土 2 装饰石材 3 砂浆 4 地板 5 钢筋 6 空调板 7 木材 8 陶瓷 9 水泥 10 陶瓷
      name: '石材饰面板',
      specification: '800mm×800mm',
      carbon: '220kgCO2/t',
      level: 2,
      department: '南京中联混凝土有限公司'
    },
    {
      id: 'DYPDHNT-30',
      type: 1, //1 混凝土 2 装饰石材 3 砂浆 4 地板 5 钢筋 6 空调板 7 木材 8 陶瓷 9 水泥 10 陶瓷
      name: '商品混凝土',
      specification: 'C30',
      carbon: '450.246kgCO2/t',
      level: 2,
      department: '南京普迪混凝土有限公司'
    }
  ],
  // 材料类型select列表
  materialsType: [
    {
      name: '混凝土',
      value: '1'
    },
    {
      name: '装饰石材',
      value: '2'
    },
    {
      name: '砂浆',
      value: '3'
    },
    {
      name: '地板',
      value: '4'
    },
    {
      name: '钢筋',
      value: '5'
    },
    {
      name: '空调板',
      value: '6'
    },
    {
      name: '木材',
      value: '7'
    },
    {
      name: '陶瓷',
      value: '8'
    },
    {
      name: '水泥',
      value: '9'
    },
    {
      name: '陶瓷',
      value: '10'
    }
  ],
  // 月度select列表数据
  monthList: ['月度统计','季度统计','年度统计']
}

/**
 * 总包总览 
 */
 export const totalView = {
  // 总包列表
  totalList: [
    {
      name: '中建一局',
      totalcarbon: '30492.56',
      designcarbon: '50395.44',
      type: 2,
      percent: '76%'
    },
    {
      name: '中建四局',
      totalcarbon: '43203.73',
      designcarbon: '73025.34',
      type: 1,
      percent: '81%'
    }
  ],
  // 总包类型select列表
  totalType: [
    {
      name: '1',
      value: '1'
    },
    {
      name: '2',
      value: '2'
    },
    {
      name: '3',
      value: '3'
    },
    {
      name: '4',
      value: '4'
    }
  ],
  // 月度select列表数据
  monthList: ['月度统计','季度统计','年度统计']
}

/**
 * 供应商总览
 */
 export const supplierView = {
  // 供应商列表
  supplierList: [
    {
      id: 'HNT-NJNXPD',
      name: '南京宁新普迪混凝土有限公司',
      type: 1, //1 混凝土 2 水泥 3 砂浆 4 石材 5 涂料 6 木材
      level: 2,
      carbon: '450.246kgCO2/t',
    },
    {
      id: 'HNT-NJXG',
      name: '南京新港混凝土有限公司',
      type: 1, //1 混凝土 2 水泥 3 砂浆 4 石材 5 涂料 6 木材
      level: 1,
      carbon: '27439.35',
    }
  ],
  // 供应商类型select列表
  supplierType: [
    {
      name: '混凝土',
      value: '1'
    },
    {
      name: '水泥',
      value: '2'
    },
    {
      name: '砂浆',
      value: '3'
    },
    {
      name: '石材',
      value: '4'
    },
    {
      name: '涂料',
      value: '5'
    },
    {
      name: '木材',
      value: '6'
    }
  ],
  // 月度select列表数据
  monthList: ['月度统计','季度统计','年度统计']
}
