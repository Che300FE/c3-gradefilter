<template>
  <div class="grade-filter" v-if="visiable">
    <!-- 顶部的bar条开始 -->
    <div class="title-bar">
      <div class="go-back__arrow" @click.stop="goBack">
        <img class="back-img" src="https://ssl-assets.che300.com/feimg/bapp/substitution/left-arrow.png">
      </div>
      <h2 class="title-name">高级筛选</h2>
    </div>
    <!-- 顶部bar条结束 -->
    <div class="content__wrapper">
      <div class="out-select__wrapper">
        <!-- 外部选择单项开始 -->
        <div class="out-select__item"
          v-for="item in outFilterArr"
          v-if="Object.keys(outFilterConfig).indexOf(item.id) > -1"
          :key="item.id">
          <span class="out-select__name">{{item.title}}</span>
          <div 
            class="out-select__content"
            @click.stop="outSelectClick(item)">
            <img src="https://ssl-assets.che300.com/feimg/bapp/substitution/right-arrow.png" class="out-select__arrow">
            <span class="out-select__vals" v-if="item.val.length">{{item.val}}</span>
            <span class="out-select__no-limit" v-else>不限</span>
          </div>
        </div>
        <!-- 外部选择单项结束 -->
      </div>
      <div class="filter__item_define"
        v-for = "item in innerFilterArr"
        v-if="Object.keys(innerFilterConfig).indexOf(item.id) > -1"
        :key="item.id">
        <div class="filter__title">
          {{item.title}}
        </div>
        <div 
          class="define__section"
          v-if=" item.define ">
          <div class="define__name">
            {{item.define.title}}
          </div>
          <div class="define__input define__split">
            <input 
              type="number" 
              class="define__min" 
              v-model="item.define.min"
              @input="defineValChange(item)">
          </div>
          <div class="define__input">
            <div class="pop-up"
              v-if="item.define.showError">
                {{item.define.errorTip}}
            </div>
            <input 
              type="number" 
              class="define__max" 
              v-model="item.define.max"
              @input="defineValChange(item)">
          </div>
        </div>
        <ul class="general__list">
          <li class="general__item"
            v-for="(option, index) in item.options"
            @click.stop="changeVal(item, option.value)"
            :key="index"
            :class="{ 'active': item.val === option.value || ( item.val.indexOf(option.value) > -1) && item.type === 'mutiple'}">{{option.title}}</li>
        </ul>
      </div>     
    </div>
    <div 
      class="bottom__bar"
      :class="{ 'empty-source': carSourceNum == 0 }"
      @click.stop="carSourceClick">
      <span>查看{{carSourceNum}}条车源</span>
    </div>
  </div>
</template>

<script>
import '@/sass/gradeFilter.scss';
import filterDefaultConfig from '@/config/filterDefaultConfig';

export default {
  name: 'c3-grade-filter',
  props: {
    // 显示组件标识位
    visiable: {
      type: Boolean,
      default: true
    },

    // 外部筛选配置
    outFilterConfig: {
      type: Object,
      default: function(){
        return {
          area: '',
          brand: '',
          level: '',
          price: '',
          carSource: ''
        }
      }
    },

    // 内部筛选配置
    innerFilterConfig: {
      type: Object,
      default: function () {
        return {
          mile: '',
          year: '',
          liter: '',
          gear: '',
          engine: '',
          ds: '',
          sellerType: '',
          makerType: ''
        }
      }
    },

    // 点击返回的回调函数
    goBack: {
      type: Function,
      default: function(){}
    },

    // 筛选条件发生改变的回调函数
    filterChange: {
      type: Function,
      default: function(){}
    },

    // 当前车源信息的个数
    carSourceNum: {
      type: Number,
      default: 0
    },

    // 车源点击函数
    carSourceClick: {
      type: Function,
      default: function(){}
    },

    // 点击选择外部的组件
    outSelectClick: {
      type: Function,
      default: function(){}
    }
  },
  data () {
    return {
      // 默认配置
      default: filterDefaultConfig,
      outFilterArr: [],
      innerFilterArr: [],
    }
  },
  watch: {
    outFilterConfig: {
      handler () {
        console.info('外部筛选配置数据发生了改变');
        this.outFilterArr = this.createFilterArr(this.default.outFilterDefault, this.outFilterConfig);
      },
      deep: true
    },
    innerFilterConfig: {
      handler () {
        console.info('内部筛选配置数据发生了改变');
        this.innerFilterArr = this.createFilterArr(this.default.innerFilterDefault, this.innerFilterConfig);
      },
      deep: true      
    }
  },
  created () {
    this.outFilterArr = this.createFilterArr(this.default.outFilterDefault, this.outFilterConfig);
    this.innerFilterArr = this.createFilterArr(this.default.innerFilterDefault, this.innerFilterConfig);
  },
  methods: {
    // 生成筛选数组
    createFilterArr (defaultConfig, userConfig) {
      var dc = defaultConfig;
      var uc = userConfig;

      return dc.map(config => {
        var id = config.id;
        var defineConfig = uc[id];

        if (defineConfig) {
          return Object.assign(config, defineConfig);
        }
        return config;
      });
    },

    // 选择内部筛选值
    changeVal (item, newVal) {
      if (item.type === "single") {
        item.val = newVal;
      } else {
        if (!item.val.length) {
          item.val = []
        }
        
        // 点击了不限则清空所有其他的选项
        if (newVal === '0' || newVal === '') {
          item.val = [];
          item.val.push(newVal);
        } else { 
          // 当前选中项的索引
          var _index = item.val.indexOf(newVal);
          // 如果选择项不是 `不限`, 但是之前已经选择了不限,那么移除不限的选项
          if (
              item.val.length === 1 && 
              (item.val[0] === '0' || item.val[0] === '')
             ) 
          {
            item.val = [];
          }
          // 筛选项目如果已经被选中，则改为不选中状态
          if (_index > -1) {
            item.val.splice(_index, 1);
          } else {
            item.val.push(newVal);
          }
        }
      }

      if (item.define) {
        item.define.used = false;
      }

      this.createFilterParams();
    },

    // 自定义值发生改变
    defineValChange (item) {
      var min = Number(item.define.min);
      var max = Number(item.define.max);

      // TODO 考虑输入小数的情况

      if (typeof min !== 'number' || isNaN(min)) {
        min = item.define.min = 0;
      }

      if (typeof max !== 'number' || isNaN(max)) {
        max = item.define.max = 0;
      }

      if (min <= max) {
        item.define.used = true;
        item.define.showError = false;
        this.createFilterParams();
      } else {
        item.define.used = false;
        item.define.errorTip = '请从低到高输入';
        item.define.showError = true;
      }
    },

    // 当筛选值发生改变时 生成新的过滤参数
    createFilterParams () {
      var params = {};

      this.outFilterArr.forEach(item => {
        params[item.id] = {
          id: item.id,
          title: item.title,
          val: item.val
        }
      });

      this.innerFilterArr.forEach(item => {
        if (item.define && item.define.used) {
          params[item.id] = {
            id: item.id,
            title: item.title,
            min: item.define.min,
            max: item.define.max
          }
        } else {
          params[item.id] = {
            id: item.id,
            title: item.title,
            val: item.val
          }
        }
      });
      
      this.filterChange(params);
    }
  }
}
</script>
