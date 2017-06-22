<template>
  <div class="orderList-warp">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="orderList-item">
        选择产品:
        <v-selection :selections="products" @on-change="productChange" class="selection"></v-selection>
      </div>
      <div class="orderList-item">
        开始日期
        <datepicker :wrapperClass="inlineBlock" @input="changestartDate"  :format="format"></datepicker>
      </div>
      <div class="orderList-item">
        结束日期
        <datepicker :wrapperClass="inlineBlock" @input="changeendDate"></datepicker>
      </div>
      <div class="orderList-item">
        关键词
        <input type="" v-model.lazy="query" class="order-query"/>
      </div>
    </div>
    <div class="order-table">
      <table>
        <tr>
          <th v-for="item in tableHeads">{{item.label}}</th>
        </tr>
        <tr v-for="orderItems in tableData">
          <td v-for="item in tableHeads">{{orderItems[item.key]}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import vSelection from '../components/base/selection'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    vSelection,
    Datepicker
  },
  data () {
    return {
      inlineBlock: 'inlineBlock',
      startDate: '',
      endDate: '',
      format: 'D dsu MMM yyyy',
      products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      productId: 0,
      query: '',
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ]
    }
  },
  watch: {
    query () {
      this.getTableData()
    }
  },
  computed: {
    tableData () {
      return this.$store.getters.getOrderList
    }
  },
  methods: {
    productChange (id) {
      // this.productId = id.value
      // this.getTableData()
      this.$store.commit('updataParams', {
        key: 'productId',
        val: id.value
      })
      this.$store.dispatch('fetchOrderList')
    },
    changestartDate (data) {
      this.$store.commit('updataParams', {
        key: 'startDate',
        val: data
      })
      this.$store.dispatch('fetchOrderList')
      // this.startDate = data
      // this.getTableData()
    },
    changeendDate (data) {
      this.$store.commit('updataParams', {
        key: 'endData',
        val: data
      })
      this.$store.dispatch('fetchOrderList')
      // this.endDate = data
      // this.getTableData()
    },
    getTableData () {
      let reqParams = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      }
      this.$http.get('/api/getOrderList', reqParams)
      .then((res) => {
        this.tableData = res.data.list
      }, _ => {
        console.log('err')
      })
    }
  },
  mounted () {
    // this.getTableData()
    this.$store.dispatch('fetchOrderList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orderList-warp {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}

.order-list-choose {
}

.orderList-warp h3 {
  font-weight: 300;
}

.orderList-item {
  display: inline-block;
}

.orderList-item + .orderList-item {
  padding-left: 15px;
}

.order-table {
  width: 100%;
  height: 500px;
  margin-top: 20px;
}
.order-table table{
  width: 100%;
  background: #fff;
  text-align: center;
   border-collapse: collapse;
}
.order-table td,
.order-table th{
  border:1px solid #666;
  padding: 10px 0;
}
.order-table th{
  background: #4FC08D;
  color: #FFF;
  cursor: pointer;
}
.order-table tr:hover{
  background: rgb(251,251,251);
}
.order-query {
  border: none;
  outline: none;
  border: 1px solid rgb(169,169,169);
  height: 17px;
  text-indent: 10px;
}
.inlineBlock {
  display: inline-block;
}
</style>
