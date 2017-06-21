<template>
  <div>
    <div class="dialog">
    <div class="dialog-cover" @click="closeShow" v-if="isShow"></div>
    <transition name="drop">
      <div class="dialog-warp" v-if="isShow">
        <div @click="closeShow" class="close">
          <div class="dialog-close"></div>
        </div>
        <div class="dialog-content">
          <slot>empty</slot>
        </div>
      </div>
    </transition>
  </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeShow () {
      this.$emit('on-close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .5s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
*{
  padding: 0;
  margin: 0;
}
.dialog{
  width: 100%;
  height: 100%;
  position: fixed;
}
.dialog-cover{
 position: fixed;
 top:0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 2;
 background: rgba(0,0,0,0.5);
}
.dialog-warp{
 width: 50%;
 position: fixed;
 left: 50%;
 margin-left:-25%;
 top:20%;
 overflow: auto;
 background: rgba(255,255,255,1);
 z-index: 10;
}
.close{
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top:10px;
}
.close:hover{
  cursor: pointer;
}
.dialog-close{
  width: 20px;
  height: 0px;
  border:1px solid black;
  transform: rotate(45deg);
  position: relative;
  margin-top:10px;
  
}
.dialog-close:after{
  content: "";
  width: 20px;
  height: 0;
  border:1px solid black;
  transform: rotate(-90deg);
  position: absolute;
  top:-1px;
  left: -1px;
}
.dialog-content{
  padding:25px 15px;
  overflow: hidden;
}
</style>
