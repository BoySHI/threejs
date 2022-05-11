<!--
 * @Description: 
 * @Author: shiby
 * @Date: 2022-05-07 16:25:07
 * @LastEditTime: 2022-05-11 16:53:34
 * @LastEditors: shiby
 * @Reference: 
-->
<template>
  <div class="scene">
    <button @click="increase">防抖函数-增加{{count}}</button>
    <button @click="uncrease">防抖函数-减少{{count}}</button>
    <button @click="myClone">深拷贝</button>
    <!-- 稍微修改下 -->
  </div>
</template>

<script>
import { debounce } from '../utils/debounce.js'
import { deepClone } from '../utils/deepClone'
var _ = require('lodash')

export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      count: 1
    }
  },
  created () {
  },
  methods: {
    increase: debounce(function () {
      console.log("手写的防抖函数");
      this.$store.commit('add', this.count)
    }, 200),
    uncrease: _.debounce(function () {
      console.log("lodash的函数");
    }, 2000),
    // 深拷贝
    myClone () {
      let obj = {
        a: 1,
        b: 2
      }
      let obj2 = [4, 5, 6]
      let res = deepClone(obj)
      let res2 = deepClone(obj2)
      console.log("自己递归实现的对象深拷贝：", res);
      console.log("自己递归实现的数组深拷贝：", res2);
      let lodashClone = _.cloneDeep(obj)
      let lodashCloneArr = _.cloneDeep(obj2)
      obj.a = "消化"
      console.log("loadsh实现对象深拷贝：", obj, lodashClone);
      console.log("loadsh实现数组深拷贝：", obj2, lodashCloneArr);
    }
  }
}
</script>
