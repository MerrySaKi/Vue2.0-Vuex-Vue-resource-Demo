<template>
  <div class="selecton-components">
    <div class="selecton-show" @click="listShow">
      <span id="">{{selections[nowIndex].label}}</span>
      <div class="selection-arrow">
      </div>
      </div>
      <div class="selection-list" v-show="selectonShow">
        <ul>
          <li v-for="(item, index) in selections" @click = "changeIndex( index)"> {{ item.label }}</li>
        </ul>
      </div>
    
  </div>
</template>

<script>

export default {
  props: {
    selections: {
      type: Array,
      default: [
        { label: 'test', value: 0 }
      ]
    }
  },
  data () {
    return {
      selectonShow: false,
      nowIndex: 0
    }
  },
  methods: {
    listShow () {
      this.selectonShow = !this.selectonShow
    },
    changeIndex (index) {
      this.nowIndex = index
      this.selectonShow = false
      this.$emit('on-change', this.selections[this.nowIndex])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.selecton-components{
  position: relative;
  display: inline-block;
}
.selecton-show{
  position: relative;
  display: inline-block;
  height: 25px;
  border:1px solid #e3e3e3;
  padding:0 20px 0 10px;
  line-height: 25px;
}
.selection-arrow{
  width:0;
  height: 0;
  border-left:4px solid transparent;
  border-right: 4px solid transparent;
  border-top:5px solid #E3E3E3;
  display: inline-block;
  margin-top: -1px;
  vertical-align: middle;
  margin-left: 12px;
  margin-right:-12px;
}
.selection-list{
  position: absolute;
  top:25px;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top:none;
}
.selection-list ul{
  list-style: none;
}
.selection-list ul li {
  padding: 0 20px 0 10px;
  border-left: 1px solid #E3E3E3;
  border-right: 1px solid #E3E3E3;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.selection-list ul li:hover{
  background: #E3E3E3;
}
</style>
