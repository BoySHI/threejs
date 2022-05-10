<!--
 * @Description: 
 * @Author: shiby
 * @Date: 2022-05-07 16:25:07
 * @LastEditTime: 2022-05-10 09:53:02
 * @LastEditors: shiby
 * @Reference: 
-->
<template>
  <div class="scene">
    <button @click="increase">增加{{count}}</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      count: 1
    }
  },
  methods: {
    increase () {
      // this.count++
      this.$store.commit('add', this.count)
    }
  }
}
</script>
