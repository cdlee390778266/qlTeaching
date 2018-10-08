<template>
	<div>
		<div class="header">
	        <div class="top content clearfix">
	            <div class="logo fl">
	                <img :src="logo">
	            </div>
	            <div class="fl">
	                <h3>
	                    模拟炒股大赛
	                </h3>
	            </div>
	            <div class="info fr">
	            	<span class="login_name">000000001001</span>欢迎您
	            	<a href="javascript:void(0)" class="logout">退出</a><a href="#" class="help">帮助</a>
	            </div>
	        </div>
	        <div class="nav">
	            <ul class="clearfix">
	                <li>
	                	<router-link to="/student/home">首页</router-link>
	                </li>
	                <li>
	                	<router-link to="/student/competition">我的竞赛</router-link>
	                </li>
	                <li>
	                	<router-link to="/student/practice">我的练习</router-link>
	                </li>
	                <li>
	                	<router-link to="/student/rankinglist">龙虎榜</router-link>
	                </li>
	                <li>
	                	<router-link to="/student/record">我的战绩</router-link>
	                </li>
	                <li>
	                	<router-link to="/student/notice">我的通知</router-link>
	                </li>
	                <li>
	                	<router-link to="/student/basicInfo">基本信息</router-link>
	                </li>
	                <li>
	                	<router-link to="interaction">互动天地</router-link>
	                </li>
	            </ul>
	        </div>
	    </div>
	    <div class="main content clearfix">
	    	<router-view/>
	    </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				logo: require('../../../assets/student/images/logo.png')
			}
		}
	}
</script>
<style lang="scss">
	@import "../../../assets/student/css/reset.css";
	@import "../../../assets/student/css/common.css";
</style>
