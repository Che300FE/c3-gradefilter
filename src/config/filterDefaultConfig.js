export default {
  outSelect: [
    {
      name: '地区',
      id: 'area',
      val: ''
    },
    {
      name: '品牌',
      id: 'brand',
      val: '',
    },
    {
      name: '车辆级别',
      id: 'level',
      val: [],
    },
    {
      name: '价格',
      id: 'price',
      val: '',
    },
    {
      name: '来源平台',
      id: 'carSource',
      val: [],
    }
  ],
  innerSelect: [
    {
      name: '里程(万公里)',
      id: 'mile',
      val: '',
      min: '',
      max: '',
      type: 'define',
      useDefine: false,
      maxErrorTip: '',
      minErrorTip: '',
      maxErrorVisiable: false,
      minErrorVisiable: false,
      defineTitle: '自定义里程',
      options: [{
          title: '不限',
          value: ''
        },
        {
          title: '1万公里内',
          value: '0-1',
        },
        {
          title: '3万公里内',
          value: '0-3',
        },
        {
          title: '5万公里内',
          value: '0-5',
        },
        {
          title: '8万公里内',
          value: '0-8',
        },
        {
          title: '10万公里内',
          value: '0-10',
        }
      ]
    },
    {
      name: '年龄(年)',
      id: 'year',
      val: '',
      min: '',
      max: '',
      options: [{
          title: '不限',
          value: ''
        },
        {
          title: '1年内',
          value: '0-1',
        },
        {
          title: '3年内',
          value: '0-3',
        },
        {
          title: '5年内',
          value: '0-5',
        },
        {
          title: '8年内',
          value: '0-8',
        },
        {
          title: '10年内',
          value: '0-10',
        }
      ]
    },
    {
      name: '排量(L)',
      id: 'liter',
      val: '',
      options: [{
          title: '不限',
          value: ''
        },
        {
          title: '1.0及以下',
          value: '0-1.0',
        },
        {
          title: '1.1-1.6L',
          value: '1.1-1.6',
        },
        {
          title: '1.7-2.0L',
          value: '1.7-2.0',
        },
        {
          title: '2.1-2.5L',
          value: '2.1-2.5',
        },
        {
          title: '2.6-3.0L',
          value: '2.6-3.0',
        },
        {
          title: '3.1-4.0L',
          value: '3.1-4.0',
        },
        {
          title: '4.0L及以上',
          value: '4.0',
        }
      ]
    },
    {
      name: '变速箱',
      id: 'gear',
      val: '0',
      options: [{
          title: '不限',
          value: '0'
        },
        {
          title: '手动',
          value: '1',
        },
        {
          title: '自动',
          value: '2',
        },
      ]
    },
    {
      name: '发动机',
      id: 'engine',
      val: '',
      options: [{
          title: '不限',
          value: ''
        },
        {
          title: '自然吸气',
          value: '0',
        },
        {
          title: '货轮增压',
          value: '1',
        },
      ]
    },
    {
      name: '标准排放',
      id: 'ds',
      val: '',
      options: [{
          title: '不限',
          value: ''
        },
        {
          title: '国五',
          value: '5',
        },
        {
          title: '国四及以上',
          value: '4-5',
        },
        {
          title: '国三及以上',
          value: '3-5',
        },
        {
          title: '国二及以上',
          value: '2-5',
        },
      ]
    },
    {
      name: '车源类型',
      id: 'sellerType',
      val: '',
      options: [{
          title: '不限',
          value: ''
        },
        {
          title: '个人',
          value: '1',
        },
        {
          title: '商家',
          value: '2',
        },
      ]
    },
    {
      name: '产地',
      id: 'makerType',
      val: '',
      options: [{
          title: '不限',
          value: ''
        },
        {
          title: '进口',
          value: '3',
        },
        {
          title: '合资',
          value: '2',
        },
        {
          title: '国产',
          value: '1'
        }
      ]
    }
  ]
}
