<template>
	<div>
		<div class="section">
	      <h2 class="tt"> <b class="arrow_r"><a href="compInfo.aspx">比赛信息</a></b><span>创建比赛</span></h2>
	      <form action="" method="post">
	        <div class="compBox comp1">
	          <h3 class="title"> <span>填写比赛基本信息</span></h3>
	          <p> <i class="red">*</i>
	            <label>比赛名称：</label>
	            <input type="text" class="txt1" id="compName" placeholder="请输入" maxlength="50">
	            <span>（最多50个字）</span></p>
	          <p> <i>*</i>
	            <label>主办单位：</label>
	            <input type="text" class="txt1" placeholder="请输入" id="sponsor" maxlength="250">
	            <span>（最多250个字）</span></p>
	          <p> <i>*</i>
	            <label>承办单位：</label>
	            <input type="text" class="txt1" placeholder="请输入" id="agent" maxlength="250">
	            <span>（最多250个字）</span></p>
	          <p> <i>*</i>
	            <label>选择市场：</label>
	            <select id="marky"><option value="0">请选择</option><option value="1">沪深证券(非B股)</option><option value="2">沪B股</option><option value="3">深B股</option><option value="4">融资融券</option><option value="5">港股</option><option value="6">金融期货</option><option value="7">商品期货</option><option value="8">期权</option></select>
	          </p>
	          <p> <i>*</i>
	            <label>初始资金：</label>
	            <input type="number" maxlength="20" multiple="" placeholder="请输入" step="0.01" min="1" max="200000000" class="txt2 numInput" id="iniMoney">
	            <span id="currency"></span></p>
	          <p> <i></i>
	            <label> 参加人数限制：</label>
	            <input type="number" placeholder="请输入" min="0" step="1" class="txt3 numInput" id="numPeople">
	            <span>（达到限定参赛人数后，报名结束）</span></p>
	          <p> <i>*</i>
	            <label>参与排名条件：</label>
	            <span>交易次数 &gt;</span>
	            <input type="number" value="1" placeholder="请输入" min="1" step="1" max="5000" class="txt3 numInput" id="numTrades">
	            <span>（不满足条件的账号不参与排名）</span> </p>
	          <p class="date"> <i>*</i>
	            <label>比赛时间：</label>
	            <span>从</span>
	            <input id="startTime" type="text" class="Wdate" placeholder="请选择日期">
	            <span>至</span>
	            <input id="endtime" type="text" class="Wdate" placeholder="请选择日期">
	          </p>
	          <p class="date"> <i>*</i>
	            <label>报名时间：</label>
	            <span>从</span>
	            <input id="enrollstart" type="text" class="Wdate" placeholder="请选择日期">
	            <span>至</span>
	            <input id="enrollend" type="text" class="Wdate" placeholder="请选择日期">
	          </p>
	          <p class="tim clearfixe"> <i>*</i>
	            <label>每日交易结束时间：</label>
	            <input type="text" name="time" placeholder="时：分" value="15:00" id="tranOverTime">
	            <span>（填写范围：9:30~22:30)</span> </p>
	          <div class="clearfix permit">
	            <div class="fl"> <i>*</i>
	              <label> 中午时段是否允许交易：</label>
	            </div>
	            <div class="fl">
	              <p class="rd"> <i class="selected"></i>
	                <input type="radio" name="noon" value="1" id="noontrade1" checked="checked">
	                <span>否</span></p>
	              <p class="rd"> <i></i>
	                <input type="radio" name="noon" value="0" id="noontrade0">
	                <span>是</span></p>
	            </div>
	          </div>
	          <div class="clearfix permit">
	            <div class="fl"> <i>*</i>
	              <label>节假日是否允许交易：</label>
	            </div>
	            <div class="fl">
	              <p class="rd"> <i class="selected"></i>
	                <input type="radio" name="holiday" value="1" id="holidaytrade1" checked="checked">
	                <span>否</span></p>
	              <p class="rd"> <i></i>
	                <input type="radio" name="holiday" value="0" id="holidaytrade0">
	                <span>是</span></p>
	            </div>
	          </div>
	        </div>
	        <div class="compBox comp2">
	          <h3 class="title"> <span>请选择允许参赛者</span></h3>
	          <ul class="selectNav clearfix">
	            <li id="tab0" data-seq="0" class="selected">
	              <p class="clearfix"> <i></i>
	                <input type="radio" name="selSdt" value="全体学生参加" checked="checked">
	              </p>
	              <p> <a href="javascript:void(0)">全体学生参加</a></p>
	            </li>
	            <li id="tab1" data-seq="1">
	              <p class="clearfix"> <i></i>
	                <input type="radio" name="selSdt" value="自定义班级参加">
	              </p>
	              <p> <a href="javascript:void(0)">自定义班级参加</a></p>
	            </li>
	            <li id="tab2" data-seq="2">
	              <p class="clearfix"> <i></i>
	                <input type="radio" name="selSdt" value="自定义学生参加">
	              </p>
	              <p> <a href="javascript:void(0)">自定义学生参加</a></p>
	            </li>
	          </ul>
	          <div class="range center clearfix show" id="allStd" style="display: block;">
	            <p> <i class="all"></i><span>允许全体学生参加</span></p>
	          </div>
	          <div class="range" id="partStd" style="display: none;">
	            <div class="show_search clearfix">
	              <div class="filter clearfix">
	                <ul class="fl" id="filterList">
	                  <li><a href="javascript:void(0)">大区</a>
	                    <div class="menu" id="pop大区"> <span>全部</span></div>
	                  </li>
	                  <li><a href="javascript:void(0)">省级</a>
	                    <div class="menu" id="pop省级"> <span>全部</span></div>
	                  </li>
	                  <li><a href="javascript:void(0)">学校</a>
	                    <div class="menu" id="pop学校"> <span>全部</span></div>
	                  </li>
	                  <li><a href="javascript:void(0)">学院</a>
	                    <div class="menu" id="pop学院"> <span>全部</span></div>
	                  </li>
	                  <li><a href="javascript:void(0)">学系</a>
	                    <div class="menu" id="pop学系"> <span>全部</span></div>
	                  </li>
	                  <li><a href="javascript:void(0)">专业</a>
	                    <div class="menu" id="pop专业"> <span>全部</span></div>
	                  </li>
	                  <li><a href="javascript:void(0)">班级</a>
	                    <div class="menu" id="pop班级"> <span>全部</span></div>
	                  </li>
	                </ul>
	                <div class="btns fl"> <a href="javascript:void(0)" class="filSearch">搜索</a> <a href="javascript:void(0)" class="filReset">重置</a> </div>
	                <div class="fr"> <a href="javascript:void(0)" class="btn_show fr icon10">展开</a> </div>
	              </div>
	            </div>
	            <div class="case_box clearfix hide">
	              <div class="select_scheme">
	                <ul class="scheme">
	                  <li>
	                    <div class="itemName" data-type="大区"> <a href="javascript:void(0)">大区</a></div>
	                    <div class="items" id="大区"> <span data-seq="0">全部</span></div>
	                  </li>
	                  <li>
	                    <div class="itemName" data-type="省级"> <a href="javascript:void(0)">省级</a></div>
	                    <div class="items" id="省级"> <span data-seq="0">全部</span></div>
	                  </li>
	                  <li>
	                    <div class="itemName" data-type="学校"> <a href="javascript:void(0)">学校</a></div>
	                    <div class="items" id="学校"> <span data-seq="0">全部</span></div>
	                  </li>
	                  <li>
	                    <div class="itemName" data-type="学院"> <a href="javascript:void(0)">学院</a></div>
	                    <div class="items" id="学院"> <span data-seq="0">全部</span></div>
	                  </li>
	                  <li>
	                    <div class="itemName" data-type="学系"> <a href="javascript:void(0)">学系</a></div>
	                    <div class="items" id="学系"> <span data-seq="0">全部</span></div>
	                  </li>
	                  <li>
	                    <div class="itemName" data-type="专业"> <a href="javascript:void(0)">专业</a></div>
	                    <div class="items" id="专业"> <span data-seq="0">全部</span></div>
	                  </li>
	                  <li>
	                    <div class="itemName" data-type="班级"> <a href="javascript:void(0)">班级</a></div>
	                    <div class="items" id="班级"> <span data-seq="0">全部</span></div>
	                  </li>
	                </ul>
	              </div>
	            </div>
	            <div class="row clearfix">
	              <div class="showSelected fl">
	                <p class="ck"> <i></i>
	                  <input type="checkbox" name="showClass" id="showClass">
	                  <span>显示已勾选</span></p>
	              </div>
	              <div class="search fr clearfix">
	                <input type="text" placeholder="搜学校/班级名称" class="searchTxt" id="searchTxt">
	                <a href="javascript:void(0)" class="btn_search" id="searchSecurity"></a> </div>
	            </div>
	            <table cellpadding="0" cellspacing="0" width="100%" class="tb clsTb">
	              <thead>
	                <tr>
	                  <th width="32"> <p class="ck"> <i></i>
	                      <input type="checkbox" name="checkAll" id="checkAll">
	                    </p>
	                  </th>
	                  <th width="40">序号</th>
	                  <th width="86">省份/直辖市</th>
	                  <th width="180">学校名称</th>
	                  <th width="120">学院</th>
	                  <th width="110">学系</th>
	                  <th width="120">专业</th>
	                  <th> 班级 </th>
	                </tr>
	              </thead>
	              <tbody>
	              </tbody>
	            </table>
	            <div class="tbBottom clearfix">
	              <div class="fl">
	                <p class="ck fl"> <i></i>
	                  <input type="checkbox" name="sdAccount" id="selectAll">
	                  <span>全选所有页</span></p>
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
	            </div>
	          </div>
	        </div>
	        <div class="compBox comp2">
	          <h3 class="title"> <span>比赛通告</span></h3>
	          <textarea class="aboutComp" rows="100" placeholder="请输入"></textarea>
	        </div>
	        <div class="creatBtns">
	          <p> <a href="javascript:void(0)" id="crtComp">创建比赛</a><a href="compInfo.aspx" id="cancel">取消</a></p>
	        </div>
	      </form>
	    </div>
	    <!--浮层开始--> 
		  <!--选择区域开始-->
		  <div class="flt caseflt">
		    <h3 class="clearfix"> <span class="fl">选择大区</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="top clearfix">
		      <p> <i></i>
		        <input type="checkbox" name="selectAll" value="全选" id="Checkbox1">
		        <span>全选</span></p>
		    </div>
		    <div class="detail clearfix" id="slcBox">
		      <p> <i></i>
		        <input type="checkbox" name="district" value="0" data-type="华东地区">
		        <span>华东地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="1" data-type="华南地区">
		        <span>华南地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="2" data-type="华北地区">
		        <span>华北地区西南地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="3" data-type="东北地区">
		        <span>东北地区西南地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="4" data-type="西南地区">
		        <span>西南地区西南地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="5" data-type="华东地区1">
		        <span>华东地区1</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="6" data-type="华南地区1">
		        <span>华南地区1</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="7" data-type="华北地区1">
		        <span>华北地区1</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="8" data-type="东北地区1">
		        <span>东北地区1</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="9" data-type="华南地区2">
		        <span>华南地区2</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="10" data-type="港澳台地区">
		        <span>港澳台地区港澳台地区港澳台地区港澳台地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="11" data-type="华南地区33">
		        <span>华南地区33</span></p>
		    </div>
		    <div class="btns"> <a href="javascript:void(0)" class="btn btn-confirm">确定</a> <a href="javascript:void(0)"
		                class="btn btn-cancel">取消</a> </div>
		  </div>
		  <!--选择区域结束--> 
		  <!--浮层结束--> 
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
	@import "../../assets/teacher/css/createComp.css";
</style>
