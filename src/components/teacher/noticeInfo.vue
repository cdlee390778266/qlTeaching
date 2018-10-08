<template>
	<div>
	   <div class="section">
        <div class="row clearfix">
          <h2 class="tt">通知信息</h2>            
        </div> 
        <div class="faculty pr">
            <div class="notice_top">
              <a class="back" onclick="GoToBack()" style="cursor:pointer;">返回</a>
              <a onclick="GoToEdit()" style="cursor:pointer;">编辑</a>
            </div>
            <div class="subjectTip">
              <h4 class="sub_title">测试深B股竞赛暂停比赛公告</h4>
              <p><span>发布人：</span><b id="teachername">乾隆控股</b></p>
              <p><span>时&nbsp;&nbsp;&nbsp;间：</span><span id="span_releasetime">2018/9/18(星期二) 下午14:58</span></p>
              <p><span>接收人：</span><b id="receivenames">;</b></p>                
            </div>                  
            <div id="qm_con_body">此竞赛已被管理员临时暂停，目前无法进入委托交易，详细情况请联系管理员</div>
            <div class="attachment"> 
              <h4><span>附件</span></h4>
              <ul></ul>
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
	@import "../../assets/teacher/css/viewNotices.css";
</style>
