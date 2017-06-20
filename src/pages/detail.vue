<template>
  <div class="detail-warp">
  	<div class="detail-left">
  	  <div class="product-board">
  	    <img :src="productIcon"/>
  	    <ul>
  	    	<router-link v-for="item in products" :to="{path:item.path}" tag = "li" active-class="active">{{item.name}}</router-link>
  	    </ul>
  	  </div>
  	</div>
  	<div class="detail-right">
  	  <keep-alive>
  	    <router-view></router-view>
  	  </keep-alive>
  	</div>
  </div>
</template>
  
<script>

export default {
  data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      productImg: {
        '/detail/count': require('../assets/images/1.png'),
        '/detail/forecast': require('../assets/images/2.png'),
        '/detail/analysis': require('../assets/images/4.png'),
        '/detail/publish': require('../assets/images/3.png')
      }
    }
  },
  computed: {
    productIcon () {
      return this.productImg[this.$route.path]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.detail-warp{
  width: 1200px;
  margin:20px auto;
  overflow: hidden;
}
.detail-left{
  float: left;
  width: 200px;
  text-align: center;
}
.product-board{
  width: 100%;
  background: #fff;
}
.product-board img{
  
}
.detail-left ul{
  list-style: none;
  background: #fff;
  padding: 0;
}
.detail-left ul li{
  padding: 8px 10px;
}
.detail-left ul .active,
.detail-left ul li:hover{
  background: rgb(64,172,134);
  color:#fff;
}
.detail-right{
  float: left;
  width:980px;
  margin-left:20px;
}
.sale-board{
}
.sale-board h2{
  padding: 15px 0;
  font-weight: 500;
}
.sale-board-doc,
.sale-board-intro,
.sale-board-from{
  background: #fff;
}
.sale-board-intro p{
  font-weight: 300;
  background: rgb(242,249,252);
  line-height: 2em;
  padding: 0 40px;
  margin: 0;
}
.sale-board h2{
  width: 900px;
  margin: 0 auto;
}
.sale-board-from{
  padding:15px 40px;
}
.sale-board-from-line{
  padding-top: 10px;
  clear: both;
  height: 30px;
  line-height: 30px;
}
.sale-board-from-line-left{
  float: left;
}
.sale-board-from-line-right{
  margin-left:200px;
}
.sale-board-from-button{
  background: rgb(64,172,134);
  color: #fff;
  display: inline-block;
  padding: 2px 8px;
}
.sale-board-doc{
  margin-top:30px;
  padding: 10px 40px;
  font-weight: 300;
}
.sale-board-doc h2{
  margin: 0;
  padding: 5px;
}
.sale-board-doc li{
  list-style: none;
}
.sale-board-doc ul{
  padding: 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 15px;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
</style>
