<template>
	<div>
        <div class="section">
          <h2 class="tt">商品管理</h2>
            <div class="faculty">
                <div class="compSelect clearfix">
                    <label>比赛名称</label> <input id="Drop_Match" class="fcInput" type="text" readonly="readonly">
                </div>
                <div class="compBox comp1">
                	<p><label>股票代码/名称：</label>
                    <input type="text" id="matchtype" style="display: none;">
                                <input type="text" id="market" style="display: none;">
                                <input type="text" placeholder="代码/名称/拼音" class="plInput txt0" id="code" style="width:180px"><i class="for">
                    </i><span id="secName" class="stockName"></span><a href="javascript:void(0)" class="btn delistBtn" id="TP">停牌</a></p>
                </div>
                <div class="tabBox">
                     <ul class="tab clearfix">
                        <li class="selected" id="tab0" data-seq="0"><a href="javascript:void(0)">当前停牌</a></li>
                        <li id="tab1" data-seq="1"><a href="javascript:void(0)">历史记录</a></li>
                    </ul>
                </div>
                <div class="tabCont">
                   <div class="div1 clearfix">
                        <div class="handleBtns fl"><a href="javascript:void(0)" class="resum" id="FP">复牌</a><a href="javascript:void(0)" class="delete" id="DEL" style="display: none;">删除操作</a></div>
                        <div class="search fr">
                            <input type="text" placeholder="商品代码/名称" id="searchTxt">
                            <a href="javascript:void(0)" class="btn_search"></a>
                        </div>
                    </div>
                    <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="tran">
                      <thead>
                        <tr>
                          <th width="32"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll"></p></th><th width="55">序号</th><th width="120">商品代码 </th><th width="120">商品名称</th><th width="140">操作人</th><th width="150">操作人账号</th> <th>停牌时间</th>
                          
                          
                          
                          
                          
                          
                        </tr>
                      </thead>
                      <tbody><tr><td colspan="9" style="text-align:center;">未找到记录</td></tr></tbody>
                    </table>
                </div>
			</div>
            
          </div>
          <div class="tbBottom clearfix">
            <div class="fl">
                <p class="ck fl"><i></i><input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p>
            </div>
            <div class="page fr">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal"><span>共0条记录，每页20条，共0页</span></div>
                    <div class="pageUp" onclick="pageUp()">上一页</div>
                    <div class="pageList">
                        <ul></ul>
                    </div>
                    <div class="pageDown" onclick="pageDown()">下一页</div>
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
	@import "../../assets/teacher/css/sarTrading.css";
	@import "../../assets/teacher/css/pulldownList.css";
</style>
