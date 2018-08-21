<template>
  <div id="app">
    <button type="button" @click="showGradeFilter">显示</button>
    <grade-filter
      :visible="visible"
      :out-filter-config="outFilterConfig"
      :inner-filter-config="innerFilterConfig"
      :filter-change="filterChange">
    </grade-filter>
  </div>
</template>

<script>
import gradeFilter from '../src/components/gradeFilter'
export default {
  name: 'app',
  components: {
    gradeFilter
  },
  data () {
    return {
      visible: false,
      outFilterConfig: {
        area: {
          val: '全国'
        },  // 地区
        brand: '', // 品牌
        level: '', // 车辆级别
        price: '', // 价格
        carSource: '', // 来源平台
      },

      // 内部筛选配置
      innerFilterConfig: {
	      mileage: '', // 里程
        year: '', // 年龄
        liter: '', // 排量
        gear: '', // 变速箱
        engine: '', // 发动机
	      discharge_standard: '', // 标准排放
	      color: '', // 颜色
        sellerType: '', // 车源类型
        makerType: '', // 产地
      },
    }
  },
  methods: {
    filterChange (params) {
      console.log(params);
    },
    showGradeFilter() {
      this.visible = true;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
