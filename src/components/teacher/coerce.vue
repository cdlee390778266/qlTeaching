<template>
	<div>
		<div class="section">
	      <h2 class="tt"> 强制平仓</h2>
	      <div class="compSelect clearfix">
	        <label> 比赛名称</label>
	        <input id="Drop_Match" class="fcInput" type="text" readonly="readonly">
	      </div>
	      <ql-filter></ql-filter>
	      <div class="faculty">
	        <div class="row clearfix">
	          <div class="handleBtns fl">
	            <p class="closePrice"> <span>平仓价格</span>
	              <input type="number" name="closePrice" step="0.01" max="1000" min="0" class="numInput" id="closePrice" placeholder="请输入">
	            </p>
	            <p class="ck"> <i></i>
	              <input type="checkbox" name="marketPrice" id="marketPrice" style="opacity: 0;">
	              <span>按市价</span></p>
	            <p> <a href="javascript:void(0)" id="liquidate">强制平仓</a></p>
	          </div>
	          <div class="search fr clearfix">
	            <input type="text" placeholder="姓名/代码/商品名称" id="searchTxt">
	            <a href="javascript:void(0)" class="btn_search"></a> </div>
	        </div>
	        <div class="tabBox">
	          <ul class="tab clearfix">
	            <li class="selected" id="tab0" data-seq="0"><a href="javascript:void(0)">平仓商品</a></li>
	            <li id="tab1" data-seq="1"><a href="javascript:void(0)">历史平仓</a></li>
	          </ul>
	        </div>
	        <div id="changeCoerce"><table cellpadding="0" cellspacing="0" width="100%" class="tb" id="sdAccount"><thead><tr><th width="32"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll"></p></th><th width="50">序号</th><th width="140">学校名称</th><th width="110">班级名称</th><th width="116">学生账号</th><th width="90">学生姓名</th><th width="72">商品代码</th><th width="72">商品名称</th><th>当前价格</th><th width="70">平仓状态</th></tr></thead><tbody><tr class=""><td colspan="12" style="text-align:center;">未找到记录</td></tr></tbody></table></div>
	      </div>
	      <div class="tbBottom clearfix">
	        <div class="fl" id="check_all" style="display: inline;">
	          <p class="ck fl"> <i></i>
	            <input type="checkbox" name="sdAccount" id="selectAll">
	            <span>全选所有页</span></p>
	        </div>
	        <div class="page fr">
	          <div class="pageGro cb clearfix">
	            <div class="pageTotal"><span>共0条记录，每页10条，共0页</span></div>
	            <div class="pageUp" onclick="pageUp()"> 上一页</div>
	            <div class="pageList">
	              <ul></ul>
	            </div>
	            <div class="pageDown" onclick="pageDown()"> 下一页</div>
	          </div>
	        </div>
	      </div>
	    </div>
	</div>
</template>
<script>
	import qlFilter from './common/filter'
	export default {
		components: {
			qlFilter
		},
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../assets/teacher/css/coerce.css";
	@import "../../assets/teacher/css/pulldownList.css";
</style>
