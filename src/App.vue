<template>
  <div id="app" :class="[isHome(),isTop()]">
    <CxdHeader/>
    <div class="contents">
       <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import CxdHeader from './components/CxdHeader.vue'
import Footer from './components/Footer.vue'
export default {
  data() {
    return {
      scrollTop : '0'
    }
  },
  components: {
    CxdHeader,
    Footer
  },
  mounted(){
      window.addEventListener('scroll',this.handleScroll,true)
   },
  methods: {
    isHome(){
      if (this.$route.path == '/') {
        return 'home'
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
  h1, h2, h3, h4, h5, p, a, span 
    font-family: "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    /*修改浏览器渲染字体效果*/ 
    -moz-osx-font-smoothing: grayscale;  
    -webkit-font-smoothing: antialiased; 
  .contents
    min-height 60%
</style>

