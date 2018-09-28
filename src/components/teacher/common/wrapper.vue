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
	                        <router-link class="open" to="/teacher/admins" tag="dd"><a>二级管理员</a></router-link>
	                      	<router-link class="open" to="/teacher/editAdmin" tag="dd"><a>创建管理员</a></router-link>
	                    </dl>
	                    <dl>
	                        <dt class="icon02">学生管理</dt>
	                        <router-link class="open" to="/teacher/sdAccounts" tag="dd"><a>账号详情</a></router-link>
	                        <router-link class="open" to="/teacher/turnover" tag="dd"><a>持仓成交</a></router-link>
	                    </dl>
	                    <dl>
	                        <dt>比赛管理</dt>
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
	                            <a href="javascrpt:void(0)">融资融券</a>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">港股</a>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">金融期货</a>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">商品期货</a>
	                        </dd>
	                        <dd class="open">
	                            <a href="javascrpt:void(0)">期权</a>
	                        </dd>
	                        <dd>
	                            <a>外汇</a>
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
	                        <dt class="icon07">个人中心</dt>
	                        <router-link class="open" to="/teacher/perCenter" tag="dd"><a>个人信息</a></router-link>
	                    </dl>
	                    <dl>
	                        <dt class="icon08">互动天地</dt>
	                        <router-link class="open" to="/teacher/interaction" tag="dd"><a>互动天地</a></router-link>
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

	    <!--浮层开始-->
    <!--比赛规则开始-->
    <div class="flt rateFlt" data-seq="" match-type="">
        <h3 class="clearfix">
            <span class="fl">修改费率</span><a href="javascript:void(0);" class="closed fr"></a></h3>
        <div class="details">
            <table cellpadding="0" cellspacing="0" width="520" class="rateTb">
                <tbody>
                    <tr>
                        <td width="120">
                            <label>
                                交易品种</label>
                        </td>
                        <td width="110">
                            <select id="market">
                            </select>
                        </td>
                        <td width="120">
                            <label>
                                方向</label>
                        </td>
                        <td>
                            <select id="bos">
                                <option value="1">买入</option>
                                <option value="2">卖出</option>
                                <option value="0">双向</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                印花税率(‰)</label>
                        </td>
                        <td>
                            <input id="stamptax" type="number" min="0.00" max="300" value="0.00" class="numInput input1">
                        </td>
                        <td>
                            <label>
                                最低印花税</label>
                        </td>
                        <td>
                            <input id="stamptaxfloor" type="number" min="0.00" max="10000" value="0.00" class="numInput">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                手续费率(‰)</label>
                        </td>
                        <td>
                            <input id="tradefee" type="number" min="0.00" max="300" value="0.00" class="numInput input1">
                        </td>
                        <td>
                            <label>
                                最低手续费</label>
                        </td>
                        <td>
                            <input id="tradefeefloor" type="number" min="0.00" max="10000" value="0.00" class="numInput">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                过户费率(‰)</label>
                        </td>
                        <td>
                            <input id="transactionfee" type="number" min="0.00" max="300" value="0.00" class="numInput input1">
                        </td>
                        <td>
                            <label>
                                最低过户费</label>
                        </td>
                        <td>
                            <input id="transactionfeefloor" type="number" min="0.00" max="10000" value="0.00"
                                class="numInput">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btns">
            <a href="javascript:void(0)" class="btn btn-confirm">确定</a><a href="javascript:void(0)"
                class="btn btn-cancel">取消</a>
            </div>
    	</div>
    	<!--浮层开始-->
	    <!--比赛规则结束-->
	    <!--添加负责人开始-->
	    <div class="flt addPersonFlt">
	        <h3>
	            <span>添加负责人</span><a href="javascript:void(0)" class="closed"></a></h3>
	        <div class="details">
	            <div class="top clearfix">
	                <b class="person fl">已选择：<i>10</i>人</b>
	                <p class="ck fl">
	                    <i></i>
	                    <input type="checkbox" name="showSelt" id="showSelt">
	                    <span>已勾选</span></p>
	                <div class="search fr">
	                    <input type="text" placeholder="管理员账号..." id="Text1">
	                    <a href="javascript:void(0)" class="btn_search" id="srcFounder"></a>
	                </div>
	            </div>
	            <table cellpadding="0" cellspacing="0" width="710" id="adminTb">
	                <thead>
	                    <tr>
	                        <th width="32">
	                            <p class="ck">
	                                <i></i>
	                                <input type="checkbox" name="checkAll" id="selMan">
	                            </p>
	                        </th>
	                        <th width="54">
	                            序号
	                        </th>
	                        <th width="140">
	                            管理员账号
	                        </th>
	                        <th width="120">
	                            管理员姓名
	                        </th>
	                        <th>
	                            所在学校
	                        </th>
	                        <th width="140">
	                            联系电话
	                        </th>
	                    </tr>
	                </thead>
	                <tbody>
	                </tbody>
	            </table>
	            <!--分页开始-->
	            <div class="page clearfix">
	                <div class="pageGro cb clearfix">
	                    <div class="pageTotal">
	                        <span>共0条记录，每页10条，共0页</span></div>
	                    <div class="pageUp" onclick="pageUp()">
	                        上一页</div>
	                    <div class="pageList">
	                        <ul>
	                        </ul>
	                    </div>
	                    <div class="pageDown" onclick="pageDown()">
	                        下一页</div>
	                </div>
	            </div>
	            <!--分页结束-->
	        </div>
	        <div class="btns">
	            <a href="javascript:void(0)" class="btn btn-confirm">确定</a><a href="javascript:void(0)"
	                class="btn btn-cancel">取消</a></div>
	    </div>
	    <!--添加负责人开始-->
	    <!--浮层结束-->
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
