<template>
  <div class="chooser-components">
    <ul class="chooser-list">
      <li v-for="(item, index) in mulChoose" 
          @click = "toggleChoose(index)"
          :title="item.label"
          :class = "{active:checkActive(index)}"
      >{{item.label}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    mulChoose: {
      type: Array,
      default: [
        {label: 'test', value: 0}
      ]
    }
  },
  data () {
    return {
      nowIndex: []
    }
  },
  methods: {
    toggleChoose (index) {
      if (this.nowIndex.indexOf(index) === -1) {
        this.nowIndex.push(index)
      } else {
        this.nowIndex.splice(this.nowIndex.indexOf(index), 1)
      }
    },
    checkActive (index) {
      return this.nowIndex.indexOf(index) !== -1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chooser-list{
  padding: 0;
  margin: 0;
}
.chooser-list li{
  display: inline-block;
  border:1px solid #E3E3E3;
  padding:0 15px;
  box-sizing: content-box;
  height: 28px;
  line-height: 28px;
}
.chooser-list li + li{
  margin-left: 10px;
}
.active{
  background: rgb(64,172,134);
  color:#fff;
}
</style>
