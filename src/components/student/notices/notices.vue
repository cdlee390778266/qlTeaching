<template>
	<div class="main content notice clearfix">
	    <div class="left_side fl">
	      <ul class="notice_total">
	        <li><a href="javascript:void(0);" class="selected">教师通知<span>(<i id="unreadTeacherNotice">0</i>条未读)</span></a></li>
	        <li><a href="javascript:void(0);">系统通知<span>(<i id="unreadSystemNotice">6</i>条未读)</span></a></li>
	        <li><a href="javascript:void(0);">我收藏的通知<span>（<i class="starTotal" id="collectionNotice">1</i>条）</span></a></li>
	      </ul>
	    </div>
	    <div class="right_side fr">
	      <div class="notice_list clearfix">
	        <div class="notice_tt">
	          <div class="notice_status clearfix">
	            <input type="button" value="删除选中" class="btn_deleteNotice fl" id="deleteButton" onclick="deleteNotice()">
	            <div class="search_box fr">
	              <div class="fl">
	                <label>查询时间</label>
	                <input id="startTime" type="text" class="Wdate" onclick="WdatePicker({position:{top:1}})">
	                <span>至</span>
	                <input id="overTime" type="text" class="Wdate" onclick="WdatePicker({position:{top:1}})">
	                <div class="fr">
	                  <div class="serch fl">
	                    <input type="text" placeholder="请输入关键词" class="fl" id="noticetitle">
	                    <a href="javascript:void(0)" class="fl"></a> </div>
	                  <a href="javascript:void(0)" class="fr btn-search" id="buttonQuery" onclick="Query()" title="查询"></a> </div>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div class="noticeBox clearfix">
	          <div class="selected">
	            <table cellpadding="0" cellspacing="0" width="100%" class="tbNotice fl" id="tcNotice">
	              <thead>
	                <tr>
	                  <th width="55"><input type="checkbox" id="checkAll1">
	                    全选</th>
	                  <th width="50"><span class="mailNormal"></span><span class="attach"></span></th>
	                  <th width="100">发布人</th>
	                  <th>标题</th>
	                  <th width="94">&nbsp;发布时间</th>
	                </tr>
	              </thead>
	              <tbody id="tcNoticeBody"><tr class="selected" id="notice146"><td><input type="checkbox" checked="true" name="notice" id="check146">&nbsp;<span>1</span></td><td><span class="read" id="read146"></span></td><td><span class="teachername" title="乾隆控股">乾隆控股</span></td><td><a href="###" class="notice_title" onclick="getContent(146,1)" title="1111">1111</a></td><td><span>2018/10/07</span><a href="javascript:void(0)" class="star" id="star146"></a></td></tr><tr id="notice122"><td><input type="checkbox" name="notice" id="check122">&nbsp;<span>2</span></td><td><span class="read" id="read122"></span></td><td><span class="teachername" title="乾隆控股">乾隆控股</span></td><td><a href="###" class="notice_title" onclick="getContent(122,1)" title="测试">测试</a></td><td><span>2018/09/17</span><a href="javascript:void(0)" class="star" id="star122"></a></td></tr><tr id="notice112"><td><input type="checkbox" name="notice" id="check112">&nbsp;<span>3</span></td><td><span class="read" id="read112"></span></td><td><span class="teachername" title="乾隆控股">乾隆控股</span></td><td><a href="###" class="notice_title" onclick="getContent(112,1)" title="测试">测试</a></td><td><span>2018/09/17</span><a href="javascript:void(0)" class="star" id="star112"></a></td></tr></tbody>
	            </table>
	          </div>
	        </div>
	        <!--分页开始-->
	        <div class="page clearfix">
	          <div class="pageGro cb clearfix">
	            <div class="pageTotal"><span>共3条记录，每页10条，共1页</span></div>
	            <div class="pageUp" onclick="pageUp()"> 上一页</div>
	            <div class="pageList">
	              <ul><li class="on">1</li></ul>
	            </div>
	            <div class="pageDown" onclick="pageDown()"> 下一页</div>
	          </div>
	        </div>
	        <!--分页结束--> 
	      </div>
	      <div class="notice_container">
	        <div class="row mail_head clearfix">
	          <p>
	            <label>通知主题：</label>
	            <span id="noticeSubject">1111</span></p>
	          <p>
	            <label>发&nbsp;&nbsp;件&nbsp;&nbsp;人：</label>
	            <span class="sender" id="teachername">乾隆控股</span></p>
	          <p>
	            <label>发布时间：</label>
	            <span id="releasetime">2018年10月07日（星期日)&nbsp;中午11:37</span></p>
	        </div>
	        <div class="notice_details" id="noticenotice"><p>测试</p></div>
	        <div class="attachment">
	          <label><span class="attach01"></span>附件</label>
	          <div id="attachfile"></div>
	        </div>
	      </div>
	    </div>
	    <div class="cl"></div>

	    <!--删除通知提示-->
		  <div class="flt promptFlt">
		      <h3><span class="fl">提示</span><a href="javascript:void(0)" class="closed">关闭</a></h3>
		      <div class="detail"><p class="center"><i></i><span>确定删除吗？</span></p></div>
		      <div class="btns"><a href="javascript:void(0)" class="btn confirm">确定</a><a href="javascript:void(0)" class="btn cancel">取消</a></div>
		  </div>
		  <!--删除内容为空提示-->
		  <div class="flt nullFlt">
		  <div class="details"><p class="clearfix"><i class="nullIcon fl"></i><span class="fl">您什么都没有选择</span></p></div>
		  <div class="btns"><a href="javascript:void(0)" class="btn yes">关闭</a></div>
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
	@import url('../../../assets/student/css/notice.css');
</style>
