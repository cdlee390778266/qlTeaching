<template>
	<div>
		<div class="section">
            <div class="row clearfix">
                <h2 class="tt">
                    <b class="arrow_r"><a href="admins.aspx">二级管理员</a></b><i>账号权限</i></h2>
            </div>
            <div class="faculty">
                <div class="ckmd acc">
                    <dl>
                        <dt>
                            <label>
                                账号授权配置：</label></dt>
                        <dd>
                            <label>
                                账号：</label><i>T</i><input type="text" name="acc" placeholder="请输入" value="" maxlength="12" id="accExec"><label>姓名：</label><input type="text" name="name" placeholder="请输入" value="" id="name" maxlength="50"><span>（默认密码：888888）</span></dd>
                    </dl>
                </div>
                <div class="ckmd" id="mark">
                    <dl class="clearfix">
                        <dt>
                            <label>
                                市场管理权限：</label></dt>
                        <dd class="clearfix"><p class="ck"><i class="selected"></i><input data-seq="1" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;"><span>沪深证券(非B股)</span></p><p class="ck"><i class="selected"></i><input data-seq="2" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;"><span>沪B股</span></p><p class="ck"><i class="selected"></i><input data-seq="3" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;"><span>深B股</span></p><p class="ck"><i class="selected"></i><input data-seq="4" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;"><span>融资融券</span></p><p class="ck"><i class="selected"></i><input data-seq="5" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;"><span>港股</span></p><p class="ck"><i class="selected"></i><input data-seq="6" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;"><span>金融期货</span></p><p class="ck"><i class="selected"></i><input data-seq="7" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;"><span>商品期货</span></p><p class="ck"><i class="selected"></i><input data-seq="8" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;"><span>期权</span></p><p class="ck"><i></i><input data-seq="9" data-status="1" type="checkbox" name="market" style="opacity: 0;"><span>外汇</span></p></dd>
                    </dl>
                </div>
                <div class="ckmd" id="modle">
                    <dl class="clearfix">
                        <dt>
                            <label>
                                模块管理权限：</label>
                        </dt>
                        <dd class="clearfix pr">
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="2" type="checkbox" name="module" checked="checked" style="opacity: 0;"><span>学生管理</span></p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="3" type="checkbox" name="module" checked="checked" style="opacity: 0;"><span>比赛管理</span></p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="5" type="checkbox" name="module" checked="checked" style="opacity: 0;"><span>通知平台</span></p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="6" type="checkbox" name="module" checked="checked" style="opacity: 0;"><span>排行榜</span></p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="7" type="checkbox" name="module" checked="checked" style="opacity: 0;"><span>个人中心</span></p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="8" type="checkbox" name="module" checked="checked" style="opacity: 0;"><span>互动天地</span></p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input type="checkbox" name="module" id="tsBtn" checked="checked" style="opacity: 0;"><span>特殊处理</span></p>
                            <div id="ctBox" style="left: 80px; top: 68px;">
                                <dl id="title">特殊处理权限</dl>
                                <dl class="clearfix" data-seq="1" style=" display:none;">
                                    <dt>沪深证券(非B股)</dt>
                                    <dd>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="411" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>商品管理</span></p>
                                        
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="413" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>分红送配</span></p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="414" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>强制平仓</span></p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="415" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>资金管理</span></p>
                                    </dd>
                                </dl>
                                <dl class="clearfix" data-seq="2" style=" display:none;">
                                    <dt>沪B股</dt>
                                    <dd>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="421" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>商品管理</span></p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="422" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>分红送配</span></p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="423" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>强制平仓</span></p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="424" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>资金管理</span></p>
                                    </dd>
                                </dl>
                                <dl class="clearfix" data-seq="3" style=" display:none;">
                                    <dt>深B股</dt>
                                    <dd>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="431" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>商品管理</span></p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="432" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>分红送配</span></p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="433" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>强制平仓</span></p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="434" type="checkbox" name="ts" checked="checked" style="opacity: 0;"><span>资金管理</span></p>
                                    </dd>
                                </dl>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="ckmd">
                    <dl>
                        <dt>
                            <label>
                                班级管理权限：</label></dt>
                        <dd>
							<ql-filter></ql-filter>
                            <div class="row clearfix">
                                <div class="showSelected fl">
                                    <p class="ck">
                                        <i></i>
                                        <input type="checkbox" name="showSel" id="showSel"><span>显示已勾</span></p>
                                </div>
                                <div class="search fr clearfix">
                                    <input type="text" placeholder="搜学校/班级名称" class="searchTxt" id="searchTxt">
                                    <a href="javascript:void(0)" class="btn_search" id="searchSecurity"></a>
                                </div>
                            </div>
                            <table cellpadding="0" cellspacing="0" width="100%" class="tb">
                                <thead>
                                    <tr>
                                        <th width="32">
                                            <p class="ck">
                                                <i></i>
                                                <input type="checkbox" name="checkAll" id="checkAll"></p>
                                        </th>
                                        <th width="40">
                                            序号
                                        </th>
                                        <th width="90">
                                            省份/直辖市
                                        </th>
                                        <th width="160">
                                            学校名称
                                        </th>
                                        <th width="120">
                                            学院
                                        </th>
                                        <th width="120">
                                            学系
                                        </th>
                                        <th width="130">
                                            专业
                                        </th>
                                        <th>
                                            班级
                                        </th>
                                    </tr>
                                </thead>
                                <tbody><tr data-seq="13" class=""><td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td><td>1</td><td><span class="area">四川省</span></td><td><span class="sch" title="成都乾隆财经大学">成都乾隆财经大学</span></td><td><span class="col" title="会计学院">会计学院</span></td><td><span class="dpt" title="精算">精算</span></td><td><span class="maj" title="精算专业">精算专业</span></td><td><span class="cls" title="一班">一班</span></td></tr><tr data-seq="12" style="background: rgb(242, 242, 242);"><td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td><td>2</td><td><span class="area">四川省</span></td><td><span class="sch" title="成都乾隆财经大学">成都乾隆财经大学</span></td><td><span class="col" title="会计学院">会计学院</span></td><td><span class="dpt" title="电算化">电算化</span></td><td><span class="maj" title="电算化专业">电算化专业</span></td><td><span class="cls" title="一班">一班</span></td></tr><tr data-seq="11" class=""><td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td><td>3</td><td><span class="area">四川省</span></td><td><span class="sch" title="成都乾隆财经大学">成都乾隆财经大学</span></td><td><span class="col" title="金融学院">金融学院</span></td><td><span class="dpt" title="国际贸易系">国际贸易系</span></td><td><span class="maj" title="宏观经济学">宏观经济学</span></td><td><span class="cls" title="西方经济学一班">西方经济学一班</span></td></tr></tbody>
                            </table>
                            <div class="tbBottom clearfix">
                                <div class="fl">
                                    <p class="ck fl">
                                        <i></i>
                                        <input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p>
                                </div>
                                <!--分页开始-->
                                <div class="page clearfix">
                                    <div class="pageGro cb clearfix">
                                        <div class="pageTotal"><span>共3条记录，每页10条，共1页</span></div>
                                        <div class="pageUp" onclick="pageUp()">
                                            上一页</div>
                                        <div class="pageList">
                                            <ul><li class="on">1</li></ul>
                                        </div>
                                        <div class="pageDown" onclick="pageDown()">
                                            下一页</div>
                                    </div>
                                </div>
                                <!--分页结束-->
                            </div>
                        </dd>
                    </dl>
                    <div class="creatBtns">
                        <p>
                            <input type="submit" id="crtAdmin" value="创建管理员"><input type="button" id="cancel" value="取消"></p>
                    </div>
                </div>
            </div>
        </div>
        <!--浮层开始-->
	    <!--选择区域开始-->
	    <div class="flt caseflt">
	        <h3 class="clearfix">
	            <span class="fl">选择大区</span><a href="javascript:void(0)" class="closed"></a></h3>
	        <div class="top clearfix">
	            <p>
	                <i></i>
	                <input type="checkbox" name="selectAll" value="全选" id="Checkbox1"><span>全选</span></p>
	        </div>
	        <div class="detail clearfix" id="slcBox">
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="0" data-type="华东地区"><span>华东地区</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="1" data-type="华南地区"><span>华南地区</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="2" data-type="华北地区"><span>华北地区</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="3" data-type="东北地区"><span>东北地区</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="4" data-type="西南地区"><span>西南地区</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="5" data-type="华东地区1"><span>华东地区1</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="6" data-type="华南地区1"><span>华南地区1</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="7" data-type="华北地区1"><span>华北地区1</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="8" data-type="东北地区1"><span>东北地区1</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="9" data-type="华南地区2"><span>华南地区2</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="10" data-type="港澳台地区"><span>港澳台地区港澳台地区</span></p>
	            <p>
	                <i></i>
	                <input type="checkbox" name="district" value="11" data-type="华南地区33"><span>华南地区33</span></p>
	        </div>
	        <div class="btns">
	            <a href="javascript:void(0)" class="btn btn-confirm">确定</a> <a href="javascript:void(0)"
	                class="btn btn-cancel">取消</a>
	        </div>
	    </div>
	    <!--选择区域结束-->
	    <!--浮层结束-->

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
	@import "../../assets/teacher/css/editAdmin.css";
</style>
