<template>
  <div class="bank-choose">
    <ul>
    	<li v-for="(item, index) in banks"
    	  :class="[item.name, {active: index === nowIndex}]"
    	  :title="item.label"
    	  @click = "choseSelection(index)"
    	  ></li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      nowIndex: 0,
      banks: [
        {
          id: 101,
          label: '招商银行',
          name: 'zhaoshang'
        },
        {
          id: 201,
          label: '中国建设银行',
          name: 'jianshe'
        },
        {
          id: 301,
          label: '浦发银行',
          name: 'pufa'
        },
        {
          id: 401,
          label: '交通银行',
          name: 'jiaotong'
        },
        {
          id: 501,
          label: '中国工商银行',
          name: 'gongshang'
        },
        {
          id: 601,
          label: '中国农业银行',
          name: 'nongye'
        },
        {
          id: 701,
          label: '中国银行',
          name: 'zhongguo'
        },
        {
          id: 801,
          label: '广发银行',
          name: 'guangfa'
        },
        {
          id: 901,
          label: '中信银行',
          name: 'zhongxin'
        },
        {
          id: 1001,
          label: '北京银行',
          name: 'beijing'
        },
        {
          id: 1101,
          label: '上海农商银行',
          name: 'snongshang'
        },
        {
          id: 1201,
          label: '华夏银行',
          name: 'huaxia'
        },
        {
          id: 1301,
          label: '兴业银行',
          name: 'xingye'
        },
        {
          id: 1401,
          label: '百度钱包',
          name: 'baifubao'
        },
        {
          id: 1501,
          label: '储蓄',
          name: 'chuxu'
        },
        {
          id: 1601,
          label: '北京农商银行',
          name: 'bnongshang'
        }
      ]
    }
  },
  methods: {
    choseSelection (index) {
      this.nowIndex = index
      this.$emit('on-change', this.banks[index])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bank-choose{
  margin: 5px auto 15px;
}
.bank-choose::after{
  content: "";
  clear: both;
  display: block;
  visibility: hidden;
}
.bank-choose ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.bank-choose ul .active {
  border:1px solid rgb(64,172,134);
}
.bank-choose ul li{
  display: inline-block;
  width: 117px;
  height: 32px;
  float: left;
  margin: 5px;
  border: 1px solid #e3e3e3;
  cursor: pointer;
  background-image: url(../assets/banks/banks.png);
}
.zhaoshang {
    background-position: -2160px 0;
}
.jianshe {
    background-position: -720px 0;
}
.pufa {
    background-position: -1800px 0;
}
.jiaotong {
    background-position: -3120px 0;
}
.minsheng {
    background-position: -2760px 0;
}
.pingan {
    background-position: -2400px 0;
}
.beijing {
    background-position: -960px 0;
}
.xingye {
    background-position: 0 0;
}
.shanghai {
    background-position: -1560px 0;
}
.guangfa {
    background-position: -840px 0;
}
.gongshang {
    background-position: -2640px 0;
}
.nongye {
    background-position: -1680px 0;
}
.guangda {
    background-position: -2280px 0;
}
.zhongguo {
    background-position: -2520px 0;
}
.zhongxin {
    background-position: -480px 0;
}
.chuxu {
    background-position: -120px 0;
}
.bnongshang {
    background-position: -1440px 0;
}
.huaxia {
    background-position: -2040px 0;
}
.snongshang {
    background-position: -2880px 0;
}

.baifubao {
    background-position: -1320px 0;
}
</style>
