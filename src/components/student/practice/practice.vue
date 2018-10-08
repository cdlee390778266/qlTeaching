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
        				<p><a href="practice/portfolio.aspx?AppID=53" class="btn02">进入练习</a></p>
        				<p><a href="javascript:void(0);" class="btn02 btn_remove" data-seq="53">删除练习</a></p>
        				<p><a href="javascript:void(0);" class="btn02 btn_set" data-seq="53">设置练习</a></p>
        			</div>
        		</div>
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
