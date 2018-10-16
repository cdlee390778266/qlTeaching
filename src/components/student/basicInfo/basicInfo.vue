<template>
	<div class="main content baseInfo clearfix">
        <div class="lxf_tab">
            <ul class="basicTab tab1 clearfix" style="height: 36px;">
                <li><a href="javascript:void(0)" class=""><span>个人资料</span></a></li>
                <li><a href="javascript:void(0)" class="selected"><span>修改密码</span></a></li>
                <li><a href="javascript:void(0)" class=""><span>修改头像</span></a></li>
                <li><a href="javascript:void(0)" class=""><span>编辑简介</span></a></li>
                <li><a href="javascript:void(0)" class=""><span>黑名单</span></a></li>
            </ul>
            <div class="tabcont">
                <div style="display: none;">
                    <div class="info_box">
                        <h3>
                            <span>基本信息</span></h3>
                        <form action="" name="">
                        <table cellpadding="0" cellspacing="0" width="100%" class="tb1">
                            <tbody><tr>
                                <td>
                                    <p>
                                        <label>
                                            姓名<i>*</i></label>
                                        <input id="input_name" type="text" name="name" placeholder="请输入" maxlength="50">
                                    </p>
                                </td>
                                <td>
                                    <p class="sex">
                                        <label>
                                            性别<i>*</i></label>
                                        <input id="input_sex1" type="radio" name="sex" class="man" value="0">
                                        <span>男</span>
                                        <input id="input_sex2" type="radio" name="sex" class="woman" value="1" checked="checked">
                                        <span>女</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <label>
                                            身份<i>*</i></label>
                                        <span id="span_identity" class="span1">学生</span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <label>
                                            昵称<i>*</i></label>
                                        <input id="input_nickname" type="text" name="nickname" placeholder="请输入" maxlength="20">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <label>
                                            账号</label>
                                        <span id="span_studentid" class="span1 account">000000001001</span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <label>
                                            学号<i>*</i></label>
                                        <input id="input_studentno" type="text" name="studentId" placeholder="请输入" maxlength="20">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <label>
                                            身份证号<i>*</i></label>
                                        <input id="input_serialnumber" type="text" name="IDnumber" placeholder="请输入" maxlength="20">
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <label>
                                            联系电话</label>
                                        <input id="input_phpne" type="text" name="phone" placeholder="请输入" maxlength="20">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <p class="regDate">
                                        <label>
                                            注册时间</label>
                                        <span id="span_registertime" class="span1">2018-09-13</span>
                                    </p>
                                </td>
                            </tr>
                        </tbody></table>
                        <p class="center">
                            <a id="save_jbxx" href="javascript:void(0)" class="btn btn_confirm">确定</a><a id="cancel_jbxx" href="javascript:void(0)" class="btn btn_cancel">取消</a></p>
                        </form>
                    </div>
                    <div class="info_box">
                        <h3>
                            <span>所在院系</span></h3>
                        <form action="" name="">
                        <table cellpadding="0" cellspacing="0" width="100%" class="tb1">
                            <tbody><tr>
                                <td width="50%">
                                    <p>
                                        <label>
                                            区域<i>*</i></label><select id="select_area" name="district" class="district" disabled="disabled"><option value="1">华东</option><option value="2">华南</option><option value="3">华中</option><option value="4">华北</option><option value="5">西北</option><option value="6" selected="selected">西南</option><option value="7">东北</option><option value="8">港澳台</option></select></p>
                                </td>
                                <td>
                                    <p>
                                        <label>
                                            省份<i>*</i></label><select id="select_province" name="province" class="province" disabled="disabled"><option value="1">重庆市</option><option value="3">云南省</option><option value="6">西藏自治区</option><option value="9" selected="selected">四川省</option><option value="27">贵州省</option></select></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <label>
                                            学校<i>*</i></label><select id="select_school" name="province" class="province" disabled="disabled"><option value="4" selected="selected">成都乾隆财经大学</option><option value="8">成都乾隆金融学校2</option></select></p>
                                </td>
                                <td>
                                    <p>
                                        <label>
                                            学院<i>*</i></label><select id="select_college" name="province" class="province" disabled="disabled"><option value="4" selected="selected">金融学院</option><option value="5">会计学院</option></select></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <label>
                                            学系<i>*</i></label><select id="select_department" name="department " class="department" disabled="disabled"><option value="5" selected="selected">国际贸易系</option></select></p>
                                </td>
                                <td>
                                    <p>
                                        <label>
                                            专业<i>*</i></label><select id="select_professional" name="specialities" class="specialities" disabled="disabled"><option value="6" selected="selected">宏观经济学</option></select></p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <p>
                                        <label>
                                            班级<i>*</i></label><select id="select_classs" name="specialities" class="specialities" disabled="disabled"><option value="11" selected="selected">西方经济学一班</option></select></p>
                                </td>
                            </tr>
                        </tbody></table>
                        <p class="center">
                            <a id="save_szyx" href="javascript:void(0)" class="btn btn_confirm">确定</a><a id="cancel_szyx" href="javascript:void(0)" class="btn btn_cancel">取消</a></p>
                        </form>
                    </div>
                </div>
                <div style="display: block;">
                    <div class="info_box">
                        <p class="welcome">
                            Hi! <span id="span_studentname" class="userName"><span title=""></span></span>，欢迎为账号设置新密码</p>
                        <form action="" name="" id="changePassword">
                        <table cellpadding="0" cellspacing="0" width="100%" align="center">
                            <tbody><tr>
                                <td>
                                    <p>
                                        <label>
                                            原密码</label>
                                        <input id="old_password" type="password" name="name" class="txt01 newPassword" maxlength="30">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <label>
                                            新的密码</label>
                                        <input id="new_password" type="password" name="name" class="txt01 newPassword" maxlength="30">
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        <label>
                                            确认密码</label>
                                        <input id="repeat_password" type="password" name="name" class="txt01 confirmPassword" maxlength="30">
                                    </p>
                                </td>
                            </tr>
                        </tbody></table>
                        <p class="center">
                            <a id="save_password" href="javascript:void(0)" class="btn btn_confirm">确定</a><a id="cancel_password" href="javascript:void(0)" class="btn btn_cancel">取消</a></p>
                        </form>
                    </div>
                </div>
                <div style="display: none;">
                    <div class="info_box">
                        <form name="form0" id="form0">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody><tr>
                                <td width="80" valign="top" align="right">
                                    <label>
                                        上传头像：</label>
                                </td>
                                <td>
                                    <p>
                                        <input type="file" name="poster-input" id="poster-input" onchange="changeImage()"></p>
                                    <p class="imgInfo">
                                        支持JPG、GIF格式图片，不超过5M。拖拽或缩放图中的虚线方格可调整头像，注意右侧小头像预览效果。</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                                <td id="imgtd">
                                    <div class="hdEdit">
                                        <img src="" id="img0"></div>
                                </td><div class="hdThum"><img id="preview" src="" style="position: relative;" alt="截取后头像"><div></div></div>
                                <input type="hidden" name="x1">
                                <input type="hidden" name="x2">
                                <input type="hidden" name="y1">
                                <input type="hidden" name="y2">
                            </tr>
                        </tbody></table>
                        <p class="center">
                            <a href="javascript:void(0)" class="btn btn_confirm" onclick="checkandsubmit()">确定</a><a href="javascript:void(0)" class="btn btn_cancel" onclick="cancelsubmit()">取消</a></p>
                        </form>
                    </div>
                </div>
                <div style="display: none;">
                    <div class="info_box">
                        <form action="" name="" class="psInfo">
                        <p>
                            <b>个人简介：</b></p>
                        <textarea id="text_summary" rows="4" class="personalInfo" placeholder="请填写一段关于您的个人简介，限定100个文字，简介将公开在您的个人主页上。">测试地地道道</textarea>
                        <div class="row clearfix">
                            <div class="btns fl">
                                <a id="save_summary" href="javascript:void(0)" class="btn btn_confirm">确定</a><a id="cancel_summary" href="javascript:void(0)" class="btn btn_cancel">取消</a></div>
                            <p class="wrdTotal fr">
                                还可以输入<b class="words">94</b>个字</p>
                        </div>
                        </form>
                    </div>
                </div>
                <div style="display: none;">
                    <span id="span_blacklist"><div class="noMessage">暂无记录</div></span>
                    <!--分页开始-->
                    <div class="page clearfix">
                        <div class="pageGro cb clearfix">
                            <div class="pageTotal"><span>共0条记录，每页10条，共0页</span></div>
                            <div class="pageUp" onclick="pageUp()">
                                上一页</div>
                            <div class="pageList">
                                <ul></ul>
                            </div>
                            <div class="pageDown" onclick="pageDown()">
                                下一页</div>
                        </div>
                    </div>
                    <!--分页结束-->
                </div>
            </div>
        </div>
        <div class="cl">
        </div>

        <!--保存成功浮层开始-->
	    <div class="flt fltSave">
	        <a href="javascript:void(0)" class="closed"></a>
	        <div class="success">
	            <p class="center">
	                <i class="icon_succeed"></i><span>保存成功</span></p>
	        </div>
	    </div>
	    <!--保存成功浮层结束-->

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
	@import url('../../../assets/student/css/basicInfo.css');
</style>
