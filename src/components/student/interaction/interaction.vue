<template>
	<div class="main content interaction">
    <div class="hotTopic">
      <ul class="tab clearfix" id="topicul"><li class="selected"><a href="javascript:void(0);" onclick="getNewTopic(0)">热门话题</a></li><li><a href="javascript:void(0);" onclick="getNewTopic(1)">沪深证券(非B股)</a></li><li><a href="javascript:void(0);" onclick="getNewTopic(2)">沪B股</a></li><li><a href="javascript:void(0);" onclick="getNewTopic(3)">深B股</a></li><li><a href="javascript:void(0);" onclick="getNewTopic(4)">融资融券</a></li><li><a href="javascript:void(0);" onclick="getNewTopic(5)">港股</a></li><li><a href="javascript:void(0);" onclick="getNewTopic(6)">金融期货</a></li><li><a href="javascript:void(0);" onclick="getNewTopic(7)">商品期货</a></li><li><a href="javascript:void(0);" onclick="getNewTopic(8)">期权</a></li><li class="vain"><a href="javascript:void(0);">外汇</a></li></ul>
      <ul class="topicContent">
        <li>
            <div id="topicdiv"><dl class="clearfix"><dt><a href="topic_details.aspx?seq=8" target="_blank"><img width="200" height="150" src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></dt><dd><h4><a href="topic_details.aspx?seq=8">测试</a></h4><p class="userName"><a href="personal.aspx?studentid=000000001001" target="_blank">000000001001</a></p><div class="details"><p>在用户界面设计中，一些学者提出隐喻的概念为：将一个熟悉的非计算机领域的术语或概念，用于描述用户界面中的计算机功能和客体。目前许多软件产品在它们的界面设计中都大量使用隐喻，这种隐喻被称为界面隐喻。</p></div><div class="clearfix"><div class="fl"> <a href="javascript:void(0);" class="dateTime">2018年10月10日&nbsp;09:29</a><a href="javascript:void(0)" class="btn-disc" onclick="openJB(0,8,'000000001001',1)">举报</a></div><div class="meta-btns fr"> <a href="javascript:void(0);" class="btn-repost" seq="8">转发</a><a href="javascript:void(0);" class="btn-fav" seq="8">收藏</a><a href="topic_details.aspx?seq=8" class="btn-reply">评论(<span>0</span>)</a> </div></div></dd></dl></div>
        </li>
      
      </ul>
      <div class="page1 clearfix" id="hotTopicPage" style="display: block;">
            <a href="javascript:void(0)" class="prevPage" title="上一页" onclick="hotTopicPageDown()"></a>
            <a href="javascript:void(0)" class="nextPage" title="下一页" onclick="hotTopicPageUp()"></a>
          </div>
    </div>
    <div class="diary">
      <div class="lxf_tab pr">
        <p class="crt_diary pa"><a href="createDiary.aspx" class="btn_createDiary">创建话题</a></p>
        <ul class="tabbar tabbar_1 tab1 clearfix">
          <li><a href="javascript:void(0);" class="selected" id="mytopic">我的话题</a></li>
          <li><a href="javascript:void(0);" id="collectionTopic">收藏的话题</a></li>
          <li><a href="javascript:void(0);" id="repostTopic">转发的话题</a></li>
        </ul>
        <div class="tabcont">
          <div class="info" id="myTopicDiv"><dl class="clearfix"><dt><div class="hd-img" id="studentheader_8" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',8,'1')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></div></dt><dd><h5>000000001001</h5><h4><a href="topic_details.aspx?seq=8">测试</a></h4><p class="details">在用户界面设计中，一些学者提出隐喻的概念为：将一个熟悉的非计算机领域的术语或概念，用于描述用户界面中的计算机功能和客体。目前许多软件产品在它们的界面设计中都大量使用隐喻，这种隐喻被称为界面隐喻。<br><a target="_blank" href=""></a></p> <div class="status-meta clearfix"><div class="left fl"> <span>2018年10月10日&nbsp;09:29</span></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(8)">删除</a><a href="javascript:void(0)" class="btn-repost" seq="8">转发</a><a href="javascript:void(0);" class="btn-fav" seq="8">收藏</a><a href="javascript:void(0)" class="btn-reply" onclick="showReplyArea('reply8')">评论<span>(0)</span></a></div></div> <div class="reply-area" id="reply8">  <div class="issue"> <form action=""> <textarea class="textarea4" rows="" id="textarea_reply_8"></textarea> <div class="buttons clearfix">   <div class="fr"> <div style="float:left;margin-right:30px;margin-top:10px;font-size:16px;">还能输入<span id="remainCount_8">140</span>字</div>  <input type="button" class="btn issueBtn" value="发布" onclick="submit_Reply(0,8)"></div></div></form> </div><div class="replay_box w610" id="replies8"></div></div></dd></dl><dl class="clearfix"><dt><div class="hd-img" id="studentheader_5" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',5,'1')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></div></dt><dd><h5>000000001001</h5><h4><a href="topic_details.aspx?seq=5">关于美国中期选举 你需要知道的一切</a></h4><p class="details">美国中期选举将是影响特朗普后半任期政令推行的关键之战！从当前民调和初选结果看，共和党在参议院领先，但可能丢掉众议院。兴业王涵认为，如果共和党失去众议院，基建推行的难度将增加，可能不利于美国投资。<br><a target="_blank" href=""></a></p> <div class="status-meta clearfix"><div class="left fl"> <span>2018年09月25日&nbsp;16:35</span></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(5)">删除</a><a href="javascript:void(0)" class="btn-repost" seq="5">转发</a><a href="javascript:void(0);" class="btn-fav" seq="5">收藏</a><a href="javascript:void(0)" class="btn-reply" onclick="showReplyArea('reply5')">评论<span>(0)</span></a></div></div> <div class="reply-area" id="reply5">  <div class="issue"> <form action=""> <textarea class="textarea4" rows="" id="textarea_reply_5"></textarea> <div class="buttons clearfix">   <div class="fr"> <div style="float:left;margin-right:30px;margin-top:10px;font-size:16px;">还能输入<span id="remainCount_5">140</span>字</div>  <input type="button" class="btn issueBtn" value="发布" onclick="submit_Reply(0,5)"></div></div></form> </div><div class="replay_box w610" id="replies5"></div></div></dd></dl><dl class="clearfix"><dt><div class="hd-img" id="studentheader_4" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',4,'1')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></div></dt><dd><h5>000000001001</h5><h4><a href="topic_details.aspx?seq=4">趣头条CFO王静波 ：用户补贴的模式也许没有大家想得那么容易</a></h4><p class="details">&nbsp;比起募资，上市对这家公司更大的意义在于品牌。王静波认为，用户补贴本质上是一种积分，就像航空公司的积分一样，培养用户的忠诚度，“它的现金价值或者实际的兑换价值其实很低”。<br><a target="_blank" href=""></a></p> <div class="status-meta clearfix"><div class="left fl"> <span>2018年09月18日&nbsp;14:28</span></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(4)">删除</a><a href="javascript:void(0)" class="btn-repost" seq="4">转发</a><a href="javascript:void(0);" class="btn-fav" seq="4">已收藏</a><a href="javascript:void(0)" class="btn-reply" onclick="showReplyArea('reply4')">评论<span>(2)</span></a></div></div> <div class="reply-area" id="reply4">  <div class="issue"> <form action=""> <textarea class="textarea4" rows="" id="textarea_reply_4"></textarea> <div class="buttons clearfix">   <div class="fr"> <div style="float:left;margin-right:30px;margin-top:10px;font-size:16px;">还能输入<span id="remainCount_4">140</span>字</div>  <input type="button" class="btn issueBtn" value="发布" onclick="submit_Reply(0,4)"></div></div></form> </div><div class="replay_box w610" id="replies4"></div></div></dd></dl><dl class="clearfix"><dt><div class="hd-img" id="studentheader_1" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',1,'1')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></div></dt><dd><h5>000000001001</h5><h4><a href="topic_details.aspx?seq=1">测试</a></h4><p class="details">在9月17日举行的阿里巴巴投资者大会上，阿里巴巴集团副总裁、盒马CEO侯毅介绍了盒马的多项经营数据。他表示，开店1.5年以上的门店单店坪效超过5万元，单店日均销售额超过80万元，线上销售占比超过...<br><a target="_blank" href=""></a></p> <div class="status-meta clearfix"><div class="left fl"> <span>2018年09月17日&nbsp;18:07</span></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(1)">删除</a><a href="javascript:void(0)" class="btn-repost" seq="1">转发</a><a href="javascript:void(0);" class="btn-fav" seq="1">收藏</a><a href="javascript:void(0)" class="btn-reply" onclick="showReplyArea('reply1')">评论<span>(0)</span></a></div></div> <div class="reply-area" id="reply1">  <div class="issue"> <form action=""> <textarea class="textarea4" rows="" id="textarea_reply_1"></textarea> <div class="buttons clearfix">   <div class="fr"> <div style="float:left;margin-right:30px;margin-top:10px;font-size:16px;">还能输入<span id="remainCount_1">140</span>字</div>  <input type="button" class="btn issueBtn" value="发布" onclick="submit_Reply(0,1)"></div></div></form> </div><div class="replay_box w610" id="replies1"></div></div></dd></dl></div>
            
          </div>
        </div>
      </div>
     <!--分页开始-->
            <div class="page clearfix" id="bottompage">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal"><span>共5条记录，每页5条，共1页</span></div>
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
      	
      	<!-- 浮层开始 --> 
	    <!-- 转发开始 -->
	    <div class="flt repost">
	      <h3 class="clearfix"><span class="fl">转发</span><a href="#" class="closed fr">关闭</a></h3>
	      <form>
	        <textarea class="textarea1"  onpropertychange="if(value.length>140) value=value.substr(0,140)" onkeyup="javascript:setShowLength(this, 140, 'remainCount');" id="textareaRepost" ></textarea>
	        <div class="clearfix">
	          <div class="buttons fl">  </div>
	          <div class="words fr">还能输入<span id="remainCount">140</span>字</div>
	        </div>
	         <div class="issue-btn"><a href="#" class="btn release" onclick="repostTopic()">发布</a><a href="#" class="btn undo" onclick="cancelTopic">取消</a></div>
	      </form>
	    </div>
	    <!-- 转发结束 --> 

	    <!-- 收藏开始 -->
	    <div class="flt prompt">
	      <p><i class="fav-sussce icon05"></i><span></span></p>
	    </div>
	    <!-- 收藏结束 --> 

	    <!--举报开始-->
	    <div class="flt disc" >
	        <h3><span>举报用户</span><a href="javascript:void(0)" class="close" onclick="closeJB()">关闭</a></h3>
	        <div class="center">
	            <dl class="clearfix">
	                <dt>
	                    <div class="hdImg" id="span_tx_jb"><a href="personal.html"><img  src="images/hd02.jpg"></a></div>
	                </dt>
	                <dd><h4 id="span_nc_jb">冠山居士</h4></dd>
	            </dl>
	            <form name="tipOff" class="clearfix">
	                <label>举报原因：</label>
	                <div class="tipOff clearfix">
	                    <p><input type="radio" name="reason" checked="checked" value="1">垃级广告</p>
	                    <p><input type="radio" name="reason"  value="2">色情低俗</p>
	                    <p><input type="radio" name="reason"  value="3">激进时政话题</p>
	                </div>
	                 <input type="hidden" id="messageseq" /> <input type="hidden" id="studentid" /> <input type="hidden" id="type" />
	            </form>
	            <div class="issue-btn"><a href="javascript:void(0)" class="btn release" onclick="SubmitJB(0)">发布</a><a href="javascript:void(0)" class="btn undo" onclick="closeJB()">取消</a></div>
	        </div>
	    </div>
	    <!--举报结束-->
	    <!--发布成功提示 开始-->
	<div class="flt issueSucc">
	    <div class="success">
	        <p class="center"><i class="icon_succeed"></i><span>发布成功</span></p>
	    </div>
	</div>
	<!--发布成功提示 结束-->
	<!--查看对话开始-->
	<div class="flt readMore">
	    <h3><span>查看对话</span><a href="javascript:void(0)" class="closed">关闭</a></h3>
		<div class="details">        
	    	<div class="info">
	            <span id="span_gddh"></span>        	
	        </div>        
	    </div>
	</div>
	<!--查看对话结束-->

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
	@import url('../../../assets/student/css/interaction.css');
</style>
