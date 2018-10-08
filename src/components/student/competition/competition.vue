<template>
	<div>
        <div class="tabBox">
            <ul class="nav clearfix" id="matchtype"><li seq="0" class="selected"><a href="javascript:void(0)">全部</a></li><li seq="1"><a href="javascript:void(0)">沪深证券(非B股)</a></li><li seq="2"><a href="javascript:void(0)">沪B股</a></li><li seq="3"><a href="javascript:void(0)">深B股</a></li><li seq="4"><a href="javascript:void(0)">融资融券</a></li><li seq="5"><a href="javascript:void(0)">港股</a></li><li seq="6"><a href="javascript:void(0)">金融期货</a></li><li seq="7"><a href="javascript:void(0)">商品期货</a></li><li seq="8"><a href="javascript:void(0)">期权</a></li><li seq="9"><a href="javascript:void(0)" class="vain">外汇</a></li></ul>
            <div class="compet_status clearfix"><label>比赛状态</label><div><p class="rd"><i class="selected"></i><input type="radio" name="cptStatus" seq="0" value="全部" checked=""><span class="blue">全部</span></p><p class="rd"><i></i><input type="radio" name="cptStatus" seq="1" value="报名中"><span>报名中</span></p><p class="rd"><i></i><input type="radio" name="cptStatus" seq="2" value="未开赛"><span>未开赛</span></p><p class="rd"><i></i><input type="radio" name="cptStatus" seq="3" value="比赛中"><span>比赛中</span></p><p class="rd"><i></i><input type="radio" name="cptStatus" seq="4" value="比赛暂停"><span>比赛暂停</span></p><p class="rd"><i></i><input type="radio" name="cptStatus" seq="5" value="竞赛结束"><span>竞赛结束</span></p></div><div><p class="cb"><i></i><input type="checkbox" class="signUp" value="已报名"><span>已报名</span></p><div></div></div></div>
            <div class="tabContain">
                <!--全部开始-->
                <div>
                    <table cellpadding="0" cellspacing="0" width="100%" class="compet_tb tb">
                        <thead>
                            <tr height="40">
                                <th style="display: none;"></th>
                                <th width="200">竞赛名称</th>
                                <th width="125">竞赛类型</th>
                                <th width="110">举办者</th>
                                <th width="100">报名起止日</th>
                                <th width="100">竞赛起止日</th>
                                <th>初始资金</th>
                                <th width="80">报名状态</th>
                                <th width="80">竞赛状态</th>
                                <th width="70">竞赛规则</th>
                            </tr>
                        </thead>
                        <tbody><tr><td style="display:none;">56</td><td class="matchTitle"><a href="practice/portfolio.aspx?AppID=56" title="测试深B股">测试深B股</a></td><td>深B股</td><td><span title="成都乾隆科技有限公司" class="sponsor">成都乾隆科技有限公司</span></td><td><span class="date">2018/09/18-<br>2018/09/30</span></td><td><span class="date">2018/09/18-<br>2018/11/19</span></td><td>100000.00</td><td><a seq="56" href="javascript:void(0)" class="compet-yet">已报名</a></td><td value="3">比赛中</td><td><a href="javascript:void(0)" class="btn-rules">查看</a></td></tr><tr><td style="display:none;">55</td><td class="matchTitle"><a href="practice/portfolio.aspx?AppID=55" title="测试">测试</a></td><td>沪B股</td><td><span title="成都乾隆科技有限公司" class="sponsor">成都乾隆科技有限公司</span></td><td><span class="date">2018/09/18-<br>2018/09/30</span></td><td><span class="date">2018/09/18-<br>2018/11/19</span></td><td>100000.00</td><td><a seq="55" href="javascript:void(0)" class="compet-yet">已报名</a></td><td value="3">比赛中</td><td><a href="javascript:void(0)" class="btn-rules">查看</a></td></tr><tr><td style="display:none;">54</td><td class="matchTitle"><a href="practice/portfolio.aspx?AppID=54" title="成都乾隆测试竞赛">成都乾隆测试竞赛</a></td><td>沪深证券(非B股)</td><td><span title="成都乾隆" class="sponsor">成都乾隆</span></td><td><span class="date">2018/09/13-<br>2018/09/24</span></td><td><span class="date">2018/09/13-<br>2019/08/14</span></td><td>100000.00</td><td><a seq="54" href="javascript:void(0)" class="compet-yet">已报名</a></td><td value="3">比赛中</td><td><a href="javascript:void(0)" class="btn-rules">查看</a></td></tr><tr><td style="display:none;">1</td><td class="matchTitle"><a href="practice/portfolio.aspx?AppID=1" title="乾隆金融投资大赛">乾隆金融投资大赛</a></td><td>沪深证券(非B股)</td><td><span title="上海乾隆网络科技有限公司" class="sponsor">上海乾隆网络科技有限公司</span></td><td><span class="date">2017/11/29-<br>2019/11/29</span></td><td><span class="date">2017/11/29-<br>2019/11/29</span></td><td>1000000.00</td><td><a seq="1" href="javascript:void(0)" class="compet-yet">已报名</a></td><td value="3">比赛中</td><td><a href="javascript:void(0)" class="btn-rules">查看</a></td></tr></tbody>
                    </table>
                </div>
                <!--全部结束-->
            </div>
            <!--分页开始-->
            <div class="page clearfix">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal"><span>共4条记录，每页10条，共1页</span></div>
                    <div class="pageUp" onclick="pageUp()">上一页</div>
                    <div class="pageList">
                        <ul><li class="on">1</li></ul>
                    </div>
                    <div class="pageDown" onclick="pageDown()">下一页</div>
                </div>
            </div>
            <!--分页结束-->
        </div>

        <!--比赛确认开始-->
	    <div class="flt competition" style="display: none;">
	        <form class="center">
	        <p>是否确认参加比赛？</p>
	        <div class="issue-btn">
	            <a href="javascript:void(0)" class="btn confirm">确定</a><a href="javascript:void(0)" class="btn cancel">取消</a></div>
	        </form>
	    </div>
	    <!--比赛确认结束-->
	    <!--比赛规则开始-->
	    <div class="flt compet-rules" style="display: none;">
	        <h3 class="clearfix">
	            <span class="fl">比赛规则</span><a href="javascript:void(0);" class="closed fr">关闭</a></h3>
	        <div class="top">
	            <p>
	                <span><b>参赛对象：</b>全体公开</span><span><b>参赛人数限制：</b>1000</span><span><b>初始资金：</b>10000人民币</span></p>
	            <p>
	                <span><b>交易时间：</b><i>集合竞价：9:00-9:25</i><i>连续竞价：9:30-15:00</i></span><span><b>每日交易结束时间：</b>22:00</span></p>
	        </div>
	        <h4>相关费率</h4>
	        <div class="tbContain">
	        <table cellpadding="0" cellspacing="0" width="766">
	            <thead>
	                <tr>
	                    <th width="60">商品名称</th>
	                    <th width="40">方向</th>
	                    <th>印花税(‰)</th>
	                    <th>最低印花税(元)</th>
	                    <th>过户费(‰)</th>
	                    <th>最低过户费(元)</th>
	                    <th>佣金(‰)</th>
	                    <th>最低佣金(元)</th>
	                </tr>
	            </thead>
	            <tbody>
	            </tbody>
	        </table>
	       </div> 
	        <h4>关于比赛</h4>
	        <div class="details"></div>
	    </div>
	    <!--比赛规则结束-->

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
