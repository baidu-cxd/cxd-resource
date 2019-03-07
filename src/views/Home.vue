<template>
  <div class="home">
    <div class="card-content">
      <router-link to="./library/portal" class="card">
        <div class="svg-content">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	          viewBox="-32 -32 185 185"  xml:space="preserve">
            <path id="i1"  stroke-miterlimit="10" d="M60.5,82H107c2.2,0,4-1.8,4-4V27c0-2.2-1.8-4-4-4H14c-2.2,0-4,1.8-4,4v51c0,2.2,1.8,4,4,4h46v19H34.3"/>
            <line id="i2"  stroke-miterlimit="10" x2="85.7" y2="101" x1="60" y1="101"/>
	          <line id="i3"  stroke-miterlimit="10" x1="10" y1="32.7" x2="111" y2="32.7"/>
	          <line id="i4"  stroke-miterlimit="10" x2="10" y2="73" x1="111" y1="73"/>         
         </svg>
        </div>
        <h3>官网资源库</h3>
        <p>百度云官网使用的图标等</p>
        <span>Link To</span>
      </router-link>
      <router-link to="./library/console" class="card">
        <div class="svg-content">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	          viewBox="-32 -32 185 185"  xml:space="preserve">
              <path id="i21" d="M88.5,99.1H33.8c-2.1,0-3.8-1.7-3.8-3.8V25.7c0-2.1,1.7-3.8,3.8-3.8h54.8c2.1,0,3.8,1.7,3.8,3.8v69.5
	                 C92.4,97.4,90.7,99.1,88.5,99.1z"/>
              <line id="i22" x1="30" y1="34.3" x2="92.4" y2="34.3"/>
              <line id="i23" x1="30" y1="86.2" x2="92.4" y2="86.2"/>
              <polyline id="i27" points="44.9,51.5 57.7,60.5 44.9,69.5 "/>
              <path id="i24" d="M29,31.1H18.3c-2.1,0-3.8,1.7-3.8,3.8v51.7c0,2.1,1.7,3.8,3.8,3.8H29"/>
              <path id="i25" d="M93.3,31.1H104c2.1,0,3.8,1.7,3.8,3.8v51.7c0,2.1-1.7,3.8-3.8,3.8H93.3"/>
              <line id="i26" x1="78.9" y1="69.1" x2="67.2" y2="69.1"/>       
         </svg>
        </div>
        <h3>控制台资源库</h3>
        <p>百度云控制台使用的图标等</p>
        <span>Link To</span>
      </router-link>
      <router-link to="./library/brand" class="card">
        <div class="svg-content">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	          viewBox="-32 -32 185 185"  xml:space="preserve">
            <path id="i31" d="M67.9,96c-11.4,2.2-23.7-1.1-32.5-9.9c-14.1-14.1-14.1-37,0-51.1s37-14.1,51.1,0s14.1,37,0,51.1"/>
            <polygon id="i32" points="61,38.2 68.1,50.8 82.2,53.6 72.4,64.2 74.1,78.5 61,72.5 47.9,78.5 49.6,64.2 39.8,53.6 53.9,50.8 "/>
            <path id="i33" d="M61,14.3c25.5,0,46.2,20.7,46.2,46.2S86.5,106.7,61,106.7S14.8,86,14.8,60.5c0-17.2,9.4-32.1,23.3-40.1
	          C44.8,16.5,52.7,14.3,61,14.3z"/>
         </svg>
        </div>
        <h3>品牌资源库</h3>
        <p>logo，图片，及 ppt 模版</p>
        <span>Link To</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    setTimeout(()=>{this.animateIt('i1')},500);
    setTimeout(()=>{this.animateIt('i2')},900);
    setTimeout(()=>{this.animateIt('i3')},500);
    setTimeout(()=>{this.animateIt('i4')},500);

    setTimeout(()=>{this.animateIt('i21')},500);
    setTimeout(()=>{this.animateIt('i22')},500);
    setTimeout(()=>{this.animateIt('i23')},500);
    setTimeout(()=>{this.animateIt('i24')},500);
    setTimeout(()=>{this.animateIt('i25')},500);
    setTimeout(()=>{this.animateIt('i26')},500);
    setTimeout(()=>{this.animateIt('i27')},500);

    setTimeout(()=>{this.animateIt('i31')},500);
    setTimeout(()=>{this.animateIt('i32')},500);
    setTimeout(()=>{this.animateIt('i33')},500);
  },
  methods: {
    animateIt(elementId) {
        var elem = document.getElementById(elementId)
        elem.style.strokeLinecap="round"
        elem.style.stroke = "#fff"
        elem.style.fill = "rgba(0,0,0,0)"
        elem.style.strokeMiterlimit="10"
        elem.style.strokeWidth = "3"
        var length = elem.getTotalLength()
        elem.style.strokeDasharray = `0 ${length} ${length} 0`
        elem.style.transition = 'stroke-dashoffset .8s'
        elem.style.strokeDashoffset = -length
    }
  }
}
      
</script>

<style lang="stylus">
.home
  margin-top 122px
  width 100%
  min-height 200px
  padding 40px 0
  .card-content
    margin 0 100px 
    display flex
    justify-content space-between
    .card
      max-width 240px
      width 25%
      min-height 20px
      position relative
      //background-color #f5f5f5 
      &:hover span:after
        width 60px         
      img 
        width 100%
        max-width 120px
        display block
        margin auto
      .svg-content
        width 120px
        height 120px
        margin auto
        border-radius  100px
        background-color #000
        animation scale-in .6s ease-in-out 0s forwards
      h3
        color #3a3a3a
        font-size 20px 
        line-height 38px
        padding-top 0px
        text-align center
        font-weight 500
        margin 20px 0 10px 0
        opacity 0
        animation fade-in .8s ease-in-out .05s forwards
      p
        color #3a3a3a
        font-size 14px
        margin 0 
        text-align center
        animation fade-in .8s ease-in-out .1s forwards
      span
        display block
        text-align center
        margin 0
        font-size 12px
        line-height 24px
        height 34px
        padding-top 15px
        padding-bottom 10px
        width 100%
        font-family "avenir", "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
        -moz-osx-font-smoothing grayscale
        -webkit-font-smoothing antialiased
        color #3A3A3A
        font-weight 900
        position relative
        letter-spacing 3px
        animation fade-in .8s ease-in-out .15s forwards
        &:after
          content ""
          display block
          height 3px
          position absolute
          bottom 5px
          left 50%
          transform translateX(-50%)
          width 20px
          background-color #000
          transition all .2s ease-in-out

//动画
@keyframes fade-in
  0%
    opacity 0
    transform translateY(40px)
  100%
    opacity 1
    transform translateY(0)

@keyframes scale-in
  0%
    opacity 0
    transform scale(.4)
  100%
    opacity 1
    transform scale(1)
</style>

