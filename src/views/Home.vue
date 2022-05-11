<!--
 * @Description: 
 * @Author: shiby
 * @Date: 2022-05-07 16:25:07
 * @LastEditTime: 2022-05-11 14:07:21
 * @LastEditors: shiby
 * @Reference: 
-->
<template>
  <div class="scene">
    <button @click="increase">增加{{count}}</button>
    <button @click="uncrease">减少{{count}}</button>
    <!-- 稍微修改下 -->
  </div>
</template>

<script>
import { debounce } from '../utils/debounce.js'
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
    }, 2000)
  }
}
</script>
