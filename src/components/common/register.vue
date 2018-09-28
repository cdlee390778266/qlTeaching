<template>
	<div class="register-box">
		<div class="contain">
	        <div class="register">
	            <h1>
	                钱龙金融教学软件</h1>
	            <div class="reg">
	                <form action="" name="loginform" accept-charset="utf-8" method="post" id="login_form" class="loginForm">
	                    <p><i>*</i><label>用 户 名：</label><input type="text" placeholder="用户名为12位数字" class="txt1" id="studentid" style="ime-mode: disabled;" onpaste="return false;" onkeypress="keyPress()" maxlength="12" /></p>
	                    <p><i>*</i><label>用户昵称：</label><input type="text" placeholder="请输入昵称" id="nickname" class="txt1" maxlength="20" /></p>
	                    <p><i>*</i><label>用户密码：</label><input type="password" placeholder="请输入密码" class="txt1" id="password" maxlength="30" /></p>
	                    <p><i>*</i><label>确认密码：</label><input type="password" placeholder="重复输入密码" class="txt1" id="rePassword" maxlength="30" /></p>
	                    <div class="school">
	                        <h3><span>所在院校</span></h3>
	                        <p class="clearfix">
	                            <span class="fl">
	                                <label>区域：</label>
	                                <select id="3">
	                                    <option value="0">请选择</option>
	                                    <option value="1">请选择</option>
	                                </select>
	                            </span><span class="fr">
	                                <label>省份：</label>
	                                <select id="4">
	                                    <option value="0">请选择</option>
	                                </select>
	                            </span>
	                        </p>
	                        <p class="clearfix">
	                            <span class="fl">
	                                <label>学校：</label>
	                                <select id="5">
	                                    <option value="0">请选择</option>
	                                </select>
	                            </span><span class="fr">
	                                <label>学院：</label>
	                                <select id="6">
	                                    <option value="0">请选择</option>
	                                </select>
	                            </span>
	                        </p>
	                        <p class="clearfix">
	                            <span class="fl">
	                                <label>学系：</label>
	                                <select id="7">
	                                    <option value="0">请选择</option>
	                                </select>
	                            </span><span class="fr">
	                                <label>专业：</label>
	                                <select id="8">
	                                    <option value="0">请选择</option>
	                                </select>
	                            </span>
	                        </p>
	                        <p>
	                            <label>班级：</label>
	                            <select id="9">
	                                <option value="0">请选择</option>
	                            </select>
	                        </p>
	                    </div>
	                    <p><input readonly style="text-align: center;" class="submit" id="regBtn" value="注册" /></p>
	                    <p class="remark clearfix"><span class="fl">已有账号？</span><router-link to="/login" target="_self" class="fr subBtn">马上登录</router-link></p>
	                </form>
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
	@import "../../assets/common/css/reg.css";
</style>
