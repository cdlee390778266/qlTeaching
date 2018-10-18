<template>
	<div>
		<div class="wrapper">
	        <div class="header">
	            <div class="top">
	            	<p>
	            		<span>创建管理人数：5</span>
	            		<span>管理竞赛总数：5</span>
	            		<span>进行中竞赛数：4</span>
	            		<span>系统日期：2018-09-27</span>
	            	</p>
	            </div>
	            <div class="container logo clearfix">
	                <div class="fl">
	                    <img :src="logo" alt="logo">
	                </div>
	                <div class="account fr">
	                	<div class="hd-pic fl">
	                		<a href="javascript:void(0)" class="logout">
	                			<img src="images/hd/hd20160101.jpg">
	                		</a>
	                	</div>
	                	<p>
	                		<span class="name fl">欢迎您，admin</span><br>
	                		<a href="javascript:void(0)" id="logout">退出登录</a>
	                	</p>
	                </div>
	            </div>
	        </div>
	        <div class="main">
	            <div class="container clearfix">
	                <div class="aside nav fl">
	                    <dl id="menu1" style="">
	                        <dt class="icon01">我是ADMIN</dt>
	                        <router-link class="open" to="/teacher/home" tag="dd"><a>学校管理</a></router-link>
	                        <router-link class="open" to="/teacher/admins" tag="dd"><a>管理员信息</a></router-link>
	                    </dl>
	                    <dl>
	                        <dt class="icon02">学生管理</dt>
	                        <router-link class="open" to="/teacher/sdAccounts" tag="dd"><a>账号详情</a></router-link>
	                        <router-link class="open" to="/teacher/turnover" tag="dd"><a>持仓成交</a></router-link>
	                    </dl>
	                    <dl>
	                        <dt class="icon03">比赛管理</dt>
	                        <router-link class="open" to="/teacher/compInfo" tag="dd"><a>比赛信息</a></router-link>
	                        <router-link class="open" to="/teacher/createComp" tag="dd"><a>创建比赛</a></router-link>
	                    </dl>
	                    <dl id="special">
	                        <dt class="icon04">特殊处理</dt>
	                        <dd class="open">
	                            <a href="javascript:void(0)">沪深证券非B股</a>
	                            <ul>
	                            	<router-link class="open" to="/teacher/sarTrading" tag="li"><a>商品管理</a></router-link>
	                            	<router-link class="open" to="/teacher/prdManage" tag="li"><a>T+0商品</a></router-link>
	                            	<router-link class="open" to="/teacher/dividends" tag="li"><a>分红送配</a></router-link>
	                            	<router-link class="open" to="/teacher/coerce" tag="li"><a>强制平仓</a></router-link>
	                            	<router-link class="open" to="/teacher/fundsManage" tag="li"><a>资金管理</a></router-link>
	                            	<router-link class="open" to="/teacher/fundsManage" tag="li"><a>费率设置</a></router-link>
	                            </ul>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascript:void(0)">沪B股</a>
	                            <ul>
	                            	<router-link class="open" to="/teacher/sarTrading" tag="li"><a>商品管理</a></router-link>
	                            	<router-link class="open" to="/teacher/dividends" tag="li"><a>分红送配</a></router-link>
	                            	<router-link class="open" to="/teacher/coerce" tag="li"><a>强制平仓</a></router-link>
	                            	<router-link class="open" to="/teacher/fundsManage" tag="li"><a>资金管理</a></router-link>
	                            </ul>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascript:void(0)">深B股</a>
	                            <ul>
	                                <router-link class="open" to="/teacher/sarTrading" tag="li"><a>商品管理</a></router-link>
	                            	<router-link class="open" to="/teacher/dividends" tag="li"><a>分红送配</a></router-link>
	                            	<router-link class="open" to="/teacher/coerce" tag="li"><a>强制平仓</a></router-link>
	                            	<router-link class="open" to="/teacher/fundsManage" tag="li"><a>资金管理</a></router-link>
	                            </ul>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">商品期货</a>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">金融期货</a>
	                        </dd>
	                        <dd>
	                            <a>外汇</a>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">融资融券</a>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">期权</a>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">港股</a>
	                        </dd>
	                    </dl>
	                    <dl>
	                        <dt class="icon05">通知平台</dt>
	                        <router-link class="open" to="/teacher/notices" tag="dd"><a>通知信息</a></router-link>
	                        <router-link class="open" to="/teacher/createNotices" tag="dd"><a>创建通知</a></router-link>
	                    </dl>
	                    <dl>
	                        <dt class="icon06">排行榜</dt>
	                        <router-link class="open" to="/teacher/synGrade" tag="dd"><a>综合评分</a></router-link>
	                        <router-link class="open" to="/teacher/rankinglist" tag="dd"><a>龙虎榜</a></router-link>
	                    </dl>
	                    <dl>
	                        <dt class="icon08">互动天地</dt>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>讨论话题</a></router-link>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>行业报告</a></router-link>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>公司</a></router-link>
	                    </dl>
	                    <dl>
	                        <dt class="icon08">钱龙金融学院</dt>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>金融题库</a></router-link>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>赢家讲坛</a></router-link>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>一眼看市场</a></router-link>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>金典指标案例</a></router-link>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>金典行业案例</a></router-link>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>金典公司案例</a></router-link>
	                    </dl>
	                     <dl>
	                        <dt class="icon08">统计分析</dt>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>新增用户</a></router-link>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>活跃用户</a></router-link>
	                    </dl>
	                </div>
				    <div class="artice fl">
				        <router-view/>
				    </div>
	            </div>
	        </div>
	        <div class="footer">
	            <div class="row copyRight">
	                版权所有：上海乾隆网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.ql18.com.cn/" target="_blank">www.ql18.com.cn</a>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				logo: require('../../../assets/teacher/images/logo.png')
			}
		}
	}
</script>
<style lang="scss">
	@import "../../../assets/teacher/css/reset.css";
	@import "../../../assets/teacher/css/common.css";
	.filter li:hover  .menu{
		display: block !important;
	}
</style>
