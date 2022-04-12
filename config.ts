/**
 * 首页相关文案
 */
export const home = {
  /**
   * 首页轮播图
   */
  carousels: [
    {
      title: "xxx",
      subtitle: "xxxxxx",
      bgImage: "xxx",
    },
  ],
  /**
   * 项目快速入口
   */
  projects: [
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(1).png",
      title: "南京长江二桥项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(3).png",
      title: "建宁西路过江隧道项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(9).png",
      title: "南京绕城高速项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(5).png",
      title: "鼓楼区医院项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(6).png",
      title: "南京地铁四号线项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(2).png",
      title: "南京长江大桥项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(7).png",
      title: "南京长江三桥项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(3).png",
      title: "和燕路过江通道项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(4).png",
      title: "浦口快速路项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(1).png",
      title: "南京长江二桥项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(7).png",
      title: "南京长江五桥项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(8).png",
      title: "仙新路过江通道项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(10).png",
      title: "南中国第二历史档案馆项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(8).png",
      title: "横江大道项目",
      link: "/",
    },
    {
      cover:
        "https://matrixlabs-resource.s3.ap-northeast-1.amazonaws.com/Test+img/Rectangle+5+(4).png",
      title: "宁马高速公路项目",
      link: "/",
    },
  ],
  /**
   * 实时监控大屏1
   */
  monitoringA: [
    {
      id: "1",
      name: "南京中央商城项目",
      currentValue: "2039.14 3020.55 68%",
      status: 1, // 1 正常 0 预警
      link: "https://build-carbon.oss-cn-beijing.aliyuncs.com/projectDetails?projectId=1&queryGroup=%5B%5D",
    },
  ],
  /**
   * 实时监控大屏2
   */
  monitoringB: [
    {
      id: "1",
      name: "南京市图书馆项目",
      currentValue: "703.12 780.33 90%",
      status: 1, // 1 正常 0 预警
      link: "https://build-carbon.oss-cn-beijing.aliyuncs.com/projectDetails?projectId=1&queryGroup=%5B%5D",
    },
  ],
};

/**
 * 项目总览
 */
export const projectView = {
  // 项目列表
  projectList: [
    {
      id: "CJEQ-01",
      name: "南京长江二桥项目",
      currentValue: "2039.14 / 3020.55",
      designValue: "",
      percentage: "",
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "8000",
      department: "桥梁部门",
    },
    {
      id: "JNXLGJSD-02",
      name: "建宁西路过江隧道项目",
      currentValue: "2910.3 / 4021.52",
      designValue: "",
      percentage: "",
      status: 1, // 1 正常 0 预警  可参考
      type: 2, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "3000",
      department: "隧道部门",
    },
    {
      id: "RCGS-03",
      name: "南京绕城高速项目",
      currentValue: "703.12 / 780.33",
      designValue: "",
      percentage: "",
      status: 2, // 1 正常 0 预警  可参考
      type: 3, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "2000",
      department: "道路部门",
    },
    {
      id: "GLYY-04",
      name: "鼓楼区医院项目",
      currentValue: "1034.35 / 2308.43",
      designValue: "",
      percentage: "",
      status: 1, // 1 正常 0 预警  可参考
      type: 4, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "3500",
      department: "建筑部门",
    },
    {
      id: "DTSHX-05",
      name: "南京地铁四号线项目",
      currentValue: "2201.09 / 2300.78",
      designValue: "3020.55t",
      percentage: "67.51%",
      status: 0, // 1 正常 0 预警  可参考
      type: 5, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "5000",
      department: "地铁部门",
    },
    {
      id: "CJDQ-06",
      name: "南京长江大桥项目",
      currentValue: "57440.15 / 80600.13",
      designValue: "",
      percentage: "",
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "35000",
      department: "桥梁部门",
    },
    {
      id: "CJSQ-07",
      name: "南京长江三桥项目",
      currentValue: "8200.49 / 10302.55",
      designValue: "",
      percentage: "",
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "12000",
      department: "桥梁部门",
    },
    {
      id: "HYLGJTD-08",
      name: "和燕路过江通道项目",
      currentValue: "6900.73 / 6550.23",
      designValue: "",
      percentage: "",
      status: 0, // 1 正常 0 预警  可参考
      type: 2, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "7500元",
      department: "隧道部门",
    },
    {
      id: "CJEQ-10",
      name: "南京长江二桥项目",
      currentValue: "22402.59 / 47620.78",
      designValue: "",
      percentage: "",
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "12500",
      department: "桥梁部门",
    },
    {
      id: "PKKSL-09",
      name: "浦口快速路项目",
      currentValue: "393.15 / 600.3",
      designValue: "",
      percentage: "",
      status: 1, // 1 正常 0 预警  可参考
      type: 3, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "2000",
      department: "道路部门",
    },
    {
      id: "ZYSC-02",
      name: "南京长江五桥项目",
      currentValue: "4849.33 / 7293.15",
      designValue: "",
      percentage: "",
      status: 1, // 1 正常 0 预警  可参考
      type: 1, //1 桥梁 2 隧道 3 道路 4 建筑 5 地铁
      volume: "5000",
      department: "桥梁部门",
    },
  ],
  // 项目类型select列表
  projectType: [
    {
      name: '所有',
      value: '0'
    },
    {
      name: "桥梁项目",
      value: "1",
    },
    {
      name: "隧道项目",
      value: "2",
    },
    {
      name: "道路项目",
      value: "3",
    },
    {
      name: "建筑项目",
      value: "4",
    },
    {
      name: "地铁项目",
      value: "5",
    },
  ],
  // 月度select列表数据
  monthList: ["月度统计", "季度统计", "年度统计"],
};

/**
 * 项目检索
 */

