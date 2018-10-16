<template>
	<div>
	    <div class="menu fl">
	      <ul class="menu_01">
	        <li class="selected"><router-link to="/student/practice/security/buy">买入</router-link></li>
	        <li><router-link to="/student/practice/security/sell">卖出</router-link></li>
	        <li><router-link to="/student/practice/security/withdrawing">查撤委托</router-link></li>
	        <li><a href="javascript:void(0);" class="menu_minus">查询</a>
	          <ul class="menu_02">
	            <li><router-link to="/student/practice/security/holdPos">持仓明细</router-link></li>
	            <li><router-link to="/student/practice/security/todayWt">当日委托</router-link></li>
	            <li><router-link to="/student/practice/security/historyWt">历史委托</router-link></li>
	            <li><router-link to="/student/practice/security/todayCj">当日成交</router-link></li>
	            <li><router-link to="/student/practice/security/historyCj">历史成交</router-link></li>
	            <li><router-link to="/student/practice/security/todayLs">当日资金流水</router-link></li>
	            <li><router-link to="/student/practice/security/historyLs">历史资金流水</router-link></li>
	            <li><router-link to="/student/practice/security/deliveryList">查询交割单</router-link></li>
	          </ul>
	        </li>
	        <li><router-link to="/student/practice/security/transferAccounts">银证转账</router-link></li>
	      </ul>
	    </div>
	    <div class="security">
	    	<router-view />
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
