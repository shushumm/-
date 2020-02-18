<template>
    <div id="footerContainer">
      <div :class="{active: $route.path === '/netease'}" @click="goPath('./netease')" class="guideItem">
      <i class="iconfont icon-fangzi"></i>
        <span>首页</span>
      </div>
       <div :class="{active: $route.path === '/item'}" @click="goPath('./item')"  class="guideItem">
       <i class="iconfont icon-shugui"></i>
        <span>分类</span>
      </div>
       <div :class="{active: $route.path === '/topic'}"  @click="goPath('./topic')"  class="guideItem">
       <i class="iconfont icon-xiangkuang"></i>
        <span>值得买</span>
      </div>
       <div :class="{active: $route.path === '/shoppingcar'}"  @click="goPath('./shoppingcar')"  class="guideItem">
       <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
       <div :class="{active: $route.path === '/home'}"  @click="goPath('./home')"  class="guideItem">
       <i class="iconfont icon-changyongicon-"></i>
        <span>个人</span>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    goPath(path){
      //跳转至指定的路由路劲
      this.$router.push(path)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#footerContainer
  display flex
  top-border-1px(#eee)
  position fixed
  left 0
  bottom 0
  width 100%
  height 100px
  box-sizing border-box
  .guideItem
    width 40%
    height 100px
    text-align center
    display flex
    flex-direction column 
    &.active
      color #DD1A21
    .iconfont
      font-size 40px
      line-height 60px
</style>