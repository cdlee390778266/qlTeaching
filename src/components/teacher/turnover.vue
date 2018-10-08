<template>
	<div class="artice fl">
        <div class="section">
          <h2 class="tt">持仓成交</h2>
            <div class="tabNav" id="tabNav_MatchType" style="width: 100%; text-align: center;"><ul class="clearfix"><li><a id="matchtype_1" href="javascript:void(0)" onclick="ChangeMatchType(1)" class="selected">沪深证券(非B股)</a></li><li><a id="matchtype_2" href="javascript:void(0)" onclick="ChangeMatchType(2)">沪B股</a></li><li><a id="matchtype_3" href="javascript:void(0)" onclick="ChangeMatchType(3)">深B股</a></li><li><a id="matchtype_4" href="javascript:void(0)" onclick="ChangeMatchType(4)">融资融券</a></li><li><a id="matchtype_5" href="javascript:void(0)" onclick="ChangeMatchType(5)">港股</a></li><li><a id="matchtype_6" href="javascript:void(0)" onclick="ChangeMatchType(6)">金融期货</a></li><li><a id="matchtype_7" href="javascript:void(0)" onclick="ChangeMatchType(7)">商品期货</a></li><li><a id="matchtype_8" href="javascript:void(0)" onclick="ChangeMatchType(8)">期权</a></li><li><a id="matchtype_9" href="javascript:void(0)" style="color:#c1c1c1;">外汇</a></li></ul></div>
            <div class="compSelect clearfix">
                <label>比赛名称</label><input type="text" class="fcInput" id="Drop_Match" readonly="readonly">
            </div>
            <ql-filter></ql-filter>
            <div class="faculty">
                <div class="row clearfix">
                  <div class="tab01 fl">
                       <ul class="fl">
                            <li><a href="javascript:void(0)" class="selected" onclick="ChangeTable(1)" id="tab_cjmx">成交明细</a></li>
                            <li><a href="javascript:void(0)" onclick="ChangeTable(2)" id="tab_ccmx">持仓明细</a></li>
                       </ul>
                      <div class="search fr">
                          <input type="text" placeholder="请输入学生账号/姓名" id="searchTxt">
                          <a href="javascript:void(0)" class="btn_search"></a>
                          <a href="javascript:void(0)" class="outPut">导出全部</a><a href="javascript:void(0)" class="refresh">刷新</a>
                      </div>
                  </div>
                </div>
                <div class="tabCont">
                	
                    <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="tran">
                      <thead>
                        <tr>
                          <th width="45">序号</th>
                          <th width="108">学生账号</th>
                          <th width="66">学生姓名</th>
                          <th width="64">商品代码 </th>
                          <th width="64">商品名称</th>
                          <th width="42">类别</th>
                          <th>成交数量</th>
                          <th>成交价格</th>
                          <th>成交金额</th>
                          <th width="114">成交日期</th>
                          <th width="60">下单理由</th>
                        </tr>
                      </thead>
                      <tbody><tr class=""><td colspan="11" style="text-align:center;">未找到记录</td></tr></tbody>
                    </table>
                    
                  
                    <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="positions" style="display:none;">
                      <thead>
                        <tr>
                          <th width="45">序号</th>
                          <th width="106">学生账号</th>
                          <th width="66">学生姓名</th>
                          <th width="64">商品代码 </th>
                          <th width="64">商品名称</th>
                          <th>持仓数量</th>
                          <th>可卖数量</th>
                          <th>持仓均价</th>
                          <th>最新价</th>
                          <th>商品市值</th>
                          <th>浮动盈亏</th>
                          <th>盈亏比例</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                      </tbody>
                    </table>
					
                </div>
			</div>
            
          </div>
          <div class="tbBottom">
          <!--分页开始-->
            <div class="page clearfix">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal"><span>共0条记录，每页20条，共0页</span></div>
                    <div class="pageUp" onclick="pageUp()">上一页</div>
                    <div class="pageList">
                        <ul></ul>
                    </div>
                    <div class="pageDown" onclick="pageDown()">下一页</div>
                </div>
            </div>
            <!--分页结束-->
        </div>
        <ul class="pullSelector" style="display: none; width: 746px; left: 500.5px; top: 303px;"><li><a href="javascript:void(0)" matchseq="54">成都乾隆测试竞赛</a></li><li><a href="javascript:void(0)" matchseq="49">2018电大炒股大赛</a></li><li><a href="javascript:void(0)" matchseq="1">乾隆金融投资大赛</a></li></ul>
    </div>
</template>
<script>
	import qlFilter from './common/filter'
	export default {
		components: {
			qlFilter
		},
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../assets/teacher/css/turnover.css";
</style>
