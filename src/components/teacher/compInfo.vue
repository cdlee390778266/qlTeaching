<template>
	<div>
		<div class="section">
            <h2 class="tt">
                比赛信息</h2>
            <div class="accDetails">
                <div class="row clearfix">
                    <div class="handleBtns fl">
                        <a href="javascript:void(0)" class="delete">删除比赛</a> <a href="javascript:void(0)" class="paused">暂停比赛</a> <a href="javascript:void(0)" class="restore">恢复比赛</a>
                    </div>
                    <div class="status fl">
                        <p class="ck">
                            <i></i>
                            
                            <input type="checkbox" name="showSel" id="showSel">
                            <span>显示已勾</span></p>
                        <label>
                            比赛状态</label>
                        <select>
                            <option value="0">全部</option>
                            <option value="1">报名中</option>
                            <option value="2">未开赛</option>
                            <option value="3">比赛中</option>
                            <option value="4">暂停</option>
                            <option value="5">竞赛结束</option>
                        </select>
                    </div>
                    <div class="search fr">
                        <input type="text" placeholder="搜索比赛名称" id="searchTxt">
                        <a href="javascript:void(0)" class="btn_search"></a>
                    </div>
                </div>
                <div class="tbBox">
                    <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="match">
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
                                <th>
                                    比赛详情
                                </th>
                            </tr>
                        </thead>
                        <tbody><tr data-seq="56" match-type="3" class=""><td valign="top"><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td valign="top">1</td><td class="td1"><div class="contBox"><h4><a href="compDetail.aspx?AppID=56&amp;backUrl=compInfo.aspx">测试深B股</a><span class="state start">比赛中</span></h4><div class="match_detail"><div class="fl"><p class="time"><b>起止时间：</b>2018-09-18~2018-11-19</p><p class="clearfix"><span class="sponsor fl"><b>主办单位：</b>成都乾隆科技有限公司</span><a href="javascript:void(0)" title="乾隆控股" class="addPerson fr">负责人：乾隆控股</a></p></div><div class="fr"><a href="javascript:void(0)" class="editBtn">修改费率</a></div></div></div></td></tr><tr data-seq="55" match-type="2" class="" style="background: rgb(242, 242, 242);"><td valign="top"><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td valign="top">2</td><td class="td1"><div class="contBox"><h4><a href="compDetail.aspx?AppID=55&amp;backUrl=compInfo.aspx">测试</a><span class="state start">比赛中</span></h4><div class="match_detail"><div class="fl"><p class="time"><b>起止时间：</b>2018-09-18~2018-11-19</p><p class="clearfix"><span class="sponsor fl"><b>主办单位：</b>成都乾隆科技有限公司</span><a href="javascript:void(0)" title="乾隆控股,朱恒斌" class="addPerson fr">负责人：乾隆控股,朱恒斌</a></p></div><div class="fr"><a href="javascript:void(0)" class="editBtn">修改费率</a></div></div></div></td></tr><tr data-seq="54" match-type="1" class=""><td valign="top"><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td valign="top">3</td><td class="td1"><div class="contBox"><h4><a href="compDetail.aspx?AppID=54&amp;backUrl=compInfo.aspx">成都乾隆测试竞赛</a><span class="state start">比赛中</span></h4><div class="match_detail"><div class="fl"><p class="time"><b>起止时间：</b>2018-09-13~2019-08-14</p><p class="clearfix"><span class="sponsor fl"><b>主办单位：</b>成都乾隆</span><a href="javascript:void(0)" title="乾隆控股" class="addPerson fr">负责人：乾隆控股</a></p></div><div class="fr"><a href="javascript:void(0)" class="editBtn">修改费率</a></div></div></div></td></tr><tr data-seq="49" match-type="1" class="" style="background: rgb(242, 242, 242);"><td valign="top"><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td valign="top">4</td><td class="td1"><div class="contBox"><h4><a href="compDetail.aspx?AppID=49&amp;backUrl=compInfo.aspx">2018电大炒股大赛</a><span class="state end">竞赛结束</span></h4><div class="match_detail"><div class="fl"><p class="time"><b>起止时间：</b>2018-05-15~2018-06-15</p><p class="clearfix"><span class="sponsor fl"><b>主办单位：</b>金华电大</span><a href="javascript:void(0)" title="乾隆控股" class="addPerson fr">负责人：乾隆控股</a></p></div><div class="fr"><a href="javascript:void(0)" class="editBtn">修改费率</a></div></div></div></td></tr><tr data-seq="1" match-type="1" class=""><td valign="top"><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td valign="top">5</td><td class="td1"><div class="contBox"><h4><a href="compDetail.aspx?AppID=1&amp;backUrl=compInfo.aspx">乾隆金融投资大赛</a><span class="state start">比赛中</span></h4><div class="match_detail"><div class="fl"><p class="time"><b>起止时间：</b>2017-11-29~2019-11-29</p><p class="clearfix"><span class="sponsor fl"><b>主办单位：</b>上海乾隆网络科技有限公司</span><a href="javascript:void(0)" title="乾隆控股" class="addPerson fr">负责人：乾隆控股</a></p></div><div class="fr"><a href="javascript:void(0)" class="editBtn">修改费率</a></div></div></div></td></tr></tbody>
                    </table>
                    <div class="tbBottom clearfix">
                        <div class="fl">
                            <p class="ck fl">
                                <i></i>
                                <input type="checkbox" name="sdAccount" id="selectAll">
                                <span>全选所有页</span></p>
                            <a href="javascript:void(0);" class="fl" id="deleteAll">删除</a></div>
                        <!--分页开始-->
                        <div class="page clearfix">
                            <div class="pageGro cb clearfix">
                                <div class="pageTotal"><span>共5条记录，每页10条，共1页</span></div>
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
	@import "../../assets/teacher/css/compInfo.css";
</style>