export const projectQuery = {
  // 项目名称
  projectName: [
    {
      type: 0,
      label: "南京跨省高架项目",
      value: 1,
      id: 1,
      // 项目的图表mock
      projectCurrentEmission: 2049,
      projectDesignedEmission: 3020,
      unitCurrentEmission: 1230,
      unitDesignedEmission: 1230,
      constructionProgress: 64,
      buildEmission: {
        currentEmission: 38,
        designedEmission: 100,
      },
      transportEmission: {
        currentEmission: 50,
        designedEmission: 100,
      },
      constructionEmission: {
        currentEmission: 40,
        designedEmission: 50,
      },
    },
    {
      type: 0,
      label: "上海跨省高架项目",
      value: 101,
      id: 101,
      projectCurrentEmission: 1026,
      projectDesignedEmission: 1607,
      unitCurrentEmission: 2922,
      unitDesignedEmission: 2969,
      constructionProgress: 39,
      buildEmission: {
        currentEmission: 82,
        designedEmission: 61,
      },
      transportEmission: {
        currentEmission: 100,
        designedEmission: 98,
      },
      constructionEmission: {
        currentEmission: 58,
        designedEmission: 26,
      },
    },
    {
      type: 0,
      label: "武汉跨省高架项目",
      value: 201,
      id: 201,
      projectCurrentEmission: 2634,
      projectDesignedEmission: 2565,
      unitCurrentEmission: 1740,
      unitDesignedEmission: 2774,
      constructionProgress: 87,
      buildEmission: {
        currentEmission: 27,
        designedEmission: 89,
      },
      transportEmission: {
        currentEmission: 13,
        designedEmission: 65,
      },
      constructionEmission: {
        currentEmission: 66,
        designedEmission: 11,
      },
    },
    {
      type: 0,
      label: "长春跨省高架项目",
      value: 301,
      id: 301,
      projectCurrentEmission: 2020,
      projectDesignedEmission: 2972,
      unitCurrentEmission: 2868,
      unitDesignedEmission: 2642,
      constructionProgress: 22,
      buildEmission: {
        currentEmission: 69,
        designedEmission: 17,
      },
      transportEmission: {
        currentEmission: 78,
        designedEmission: 86,
      },
      constructionEmission: {
        currentEmission: 18,
        designedEmission: 36,
      },
    },
    {
      type: 0,
      label: "湖南跨省高架项目",
      value: 4011,
      id: 4011,
      projectCurrentEmission: 2979,
      projectDesignedEmission: 2704,
      unitCurrentEmission: 1115,
      unitDesignedEmission: 1708,
      constructionProgress: 51,
      buildEmission: {
        currentEmission: 70,
        designedEmission: 39,
      },
      transportEmission: {
        currentEmission: 49,
        designedEmission: 28,
      },
      transportWarning: true,
      constructionEmission: {
        currentEmission: 48,
        designedEmission: 75,
      },
    },
    {
      type: 0,
      label: "北京跨省高架项目",
      value: 501,
      id: 501,
      projectCurrentEmission: 2769,
      projectDesignedEmission: 2433,
      unitCurrentEmission: 2673,
      unitDesignedEmission: 1228,
      constructionProgress: 71,
      buildEmission: {
        currentEmission: 48,
        designedEmission: 63,
      },
      transportEmission: {
        currentEmission: 49,
        designedEmission: 25,
      },
      transportWarning: true,
      constructionEmission: {
        currentEmission: 85,
        designedEmission: 31,
      },
      constructWarning: true,
      warning: true
    },
    {
      type: 0,
      label: "深圳跨省高架项目",
      value: 61,
      id: 61,

      projectCurrentEmission: 1851,
      projectDesignedEmission: 1915,
      unitCurrentEmission: 2438,
      unitDesignedEmission: 1653,
      constructionProgress: 69,
      buildEmission: {
        currentEmission: 15,
        designedEmission: 34,
      },
      transportEmission: {
        currentEmission: 53,
        designedEmission: 100,
      },
      constructionEmission: {
        currentEmission: 81,
        designedEmission: 87,
      },
    },
    {
      type: 0,
      label: "南京1跨省高架项目",
      value: 62,
      id: 62,
      projectCurrentEmission: 1063,
      projectDesignedEmission: 2533,
      unitCurrentEmission: 2970,
      unitDesignedEmission: 1040,
      constructionProgress: 69,
      buildEmission: {
        currentEmission: 60,
        designedEmission: 18,
      },
      transportEmission: {
        currentEmission: 71,
        designedEmission: 32,
      },
      constructionEmission: {
        currentEmission: 35,
        designedEmission: 42,
      },
    },
    {
      type: 0,
      label: "南京2跨省高架项目",
      value: 63,
      id: 63,
      projectCurrentEmission: 2714,
      projectDesignedEmission: 2447,
      unitCurrentEmission: 1903,
      unitDesignedEmission: 1236,
      constructionProgress: 40,
      buildEmission: {
        currentEmission: 28,
        designedEmission: 12,
      },
      transportEmission: {
        currentEmission: 88,
        designedEmission: 32,
      },
      constructionEmission: {
        currentEmission: 29,
        designedEmission: 39,
      },
    },
    {
      type: 0,
      label: "南京3跨省高架项目",
      value: 64,
      id: 64,
      projectCurrentEmission: 1531,
      projectDesignedEmission: 2990,
      unitCurrentEmission: 2734,
      unitDesignedEmission: 1814,
      constructionProgress: 71,
      buildEmission: {
        currentEmission: 25,
        designedEmission: 66,
      },
      transportEmission: {
        currentEmission: 65,
        designedEmission: 62,
      },
      constructionEmission: {
        currentEmission: 91,
        designedEmission: 84,
      },
    },
    {
      type: 0,
      label: "南京4跨省高架项目",
      value: 65,
      id: 65,

      projectCurrentEmission: 2361,
      projectDesignedEmission: 2480,
      unitCurrentEmission: 1479,
      unitDesignedEmission: 2977,
      constructionProgress: 88,
      buildEmission: {
        currentEmission: 57,
        designedEmission: 98,
      },
      transportEmission: {
        currentEmission: 91,
        designedEmission: 26,
      },
      constructionEmission: {
        currentEmission: 53,
        designedEmission: 15,
      },
    },
    {
      type: 0,
      label: "南京5跨省高架项目",
      value: 66,
      id: 66,
      projectCurrentEmission: 2645,
      projectDesignedEmission: 2470,
      unitCurrentEmission: 2358,
      unitDesignedEmission: 1132,
      constructionProgress: 22,
      buildEmission: {
        currentEmission: 86,
        designedEmission: 83,
      },
      transportEmission: {
        currentEmission: 33,
        designedEmission: 77,
      },
      constructionEmission: {
        currentEmission: 52,
        designedEmission: 84,
      },
    },
  ],
  // 项目标段
  projectSection: [
    {
      type: 1,
      label: "标段1：桥梁基础工程",
      value: 2,
      parent: "01",
      id: 2,
      subProjectCurrentEmission: 1678,
      subProjectDesignedEmission: 1632,
      unitCurrentEmission: 1568,
      emissionRatio: 66,
      unitDesignedEmission: 2125,
      constructionProgress: 48,
      buildEmission: {
        currentEmission: 26,
        designedEmission: 69,
      },
      transportEmission: {
        currentEmission: 35,
        designedEmission: 78,
      },
      constructionEmission: {
        currentEmission: 87,
        designedEmission: 33,
      },
      designedEmissionRatio: {
        buildRatio: 11,
        transportRatio: 17,
        workRatio: 31,
      },
      actuallyEmissionRatio: {
        buildRatio: 14,
        transportRatio: 15,
        workRatio: 24,
      },
      designedEmissionTrend: [
        17627, 10017, 12818, 27761, 21970, 17797, 22691, 21192, 12782, 20468,
        13195, 12292,
      ],
      actuallyEmissionTrend: [
        27123, 16853, 28683, 27329, 20332, 24707, 17850, 11739,
      ],
    },
    {
      type: 1,
      label: "标段2：桥面及附属工程",
      value: 3,
      id: 3,
      parent: "01",
      subProjectCurrentEmission: 1926,
      subProjectDesignedEmission: 1051,
      unitCurrentEmission: 1573,
      emissionRatio: 45,
      unitDesignedEmission: 2499,
      constructionProgress: 76,
      buildEmission: {
        currentEmission: 92,
        designedEmission: 24,
      },
      transportEmission: {
        currentEmission: 19,
        designedEmission: 85,
      },
      constructionEmission: {
        currentEmission: 80,
        designedEmission: 32,
      },
      designedEmissionRatio: {
        buildRatio: 15,
        transportRatio: 31,
        workRatio: 17,
      },
      actuallyEmissionRatio: {
        buildRatio: 17,
        transportRatio: 15,
        workRatio: 19,
      },
      designedEmissionTrend: [
        25576, 23083, 23992, 25398, 27098, 29514, 10840, 27774, 14013, 14260,
        22517, 18307,
      ],
      actuallyEmissionTrend: [
        21687, 18692, 17742, 21254, 12607, 25602, 13812, 22416,
      ],
    },
    {
      type: 1,
      label: "标段3上海铁路分段",
      value: 10101,
      id: 10101,
      parent: "101",
      subProjectCurrentEmission: 1949,
      subProjectDesignedEmission: 1184,
      unitCurrentEmission: 1568,
      emissionRatio: 91,
      unitDesignedEmission: 2888,
      constructionProgress: 63,
      buildEmission: {
        currentEmission: 92,
        designedEmission: 73,
      },
      transportEmission: {
        currentEmission: 89,
        designedEmission: 21,
      },
      constructionEmission: {
        currentEmission: 93,
        designedEmission: 39,
      },
      designedEmissionRatio: {
        buildRatio: 18,
        transportRatio: 37,
        workRatio: 22,
      },
      actuallyEmissionRatio: {
        buildRatio: 19,
        transportRatio: 13,
        workRatio: 38,
      },
      designedEmissionTrend: [
        10043, 24199, 12860, 12262, 28343, 12749, 10128, 11826, 19207, 12176,
        14011, 12339,
      ],
      actuallyEmissionTrend: [
        12184, 16899, 10349, 20660, 17644, 24981, 16790, 10328,
      ],
    },
  ],
  // 子工程,
  subProject: [
    {
      type: 2,
      label: "基础及下部构造",
      value: 4,
      id: 4,
      parent: "02",
      // 子工程的图表mock
      subProjectCurrentEmission: 2049,
      subProjectDesignedEmission: 3020,
      unitCurrentEmission: 1230,
      unitDesignedEmission: 1230,
      emissionRatio: 64,
      constructionProgress: 64,
      buildEmission: {
        currentEmission: 25,
        designedEmission: 50,
      },
      transportEmission: {
        currentEmission: 25,
        designedEmission: 50,
      },
      constructionEmission: {
        currentEmission: 25,
        designedEmission: 50,
      },
      designedEmissionRatio: {
        buildRatio: 12,
        transportRatio: 10,
        workRatio: 16,
      },
      actuallyEmissionRatio: {
        buildRatio: 18,
        transportRatio: 29,
        workRatio: 13,
      },
      designedEmissionTrend: [
        10000, 12000, 10000, 15000, 16000, 17000, 14000, 15000, 17000, 18000,
        19000, 22000,
      ],
      actuallyEmissionTrend: [
        12000, 10000, 14000, 11000, 14000, 15000, 19000, 22000,
      ],
    },
    {
      type: 2,
      label: "上部分构造现场浇筑",
      value: 5,
      id: 5,
      parent: "03",
      subProjectCurrentEmission: 2433,
      subProjectDesignedEmission: 1821,
      unitCurrentEmission: 1814,
      emissionRatio: 44,
      unitDesignedEmission: 2735,
      constructionProgress: 57,
      buildEmission: {
        currentEmission: 66,
        designedEmission: 87,
      },
      transportEmission: {
        currentEmission: 76,
        designedEmission: 98,
      },
      constructionEmission: {
        currentEmission: 36,
        designedEmission: 43,
      },
      designedEmissionRatio: {
        buildRatio: 14,
        transportRatio: 37,
        workRatio: 19,
      },
      actuallyEmissionRatio: {
        buildRatio: 14,
        transportRatio: 29,
        workRatio: 18,
      },
      designedEmissionTrend: [
        24360, 10072, 15083, 16790, 19173, 12220, 24344, 27500, 19071, 12093,
        25600, 18438,
      ],
      actuallyEmissionTrend: [
        22487, 18416, 17315, 16813, 21564, 22150, 27779, 25006,
      ],
    },
    {
      type: 2,
      label: "上部分构造现场浇筑",
      value: 1010101,
      id: 1010101,
      parent: "10101",
      subProjectCurrentEmission: 2433,
      subProjectDesignedEmission: 1821,
      unitCurrentEmission: 1814,
      emissionRatio: 44,
      unitDesignedEmission: 2735,
      constructionProgress: 57,
      buildEmission: {
        currentEmission: 66,
        designedEmission: 87,
      },
      transportEmission: {
        currentEmission: 76,
        designedEmission: 98,
      },
      constructionEmission: {
        currentEmission: 36,
        designedEmission: 43,
      },
      designedEmissionRatio: {
        buildRatio: 14,
        transportRatio: 37,
        workRatio: 19,
      },
      actuallyEmissionRatio: {
        buildRatio: 14,
        transportRatio: 29,
        workRatio: 18,
      },
      designedEmissionTrend: [
        24360, 10072, 15083, 16790, 19173, 12220, 24344, 27500, 19071, 12093,
        25600, 18438,
      ],
      actuallyEmissionTrend: [
        22487, 18416, 17315, 16813, 21564, 22150, 27779, 25006,
      ],
    },
  ],
  // 构造
  projectConstruct: [
    {
      type: 3,
      label: "桥台",
      value: 6,
      id: 6,
      parent: "04",
      subProjectCurrentEmission: 2541,
      subProjectDesignedEmission: 2661,
      unitCurrentEmission: 1757,
      emissionRatio: 12,
      unitDesignedEmission: 2163,
      constructionProgress: 21,
      buildEmission: {
        currentEmission: 77,
        designedEmission: 23,
      },
      transportEmission: {
        currentEmission: 32,
        designedEmission: 63,
      },
      constructionEmission: {
        currentEmission: 50,
        designedEmission: 18,
      },
      designedEmissionRatio: {
        buildRatio: 14,
        transportRatio: 11,
        workRatio: 12,
      },
      actuallyEmissionRatio: {
        buildRatio: 13,
        transportRatio: 23,
        workRatio: 31,
      },
      designedEmissionTrend: [
        10119, 19856, 20874, 20754, 29788, 17637, 22748, 25551, 20752, 22521,
        18680, 15078,
      ],
      actuallyEmissionTrend: [
        19653, 11612, 12603, 13296, 28318, 19650, 12493, 16524,
      ],
    },
    {
      type: 3,
      label: "桥墩",
      value: 7,
      id: 7,
      parent: "04",
      subProjectCurrentEmission: 1949,
      subProjectDesignedEmission: 1184,
      unitCurrentEmission: 1568,
      emissionRatio: 91,
      unitDesignedEmission: 2888,
      constructionProgress: 63,
      buildEmission: {
        currentEmission: 92,
        designedEmission: 73,
      },
      transportEmission: {
        currentEmission: 89,
        designedEmission: 21,
      },
      constructionEmission: {
        currentEmission: 93,
        designedEmission: 39,
      },
      designedEmissionRatio: {
        buildRatio: 18,
        transportRatio: 37,
        workRatio: 22,
      },
      actuallyEmissionRatio: {
        buildRatio: 19,
        transportRatio: 13,
        workRatio: 38,
      },
      designedEmissionTrend: [
        10043, 24199, 12860, 12262, 28343, 12749, 10128, 11826, 19207, 12176,
        14011, 12339,
      ],
      actuallyEmissionTrend: [
        12184, 16899, 10349, 20660, 17644, 24981, 16790, 10328,
      ],
    },
    {
      type: 3,
      label: "桥面",
      value: 8,
      id: 8,
      parent: "05",
      subProjectCurrentEmission: 1150,
      subProjectDesignedEmission: 1475,
      unitCurrentEmission: 2052,
      emissionRatio: 52,
      unitDesignedEmission: 1133,
      constructionProgress: 75,
      buildEmission: {
        currentEmission: 37,
        designedEmission: 21,
      },
      transportEmission: {
        currentEmission: 60,
        designedEmission: 13,
      },
      constructionEmission: {
        currentEmission: 23,
        designedEmission: 27,
      },
      designedEmissionRatio: {
        buildRatio: 17,
        transportRatio: 39,
        workRatio: 35,
      },
      actuallyEmissionRatio: {
        buildRatio: 17,
        transportRatio: 12,
        workRatio: 15,
      },
      designedEmissionTrend: [
        11803, 18767, 25390, 25561, 28576, 15250, 22357, 28186, 22502, 11576,
        11467, 13979,
      ],
      actuallyEmissionTrend: [
        13683, 20777, 11848, 16989, 24098, 27029, 10514, 26554,
      ],
    },
    {
      type: 3,
      label: "测试测试",
      value: 123,
      id: 123,
      parent: "2222",
      subProjectCurrentEmission: 2912,
      subProjectDesignedEmission: 1966,
      unitCurrentEmission: 2660,
      emissionRatio: 63,
      unitDesignedEmission: 1137,
      constructionProgress: 34,
      buildEmission: {
        currentEmission: 81,
        designedEmission: 38,
      },
      transportEmission: {
        currentEmission: 38,
        designedEmission: 35,
      },
      constructionEmission: {
        currentEmission: 99,
        designedEmission: 23,
      },
      designedEmissionRatio: {
        buildRatio: 20,
        transportRatio: 28,
        workRatio: 28,
      },
      actuallyEmissionRatio: {
        buildRatio: 18,
        transportRatio: 16,
        workRatio: 23,
      },
      designedEmissionTrend: [
        28614, 23613, 17809, 13759, 13401, 16671, 20044, 12421, 24652, 16869,
        20097, 26816,
      ],
      actuallyEmissionTrend: [
        29744, 11860, 16283, 23921, 24158, 12864, 12735, 24465,
      ],
    },
    {
      type: 3,
      label: "构造4",
      value: 1231,
      id: 1231,
      parent: "1010101",
      subProjectCurrentEmission: 2912,
      subProjectDesignedEmission: 1966,
      unitCurrentEmission: 2660,
      emissionRatio: 63,
      unitDesignedEmission: 1137,
      constructionProgress: 34,
      buildEmission: {
        currentEmission: 81,
        designedEmission: 38,
      },
      transportEmission: {
        currentEmission: 38,
        designedEmission: 35,
      },
      constructionEmission: {
        currentEmission: 99,
        designedEmission: 23,
      },
      designedEmissionRatio: {
        buildRatio: 20,
        transportRatio: 28,
        workRatio: 28,
      },
      actuallyEmissionRatio: {
        buildRatio: 18,
        transportRatio: 16,
        workRatio: 23,
      },
      designedEmissionTrend: [
        28614, 23613, 17809, 13759, 13401, 16671, 20044, 12421, 24652, 16869,
        20097, 26816,
      ],
      actuallyEmissionTrend: [
        29744, 11860, 16283, 23921, 24158, 12864, 12735, 24465,
      ],
    },
  ],
  // 构建
  projectComponent: [
    {
      type: 4,
      label: "桥台A",
      value: 9,
      warning: true,
      constructWarning: true,
      id: 9,
      parent: "06",
      subProjectCurrentEmission: 2432,
      subProjectDesignedEmission: 2511,
      unitCurrentEmission: 2237,
      emissionRatio: 78,
      unitDesignedEmission: 1012,
      constructionProgress: 30,
      buildEmission: {
        currentEmission: 17,
        designedEmission: 99,
      },
      transportEmission: {
        currentEmission: 17,
        designedEmission: 76,
      },
      constructionEmission: {
        currentEmission: 86,
        designedEmission: 41,
      },
      designedEmissionRatio: {
        buildRatio: 13,
        transportRatio: 31,
        workRatio: 40,
      },
      actuallyEmissionRatio: {
        buildRatio: 14,
        transportRatio: 31,
        workRatio: 36,
      },
      designedEmissionTrend: [
        29954, 21049, 14483, 14913, 16169, 12480, 21406, 12881, 18919, 23496,
        14696, 28752,
      ],
      actuallyEmissionTrend: [
        27970, 26271, 18365, 10195, 16622, 26661, 26289, 15197,
      ],
    },
    {
      type: 4,
      label: "桥台B",
      value: 10,
      id: 10,
      parent: "06",
      subProjectCurrentEmission: 1805,
      subProjectDesignedEmission: 2459,
      unitCurrentEmission: 2007,
      emissionRatio: 53,
      unitDesignedEmission: 2884,
      constructionProgress: 34,
      buildEmission: {
        currentEmission: 17,
        designedEmission: 76,
      },
      transportEmission: {
        currentEmission: 81,
        designedEmission: 67,
      },
      constructionEmission: {
        currentEmission: 88,
        designedEmission: 22,
      },
      designedEmissionRatio: {
        buildRatio: 18,
        transportRatio: 17,
        workRatio: 14,
      },
      actuallyEmissionRatio: {
        buildRatio: 11,
        transportRatio: 20,
        workRatio: 13,
      },
      designedEmissionTrend: [
        26601, 24997, 14652, 25487, 25067, 19855, 21432, 17928, 23059, 15458,
        10947, 25329,
      ],
      actuallyEmissionTrend: [
        12905, 21574, 19474, 29481, 24104, 14349, 10219, 16691,
      ],
    },
    {
      type: 4,
      label: "桥墩A",
      value: 11,
      id: 11,
      parent: "07",
      subProjectCurrentEmission: 1511,
      subProjectDesignedEmission: 1131,
      unitCurrentEmission: 2655,
      emissionRatio: 30,
      unitDesignedEmission: 1815,
      constructionProgress: 45,
      buildEmission: {
        currentEmission: 19,
        designedEmission: 25,
      },
      transportEmission: {
        currentEmission: 67,
        designedEmission: 30,
      },
      constructionEmission: {
        currentEmission: 71,
        designedEmission: 93,
      },
      designedEmissionRatio: {
        buildRatio: 18,
        transportRatio: 15,
        workRatio: 31,
      },
      actuallyEmissionRatio: {
        buildRatio: 11,
        transportRatio: 32,
        workRatio: 26,
      },
      designedEmissionTrend: [
        22575, 27678, 26245, 13562, 19380, 12776, 25249, 28976, 20169, 14312,
        20360, 20516,
      ],
      actuallyEmissionTrend: [
        18243, 20715, 19957, 29668, 23108, 11078, 18267, 25538,
      ],
    },
    {
      type: 4,
      label: "桥墩B",
      value: 12,
      id: 12,
      parent: "07",
      subProjectCurrentEmission: 2259,
      subProjectDesignedEmission: 1061,
      unitCurrentEmission: 1051,
      emissionRatio: 24,
      unitDesignedEmission: 1763,
      constructionProgress: 54,
      buildEmission: {
        currentEmission: 16,
        designedEmission: 11,
      },
      transportEmission: {
        currentEmission: 25,
        designedEmission: 57,
      },
      constructionEmission: {
        currentEmission: 88,
        designedEmission: 12,
      },
      designedEmissionRatio: {
        buildRatio: 18,
        transportRatio: 13,
        workRatio: 21,
      },
      actuallyEmissionRatio: {
        buildRatio: 17,
        transportRatio: 26,
        workRatio: 31,
      },
      designedEmissionTrend: [
        28196, 13839, 27637, 14455, 11292, 29800, 18694, 17079, 18734, 25611,
        24027, 17714,
      ],
      actuallyEmissionTrend: [
        15960, 20660, 11836, 22722, 18929, 12591, 28336, 11944,
      ],
    },
    {
      type: 4,
      label: "桥面A",
      value: 13,
      id: 13,
      parent: "08",
      subProjectCurrentEmission: 1975,
      subProjectDesignedEmission: 1159,
      unitCurrentEmission: 2987,
      emissionRatio: 59,
      unitDesignedEmission: 2314,
      constructionProgress: 82,
      buildEmission: {
        currentEmission: 63,
        designedEmission: 45,
      },
      transportEmission: {
        currentEmission: 48,
        designedEmission: 70,
      },
      constructionEmission: {
        currentEmission: 51,
        designedEmission: 53,
      },
      designedEmissionRatio: {
        buildRatio: 19,
        transportRatio: 12,
        workRatio: 17,
      },
      actuallyEmissionRatio: {
        buildRatio: 14,
        transportRatio: 18,
        workRatio: 26,
      },
      designedEmissionTrend: [
        28553, 26375, 28825, 11195, 17831, 18265, 19587, 11838, 26821, 29382,
        29356, 20604,
      ],
      actuallyEmissionTrend: [
        12585, 13268, 23834, 12873, 15838, 27071, 12866, 21431,
      ],
    },
    {
      type: 4,
      label: "构件5",
      value: 131,
      id: 131,
      parent: "1231",
      subProjectCurrentEmission: 1975,
      subProjectDesignedEmission: 1159,
      unitCurrentEmission: 2987,
      emissionRatio: 59,
      unitDesignedEmission: 2314,
      constructionProgress: 82,
      buildEmission: {
        currentEmission: 63,
        designedEmission: 45,
      },
      transportEmission: {
        currentEmission: 48,
        designedEmission: 70,
      },
      constructionEmission: {
        currentEmission: 51,
        designedEmission: 53,
      },
      designedEmissionRatio: {
        buildRatio: 19,
        transportRatio: 12,
        workRatio: 17,
      },
      actuallyEmissionRatio: {
        buildRatio: 14,
        transportRatio: 18,
        workRatio: 26,
      },
      designedEmissionTrend: [
        28553, 26375, 28825, 11195, 17831, 18265, 19587, 11838, 26821, 29382,
        29356, 20604,
      ],
      actuallyEmissionTrend: [
        12585, 13268, 23834, 12873, 15838, 27071, 12866, 21431,
      ],
    },
  ],
  // 总包
  projectAllUtil: [
    {
      type: 8,
      label: "总包1",
      value: 9,
      id: 9,
      parent: "06",
      // 项目的图表mock
      projectCurrentEmission: 2049,
      projectDesignedEmission: 3020,
      unitCurrentEmission: 1230,
      unitDesignedEmission: 1230,
      constructionProgress: 64,
      buildEmission: {
        currentEmission: 38,
        designedEmission: 100,
      },
      transportEmission: {
        currentEmission: 50,
        designedEmission: 100,
      },
      constructionEmission: {
        currentEmission: 40,
        designedEmission: 50,
      },
    },
    {
      type: 8,
      label: "总包2",
      value: 10,
      id: 10,
      parent: "06",
      // 项目的图表mock
      projectCurrentEmission: 2049,
      projectDesignedEmission: 3020,
      unitCurrentEmission: 1230,
      unitDesignedEmission: 1230,
      constructionProgress: 64,
      buildEmission: {
        currentEmission: 38,
        designedEmission: 100,
      },
      transportEmission: {
        currentEmission: 50,
        designedEmission: 100,
      },
      constructionEmission: {
        currentEmission: 40,
        designedEmission: 50,
      },
    },
  ],
  // 工序
  projectProcess: [
    {
      type: 5,
      label: "扩大基础",
      value: 14,
      id: 14,
      parent: "09",
      subProjectCurrentEmission: 1447,
      subProjectDesignedEmission: 2493,
      unitCurrentEmission: 1083,
      emissionRatio: 75,
      unitDesignedEmission: 2611,
      constructionProgress: 48,
      buildEmission: {
        currentEmission: 99,
        designedEmission: 91,
      },
      transportEmission: {
        currentEmission: 44,
        designedEmission: 92,
      },
      constructionEmission: {
        currentEmission: 76,
        designedEmission: 42,
      },
      designedEmissionRatio: {
        buildRatio: 13,
        transportRatio: 18,
        workRatio: 20,
      },
      actuallyEmissionRatio: {
        buildRatio: 17,
        transportRatio: 30,
        workRatio: 18,
      },
      designedEmissionTrend: [
        13888, 29611, 21712, 26957, 19970, 14234, 22157, 26450, 19881, 17459,
        13831, 11305,
      ],
      actuallyEmissionTrend: [
        17842, 10752, 22456, 10698, 25160, 18727, 20831, 12183,
      ],
    },
    {
      type: 5,
      label: "台身施工",
      value: 15,
      id: 15,
      parent: "09",
      subProjectCurrentEmission: 2177,
      subProjectDesignedEmission: 1449,
      unitCurrentEmission: 2902,
      emissionRatio: 56,
      unitDesignedEmission: 1705,
      constructionProgress: 76,
      buildEmission: {
        currentEmission: 16,
        designedEmission: 28,
      },
      transportEmission: {
        currentEmission: 69,
        designedEmission: 76,
      },
      constructionEmission: {
        currentEmission: 83,
        designedEmission: 22,
      },
      designedEmissionRatio: {
        buildRatio: 15,
        transportRatio: 18,
        workRatio: 31,
      },
      actuallyEmissionRatio: {
        buildRatio: 11,
        transportRatio: 28,
        workRatio: 16,
      },
      designedEmissionTrend: [
        14860, 23885, 23941, 23364, 15332, 17168, 17131, 17916, 15073, 17775,
        28462, 14716,
      ],
      actuallyEmissionTrend: [
        25513, 28471, 11967, 26383, 23375, 21179, 29297, 18599,
      ],
    },
    {
      type: 5,
      label: "台背回填",
      value: 16,
      id: 16,
      parent: "09",

      subProjectCurrentEmission: 2015,
      subProjectDesignedEmission: 2004,
      unitCurrentEmission: 1200,
      emissionRatio: 76,
      unitDesignedEmission: 1157,
      constructionProgress: 78,
      buildEmission: {
        currentEmission: 22,
        designedEmission: 68,
      },
      transportEmission: {
        currentEmission: 30,
        designedEmission: 73,
      },
      constructionEmission: {
        currentEmission: 54,
        designedEmission: 77,
      },
      designedEmissionRatio: {
        buildRatio: 18,
        transportRatio: 31,
        workRatio: 16,
      },
      actuallyEmissionRatio: {
        buildRatio: 12,
        transportRatio: 15,
        workRatio: 12,
      },
      designedEmissionTrend: [
        29814, 18933, 24976, 22073, 21815, 19226, 17878, 11203, 25862, 14021,
        23811, 17028,
      ],
      actuallyEmissionTrend: [
        25216, 12465, 16517, 15110, 10361, 28218, 20583, 11326,
      ],
    },
  ],
  // 材料
  projectMaterial: [
    {
      type: 6,
      label: "混凝土",
      value: 17,
      id: 17,
      parent: "14",
      subProjectCurrentEmission: 1922,
      subProjectDesignedEmission: 2191,
      unitCurrentEmission: 1310,
      emissionRatio: 30,
      unitDesignedEmission: 1215,
      constructionProgress: 35,
      buildEmission: {
        currentEmission: 88,
        designedEmission: 26,
      },
      transportEmission: {
        currentEmission: 97,
        designedEmission: 17,
      },
      constructionEmission: {
        currentEmission: 92,
        designedEmission: 65,
      },
      designedEmissionRatio: {
        buildRatio: 14,
        transportRatio: 18,
        workRatio: 22,
      },
      actuallyEmissionRatio: {
        buildRatio: 20,
        transportRatio: 23,
        workRatio: 21,
      },
      designedEmissionTrend: [
        25022, 11060, 10069, 16104, 12957, 24828, 17880, 22843, 21788, 24765,
        20701, 23605,
      ],
      actuallyEmissionTrend: [
        23593, 20072, 17082, 22013, 10572, 21963, 25666, 16521,
      ],
    },
    {
      type: 6,
      label: "砂浆",
      value: 18,
      id: 18,
      parent: "14",
      subProjectCurrentEmission: 2952,
      subProjectDesignedEmission: 2663,
      unitCurrentEmission: 1602,
      emissionRatio: 94,
      unitDesignedEmission: 2415,
      constructionProgress: 74,
      buildEmission: {
        currentEmission: 30,
        designedEmission: 17,
      },
      transportEmission: {
        currentEmission: 95,
        designedEmission: 99,
      },
      constructionEmission: {
        currentEmission: 65,
        designedEmission: 62,
      },
      designedEmissionRatio: {
        buildRatio: 12,
        transportRatio: 14,
        workRatio: 40,
      },
      actuallyEmissionRatio: {
        buildRatio: 10,
        transportRatio: 36,
        workRatio: 11,
      },
      designedEmissionTrend: [
        19403, 14123, 16765, 23965, 15575, 19585, 27579, 14335, 20861, 15020,
        25881, 19032,
      ],
      actuallyEmissionTrend: [
        12391, 13620, 20683, 19122, 11796, 28305, 28358, 13916,
      ],
    },
    {
      type: 6,
      label: "地板",
      value: 19,
      id: 19,
      parent: "15",
      subProjectCurrentEmission: 1200,
      subProjectDesignedEmission: 2492,
      unitCurrentEmission: 2895,
      emissionRatio: 74,
      unitDesignedEmission: 2349,
      constructionProgress: 56,
      buildEmission: {
        currentEmission: 29,
        designedEmission: 77,
      },
      transportEmission: {
        currentEmission: 70,
        designedEmission: 12,
      },
      constructionEmission: {
        currentEmission: 50,
        designedEmission: 20,
      },
      designedEmissionRatio: {
        buildRatio: 19,
        transportRatio: 21,
        workRatio: 21,
      },
      actuallyEmissionRatio: {
        buildRatio: 18,
        transportRatio: 23,
        workRatio: 28,
      },
      designedEmissionTrend: [
        23265, 16906, 23361, 24697, 23040, 26659, 10696, 29454, 22082, 11120,
        18464, 12365,
      ],
      actuallyEmissionTrend: [
        20280, 12358, 14865, 12312, 14782, 28290, 13071, 15611,
      ],
    },
    {
      type: 6,
      label: "钢筋",
      value: 20,
      id: 20,
      parent: "15",
      subProjectCurrentEmission: 1106,
      subProjectDesignedEmission: 2796,
      unitCurrentEmission: 1158,
      emissionRatio: 97,
      unitDesignedEmission: 2826,
      constructionProgress: 76,
      buildEmission: {
        currentEmission: 18,
        designedEmission: 39,
      },
      transportEmission: {
        currentEmission: 68,
        designedEmission: 69,
      },
      constructionEmission: {
        currentEmission: 20,
        designedEmission: 52,
      },
      designedEmissionRatio: {
        buildRatio: 16,
        transportRatio: 34,
        workRatio: 11,
      },
      actuallyEmissionRatio: {
        buildRatio: 16,
        transportRatio: 18,
        workRatio: 11,
      },
      designedEmissionTrend: [
        10280, 23574, 10969, 16944, 10786, 10963, 20037, 28689, 15562, 19796,
        19063, 22638,
      ],
      actuallyEmissionTrend: [
        16107, 12009, 10747, 28575, 23428, 14883, 12953, 26899,
      ],
    },
  ],
  // 供应商
  projectSupplier: [
    {
      type: 7,
      label: "南京宁新普迪混凝土有限公司",
      value: 21,
      id: 21,
      parent: "17",
      subProjectCurrentEmission: 1246,
      subProjectDesignedEmission: 1473,
      unitCurrentEmission: 1974,
      emissionRatio: 92,
      unitDesignedEmission: 1019,
      constructionProgress: 53,
      buildEmission: {
        currentEmission: 46,
        designedEmission: 61,
      },
      transportEmission: {
        currentEmission: 52,
        designedEmission: 72,
      },
      constructionEmission: {
        currentEmission: 98,
        designedEmission: 87,
      },
      designedEmissionRatio: {
        buildRatio: 17,
        transportRatio: 13,
        workRatio: 21,
      },
      actuallyEmissionRatio: {
        buildRatio: 11,
        transportRatio: 20,
        workRatio: 30,
      },
      designedEmissionTrend: [
        28080, 21667, 17198, 14610, 24079, 27210, 14177, 24049, 21626, 26018,
        20642, 19921,
      ],
      actuallyEmissionTrend: [
        13393, 10247, 27134, 10951, 25554, 18524, 16688, 28146,
      ],
    },
    {
      type: 7,
      label: "南京新港混凝土有限公司",
      value: 22,
      id: 22,
      parent: "17",
      subProjectCurrentEmission: 1855,
      subProjectDesignedEmission: 1098,
      unitCurrentEmission: 1271,
      emissionRatio: 46,
      unitDesignedEmission: 2126,
      constructionProgress: 30,
      buildEmission: {
        currentEmission: 86,
        designedEmission: 37,
      },
      transportEmission: {
        currentEmission: 84,
        designedEmission: 33,
      },
      constructionEmission: {
        currentEmission: 92,
        designedEmission: 95,
      },
      designedEmissionRatio: {
        buildRatio: 11,
        transportRatio: 16,
        workRatio: 13,
      },
      actuallyEmissionRatio: {
        buildRatio: 20,
        transportRatio: 35,
        workRatio: 15,
      },
      designedEmissionTrend: [
        18184, 27030, 18838, 22364, 12382, 17453, 10037, 29713, 14836, 15218,
        21765, 10114,
      ],
      actuallyEmissionTrend: [
        21735, 14253, 20762, 22604, 27924, 12059, 14037, 26389,
      ],
    },
    {
      type: 7,
      label: "南京恒基混凝土有限公司",
      value: 23,
      id: 23,
      parent: "17",
      subProjectCurrentEmission: 2913,
      subProjectDesignedEmission: 2885,
      unitCurrentEmission: 1144,
      emissionRatio: 64,
      unitDesignedEmission: 1777,
      constructionProgress: 80,
      buildEmission: {
        currentEmission: 84,
        designedEmission: 46,
      },
      transportEmission: {
        currentEmission: 42,
        designedEmission: 32,
      },
      constructionEmission: {
        currentEmission: 96,
        designedEmission: 91,
      },
      designedEmissionRatio: {
        buildRatio: 17,
        transportRatio: 33,
        workRatio: 24,
      },
      actuallyEmissionRatio: {
        buildRatio: 15,
        transportRatio: 37,
        workRatio: 31,
      },
      designedEmissionTrend: [
        23279, 21369, 24406, 18254, 19082, 20754, 24984, 27531, 17826, 10713,
        24508, 11398,
      ],
      actuallyEmissionTrend: [
        25283, 28770, 15764, 22630, 28435, 23166, 29859, 15036,
      ],
    },
    {
      type: 7,
      label: "苏州荣平砂浆建材有限公司",
      value: 24,
      id: 24,
      parent: "18",
      subProjectCurrentEmission: 2441,
      subProjectDesignedEmission: 1537,
      unitCurrentEmission: 1840,
      emissionRatio: 100,
      unitDesignedEmission: 2116,
      constructionProgress: 21,
      buildEmission: {
        currentEmission: 67,
        designedEmission: 23,
      },
      transportEmission: {
        currentEmission: 41,
        designedEmission: 76,
      },
      constructionEmission: {
        currentEmission: 22,
        designedEmission: 22,
      },
      designedEmissionRatio: {
        buildRatio: 19,
        transportRatio: 20,
        workRatio: 14,
      },
      actuallyEmissionRatio: {
        buildRatio: 17,
        transportRatio: 17,
        workRatio: 16,
      },
      designedEmissionTrend: [
        26020, 15108, 28379, 26250, 18674, 20702, 17653, 24227, 16114, 20587,
        29675, 11563,
      ],
      actuallyEmissionTrend: [
        29420, 27138, 24611, 26939, 26953, 27369, 13556, 17969,
      ],
    },
    {
      type: 7,
      label: "杭州久亚发建筑材料有限公司",
      value: 25,
      id: 25,
      parent: "18",
      subProjectCurrentEmission: 1184,
      subProjectDesignedEmission: 1288,
      unitCurrentEmission: 2177,
      emissionRatio: 41,
      unitDesignedEmission: 2142,
      constructionProgress: 33,
      buildEmission: {
        currentEmission: 73,
        designedEmission: 56,
      },
      transportEmission: {
        currentEmission: 58,
        designedEmission: 83,
      },
      constructionEmission: {
        currentEmission: 40,
        designedEmission: 94,
      },
      designedEmissionRatio: {
        buildRatio: 18,
        transportRatio: 25,
        workRatio: 26,
      },
      actuallyEmissionRatio: {
        buildRatio: 18,
        transportRatio: 11,
        workRatio: 28,
      },
      designedEmissionTrend: [
        17433, 24912, 23770, 16158, 24248, 16954, 10739, 19424, 15648, 13128,
        19787, 22698,
      ],
      actuallyEmissionTrend: [
        23300, 25513, 21016, 10967, 26844, 23526, 23239, 24116,
      ],
    },
  ],
};

