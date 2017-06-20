<template>
  <div class="number-components">
    <div class="counter-btn" @click="minus">-</div><div class="counter-show"><input type="text" v-model="number" @keyup="fixNumer"/>
    </div><div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      number: this.min
    }
  },
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 5
    }
  },
  methods: {
    add () {
      if (this.number > this.max) {
        return
      } else {
        this.number ++
      }
    },
    minus () {
      if (this.number < this.min) {
        return
      } else {
        this.number --
      }
    },
    fixNumer () {
      let fix
      if (typeof this.number === 'string') {
        fix = Number(this.number.replace(/\D/g, ''))
      } else {
        fix = this.number
      }
      if (fix > this.max || fix < this.min) {
        fix = this.min
      }
      this.number = fix
    }
  },
  watch: {
    number () {
      this.$emit('on-change', this.number)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin:0;
}
.number-components{
  
}
.counter-show{
  box-sizing:border-box;
  border:1px solid #E3E3E3;
  border-right:none;
  border-left:none;
  height: 30px;
  vertical-align:top;
}
.counter-show input{
  outline: none;
  border:none;
  font-size: 16px;
  width: 40px;
  text-overflow: ellipsis;
  text-align: center;
}
.counter-show,
.counter-btn{
  display: inline-block;
  cursor: pointer;
}
.counter-btn{
  border:1px solid #E3E3E3;
  width: 28px;
  line-height: 28px;
  height: 28px;
  text-align: center;
}
.counter-btn:hover{
  background: rgb(64,172,134);
  color:#fff;
}
</style>
