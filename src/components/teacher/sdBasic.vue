<template>
	<div>
		<div class="section">
            <h2 class="tt">
                <b><a href="sdAccounts.aspx" class="arrow_r">学生账户</a></b>
                <span id="student_no">000000000002</span>
                </h2>
            <div class="row pr clearfix">
                <div class="tab01">
                    <ul class="clearfix">
                        <li><a id="xsxq" href="javascript:void(0)" class="selected">学生详情</a></li>
                        <li><a id="jsxm" href="competition.aspx?AppId=255&amp;&amp;backUrl=sdAccounts.aspx">竞赛项目</a></li>
                        <li><a id="xstl" href="discussion.aspx?AppId=255&amp;&amp;backUrl=sdAccounts.aspx">学生讨论</a></li>
                    </ul>
                </div>
            </div>
            <div class="accDetails">
                <div class="tbBox">
                    <form action="#" method="post">
                    <table cellpadding="0" cellspacing="0" width="100%" class="bsTb" id="Sdbasic">
                        <tbody><tr>
                            <td colspan="3">
                                <h3 class="title"><span>基本信息</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%" class="clearfix">
                                <label>姓名</label><input type="text" name="name" id="name" maxlength="50">
                            </td>
                            <td class="clearfix">
                                <label>昵称</label><input type="text" name="nickname" id="nickname" maxlength="20">
                            </td>
                        </tr>
                        <tr>
                            <td class="clearfix">
                                <label>联系电话</label><input type="text" id="phone" maxlength="20">
                            </td>
                            <td class="clearfix">
                                <label>性别</label><p class="sex"><input type="radio" name="sex" id="input_sex1"><span>男</span><input type="radio" id="input_sex2" name="sex" checked="checked"><span>女</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="clearfix">
                                <label>学号</label><input type="text" id="sdId" maxlength="20">
                            </td>
                            <td class="clearfix">
                                <label>注册时间</label><span class="basicTxt" id="zcsj">2018-09-13</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="clearfix">
                                <label>身份</label>
                                <span class="basicTxt" id="sfen">学生</span>
                            </td>
                            <td class="clearfix">
                                <label>身份证号</label><input type="text" id="idCardNo" maxlength="20">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <h3 class="title"><span>所在院系</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>地区</label>
                                <select class="fl" id="district"><option value="1">华东</option><option value="2">华南</option><option value="3">华中</option><option value="4">华北</option><option value="5">西北</option><option value="6" selected="selected">西南</option><option value="7">东北</option><option value="8">港澳台</option></select>
                            </td>
                            <td>
                                <label>省份</label>
                                <select class="fl" id="province"><option value="9" selected="selected">四川省</option></select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>学校</label>
                                <select class="fl" id="school"><option value="4" selected="selected">成都乾隆财经大学</option></select>
                            </td>
                            <td>
                                <label>学院</label>
                                <select class="fl" id="college"><option value="4" selected="selected">金融学院</option></select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>学系</label>
                                <select class="fl" id="department"><option value="5" selected="selected">国际贸易系</option></select>
                            </td>
                            <td>
                                <label>专业</label>
                                <select class="fl" id="major"><option value="6" selected="selected">宏观经济学</option></select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <label>班级</label>
                                <select class="fl" id="class"><option value="11" selected="selected">西方经济学一班</option></select>
                            </td>
                        </tr>
                    </tbody></table>
                    </form>
                </div>
                <div class="btns">
                    <input type="submit" class="basic-save" value="保存">
                    <input onclick="window.location.href='sdAccounts.aspx'" type="submit" class="basic-cancel" value="取消">
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
	@import "../../assets/teacher/css/sdBasic.css";
</style>
