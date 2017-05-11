<template>
  <div class="slide-show" @mouseover = "clearInv" @mouseout="runInv">
     <div class="slide-img">
     <a class="imgBlock">
       <transition name="prev">
         <img v-if = "isShow" :src="slides[nowIndex].src" alt="" />
       </transition>
       <transition name="next">
         <img v-if = "!isShow" :src="slides[nowIndex].src" alt="" />
       </transition> 
     </a>
     </div>
     <span>
       <h2>{{slides[nowIndex].title}}</h2>
     <ul class="slide-list">
       <li><a @click = "goto(prevIndex)"><</a></li>
       <li v-for="(item, index) in slides">
         <a @click="goto(index)">{{index + 1}}</a>
       </li>
       <li><a @click = "goto(nextIndex)">></a></li>
     </ul>
     </span>
  </div>
</template>

<script>

export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
        this.$emit('onchange', index)
      }, 10)
    },
    runInv () {
      this.runId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.runId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
@import url("../../css/normalize.css");
*{
  padding: 0;
  margin: 0;
}
.slide-show{
  position: relative;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2{
  color: #fff;
  height: 30px;
}
.slide-img{
  width: 100%;
}
.slide-img img{
  width: 900px;
  position: absolute;
  top: 0;
}
.slide-list li{
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-list li a{
  color:#fff;
  text-decoration: none;
  font-weight: 300;
  line-height: 30px;
}
.slide-show span{
  background: rgba(255,255,255,0.4);
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}


.prev-enter{
  transform: translateX(900px);
}
.prev-enter-active{
  transition:all .3s ease;
}



.next-leave{
  opacity: 0;
}
.next-leave-active{
 transform: translateX(-900px);
 transition:all .3s ease;
 opacity: 0.1;
}

</style>
