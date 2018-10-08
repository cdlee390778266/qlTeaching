<template>
	<div>
		<div class="section">
            <h2 class="tt">
                管理学生日志</h2>
            <div class="tabNav" id="tabNav_MatchType" style="width: 100%; text-align: center;"><ul class="clearfix"><li><a id="matchtype_1" href="javascript:void(0)" onclick="ChangeMatchType(1)" class="selected">沪深证券(非B股)</a></li><li><a id="matchtype_2" href="javascript:void(0)" onclick="ChangeMatchType(2)">沪B股</a></li><li><a id="matchtype_3" href="javascript:void(0)" onclick="ChangeMatchType(3)">深B股</a></li><li><a id="matchtype_4" href="javascript:void(0)" onclick="ChangeMatchType(4)">融资融券</a></li><li><a id="matchtype_5" href="javascript:void(0)" onclick="ChangeMatchType(5)">港股</a></li><li><a id="matchtype_6" href="javascript:void(0)" onclick="ChangeMatchType(6)">金融期货</a></li><li><a id="matchtype_7" href="javascript:void(0)" onclick="ChangeMatchType(7)">商品期货</a></li><li><a id="matchtype_8" href="javascript:void(0)" onclick="ChangeMatchType(8)">期权</a></li><li><a id="matchtype_9" href="javascript:void(0)" style="color:#c1c1c1;">外汇</a></li></ul></div>
            <div class="faculty">
                <div class="row clearfix">
                    <div class="handleBtns fl clearfix">
                        <p>
                            <a href="javascript:void(0)" class="delete">删除话题</a></p>
                        <p class="ck"><i></i><input type="checkbox" name="report" id="tipOff" style="opacity: 0;"><span>被举报</span></p>
                    </div>
                    <div class="search fr clearfix">
                        <input type="text" style="width:230px;" placeholder="搜索日志（发表人账号、昵称、标题）" id="searchTxt">
                        <a href="javascript:void(0)" class="btn_search"></a>
                    </div>
                </div>
                <table cellpadding="0" cellspacing="0" width="100%" class="tb row20" id="sdAccount">
                    <thead>
                        <tr>
                            <th width="32"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll"></p></th>
                            <th width="50">序号</th>
                            <th>话题标题</th>
                            <th width="120">发表人账号</th>
                            <th width="120">发表人昵称</th>
                            <th width="70">举报数</th>
                            <th width="140">发表时间</th>
                        </tr>
                    </thead>
                    <tbody>
                    	<tr data-seq="6">
                    	  <td>
                    	  	<p class="ck"><i></i><input type="checkbox" name="sdAccount"></p>
                    	  </td>
                    	  <td>1</td>
                    	  <td align="left" class="attch">
                    	  	<router-link to="/teacher/interactionInfo/100" class="logtitle " title="111">111</router-link>
                    	  </td>
                    	  <td>
                    	  	<router-link to="/teacher/sdBasic/100" class="accountNum">000000001001</router-link>
                    	  </td>
                    	  <td>
                    	  	<span class="nickName" title="000000001001">000000001001</span>
                    	  </td>
                    	  <td>0</td>
                    	  <td>2018/10/07 12:18</td>
                    	</tr>
                    </tbody>
                </table>
            </div>
            <div class="tbBottom clearfix">
                <div class="fl">
                    <p class="ck fl"><i></i><input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p>
                    <a href="javascript:void(0);" class="fl" id="deleteAll">删除</a>
                </div>
                <div class="page clearfix">
                    <div class="pageGro cb clearfix">
                        <div class="pageTotal"><span>共6条记录，每页20条，共1页</span></div>
                        <div class="pageUp" onclick="pageUp()">上一页</div>
                        <div class="pageList">
                            <ul><li class="on">1</li></ul>
                        </div>
                        <div class="pageDown" onclick="pageDown()">下一页</div>
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
	@import "../../assets/teacher/css/interaction.css";
</style>
