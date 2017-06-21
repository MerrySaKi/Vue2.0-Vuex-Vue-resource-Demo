<template>
  <div class="index-warp">
    <div class="index-left">
      <div class="index-left-block">
        <p>全部产品</p>

        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a><span v-if="item.hot" class="hot-tag">HOT</span></li>
          </ul>
        </template>

      </div>
      <div class="index-left-block newList">
        <p>最新消息</p>
        <ul>
          <li v-for="news in newsList.list">
            <a href="news.url">{{news.name}}<span>{{news.time}}</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <!--轮播图-->
      <slide-show class="banner" :slides = 'slide' @onchange = "dosome"></slide-show>
      <div class="index-right-block">
        <!--产品列表  -->
        <template v-for="(sales, index) in saleList">
          <div class="saleList">
            <div :class="['imgDiv-' + sales.id, 'imgDiv']"></div>
            <div>
              <h3>{{sales.name}}</h3>
              <p>{{sales.context}}</p>
              <a :href="sales.href">立即购买</a>
            </div>
          </div>
        </template>
        
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from './slideshow'
export default {
  created () {
    this.$http.get('/api/getList')
      .then((res) => {
        this.saleList = res.data
      }, (err) => {
        console.log(err)
      })
  },
  data () {
    return {
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {name: '数据统计', url: '/detail/count'},
            {name: '数据预测', url: '/detail/forecast', hot: true},
            {name: '流量分析', url: '/detail/analysis'},
            {name: '广告发布', url: '/detail/publish'}
          ]
        },
        app: {
          title: '应用产品',
          list: [
            {name: '91手机助手', url: ''},
            {name: '产品助手', url: ''},
            {name: '智能地图', url: ''},
            {name: '团队语音', url: '', hot: true}
          ]
        }
      },
      newsList: {
        list: [
          {name: '新闻例子1', time: '2017-4-10', url: ''},
          {name: '新闻例子1', time: '2017-4-10', url: ''},
          {name: '新闻例子1', time: '2017-4-10', url: ''},
          {name: '新闻例子1', time: '2017-4-10', url: ''},
          {name: '新闻例子1', time: '2017-4-10', url: ''}
        ]
      },
      saleList: [],
      slide: [
        {
          src: require('../assets/slideShow/1.jpg'),
          title: 'xxx1',
          href: 'detail/1'
        },
        {
          src: require('../assets/slideShow/2.jpg'),
          title: 'xxx2',
          href: 'detal/2'
        },
        {
          src: require('../assets/slideShow/3.jpg'),
          title: 'xxx3',
          href: 'detal/3'
        }
      ]
    }
  },
  components: {
    slideShow
  },
  methods: {
    dosome () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-warp{
  width:70%;
  margin:auto;
  display: flex;
  justify-content: space-around;
  padding:30px 0;
}
/**left**/
.index-left{
  width: 15%;
}

.index-left-block{
  box-shadow: #666 0 0 2px;
}
.index-left-block p{
  margin: 0;
  padding: 10px 0 10px 10px;
  background: rgb(67,176,137);
  color: #fff;
  font-size: 16px;
}
.index-left-block ul{
  padding: 0;
}
.index-left-block h3{
  font-size: 16px;
  margin:0 10px;
  padding:10px 0;
}
.index-left-block ul li{
  list-style: none;
  font-size: 14px;
  padding-left:20px;
}
.index-left-block ul li + li{
  padding-top:15px;
}
.index-left-block ul + h3{
  border-top:1px solid #ddd;
}
.index-left-block ul:last-child{
  padding-bottom: 15px;
}
a{
  text-decoration: none;
  color:#666;
}
a:hover{
  color:#000;
}
.hot-tag{
  background-color: red;
  color:#fff;
  margin-left: 5px;
}
.newList ul li a{
  width:100;
    display: flex;
    justify-content: space-around
}
.newList ul li{
  width:100;
  padding:0;

}
/**right**/

.index-right{
  width: 900px;
  background: rgb(240,242,242);
}
.index-right .banner{
  width:100%;
}
.index-right .index-right-block{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.index-right .saleList{
  width: 48%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: #fff 0 0 1px;
  margin-bottom:5px;
  background-color: #fff;
  padding: 10px 0;
}
.index-right .saleList p{
  font-size:14px;
  font-weight: 400;
}
.index-right .saleList div:nth-child(2){
  width: 60%;
}
.index-right .saleList a{
  border:none;
  outline: none;
  background-color:rgb(67,176,137);
  color:#fff;
  padding: 5px 15px;
}
.imgDiv{
  width: 100px;
  height: 100px;
}
.imgDiv-earth{
  background: url(../assets/images/1.png) no-repeat;
}
.imgDiv-car{
  background: url(../assets/images/2.png) no-repeat;
}
.imgDiv-loud{
  background: url(../assets/images/3.png) no-repeat;
}
.imgDiv-mouten{
  background: url(../assets/images/4.png) no-repeat;
}
</style>
