<template>
	<div>
        <div class="lhb">
            <img :src="imgurl" alt="龙虎榜" width="1003" height="230"></div>
        <div class="tabBox">
            <ul class="nav clearfix" id="matchtype"><li seq="0" class="selected"><a href="javascript:void(0)">全部</a></li><li seq="1"><a href="javascript:void(0)">沪深证券(非B股)</a></li><li seq="2"><a href="javascript:void(0)">沪B股</a></li><li seq="3"><a href="javascript:void(0)">深B股</a></li><li seq="4"><a href="javascript:void(0)">融资融券</a></li><li seq="5"><a href="javascript:void(0)">港股</a></li><li seq="6"><a href="javascript:void(0)">金融期货</a></li><li seq="7"><a href="javascript:void(0)">商品期货</a></li><li seq="8"><a href="javascript:void(0)">期权</a></li><li seq="9"><a href="javascript:void(0)" class="vain">外汇</a></li></ul>
            <div class="compet_status clearfix">
                <label>
                    排名类型</label>
                <p class="rd">
                    <i class="selected"></i>
                    <input type="radio" name="personage" value="个人" checked=""><span>个人</span></p>
                <p class="rd">
                    <i></i>
                    <input type="radio" name="cptStatus" value="学校"><span>学校</span></p>
                <p class="rd">
                    <i></i>
                    <input type="radio" name="cptStatus" value="学院"><span>学院</span></p>
                <p class="rd">
                    <i></i>
                    <input type="radio" name="cptStatus" value="学系"><span>学系</span></p>
                <p class="rd">
                    <i></i>
                    <input type="radio" name="cptStatus" value="专业"><span>专业</span></p>
                <p class="rd">
                    <i></i>
                    <input type="radio" name="cptStatus" value="班级"><span>班级</span></p>
            </div>
        </div>
        <div class="rank_list">
            <div class="choiceRace clearfix">
                <label class="fl">
                    选择比赛</label><input type="text" class="fcInput fl" id="title" value="" readonly="">
                <!--a href="javascript:void(0)" class="refreshBtn fr">刷新</a-->
            </div>
            <div class="show_search clearfix">
                <div class="filter clearfix">
                    <ul class="fl" id="filterList">
                        <li><a href="javascript:void(0)">大区</a>
                            <div class="menu" id="pop大区">
                                <span>全部</span></div>
                        </li>
                        <li><a href="javascript:void(0)">省级</a>
                            <div class="menu" id="pop省级">
                                <span>全部</span></div>
                        </li>
                        <li><a href="javascript:void(0)">学校</a>
                            <div class="menu" id="pop学校" style="display: none;">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li><a href="javascript:void(0)">学院</a>
                            <div class="menu" id="pop学院" style="display: none;">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li><a href="javascript:void(0)">学系</a>
                            <div class="menu" id="pop学系">
                                <span>全部</span></div>
                        </li>
                        <li><a href="javascript:void(0)">专业</a>
                            <div class="menu" id="pop专业" style="display: none;">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li><a href="javascript:void(0)">班级</a>
                            <div class="menu" id="pop班级">
                                <span>全部</span></div>
                        </li>
                    </ul>
                    <div class="btns fl">
                        <a href="javascript:void(0)" class="search">搜索</a> <a href="javascript:void(0)" class="reset">
                            重置</a>
                    </div>
                    <div class="fr">
                        <a href="javascript:void(0)" id="btn_show" class="fr">展开筛选器</a>
                    </div>
                </div>
            </div>
            <div class="case_box clearfix hide">
                <div class="select_scheme">
                    <ul class="scheme">
                        <li>
                            <div class="itemName" data-type="大区">
                                <a href="javascript:void(0)">大区</a></div>
                            <div class="items" id="大区">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li>
                            <div class="itemName" data-type="省级">
                                <a href="javascript:void(0)">省级</a></div>
                            <div class="items" id="省级">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li>
                            <div class="itemName" data-type="学校">
                                <a href="javascript:void(0)">学校</a></div>
                            <div class="items" id="学校">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li>
                            <div class="itemName" data-type="学院">
                                <a href="javascript:void(0)">学院</a></div>
                            <div class="items" id="学院">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li>
                            <div class="itemName" data-type="学系">
                                <a href="javascript:void(0)">学系</a></div>
                            <div class="items" id="学系">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li>
                            <div class="itemName" data-type="专业">
                                <a href="javascript:void(0)">专业</a></div>
                            <div class="items" id="专业">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li>
                            <div class="itemName" data-type="班级">
                                <a href="javascript:void(0)">班级</a></div>
                            <div class="items" id="班级">
                                <span data-seq="0">全部</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rankList">
                <ul class="clearfix">
                    <li><a href="javascript:void(0);" class="selected">开赛以来</a></li>
                    <li><a href="javascript:void(0);">当日排行</a></li>
                    <li><a href="javascript:void(0);">本周排行</a></li>
                    <li><a href="javascript:void(0);">本月排行</a></li>
                </ul>
                <p class="pa">
                    <a href="javascript:void(0);" class="btn_refresh">刷新</a></p>
            </div>
            <!--
      <div class="row">
        <div class="lhb_rankTitle"><span style="width:161px;">排名</span><span style="width:337px;">选手信息及排名变化</span><span style="width:164px;">总市值</span><span style="width:173px;">资金余额</span></div>
      </div>
      -->
            <div class="row clearfix">
                <div class="aside fl">
                    <ul class="lhbTab">
                        <li class=""><a href="javascript:void(0);" class="lhb_icon01">收益率</a></li>
                        <li class="selected"><a href="javascript:void(0);" class="lhb_icon02">交易金额</a></li>
                        <li class=""><a href="javascript:void(0);" class="lhb_icon03">交易次数</a></li>
                        <li class=""><a href="javascript:void(0);" class="lhb_icon04">总资产</a></li>
                    </ul>
                </div>
                <table cellpadding="0" cellspacing="0" width="860" class="lhb_detail fr">
                    <thead>
                        <tr>
                            <th width="180">
                                排名
                            </th>
                            <th width="360">
                                选手信息
                            </th>
                            <th width="150">
                                总市值
                            </th>
                            <th>
                                资金余额
                            </th>
                        </tr>
                    </thead>
                    <tbody><tr><td colspan="4"><div class="noMessage">暂无记录</div></td></tr></tbody>
                </table>
            </div>
            <!--分页开始-->
            <div class="page clearfix">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal"><span>共0条记录，每页10条，共0页</span></div>
                    <div class="pageUp" onclick="pageUp()">
                        上一页</div>
                    <div class="pageList">
                        <ul></ul>
                    </div>
                    <div class="pageDown" onclick="pageDown()">
                        下一页</div>
                </div>
            </div>
            <!--分页结束-->
            <!--分页开始-->
            
            <!--分页结束-->
        </div>
        <div class="cl">
        </div>

        <!-- 浮层开始 -->
    <!--数据刷新开始-->
    <div class="flt refresh">
        <a href="javascript:void(0)" class="closed"></a>
        <div class="success">
            <p class="center">
                <i class="icon_succeed"></i><span>刷新成功</span></p>
        </div>
    </div>
    <!--数据刷新结束-->
    <!--选择区域开始-->
    <div class="flt caseflt" data-type="大区">
        <h3 class="clearfix">
            <span class="fl">选择大区</span><a href="javascript:void(0)" class="closed">关闭</a></h3>
        <div class="top clearfix">
            <p>
                <i></i>
                <input type="checkbox" name="selectAll" value="全选" id="selectAll"><span>全选</span></p>
        </div>
        <div class="detail clearfix" id="slcBox">
        </div>
        <div class="btns">
            <input type="button" value="确定" class="btn btn-confirm"><input type="button" value="取消"
                class="btn btn-cancel">
        </div>
    </div>
    <!--选择区域结束-->
    <!-- 浮层结束 -->

    </div>
</template>
<script>
	export default {
		data() {
			return {
				imgurl: require('../../../assets/student/images/lhb.jpg')
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../assets/student/css/rankinglist.css'
</style>
