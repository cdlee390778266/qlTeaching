<template>
	<div>
        <div class="lxf_tab">
            <div class="ttBox clearfix">
                <ul class="score_tabbar clearfix">
                    <li class="selected"><a href="javascript:void(0);">竞赛战绩</a></li>
                    <li id="zxsp"><a href="javascript:void(0);">自选商品</a></li>
                </ul>
               
            </div>
            <div class="score_tabcont">
                <div>
                    <table cellpadding="0" cellspacing="0" width="100%" class="tb gains" id="gains">
                        <thead>
                            <tr>
                                <th width="30%">竞赛战绩</th>
                                <th width="20%">日收益</th>
                                <th width="20%">月收益</th>
                                <th>
                                    <p class="clearfix"><span>总收益</span><a id="score_refresh" href="javascript:void(0)" class="btn-refresh"></a></p>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="score"><tr><td><a href="/web/student/record04.aspx?AppID=1" class="comName">乾隆金融投资大赛</a><div class="fl_char clearfix" matchseq="1" style="display: none;"><div class="char fl"><div id="canvas21"><div id="shell_pie2d_4c0e02afafb9" style="padding: 0px; margin: 0px auto; overflow: hidden; position: relative; width: 410px; height: 334px;"><canvas id="pie2d_4c0e02afafb9" style="text-size-adjust: none; width: 410px; height: 334px;" width="410" height="334"><p>Your browser does not support the canvas element</p></canvas><div style="border: 2px solid rgb(170, 70, 67); border-radius: 5px; position: absolute; z-index: 0; text-align: left; padding: 4px 5px; cursor: pointer; background-color: rgba(239, 239, 239, 0.85); font-size: 12px; color: black; opacity: 0; transition: opacity 0.3s ease-out 0s, top 0.1s ease-out 0s, left 0.1s ease-out 0s;">总金额: 100546</div></div></div></div><div class="ranking_box fr"><table cellpadding="0" cellspacing="0" width="260"><thead><tr><th with="20">排名</th><th width="100">姓名</th><th>总资产</th></tr></thead><tbody class="ranking"><tr><td>1</td><td><a href="personal.aspx?studentid=000000001001"></a></td><td>1025002.03</td></tr><tr><td>2</td><td><a href="personal.aspx?studentid=000020170229">杨刚豪</a></td><td>999839.00</td></tr></tbody></table></div></div></td><td class="font_green">-0.32%</td><td class="font_green">-0.32%</td><td class="font_red">+2.50%</td></tr><tr><td><a href="/web/student/record04.aspx?AppID=54" class="comName">成都乾隆测试竞赛</a><div class="fl_char clearfix" matchseq="54" style="display: none;"><div class="char fl"><div id="canvas254">暂无相关数据</div></div><div class="ranking_box fr"><table cellpadding="0" cellspacing="0" width="260"><thead><tr><th with="20">排名</th><th width="100">姓名</th><th>总资产</th></tr></thead><tbody class="ranking"><tr><td colspan="3" align="center">暂无相关数据</td></tr></tbody></table></div></div></td><td class="">0.00%</td><td class="">0.00%</td><td class="">0.00%</td></tr><tr><td><a href="/web/student/record04.aspx?AppID=55" class="comName">测试</a><div class="fl_char clearfix" matchseq="55"><div class="char fl"><div id="canvas255"></div></div><div class="ranking_box fr"><table cellpadding="0" cellspacing="0" width="260"><thead><tr><th with="20">排名</th><th width="100">姓名</th><th>总资产</th></tr></thead><tbody class="ranking"></tbody></table></div></div></td><td class="">0.00%</td><td class="">0.00%</td><td class="">0.00%</td></tr><tr><td><a href="/web/student/record04.aspx?AppID=56" class="comName">测试深B股</a><div class="fl_char clearfix" matchseq="56" style="display: none;"><div class="char fl"><div id="canvas256">暂无相关数据</div></div><div class="ranking_box fr"><table cellpadding="0" cellspacing="0" width="260"><thead><tr><th with="20">排名</th><th width="100">姓名</th><th>总资产</th></tr></thead><tbody class="ranking"><tr><td colspan="3" align="center">暂无相关数据</td></tr></tbody></table></div></div></td><td class="">0.00%</td><td class="">0.00%</td><td class="">0.00%</td></tr></tbody>
                    </table>
                    <div class="page1 clearfix">
                        <a href="javascript:void(0)" class="prevPage" title="上一页" onclick="competitionPageDown()">
                        </a><a href="javascript:void(0)" class="nextPage" title="下一页" onclick="competitionPageUp()">
                        </a>
                    </div>
                </div>
                <div style="display: none;">
                    <div class="stock_down clearfix" id="stockindex">
                        <center><img :src="loadingImg" alt="数据正在加载中..."></center>
                    </div>
                    <table cellpadding="0" cellspacing="0" width="100%" class="tb gains">
                        <thead>
                            <tr>
                                <th width="20%">商品名称</th>
                                <th width="20%">当前价</th>
                                <th width="20%">涨跌幅</th>
                                <th width="20%">总成交量</th>
                                <th><p class="clearfix"><span>总成交金额</span><a href="javascript:void(0)" id="secur_refresh" class="btn-refresh"></a></p></th>
                            </tr>
                        </thead>
                        <tbody id="secur">
                            <tr><td colspan="5"><img :src="loadingImg" alt="数据正在加载中..."></td></tr>
                        </tbody>
                    </table>
                    <div class="page1">
                        <a href="javascript:void(0)" class="prevPage" title="上一页" onclick="stockPageDown()">
                        </a><a href="javascript:void(0)" class="nextPage" title="下一页" onclick="stockPageUp()">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="issue">
                <div class="Editor">
                    <div class="edui-container" style="width: 750px; z-index: 999;"><div style="height: 1px;"></div><div class="edui-toolbar" style="width: 750px; z-index: 1000; position: fixed; top: 0px;"><div class="edui-btn-toolbar" unselectable="on" onmousedown="return false"><div class="edui-btn edui-btn-image" unselectable="on" onmousedown="return false" data-original-title="图片"> <div unselectable="on" class="edui-icon-image edui-icon"></div><div class="edui-tooltip" unselectable="on" onmousedown="return false"><div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div><div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div></div></div><div class="edui-btn edui-btn-emotion" unselectable="on" onmousedown="return false" data-original-title="表情"> <div unselectable="on" class="edui-icon-emotion edui-icon"></div><div class="edui-tooltip" unselectable="on" onmousedown="return false" style="z-index: 1000;"><div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div><div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div></div></div></div><div class="edui-dialog-container"></div></div><div class="edui-editor-body"><div id="myEditor" class=" edui-body-container" contenteditable="true" style="width: 730px; min-height: 90px; z-index: 999;"></div></div></div>
                    <div class="clear">
                    </div>
                    <form action="" method="" name="issue_form" class="issue_form">
                    <input class="bqBtn" type="button" value="表情">
                    &nbsp;&nbsp;
                    <input class="gpBtn" type="button" value="股票" onclick="testTags()">                        
                    &nbsp;&nbsp; <div style="float:right;"><a id="btn_fb" href="javascript:void(0)" class="btn issueBtn">发布</a></div>
                    <div class="wrdTotal">还能输入<span id="remainCount_Message">350</span>字</div>
                    </form>
                </div>
            </div>
            <div class="lxf_tab">
                <ul class="tabbar clearfix tab1">
                    <li><a href="javascript:void(0);" id="showAll" class="showAll selected">全部</a></li>
                    <li><a href="javascript:void(0);" id="showXSTL">学生讨论</a></li>
                    <li><a href="javascript:void(0);" id="showJSXX">竞赛信息</a></li>
                    <li><a href="javascript:void(0);" id="showGGXX">公告信息</a></li>
                </ul>
                <div class="tabcont">
                    <span id="span_list"><div class="info"><dl class="mrb15 clearfix"><dt><div class="hd-img" id="studentheader_12" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',12,'0')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a>  <p style="display:none;"><a id="gzstudentid_000000001001" href="javascript:void(0)" class="att" onclick="GZStudent(0,12,'000000001001')">关注</a><a href="javascript:void(0)" class="btn_blacklist" onclick="LHStudent(0,'000000001001')">拉黑</a></p><div class="basic_box fl_box"><i class="f_arrow"></i><div class="basic_info fl_box_bd"><dl class="clearfix"><dt><a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></dt><dd><h5>000000001001</h5><p><span class="sex">女</span>，<span class="district"></span></p><p><span>讨论<a href="#" class="discTotal">5</a></span><span>粉丝<a href="#" class="FansTotal">0</a></span></p></dd></dl><p class="intro">测试地地道道</p></div></div></div></dt><dd id="replayDetails"><h5 class="frName"><a href="personal.aspx?studentid=000000001001">000000001001</a></h5><p class="details"><a href="link/discus_details.aspx?seq=12">4564546465464</a><br><a target="_blank" href=""></a></p><div class="status-meta clearfix"><div class="fl"> <a href="javascript:void(0)">2018-10-07 16:42</a><a href="javascript:void(0)" class="btn-disc" onclick="openJB(0,12,'000000001001',0)">举报</a></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(0,12)">删除</a><a href="javascript:void(0);" class="btn-repost" onclick="openZF(12)">转发(0)</a><a id="a_fav12" href="javascript:void(0);" class="btn-fav " onclick="favMessage(0,12)">收藏</a><a href="javascript:void(0);" class="btn-reply" onclick="showReplyArea(0,12,0)">评论(<span id="span_replycount_12">0</span>)</a> </div></div><div id="12" style="display:none;"></div></dd></dl></div><div class="info"><dl class="mrb15 clearfix"><dt><div class="hd-img" id="studentheader_11" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',11,'0')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a>  <p style="display:none;"><a id="gzstudentid_000000001001" href="javascript:void(0)" class="att" onclick="GZStudent(0,11,'000000001001')">关注</a><a href="javascript:void(0)" class="btn_blacklist" onclick="LHStudent(0,'000000001001')">拉黑</a></p><div class="basic_box fl_box"><i class="f_arrow"></i><div class="basic_info fl_box_bd"><dl class="clearfix"><dt><a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></dt><dd><h5>000000001001</h5><p><span class="sex">女</span>，<span class="district"></span></p><p><span>讨论<a href="#" class="discTotal">5</a></span><span>粉丝<a href="#" class="FansTotal">0</a></span></p></dd></dl><p class="intro">测试地地道道</p></div></div></div></dt><dd id="replayDetails"><h5 class="frName"><a href="personal.aspx?studentid=000000001001">000000001001</a></h5><p class="details"><a href="link/discus_details.aspx?seq=11">333</a><br><a target="_blank" href=""></a></p><div class="status-meta clearfix"><div class="fl"> <a href="javascript:void(0)">2018-10-07 12:24</a><a href="javascript:void(0)" class="btn-disc" onclick="openJB(0,11,'000000001001',0)">举报</a></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(0,11)">删除</a><a href="javascript:void(0);" class="btn-repost" onclick="openZF(11)">转发(0)</a><a id="a_fav11" href="javascript:void(0);" class="btn-fav " onclick="favMessage(0,11)">收藏</a><a href="javascript:void(0);" class="btn-reply" onclick="showReplyArea(0,11,0)">评论(<span id="span_replycount_11">0</span>)</a> </div></div><div id="11" style="display:none;"></div></dd></dl></div><div class="info"><dl class="mrb15 clearfix"><dt><div class="hd-img" id="studentheader_10" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',10,'0')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a>  <p style="display:none;"><a id="gzstudentid_000000001001" href="javascript:void(0)" class="att" onclick="GZStudent(0,10,'000000001001')">关注</a><a href="javascript:void(0)" class="btn_blacklist" onclick="LHStudent(0,'000000001001')">拉黑</a></p><div class="basic_box fl_box"><i class="f_arrow"></i><div class="basic_info fl_box_bd"><dl class="clearfix"><dt><a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></dt><dd><h5>000000001001</h5><p><span class="sex">女</span>，<span class="district"></span></p><p><span>讨论<a href="#" class="discTotal">5</a></span><span>粉丝<a href="#" class="FansTotal">0</a></span></p></dd></dl><p class="intro">测试地地道道</p></div></div></div></dt><dd id="replayDetails"><h5 class="frName"><a href="personal.aspx?studentid=000000001001">000000001001</a></h5><p class="details"><a href="link/discus_details.aspx?seq=10">测试1111</a><br><a target="_blank" href=""></a></p><div class="status-meta clearfix"><div class="fl"> <a href="javascript:void(0)">2018-10-07 12:15</a><a href="javascript:void(0)" class="btn-disc" onclick="openJB(0,10,'000000001001',0)">举报</a></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(0,10)">删除</a><a href="javascript:void(0);" class="btn-repost" onclick="openZF(10)">转发(0)</a><a id="a_fav10" href="javascript:void(0);" class="btn-fav " onclick="favMessage(0,10)">收藏</a><a href="javascript:void(0);" class="btn-reply" onclick="showReplyArea(0,10,0)">评论(<span id="span_replycount_10">1</span>)</a> </div></div><div id="10" style="display:none;"></div></dd></dl></div><div class="info"><dl class="mrb15 clearfix"><dt><div class="hd-img" id="studentheader_9" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',9,'0')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a>  <p style="display:none;"><a id="gzstudentid_000000001001" href="javascript:void(0)" class="att" onclick="GZStudent(0,9,'000000001001')">关注</a><a href="javascript:void(0)" class="btn_blacklist" onclick="LHStudent(0,'000000001001')">拉黑</a></p><div class="basic_box fl_box"><i class="f_arrow"></i><div class="basic_info fl_box_bd"><dl class="clearfix"><dt><a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></dt><dd><h5>000000001001</h5><p><span class="sex">女</span>，<span class="district"></span></p><p><span>讨论<a href="#" class="discTotal">5</a></span><span>粉丝<a href="#" class="FansTotal">0</a></span></p></dd></dl><p class="intro">测试地地道道</p></div></div></div></dt><dd id="replayDetails"><h5 class="frName"><a href="personal.aspx?studentid=000000001001">000000001001</a></h5><p class="details"><a href="link/discus_details.aspx?seq=9">单独的</a><br><a target="_blank" href="http://222.68.185.164:8081/web/student/link/discus_details.aspx?seq=7">http://222.68.185.164:8081/web/student/link/discus_details.aspx?seq=7</a></p><div class="status-meta clearfix"><div class="fl"> <a href="javascript:void(0)">2018-09-20 16:50</a><a href="javascript:void(0)" class="btn-disc" onclick="openJB(0,9,'000000001001',0)">举报</a></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(0,9)">删除</a><a href="javascript:void(0);" class="btn-repost" onclick="openZF(9)">转发(0)</a><a id="a_fav9" href="javascript:void(0);" class="btn-fav  faved " onclick="favMessage(0,9)">已收藏</a><a href="javascript:void(0);" class="btn-reply" onclick="showReplyArea(0,9,0)">评论(<span id="span_replycount_9">0</span>)</a> </div></div><div id="9" style="display:none;"></div></dd></dl></div><div class="info"><dl class="mrb15 clearfix"><dt><div class="hd-img" id="studentheader_7" onmouseout="HiddenStudentBox()" onmouseover="ShowStudentBox(0,'000000001001',7,'0')"> <a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a>  <p style="display:none;"><a id="gzstudentid_000000001001" href="javascript:void(0)" class="att" onclick="GZStudent(0,7,'000000001001')">关注</a><a href="javascript:void(0)" class="btn_blacklist" onclick="LHStudent(0,'000000001001')">拉黑</a></p><div class="basic_box fl_box"><i class="f_arrow"></i><div class="basic_info fl_box_bd"><dl class="clearfix"><dt><a href="personal.aspx?studentid=000000001001"><img src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg"></a></dt><dd><h5>000000001001</h5><p><span class="sex">女</span>，<span class="district"></span></p><p><span>讨论<a href="#" class="discTotal">5</a></span><span>粉丝<a href="#" class="FansTotal">0</a></span></p></dd></dl><p class="intro">测试地地道道</p></div></div></div></dt><dd id="replayDetails"><h5 class="frName"><a href="personal.aspx?studentid=000000001001">000000001001</a></h5><p class="details"><a href="link/discus_details.aspx?seq=7">在9月17日举行的阿里巴巴投资者大会上，阿里巴巴集团副总裁、盒马CEO侯毅介绍了盒马的多项经营数据。他表示，开店1.5年以上的门店单店坪效超过5万元，单店日均销售额超过80万元，线上销售占比超过60%，均远超传统超市。此外，根据盒马发布的数据，被盒马模式改造后的淘鲜达店铺（由大润发运营），运营超过3个月的店铺单店日均新增线上订单达到1200单以上，单店月度销售额提升10%以上，单店累计新增年轻顾客2万名。</a><br><a target="_blank" href=""></a></p><div class="status-meta clearfix"><div class="fl"> <a href="javascript:void(0)">2018-09-17 18:08</a><a href="javascript:void(0)" class="btn-disc" onclick="openJB(0,7,'000000001001',0)">举报</a></div><div class="meta-btns fr"><a href="javascript:void(0);" style="display:none;" class="btn-delete" onclick="deleteMessage(0,7)">删除</a><a href="javascript:void(0);" class="btn-repost" onclick="openZF(7)">转发(1)</a><a id="a_fav7" href="javascript:void(0);" class="btn-fav  faved " onclick="favMessage(0,7)">已收藏</a><a href="javascript:void(0);" class="btn-reply" onclick="showReplyArea(0,7,0)">评论(<span id="span_replycount_7">1</span>)</a> </div></div><div id="7" style="display:none;"></div></dd></dl></div></span>
                </div>
                <!--分页开始-->
                <div class="page clearfix">
                    <div class="pageGro cb clearfix">
                        <div class="pageTotal"><span>共5条记录，每页5条，共1页</span></div>
                        <div class="pageUp" onclick="pageUp()">上一页</div>
                        <div class="pageList">
                            <ul><li class="on">1</li></ul>
                        </div>
                        <div class="pageDown" onclick="pageDown()">下一页</div>
                    </div>
                </div>
                <!--分页结束-->
            </div>
        </div>

        <!-- 浮层开始 -->
        <!-- 转发开始 -->
        <div class="flt repost">
            <h3>
                <span>转发</span><a href="javascript:void(0)" class="closed">关闭</a></h3>
            <form>
            <textarea class="textarea1" onpropertychange="if(value.length>140) value=value.substr(0,140)" onkeyup="javascript:setShowLength(this, 140, 'remainCount');" id="repost"></textarea>
            <div class="clearfix">
                <input id="hidden_messageseq" type="hidden" />
                <div class="words fr">还能输入<span id="remainCount">140</span>字</div>
            </div>
            <div class="issue-btn">
                <a href="javascript:void(0)" class="btn release" onclick="submit_ZF(0)">发布</a><a
                    href="javascript:void(0)" class="btn undo" onclick="closeZF()">取消</a></div>
            </form>
        </div>
        <!-- 转发结束 -->
        <!--操作提标弹出层-->
        <div class="flt prompt">
            <p class="center">
                <i class="icon05"></i><span></span>
            </p>
        </div>
        <!---删除结束-->
        <!--举报开始-->
        <div class="flt disc">
            <h3>
                <span>举报用户</span><a href="javascript:void(0)" class="close" onclick="closeJB()">关闭</a></h3>
            <div class="center">
                <dl class="clearfix">
                    <dt>
                        <div class="hdImg">
                            <span id="span_tx_jb"></span>
                        </div>
                    </dt>
                    <dd>
                        <h4>
                            <span id="span_nc_jb"></span>
                        </h4>
                    </dd>
                </dl>
                <form name="tipOff" class="clearfix">
                <label>
                    举报原因：</label>
                <div class="tipOff clearfix">
                    <p>
                        <input type="radio" name="reason" value="1" checked="checked" />
                        垃级广告</p>
                    <p>
                        <input type="radio" name="reason" value="2" />
                        色情低俗</p>
                    <p>
                        <input type="radio" name="reason" value="3" />
                        激进时政话题</p>
                </div>
                </form>
                <input type="hidden" id="messageseq" /><input type="hidden" id="studentid" /><input
                    type="hidden" id="type" />
                <div class="issue-btn">
                    <a href="javascript:void(0)" class="btn release" onclick="SubmitJB(0)">发布</a><a href="javascript:void(0)"
                        class="btn undo" onclick="closeJB()">取消</a></div>
            </div>
        </div>
        <!--举报结束-->
        <!--数据刷新开始-->
        <div class="flt refresh">
            <a href="javascript:void(0)" class="closed"></a>
            <div class="success">
                <p class="center">
                    <i class="icon_succeed"></i><span>刷新成功</span></p>
            </div>
        </div>
        <!--数据刷新结束-->
        <!--发布成功提示 开始-->
        <div class="flt issueSucc">
            <div class="success">
                <p class="center">
                    <i class="icon_succeed"></i><span>发布成功</span></p>
            </div>
        </div>
        <!--发布成功提示 结束-->
        <!--查看对话开始-->
        <div class="flt readMore">
            <h3>
                <span>查看对话</span><a href="javascript:void(0)" class="closed">关闭</a></h3>
            <div class="details">
                <div class="info">
                    <span id="span_gddh">
                        <div style="width: 100%; text-align: center;">
                            <img :src="loadingImg" alt='数据正在加载中...' /></div>
                    </span>
                </div>
            </div>
        </div>
        <!--查看对话结束-->
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
