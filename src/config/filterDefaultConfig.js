export default {
	// 外部过滤筛选的默认配置
	outFilterDefault: [
		{
			id: 'area',
			title: '地区',
			val: ''
		},
		{
			id: 'brand',
			title: '品牌',
			val: '',
		},
		{
			id: 'level',
			title: '车辆级别',
			val: '',
		},
		{
			id: 'price',
			title: '价格',
			val: '',
		},
		{
			id: 'carSource',
			title: '来源平台',
			val: '',
		}
	],
	// 内部筛选的默认配置
	innerFilterDefault: [
		{
			id: 'mileage',
			title: '里程(万公里)',
			val: '',
			text: '不限',
			type: 'single',
			unit: '万公里',
			define: {
				used: false,
				title: '自定义里程',
				min: '',
				max: '',
				errorTip: '',
				showError: false,
			},
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
			id: 'year',
			title: '车龄(年)',
			val: '',
			text: '不限',
			type: 'single',
			unit: '年',
			define: {
				used: false,
				title: '自定义车龄',
				min: '',
				max: '',
				errorTip: '',
				showError: false,
			},
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
			id: 'liter',
			title: '排量(L)',
			val: '',
			text: '不限',
			type: 'single',
			unit: 'L',
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
			id: 'gear',
			title: '变速箱',
			val: '0',
			text: '不限',
			type: 'single',
			unit: '',
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
			id: 'engine',
			title: '发动机',
			val: '',
			text: '不限',
			type: 'single',
			unit: '',
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
			id: 'discharge_standard',
			title: '排放标准',
			val: '',
			text: '不限',
			type: 'single',
			unit: '',
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
			id: 'color',
			title: '颜色(多选)',
			val: '',
			text: '不限',
			type: 'multiple',
			unit: '',
			options: [
				{
					title: '不限',
					value: '',
				},
				{
					title: '棕色',
					value: '棕色',
				},
				{
					title: '橙色',
					value: '橙色',
				},
				{
					title: '灰色',
					value: '灰色',
				},
				{
					title: '白色',
					value: '白色',
				},
				{
					title: '米色',
					value: '米色',
				},
				{
					title: '紫色',
					value: '紫色',
				},
				{
					title: '红色',
					value: '红色',
				},
				{
					title: '绿色',
					value: '绿色',
				},
				{
					title: '蓝色',
					value: '蓝色',
				},
				{
					title: '金色',
					value: '金色',
				},
				{
					title: '银色',
					value: '银色',
				},
				{
					title: '黄色',
					value: '黄色',
				},
				{
					title: '黑色',
					value: '黑色',
				}
			]
		},
		{
			id: 'sellerType',
			title: '车源类型',
			val: '',
			text: '不限',
			type: 'single',
			unit: '',
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
			id: 'makerType',
			title: '产地',
			val: '',
			text: '不限',
			type: 'single',
			unit: '',
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
