<template>
  <div id="app" :class="[isHome(),isTop()]">
    <CxdHeader/>
    <Module/>
    <Tips/>
    <div class="contents">
      <transition name="home">
        <router-view/>
      </transition>
    </div>
    <Footer/>
    <SideComponent/>
  </div>
</template>

<script>
import Module from './components/Module.vue'
import Tips from './components/Tips.vue'
import CxdHeader from './components/CxdHeader.vue'
import Footer from './components/Footer.vue'
import SideComponent from './components/SideComponent.vue'
export default {
  data() {
    return {
      scrollTop : '0'
    }
  },
  components: {
    CxdHeader,
    Footer,
    SideComponent,
    Module,
    Tips
  },
  mounted(){
      window.addEventListener('scroll',this.handleScroll,true)
   },
  methods: {
    isHome(){
      if (this.$route.path == '/') {
        return 'is-home'
      }
    },
    handleScroll(){
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    },
    isTop(){
      if (this.scrollTop <= '30'){
        return 'top'
      }
    }
  }
}
</script>


<style lang="stylus">
body
    margin 0
    padding 0
  html, body, #app
    width 100%
    height 100%
  a
    text-decoration-line none
  h1, h2, h3, h4, h5, p, a, span, div 
    font-family: "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    /*修改浏览器渲染字体效果*/ 
    -moz-osx-font-smoothing: grayscale;  
    -webkit-font-smoothing: antialiased; 
    font-weight normal
  .contents
    min-height 60%
    margin 0 80px
    padding-top 80px

// 动画
.home-enter-active
  transition all .2s ease-in-out .2s
.home-leave-active
  transition all .2s ease-in-out
.home-enter,.home-leave-to
  opacity 0
.home-enter-to,.home-leave
  opacity 1
</style>

