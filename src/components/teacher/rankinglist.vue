<template>
	<div>
		<div class="section">
	      <h2 class="tt"> 龙虎榜</h2>
	      <div class="faculty">
	        <div class="tabNav" id="tabNav_MatchType" style="width: 100%; text-align: center;"><ul class="clearfix"><li><a id="matchtype_1" href="javascript:void(0)" onclick="ChangeMatchType(1)" class="selected">沪深证券(非B股)</a></li><li><a id="matchtype_2" href="javascript:void(0)" onclick="ChangeMatchType(2)">沪B股</a></li><li><a id="matchtype_3" href="javascript:void(0)" onclick="ChangeMatchType(3)">深B股</a></li><li><a id="matchtype_4" href="javascript:void(0)" onclick="ChangeMatchType(4)">融资融券</a></li><li><a id="matchtype_5" href="javascript:void(0)" onclick="ChangeMatchType(5)">港股</a></li><li><a id="matchtype_6" href="javascript:void(0)" onclick="ChangeMatchType(6)">金融期货</a></li><li><a id="matchtype_7" href="javascript:void(0)" onclick="ChangeMatchType(7)">商品期货</a></li><li><a id="matchtype_8" href="javascript:void(0)" onclick="ChangeMatchType(8)">期权</a></li><li><a id="matchtype_9" href="javascript:void(0)" style="color:#c1c1c1;">外汇</a></li></ul></div>
	        <div class="compet_status clearfix">
	          <label> 排名类型：</label>
	          <p class="rd"> <i class="selected"></i><input type="radio" name="personage" value="个人" checked=""><span>个人</span></p>
	          <p class="rd"> <i></i><input type="radio" name="cptStatus" value="学校"><span>学校</span></p>
	          <p class="rd"> <i></i><input type="radio" name="cptStatus" value="学院"><span>学院</span></p>
	          <p class="rd"> <i></i><input type="radio" name="cptStatus" value="学系"><span>学系</span></p>
	          <p class="rd"> <i></i><input type="radio" name="cptStatus" value="专业"><span>专业</span></p>
	          <p class="rd"> <i></i><input type="radio" name="cptStatus" value="班级"><span>班级</span></p>
	        </div>
	        <div class="compSelect clearfix">
	          <label> 比赛名称</label>
	          <input type="text" class="fcInput" id="Drop_Match" readonly="readonly">
	        </div>
	        <ql-filter></ql-filter>
	        <div class="cont">
	          <div class="row rank-tab01 clearfix">
	            <div class="fl">
	              <ul class="clearfix">
	                <li class="selected"><a href="javascript:void(0)" class="rk01">收益率</a></li>
	                <li><a href="javascript:void(0)" class="rk02">交易金额</a></li>
	                <li><a href="javascript:void(0)" class="rk03">交易次数</a></li>
	                <li><a href="javascript:void(0)" class="rk04">总资产</a></li>
	              </ul>
	            </div>
	            <div class="rtLink fr"> <a href="javascript:void(0)" class="export">导出</a><a href="javascript:void(0)" class="refresh">刷新</a></div>
	          </div>
	          <div class="row clearfix pr">
	            <div class="rankTab fl">
	              <ul class="tab clearfix">
	                <li class="selected"><a href="javascript:void(0)">开赛以来</a></li>
	                <li><a href="javascript:void(0)">当日排行</a></li>
	                <li><a href="javascript:void(0)">本周排行</a></li>
	                <li><a href="javascript:void(0)">本月排行</a></li>
	              </ul>
	            </div>
	            <div class="search fr">
	              <input type="text" placeholder="请输入账号/姓名" id="searchTxt">
	              <a href="javascript:void(0)" class="btn_search"></a> </div>
	          </div>
	          <div class="tabCont">
	            <table cellpadding="0" cellspacing="0" width="100%" class="tb rankTb" style="display: table;">
	              <thead><tr></tr><tr><th width="60">排名</th><th width="140">收益率</th><th width="110">学生账号</th><th width="100">学生姓名</th><th width="160">学校</th><th>总市值</th><th>资金余额</th></tr></thead>
	              <tbody><tr><td colspan="7" style="text-align:center;">未找到记录</td></tr></tbody>
	            </table>
	          </div>
	          <div class="tbBottom"> 
	            <!--分页开始-->
	            <div class="page clearfix">
	              <div class="pageGro cb clearfix">
	                <div class="pageTotal"><span>共0条记录，每页20条，共0页</span></div>
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
	@import "../../assets/teacher/css/rankinglist.css";
	@import "../../assets/teacher/css/pulldownList.css";
</style>
