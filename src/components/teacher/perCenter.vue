<template>
	<div>
		<div class="section">
          <div class="tt clearfix">
            <h2 class="fl">个人中心</h2>
            <a href="javascript:void(0)" class="fr edit" onclick="OpenUpdateTeacher()">编辑</a></div>
          <div class="persional_property">
            <div class="person_info_con clearfix">
              <dl class="person-photo">
                <dt><img src="images/avatar.png" id="teacher_address"></dt>
                <dd><a href="javascript:void(0)" class="changeHd">更换头像</a></dd>
              </dl>
              <dl class="person-info">
                <dt class="person-name"><span id="span_nickname">乾隆控股</span><a href="javascript:void(0)" class="changePwd">（修改密码）</a></dt>
                <dd class="person-detail"><span id="span_detail"><span>男</span><span>1</span><span>1</span></span></dd>
                <dd><span class="gray" id="span_teacherinfo">一级管理员：admin</span></dd>
              </dl>
            </div>
          </div>
          <div class="person_auth">
            <h2><span>我的管理权限</span></h2>
            <dl class="ckmd modle pr">
              <dt><span style="line-height:40px;">模块管理权限</span></dt>
              <dd><span id="auth_2" class="open">学生管理</span><span id="auth_3" class="open">比赛管理</span><span id="auth_5" class="open">通知平台</span><span id="auth_6" class="open">排行榜</span><span id="auth_7" class="open">个人中心</span><span id="auth_8" class="open">互动天地</span><span id="spec" class="open addMore">特殊处理</span>
                <div id="ctBox" style="display: none;">
                  <ul class="clearfix">
                    <li style="" id="li_1">
                    	<p><label>沪深证券(非B股)：</label><span id="span_411" style="">商品管理</span><span id="span_412" style="">T+0商品</span><span id="span_413" style="">分红送配</span><span id="span_414" style="">强制平仓</span><span id="span_415">资金管理</span></p>
                    </li>
                  	<li style="" id="li_2">
                    	<p><label>沪B股：</label><span id="span_421" style="">商品管理</span><span id="span_422" style="">分红送配</span><span id="span_423" style="">强制平仓</span><span id="span_424" style="">资金管理</span></p>
                    </li>
                    <li style="" id="li_3">
                    	<p><label>深B股：</label><span id="span_431" style="">商品管理</span><span id="span_432" style="">分红送配</span><span id="span_433" style="">强制平仓</span><span id="span_434" style="">资金管理</span></p>
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
            <dl class="mark">
              <dt><span style="line-height:40px;">市场管理</span></dt>
              <dd><span id="span_1" class="open">沪深证券(非B)</span><span id="span_2" class="open">沪B股</span><span id="span_3" class="open">深B股</span><span id="span_4" class="open">融资融券</span><span id="span_5" class="open">港股</span><span id="span_6" class="open">金融期货</span><span id="span_7" class="open">商品期货</span><span id="span_8" class="open">期权</span><span id="span_9">外汇</span></dd>
            </dl>
            <dl class="class">
              <dt class="clearfix">
              	<span style="line-height:40px;">班级管理</span>
              </dt>
              <dd>
                <div class="show_search">
                    <ql-filter></ql-filter>
                </div>
                <div class="row clearfix">
                    <div class="search fr">
                      <input type="text" placeholder="学校名称..." class="searchTxt" id="searchTxt">
                      <a href="javascript:void(0)" class="btn_search" id="searchSecurity"></a>
                    </div>
                </div>
                <table cellpadding="0" cellspacing="0" width="100%" class="tb clsTb">
                  <thead>
                    <tr>
                      <th width="50">序号</th>
                      <th width="170">学校名称</th>
                      <th width="160">学院</th>
                      <th width="150">学系</th>
                      <th width="150">专业</th>
                      <th>班级</th>
                    </tr>
                  </thead>
                  <tbody><tr class="">   <td>1</td>   <td><span class="sch" title="成都乾隆财经大学">成都乾隆财经大学</span></td>   <td><span class="col" title="会计学院">会计学院</span></td>   <td><span class="dpt" title="精算">精算</span></td>   <td><span class="maj" title="精算专业">精算专业</span></td>   <td><span class="cls" title="一班">一班</span></td> </tr><tr class="" style="background: rgb(242, 242, 242);">   <td>2</td>   <td><span class="sch" title="成都乾隆财经大学">成都乾隆财经大学</span></td>   <td><span class="col" title="会计学院">会计学院</span></td>   <td><span class="dpt" title="电算化">电算化</span></td>   <td><span class="maj" title="电算化专业">电算化专业</span></td>   <td><span class="cls" title="一班">一班</span></td> </tr><tr class="">   <td>3</td>   <td><span class="sch" title="成都乾隆财经大学">成都乾隆财经大学</span></td>   <td><span class="col" title="金融学院">金融学院</span></td>   <td><span class="dpt" title="国际贸易系">国际贸易系</span></td>   <td><span class="maj" title="宏观经济学">宏观经济学</span></td>   <td><span class="cls" title="西方经济学一班">西方经济学一班</span></td> </tr></tbody>
                </table>
                
                <div class="tbBottom">
                <!--分页开始-->
                <div class="page clearfix">
                    <div class="pageGro cb clearfix">
                        <div class="pageTotal"><span>共3条记录，每页10条，共1页</span></div>
                        <div class="pageUp" onclick="pageUp()">上一页</div>
                        <div class="pageList">
                            <ul><li class="on">1</li></ul>
                        </div>
                        <div class="pageDown" onclick="pageDown()">下一页</div>
                    </div>
                </div>
                <!--分页结束--> 
                </div>
              </dd>
            </dl>
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
	@import "../../assets/teacher/css/perCenter.css";
</style>
