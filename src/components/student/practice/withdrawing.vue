<template>
	<div>
		<div class="security">
	      <h3><b>练习名称：</b><span data-seq="52">测试3</span></h3>
	      <div class="tt clearfix">
	        <h2 class="fl"> 查撤委托</h2>
	        <div class="fr">
	          <label>类别：</label>
	          <select id="ordertype">
	            <option value="0">全部</option>
	            <option value="1">买入</option>
	            <option value="2">卖出</option>
	          </select>
	          <label>状态：</label>
	          <select id="orderstatus">
	            <option value="0">全部</option>
	            <option value="1">未成交</option>
	            <option value="2">已成交</option>
	            <option value="3">失效</option>
	            <option value="4">撤单中</option>
	            <option value="5">已撤单</option>
	            <option value="6">撤单失败</option>
	          </select>
	          <a href="javascript:void(0);" class="btn-refresh">刷新</a> </div>
	      </div>
	      <div class="tbBox">
	        <table cellpadding="0" cellspacing="0" width="100%" align="center" class="secur" id="orderTb">
	          <thead>
	            <tr>
	              <th width="50"> 序号 </th>
	              <th width="65"> 委托时间 </th>
	              <th width="90"> 委托日期 </th>
	              <th width="70"> 证券代码 </th>
	              <th width="70"> 证券名称 </th>
	              <th width="40"> 类别 </th>
	              <th width="66"> 委托价格 </th>
	              <th width="80"> 委托数量 </th>
	              <th width="75"> 委托编号 </th>
	              <th width="94"> 被撤委托编号 </th>
	              <th width="60"> 状态 </th>
	              <th> 操作 </th>
	            </tr>
	          </thead>
	          <tbody><tr><td colspan="12">暂无委托记录...</td></tr></tbody>
	        </table>
	      </div>
	    </div>
	    <!--分页开始-->
	    <div class="page clearfix">
	      <div class="pageGro cb clearfix">
	        <div class="pageTotal"> <span>共0条记录，每页10条，共0页</span></div>
	        <div class="pageUp" onclick="pageUp()"> 上一页</div>
	        <div class="pageList">
	          <ul>
	          </ul>
	        </div>
	        <div class="pageDown" onclick="pageDown()"> 下一页</div>
	      </div>
	    </div>
	    <!--分页结束--> 
		
		 <!-- 浮层开始 --> 
		  <!--撤单确认开始-->
		  <div class="flt revokeConfirm">
		    <h3> <span>撤单确认</span></h3>
		    <div class="details">
		      <p> 是否撤单？</p>
		    </div>
		    <div class="issue-btn"> <a href="javascript:void(0)" class="btn confirm" data-seq="0">确定</a><a href="javascript:void(0)"
		                class="btn cancel" data-seq="0">取消</a></div>
		  </div>
		  <!--撤单确认结束--> 
		  <!-- 浮层结束 --> 

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
