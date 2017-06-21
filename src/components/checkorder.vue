<template>
  <div class="check-component">
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态!
      <div class="v-btn" @click = "checkStatus" >
        支付成功
      </div>
      <div class="v-btn" @click = "checkStatus" >
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </this-dialog>
  </div>
</template>

<script>
import thisDialog from './base/dialog'
export default {
  components: {
    thisDialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [Number, String]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http('/api/checkOrder', {
        orderId: this.orderId
      })
      .then(() => {
        this.isShowSuccessDialog = true
        this.$emit('on-close-check-dialog')
      }, () => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    toOrderList () {
      this.$router.push({path: '/orderList'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check-component{
}
</style>
