<template>
	<div class="security">
	    <h3><b>练习名称：</b><span data-seq="52">测试3</span></h3>
	    <div class="tt tt01 clearfix">
	        <h2 class="fl">
	            银证转账</h2>
	        <div class="fr">
	            <a href="javascript:void(0);" class="btn-refresh fr" id="AssetRefresh">刷新</a></div>
	    </div>
	    <div class="scrtt clearfix">
	        <div class="fl">
	            <label>
	                划转方向：</label>
	            <select id="transtype">
	                <option value="0">银行-&gt;券商</option>
	                <option value="1">券商-&gt;银行</option>
	            </select>
	            <label id="currency">币种：美元</label>
	            <label>
	                转入金额：</label>
	            <input type="text" class="txt2">
	            <a href="javascript:void(0)" class="btn" id="btnBank">转账</a> <a href="javascript:void(0)" class="btn" id="btnReset">重置</a>
	        </div>
	    </div>
	    <div class="tbBox">
	        <table cellpadding="0" cellspacing="0" width="100%" class="tb secur" id="AssetInfo">
	            <thead>
	                <tr>
	                    <th width="6%">
	                        序号
	                    </th>
	                    <th>
	                        币种
	                    </th>
	                    <th width="16%">
	                        资金余额
	                    </th>
	                    <th width="16%">
	                        可用资金
	                    </th>
	                    <th width="16%">
	                        可取资金
	                    </th>
	                    <th width="16%">
	                        市值
	                    </th>
	                    <th width="16%">
	                        盈亏
	                    </th>
	                </tr>
	            </thead>
	            <tbody><tr><td>1</td><td>美元</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td><td>0.00</td></tr></tbody>
	        </table>
	    </div>
	    <div class="tt clearfix">
	        <h2 class="fl">
	            转账查询</h2>
	        <div class="fr">
	            <a href="javascript:void(0)" class="btn-export">导出</a> <a href="javascript:void(0);" class="btn-refresh" id="BankRefresh">查询</a></div>
	    </div>
	    <table cellpadding="0" cellspacing="0" width="100%" align="center" class="tb secur" id="bankInfo">
	        <thead>
	            <tr>
	                <th width="6%">
	                    序号
	                </th>
	                <th>
	                    转账日期
	                </th>
	                <th>
	                    转账时间
	                </th>
	                <th>
	                    申请流水号
	                </th>
	                <th>
	                    业务类别
	                </th>
	                <th>
	                    银行编号
	                </th>
	                <th>
	                    金额
	                </th>
	            </tr>
	        </thead>
	        <tbody><tr><td colspan="7">暂无转账记录...</td></tr></tbody>
	    </table>
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
	
</style>