/**
 * 材料总览
 */
export const materialsView = {
  // 材料列表
  materialsList: [
    {
      id: "DYPDHNT-30",
      type: 1, //1 混凝土 2 装饰石材 3 砂浆 4 地板 5 钢筋 6 空调板 7 木材 8 陶瓷 9 水泥 10 陶瓷
      name: "商品混凝土",
      specification: "C30",
      carbon: "450.246kgCO2/t",
      level: 2,
      department: "南京普迪混凝土有限公司",
    },
    {
      id: "PDCSNJNHNT-20",
      type: 1, //1 混凝土 2 装饰石材 3 砂浆 4 地板 5 钢筋 6 空调板 7 木材 8 陶瓷 9 水泥 10 陶瓷
      name: "纯水泥胶凝混凝土",
      specification: "C20",
      carbon: "451.372kgCO2/m3",
      level: 3,
      department: "南京普迪混凝土有限公司",
    },
    {
      id: "ZLSCSMB-800",
      type: 2, //1 混凝土 2 装饰石材 3 砂浆 4 地板 5 钢筋 6 空调板 7 木材 8 陶瓷 9 水泥 10 陶瓷
      name: "石材饰面板",
      specification: "800mm×800mm",
      carbon: "220kgCO2/t",
      level: 2,
      department: "南京中联混凝土有限公司",
    },
    {
      id: "DYPDHNT-30",
      type: 1, //1 混凝土 2 装饰石材 3 砂浆 4 地板 5 钢筋 6 空调板 7 木材 8 陶瓷 9 水泥 10 陶瓷
      name: "商品混凝土",
      specification: "C30",
      carbon: "450.246kgCO2/t",
      level: 2,
      department: "南京普迪混凝土有限公司",
    },
  ],
  // 材料类型select列表
  materialsType: [
    {
      name: "混凝土",
      value: "1",
    },
    {
      name: "装饰石材",
      value: "2",
    },
    {
      name: "砂浆",
      value: "3",
    },
    {
      name: "地板",
      value: "4",
    },
    {
      name: "钢筋",
      value: "5",
    },
    {
      name: "空调板",
      value: "6",
    },
    {
      name: "木材",
      value: "7",
    },
    {
      name: "陶瓷",
      value: "8",
    },
    {
      name: "水泥",
      value: "9",
    },
    {
      name: "陶瓷",
      value: "10",
    },
  ],
  // 月度select列表数据
  monthList: ["月度统计", "季度统计", "年度统计"],
};

