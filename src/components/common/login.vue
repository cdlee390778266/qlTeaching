<template>
	<div class="login-box">
		<div class="contain">
	        <div class="login">
	            <h1>
	                钱龙金融教学软件</h1>
	            <div class="log">
	                <form action="" name="loginform" accept-charset="utf-8" method="post" id="login_form"
	                class="loginForm">
	                <p class="name clearfix">
	                    <label class="login-label name-label">
	                    </label>
	                    <input type="text" autocomplete="off" placeholder="用户名" id="user" /><i>*请输入用户名</i></p>
	                <p class="pwd  clearfix">
	                    <label class="login-label pwd-label">
	                    </label>
	                    <input type="password" autocomplete="off" placeholder="密码" id="password" maxlength="30"/><i>*请输入密码</i></p>
	                <p>
	                    <input readonly="readonly" style="text-align: center;" class="submit" id="subBtn"
	                        value="登录" /></p>
	                <div class="remark clearfix">
	                    <span class="fl">还没账号？</span><router-link to="/register" target="_self" class="fr regBtn">马上注册</router-link></div>
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
	@import "../../assets/common/css/login.css";
</style>
