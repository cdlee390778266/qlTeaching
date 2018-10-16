<template>
	<div class="security">
      <h3><b>练习名称：</b><span data-seq="52">测试3</span></h3>
      <div class="tt clearfix">
        <h2 class="fl"> 账户信息</h2>
        <a href="javascript:void(0);" class="btn-refresh fr" id="refAsset">刷新</a></div>
      <div class="tbBox">
        <table cellpadding="0" cellspacing="0" width="100%" class="secur" id="Asset">
          <thead>
            <tr>
              <th width="50">序号</th>
              <th width="50">币种</th>
              <th>初始资金</th>
              <th>冻结资金</th>
              <th>可用金额</th>
              <th>可取金额</th>
              <th>总资产</th>
              <th>参考市值</th>
              <th>账户盈亏</th>
            </tr>
          </thead>
          <tbody><tr><td>1</td><td>美元</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr></tbody>
        </table>
      </div>
      <div class="tt clearfix">
        <h2 class="fl"> 持仓明细</h2>
        <a href="javascript:void(0);" class="btn-refresh fr" id="refHolding">刷新</a> </div>
      <div class="tbBox">
        <table cellpadding="0" cellspacing="0" width="100%" align="center" class="secur" id="Holding">
          <thead>
            <tr>
              <th width="50">序号</th>
              <th width="75">证券代码</th>
              <th width="75">证券名称</th>
              <th>证券数量</th>
              <th>可卖数量</th>
              <th>持仓均价</th>
              <th>最新价</th>
              <th>证券市值</th>
              <th>浮动盈亏</th>
              <th>盈亏比例</th>
            </tr>
          </thead>
          <tbody><tr><td colspan="10">暂无持仓记录...</td></tr></tbody>
        </table>
      </div>
      <!--分页开始-->
      <div class="page clearfix">
        <div class="pageGro cb clearfix">
          <div class="pageTotal"><span>共0条记录，每页10条，共0页</span></div>
          <div class="pageUp" onclick="pageUp()"> 上一页</div>
          <div class="pageList">
            <ul></ul>
          </div>
          <div class="pageDown" onclick="pageDown()"> 下一页</div>
        </div>
      </div>
      <!--分页结束--> 
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
	
</style>