/**
 * 总包总览
 */
export const totalView = {
  // 总包列表
  totalList: [
    {
      name: "中建一局",
      totalcarbon: "30492.56",
      designcarbon: "50395.44",
      type: 2,
      percent: "76%",
    },
    {
      name: "中建四局",
      totalcarbon: "43203.73",
      designcarbon: "73025.34",
      type: 1,
      percent: "81%",
    },
  ],
  // 总包类型select列表
  totalType: [
    {
      name: '所有',
      value: '0'
    },
    {
      name: "总包1",
      value: "1",
    },
    {
      name: "总包2",
      value: "2",
    },
    {
      name: "总包3",
      value: "3",
    },
    {
      name: "总包4",
      value: "4",
    },
  ],
  // 月度select列表数据
  monthList: ["月度统计", "季度统计", "年度统计"],
};

/**
 * 供应商总览
 */
export const supplierView = {
  // 供应商列表
  supplierList: [
    {
      id: "HNT-NJNXPD",
      name: "南京宁新普迪混凝土有限公司",
      type: 1, //1 混凝土 2 水泥 3 砂浆 4 石材 5 涂料 6 木材
      level: 2,
      carbon: "450.246kgCO2/t",
    },
    {
      id: "HNT-NJXG",
      name: "南京新港混凝土有限公司",
      type: 1, //1 混凝土 2 水泥 3 砂浆 4 石材 5 涂料 6 木材
      level: 1,
      carbon: "27439.35",
    },
  ],
  // 供应商类型select列表
  supplierType: [
    {
      name: "混凝土",
      value: "1",
    },
    {
      name: "水泥",
      value: "2",
    },
    {
      name: "砂浆",
      value: "3",
    },
    {
      name: "石材",
      value: "4",
    },
    {
      name: "涂料",
      value: "5",
    },
    {
      name: "木材",
      value: "6",
    },
  ],
  // 月度select列表数据
  monthList: ["月度统计", "季度统计", "年度统计"],
};
