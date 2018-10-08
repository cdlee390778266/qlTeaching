<template>
	<div class="myFans right_side fr">
        <h3 class="clearfix">
        	<span class="fl">@提到我的</span>
            <div class="fr serch clearfix">
            	<input type="text" placeholder="搜索用户" class="fl" id="text_search">
                <a href="javascript:void(0)" class="fl searchBtn" onclick="searchAtmeList()">搜索</a>
            </div>
        </h3>
        <div class="atme">
            <span id="span_list"><div class="noMessage">暂无记录</div></span>
        	
        <!--分页开始-->
          <div class="page clearfix">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal"><span>共0条记录，每页10条，共0页</span></div>
                    <div class="pageUp" onclick="pageUp()">上一页</div>
                    <div class="pageList">
                        <ul></ul>
                    </div>
                    <div class="pageDown" onclick="pageDown()">下一页</div>
                </div>
            </div>
          <!--分页结束--> 

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
