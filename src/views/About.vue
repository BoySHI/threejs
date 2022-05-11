<!--
 * @Description: 
 * @Author: shiby
 * @Date: 2022-05-07 16:25:07
 * @LastEditTime: 2022-05-11 14:40:21
 * @LastEditors: shiby
 * @Reference: 
-->
<template>
  <div class="about">
    <h1>This is an css练习 page</h1>
    <div class="boxWarp">
      <div class="ulWrap">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.boxWarp {
  .ulWrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    div {
      width: 32%;
      height: 200px;
      min-width: 100px;
      background-color: yellow;
      margin-top: 20px;
      border-radius: 5px;
      box-shadow: 2px 3px 3px #e2e1e1;
    }
  }
  .ulWrap::after {
    content: "";
    height: 0px;
    width: 32%;
  }
}
</style>
