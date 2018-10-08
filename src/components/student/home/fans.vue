<template>
	<div class="myFans right_side fr">
      <h3 class="clearfix"> <span class="fl" id="fanscount">我的粉丝(0)</span>
        <div class="fr serch clearfix">
          <input type="text" placeholder="搜索用户" class="fl" id="text_search">
          <a href="javascript:void(0)" class="fl searchBtn" onclick="seachCollectList()">搜索</a> </div>
      </h3>
      <div class="fans_box pr">
        <div class="row user_groups clearfix">
          <ul class="fansTab fl clearfix">
            <li><a id="allGroups" class="showAll selected" style="cursor:pointer;" onclick="ShowGroupList(-1)">全部</a></li>
            <span id="groupslist"></span>
            <li><a id="noGroups" class="unGrouped" style="cursor:pointer;" onclick="ShowGroupList(0)">未分组</a></li>
          </ul>
          <div class="groups fr" style="right:0"><a href="javascript:void(0)" class="btn_group_create">+ 新建分组</a><a href="javascript:void(0)" class="btn_group_manage" onclick="OpenGroupManage()">管理分组</a></div>
        </div>
        <div class="friends"> <span id="span_list"><div class="noMessage">暂无记录</div></span> 
          
          <!--分页开始-->
          <div class="page clearfix">
            <div class="pageGro cb clearfix">
              <div class="pageTotal"> <span>共0条记录，每页10条，共0页</span></div>
              <div class="pageUp" onclick="pageUp()"> 上一页</div>
              <div class="pageList">
                <ul>
                </ul>
              </div>
              <div class="pageDown" onclick="pageDown()"> 下一页</div>
            </div>
          </div>
          <!--分页结束--> 
          
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
</style>
