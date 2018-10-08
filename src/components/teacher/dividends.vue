<template>
	<div>
		<div class="section">
	      <h2 class="tt"> 分红送配</h2>
	      <div class="faculty">
	        <div class="compSelect clearfix">
	          <label> 比赛名称</label>
	          <input id="Drop_Match" class="fcInput" type="text" readonly="readonly">
	        </div>
	        <form method="post" id="form1">
	          <table cellpadding="0" cellspacing="0" width="100%" id="bonus">
	            <tbody><tr>
	              <td class="td2" colspan="2"><label>股票代码</label>
	                <input type="text" id="matchtype" style="display: none;">
	                <input type="text" id="market" style="display: none;">
	                <input type="text" placeholder="代码/名称/拼音" class="plInput txt0" id="searchTxt">
	                <span id="secName"></span></td>
	            </tr>
	            <tr class="tr2">
	              <td class="td1"> 分红： </td>
	              <td class="td2"><label> 金额</label>
	                <input type="number" min="0" step="0.001" placeholder="请输入金额" class="numInput price" id="dividend">
	                <span>元每10股</span></td>
	            </tr>
	            <tr>
	              <td class="td1"> 送转： </td>
	              <td class="td2"><span>
	                <label> 送股数量</label>
	                <input type="number" min="0" step="1" class="numInput qty" id="sendQty" placeholder="请输入">
	                每10股</span> <span>
	                <label> 转增数量</label>
	                <input type="number" min="0" step="1" class="numInput qty" id="intoShares" placeholder="请输入">
	                每10股</span></td>
	            </tr>
	            <tr>
	              <td class="td1"> 配股： </td>
	              <td class="td2"><span>
	                <label> 配股数量</label>
	                <input type="number" min="0" step="1" class="numInput qty" id="allotmentQty" placeholder="请输入">
	                每10股</span> <span>
	                <label> 金额</label>
	                <input type="number" min="0.000" step="0.001" class="numInput price" id="money" placeholder="请输入">
	                元每10股</span></td>
	            </tr>
	          </tbody></table>
	          <p class="center"> <a href="javascript:void(0)" class="btn confirm" id="btn_ok">确定</a></p>
	        </form>
	        <div class="row clearfix">
	          <div class="handleBtns fl">
	            <p class="date">
	              <label> 查询历史</label>
	              <input id="startDate" class="Wdate" type="text" onclick="var endDate=$dp.$('endDate');WdatePicker({onpicked:function(){endDate.focus();},maxDate:'#F{$dp.$D(\'endDate\')}',maxDate:'%y-%M-%d'})" placeholder="请选择开始日期">
	              
	              <span>至</span>
	              <input id="endDate" class="Wdate" type="text" onclick="WdatePicker({minDate:'#F{$dp.$D(\'startDate\')}',maxDate:'%y-%M-%d'})" placeholder="请选择结束日期">
	              
	            </p>
	          </div>
	          <div class="search fr clearfix">
	            <input type="text" placeholder="模糊查询商品代码" class="searchTxt" id="searchTxt1">
	            <a href="javascript:void(0)" class="btn_search" id="searchSec"></a> </div>
	        </div>
	        <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="dividends">
	          <thead>
	            <tr>
	              <th width="110">发生日期</th>
	              <th width="80">商品代码</th>
	              <th width="80">送股数</th>
	              <th width="80">配股数</th>
	              <th width="80">配股价</th>
	              <th width="80">红利</th>
	              <th width="80">转增数</th>
	              <th width="120">操作人</th>
	              <th>操作人账号</th>
	            </tr>
	          </thead>
	          <tbody><tr class=""><td colspan="9" style="text-align:center;">未找到记录</td></tr></tbody>
	        </table>
	      </div>
	      <div class="tbBottom"> 
	        <!--分页开始-->
	        <div class="page">
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
	@import "../../assets/teacher/css/dividends.css";
	@import "../../assets/teacher/css/pulldownList.css";
</style>
