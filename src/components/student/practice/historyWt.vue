<template>
	<div class="security">
      <h3><b>练习名称：</b><span data-seq="52">测试3</span></h3>
      <div class="tt clearfix">
        <h2 class="fl"> 历史委托</h2>
        <div class="fr">
          <label> 查询日期：</label>
          <input id="startTime" class="Wdate" type="text" onclick="var endTime=$dp.$('endTime');WdatePicker({onpicked:function(){endTime.focus();},maxDate:'#F{$dp.$D(\'endTime\')}',maxDate:'%y-%M-%d'})" placeholder="起始时间">
          <label> 至</label>
          <input id="endTime" class="Wdate" type="text" onclick="WdatePicker({minDate:'#F{$dp.$D(\'startTime\')}',maxDate:'%y-%M-%d'})" placeholder="截止时间">
          <label> 类别：</label>
          <select id="ordertype">
            <option value="0">全部</option>
            <option value="1">买入</option>
            <option value="2">卖出</option>
          </select>
          <a href="javascript:void(0)" class="btn-export">导出</a> <a href="javascript:void(0);" class="btn-refresh">查询</a> </div>
      </div>
      <div class="tbBox">
        <table cellpadding="0" cellspacing="0" align="center" width="100%" class="secur" id="orderTb">
          <thead>
            <tr>
              <th width="42">序号</th>
              <th width="60">证券代码</th>
              <th width="60">证券名称</th>
              <th width="40">类别</th>
              <th>委托价格</th>
              <th>委托数量</th>
              <th>成交数量</th>
              <th>委托状态</th>
              <th>委托编号</th>
              <th width="90">被撤委托编号</th>
              <th width="82">委托日期</th>
              <th>委托时间</th>
              <th width="56">下单理由</th>
            </tr>
          </thead>
          <tbody><tr><td colspan="13">暂无委托记录...</td></tr></tbody>
        </table>
      </div>
      <!--分页开始-->
      <div class="page clearfix">
        <div class="pageGro cb clearfix">
          <div class="pageTotal"><span>共0条记录，每页15条，共0页</span></div>
          <div class="pageUp" onclick="pageUp()"> 上一页</div>
          <div class="pageList">
            <ul></ul>
          </div>
          <div class="pageDown" onclick="pageDown()"> 下一页</div>
        </div>
      </div>
      <!--分页结束--> 

      <!--查看下单理由开始-->
	  <div class="flt orderReason">
	    <h3> <span>下单理由</span><a href="javascript:void(0)" class="closed">关闭</a></h3>
	    <div class="details"> </div>
	    <div class="issue-btn"> <a href="javascript:void(0)" class="btn confirm">确定</a></div>
	  </div>
	  <!--查看下单理由开始--> 
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
