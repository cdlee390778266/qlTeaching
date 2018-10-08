<template>
	<div class="myFans right_side fr">
      <h3 class="clearfix"> <span class="fl" id="friendscount">关注(0)</span>
        <div class="fr serch clearfix">
          <input type="text" placeholder="搜索用户" class="fl" id="text_search">
          <a href="javascript:void(0)" class="fl searchBtn" onclick="seachCollectList()">搜索</a>
          <a href="javascript:void(0)" class="fr addFriendBtn" onclick="OpenSearchFriend()">+关注</a>
        </div>
      </h3>
      <div class="friends_box pr">
        <div class="row user_groups clearfix">
          <ul class="fansTab fl clearfix">
            <li><a id="allGroups" class="showAll selected" style="cursor:pointer;" onclick="ShowGroupList(-1)">全部</a></li>
            <span id="groupslist"><li><a id="groupseq_1" style="cursor:pointer;" onclick="ShowGroupList(1)">会计174(0)</a></li><li><a id="groupseq_6" style="cursor:pointer;" onclick="ShowGroupList(6)">车控室(0)</a></li></span>
            <li><a id="noGroups" class="unGrouped" style="cursor:pointer;" onclick="ShowGroupList(0)">未分组</a></li>
          </ul>
          <div class="groups fr" style="right:0"><a href="javascript:void(0)" class="btn_group_create">+ 新建分组</a><a href="javascript:void(0)" class="btn_group_manage" onclick="OpenGroupManage()">管理分组</a></div>
        </div>
        <div class="friends">
            <span id="span_list"><div class="noMessage">暂无记录</div></span>
                    
          <!--分页开始-->
          <div class="page clearfix">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal">
                        <span>共0条记录，每页10条，共0页</span></div>
                    <div class="pageUp" onclick="pageUp()">
                        上一页</div>
                    <div class="pageList">
                        <ul>
                            
                        </ul>
                    </div>
                    <div class="pageDown" onclick="pageDown()">
                        下一页</div>
                </div>
            </div>
          <!--分页结束--> 
          
        </div>
      </div>

      <!-- 浮层开始 --> 

		<!--添加用户分组开始-->
		<div class="flt fans fansGroup">
			<h3><span>添加用户分组</span></h3>
		    <form name="" action="">
		    	<p><label>分组：</label><input type="text" class="gpName" id="input_gpName" maxlength="8"></p>
			    <div class="center"><a href="javascript:void(0)" class="btn btn_confirm" onclick="AddNewGroup()">确定</a><a href="javascript:void(0)" class="btn btn_cancel">取消</a></div>
		    </form>
		</div>   

		<!--添加用户分组结束-->

		<!--管理分组开始-->
		<div class="flt fans fansManage">
		  <h3><span>管理分组</span><a href="javascript:void(0)" class="closed">关闭</a></h3>
		  <form name="" action="">
		    <div class="row clearfix">
		      <div class="fl">
		        <ul class="GroupList">
		            
		        </ul>
		      </div>
		      <div class="fr">
		        <a id="upBtn">上移</a>
		        <br>
		        <a id="downBtn">下移</a>
		        <br>
		        <a id="renameBtn">改名</a>
		        <br>
		        <a id="removeBtn">删除</a>
		      </div>
		    </div>
		  </form>
		  <div class="center"><a href="javascript:void(0)" class="btn btn_confirm" onclick="SaveGroup()">确定</a><a href="javascript:void(0)" class="btn btn_cancel">取消</a></div>
		</div>
		<!--管理分组结束-->


		<!--添加朋友开始-->
		<div class="flt findFriend" style="min-height:495px;">
			<h3 class="clearfix"><span class="fl">查找朋友</span><a href="javascript:void(0)" class="closed">关闭</a></h3>
		    <div class="detail">
		    	<div class="srcBar clearfix">
		        	<div class="fl">
		            	<p><input type="text" placeholder="请输入账号/昵称" class="txt" id="txt_search"></p>
		            </div>
		            <div class="fl">
		            	<a href="javascript:void(0);" class="srcBtn" onclick="Search()">查找</a>
		            </div>
		        </div>
		        <div class="resultBox">
		        	<h4>为你推荐</h4>
		            <div class="srcResult clearfix">
		                <span id="search_list">
		                    <div style="width:100%; text-align:center;"><img :src="loadingImg" alt='数据正在加载中...' /></div>
		                </span>            	
		            </div>
		            <div class="page gzPage">
		                <ul class="clearfix">                    
		                </ul>
		            </div>
		        </div>
		    </div>
		</div>

		<!--添加朋友结束-->

		<!-- 浮层结束 -->

    </div>
</template>
<script>
	export default {
		data() {
			return {
				loadingImg: require('../../../assets/student/images/ajax-loader.gif')
			}
		}
	}
</script>
<style scoped lang="scss">
</style>
