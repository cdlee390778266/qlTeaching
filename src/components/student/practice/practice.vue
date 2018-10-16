<template>
	<div>
        <div class="tabBox">
            <ul class="nav clearfix" id="matchtype">
            	<li seq="0" class="selected"><a href="javascript:void(0)">全部</a></li>
            	<li seq="1"><a href="javascript:void(0)">沪深证券(非B股)</a></li>
            	<li seq="2"><a href="javascript:void(0)">沪B股</a></li>
            	<li seq="3"><a href="javascript:void(0)">深B股</a></li>
            	<li seq="4"><a href="javascript:void(0)">融资融券</a></li>
            	<li seq="5"><a href="javascript:void(0)">港股</a></li>
            	<li seq="6"><a href="javascript:void(0)">金融期货</a></li>
            	<li seq="7"><a href="javascript:void(0)">商品期货</a></li>
            	<li seq="8"><a href="javascript:void(0)">期权</a></li>
            	<li seq="9"><a href="javascript:void(0)" class="vain">外汇</a></li>
            </ul>
        </div>
        <div class="practice_box">
            <div class="createTop">
                <input type="button" value="创建练习" class="btn01" id="btn_create">
                <label>练习状态：</label>
                <select><option data-seq="0">全部</option><option data-seq="6">未开始</option><option data-seq="7">进行中</option><option data-seq="8">已结束</option></select>
            </div>
        </div>
        <div class="clearfix" id="matchRecord">
        	<div class="practice fl" id="practice53">
        		<h3 class="name">测试4</h3>
        		<div class="matchInfo clearfix">
        			<div class="fl">
        				<p>创 建 人： <span title=""></span></p>
        				<p>创建时间：<span class="createTime">2018/09/13</span> </p>
        				<p>练习周期：<span class="startTime">2018/09/13</span>~<span class="overTime">2018/09/30</span></p><p>银行资金：<span class="money">100000</span><span class="unit">港元</span></p>
        				<p>练习状态：进行中</p><p>包含市场：<span class="stock">深B股</span></p>
        			</div>
        			<div class="fr">
        				<p><router-link to="/student/practice/portfolio" class="btn02">进入练习</router-link></p>
        				<p><a href="javascript:void(0);" class="btn02 btn_remove" data-seq="53">删除练习</a></p>
        				<p><a href="javascript:void(0);" class="btn02 btn_set" data-seq="53">设置练习</a></p>
        			</div>
        		</div>
        	</div>
        </div>
        <!--分页开始-->
	    <div class="page clearfix">
	        <div class="pageGro cb clearfix">
	            <div class="pageTotal"><span>共0条记录，每页6条，共0页</span></div>
	            <div class="pageUp" onclick="pageUp()">上一页</div>
	            <div class="pageList">
	                <ul></ul>
	            </div>
	            <div class="pageDown" onclick="pageDown()">下一页</div>
	        </div>
	    </div>
	    <!--分页结束-->
	    <div class="flt create_practice" data-seq="">
	        <h3><span id="matchtitle">创建练习</span></h3>
	        <p>
	            <label>练习名称</label>
	            <input id="matchname" type="text" class="practice_name" maxlength="20">
	            <span>*名称长度为10个中文和英文的组合</span>
	        </p>
	        <p>
	            <label>起始时间</label>
	            <input id="starttime" class="Wdate" type="text" onclick="var endtime=$dp.$('endtime');WdatePicker({onpicked:function(){endtime.focus();},minDate:'#F{$dp.$D(\'endtime\')}',minDate:'%y-%M-%d'})" placeholder="起始时间"/>
	            <label>截止时间</label>
	            <input id="endtime" class="Wdate" type="text" onclick="WdatePicker({minDate:'#F{$dp.$D(\'starttime\')}'})" placeholder="截止时间"/>
	            <span>*请选择时间</span>
	        </p>
	        <p>
	            <label>包含市场</label>
	            <select id="setmatchtype"></select>
	        </p>
	        <p>
	            <label>银行资金</label>
	            <input type="number" id="intialasset" class="initial_money" min="0" max="200000000" step="100" value="100000" style="width:105px;" />
	            <b id="currency">人民币</b>
	            <span>*银行资金不能为空</span>
	        </p>
	        <div class="center">
	            <input type="button" value="确定" id="create_confirm" class="btn btn-confirm"/><input type="button" value="返回" class="btn btn-back"/>
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
	@import '../../../assets/student/css/practice.css'
</style>
