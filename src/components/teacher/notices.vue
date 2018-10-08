<template>
	<div>
		<div class="section">
          <div class="row clearfix">
          	<h2 class="tt">通知信息</h2>            
          </div>
          <div class="faculty pr">
            <ul class="tab clearfix">
                <li class="selected" data-seq="1" id="tab1" onclick="ChangeTab(1)"><a href="javascript:void(0)">系统通知<i>(6)</i></a></li>
                <li data-seq="2" id="tab2" onclick="ChangeTab(2)" class=""><a href="javascript:void(0)">已发通知<i>(3)</i></a></li>
                <li data-seq="3" id="tab3" onclick="ChangeTab(3)" class=""><a href="javascript:void(0)">我的草稿<i>(1)</i></a></li>
            </ul>
            <div class="search pa clearfix">
            	<input type="text" placeholder="搜索通知" id="searchTxt">
            	<a href="javascript:void(0)" class="btn_search" onclick="SearchNoticeList()"></a>
            </div>
            <div class="cont">
            	<div class="a01">
                  <div class="notice_top clearfix">
                      <div class="handleBtns fl">
                        <a href="javascript:void(0)" id="resend" onclick="ReSendNotice()">重发</a>
                        <a href="javascript:void(0)" id="send" onclick="SendNotice()" style="display: none;">发布</a>
                        <a href="javascript:void(0)" class="delete" onclick="DeleteNotice()">删除</a>
                      </div>
                    </div>
                    <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="sysTb" style="">
                      <thead>
                        <tr>
                          <th width="30"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll"></p></th>
                          <th width="50">序号</th>
                          <th width="400">通知主题</th>
                          <th width="100">通知人数</th>
                          <th>发布时间</th>
                        </tr>
                      </thead>
                      <tbody>
                      	<tr data-seq="9">
                      		<td>
                      			<p class="ck"><i></i><input name="checkbox" type="checkbox"></p>
                      		</td>
                      		<td>1</td>
                      		<td class="sysNotice">
                      			<router-link to="/teacher/noticeInfo/1" class="read">测试深B股竞赛暂停比赛公告</router-link>
                      		</td>
                      		<td>6</td>
                      		<td>2018/09/18 14:58</td>
                      	</tr>
                      </tbody>
                    </table>
                    
                <!--已发通知开始-->
                
                  <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="sendtb" style="display:none;">
                    <thead>
                      <tr>
                        <th width="30"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll_1"></p></th>
                        <th width="50">序号</th>
                        <th width="400">通知标题</th>
                        <th width="100">通知人数</th>
                        <th>发布时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                  
                  <!--已发通知结束-->
                 
                 <!--我的草稿开始-->
                 
                  <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="unissued" style="display:none;">
                    <thead>
                      <tr>
                        <th width="30"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll_2"></p></th>
                        <th width="50">序号</th>
                        <th width="400">通知标题</th>
                        <th width="100">通知人数</th>
                        <th>创建时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                </table>
                
                <!--我的草稿结束-->
              </div>
            </div>
            <div class="tbBottom clearfix">
            	<div class="fl"><p class="ck fl"><i></i><input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p><a href="javascript:void(0);" class="fl" id="deleteAll" onclick="DeleteNotice()">删除</a></div>
                <!--分页开始-->
                <div class="page clearfix">
                    <div class="pageGro cb clearfix">
                        <div class="pageTotal"><span>共6条记录，每页20条，共1页</span></div>
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
	@import "../../assets/teacher/css/notices.css";
</style>
