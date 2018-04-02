<template>
  <div class="grade-filter">
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
          v-for = "item in defaultFilters.outSelect"
          v-if = "oVisiable.outSelect.indexOf(item.id) > -1"
          :key="item.id">
          <span class="out-select__name">{{item.name}}</span>
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
        v-for = "item in defaultFilters.innerSelect"
        v-if = "oVisiable.innerSelect.indexOf(item.id) > -1"
        :key="item.id">
        <div class="filter__title">
          {{item.name}}
        </div>
        <div class="define__section"
          v-if = " item.type === 'define' ">
          <div class="define__name">
            {{item.defineTitle}}
          </div>
          <div class="define__input define__split">
            <input 
              type="number" 
              class="define__min" 
              v-model="item.min"
              @input="minChange(item)">
          </div>
          <div class="define__input">
            <div class="pop-up"
              v-if="item.maxErrorVisiable">
                {{item.maxErrorTip}}
            </div>
            <input 
              type="number" 
              class="define__max" 
              v-model="item.max"
              @input="maxChange(item)">
          </div>
        </div>
        <ul class="general__list">
          <li class="general__item"
            v-for = "(option, index) in item.options"
            @click.stop = "changeVal(item, option.value)"
            :key="index"
            :class="{'active': item.val === option.value}">{{option.title}}</li>
        </ul>
      </div>     
    </div>
    <div 
      class="bottom__bar"
      :class="{ 'empty-source': carSourceNum == 0 }">
      <span>查看{{carSourceNum}}条车源</span>
    </div>
  </div>
</template>

<script>
import '@/sass/gradeFilter.scss';
import defaultFilters from '@/config/filterDefaultConfig';

export default {
  name: 'c3-grade-filter',
  props: {
    // 配置哪些字段是可以显示出来给用户选择筛选值的
    oVisiable: {
      type: Object,
      default: function () {
        // 默认的配置全部显示
        return {
          outSelect: ['area', 'brand', 'level', 'price', 'carSource'],
          innerSelect: ['mile', 'year', 'liter', 'gear', 'engine', 'ds', 'sellerType', 'makerType']
        }
      }
    },
    goBack: {
      type: Function,
      default: function(){}
    },
    // 当过滤的条件发生改变的时候执行的回调函数
    filterChange: {
      type: Function,
      default: function(){}
    },
    carSourceNum: {
      type: Number,
      default: 0
    },
    outSelectClick: {
      type: Function,
      default: function(){}
    }
  },
  data () {
    return {
      defaultFilters
    }
  },
  methods: {
    // 获取当前 包含各个过滤参数具体指的 对象
    getCurParams () {
      let params = {};
      let oConf = this.defaultFilters;

      // type 分为`内部选择`和`外部选择`两种
      for (let type in oConf) {
        let arrTypeConfs = oConf[type];
        arrTypeConfs.forEach(item => {
          // 则直接使用当前过滤字段对象的属性值
          params[item.id] = {
            id: item.id,
            val: item.val,
            name: item.name
          };

          // 如果当前的字段是支持自定义区间配置的
          // 并且已经使用了自定义设置了区间值
          if (item.type === 'define' && item.useDefine) {
            delete params[item.id]['val'];
            params[item.id]['min'] = item.min;
            params[item.id]['max'] = item.max;
            params[item.id]['useDefine'] = true;
          }
        });
      }
      return params;
    },

    changeVal (oFilter, newVal) {
      oFilter.val = newVal;

      // 如果该属性支持自定义区间 && 已经定义过了区间值
      // 修改使用自定义属性的标识值为 false
      if (oFilter.type === 'define' && oFilter.useDefine) {
        oFilter.useDefine = false;
      }

      // 执行回调函数并且把最新的 包含各个过滤参数值的对象注入到方法里面的第一个参数
      this.filterChange(this.getCurParams());
    },

    minChange (oFilter) {
      oFilter.min = Number(oFilter.min);
      this.predicateReverse(oFilter);
    },

    maxChange (oFilter) {
      oFilter.max = Number(oFilter.max);
      this.predicateReverse(oFilter);
    },

    predicateReverse (oFilter) {
      // TODO 存在输入中文的可能

      if (typeof oFilter.min === 'number' && 
          typeof oFilter.max === 'number' && 
          oFilter.min > oFilter.max) 
      {
        // 发生了倒序问题
        // 为了防止查询出错 默认将 useDefine 属性改为 false
        oFilter.useDefine = false;
        oFilter.maxErrorTip = '请从低到高输入';
        oFilter.maxErrorVisiable = true;
      } else {
        oFilter.useDefine = true;
        oFilter.maxErrorVisiable = false;
        this.filterChange(this.getCurParams());
      }
    }
  }
}
</script>
