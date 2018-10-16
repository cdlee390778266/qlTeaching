<template>
	<div class="main content clearfix">
    <div class="combat_gains">
      <div class="tabBox">
        <ul class="nav clearfix" id="matchtype"><li seq="0" class="selected"><a href="javascript:void(0)">全部</a></li><li seq="1"><a href="javascript:void(0)">沪深证券(非B股)</a></li><li seq="2"><a href="javascript:void(0)">沪B股</a></li><li seq="3"><a href="javascript:void(0)">深B股</a></li><li seq="4"><a href="javascript:void(0)">融资融券</a></li><li seq="5"><a href="javascript:void(0)">港股</a></li><li seq="6"><a href="javascript:void(0)">金融期货</a></li><li seq="7"><a href="javascript:void(0)">商品期货</a></li><li seq="8"><a href="javascript:void(0)">期权</a></li><li seq="9"><a href="javascript:void(0)" class="vain">外汇</a></li></ul>
      </div>
      <div>
        <div class="lxf_tab">
          <ul class="tabbar tab1 clearfix">
            <li><a href="record.aspx" class="selected">资产概况</a></li>
            <li><a href="record01.aspx">我的收益</a></li>
            <li><a href="record02.aspx">当前仓位</a></li>
            <li><a href="record03.aspx">资产分布</a></li>
            <li><a href="record04.aspx">资产排名</a></li>
            <li><a href="record05.aspx">综合评分</a></li>
          </ul>
          <div class="tabcont">
            <!--1.资产概括开始-->
            <div class="assetGen">
              <div class="promptRefresh clearfix">
                <p class="fl">上次刷新时间：<span class="datetime">2018-10-12 14:42:33</span></p>
                <p class="fr"><a href="javascript:void(0)" class="refreshBtn">刷新</a></p>
              </div>
              <div class="moneyStatus clearfix">
                <dl class="fl">
                  <dt><span>初始资金</span></dt>
                  <dd><p><b>人民币：</b><i id="1人民币">1100000.00</i></p><p><b>港币：</b><i id="1港币">100000.00</i></p><p><b>美元：</b><i id="1美元">100000.00</i></p></dd>
                </dl>
                <dl class="fr">
                  <dt><span>当前总资产</span></dt>
                  <dd><p><b>人民币：</b><i id="2人民币">1094755.03</i></p><p><b>港币：</b><i id="2港币">100000.00</i></p><p><b>美元：</b><i id="2美元">100000.00</i></p></dd>
                </dl>
              </div>
              <table cellpadding="0" cellspacing="0" width="100%" class="tb">
                <thead>
                  <tr>
                    <th width="12%">类别</th>
                    <th width="6%">币种</th>
                    <th width="15%">总资产</th>
                    <th width="12%">可用资金</th>
                    <th width="10%">现金资产比例</th>
                    <th width="15%">持仓市值</th>
                    <th width="8%">持仓比例</th>
                    <th width="10%">累计交易费</th>
                    <th> 浮动盈亏</th>
                  </tr>
                </thead>
                <tbody><tr><td>沪深证券(非B股)</td><td>人民币</td><td>1094755.03</td><td>1034562.03</td><td>94.50%</td><td>60193.00</td><td>5.50%</td><td>240.97</td><td>-5244.97</td></tr><tr><td>沪B股</td><td>美元</td><td>100000.00</td><td>100000.00</td><td>100.00%</td><td>0.00</td><td>0.00%</td><td>0.00</td><td>0.00</td></tr><tr><td>深B股</td><td>港币</td><td>100000.00</td><td>100000.00</td><td>100.00%</td><td>0.00</td><td>0.00%</td><td>0.00</td><td>0.00</td></tr></tbody>
              </table>
            </div>
            <!--资产概括结束--> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../assets/student/css/record.css';
</style>
