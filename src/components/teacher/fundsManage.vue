<template>
	<div>
		<div class="section">
            <h2 class="tt">资金管理</h2>
            <div class="compSelect clearfix">
                <label>比赛名称</label>
                <input id="Drop_Match" class="fcInput" type="text" readonly="readonly">
            </div>
            <ql-filter></ql-filter>
            <div class="faculty">
                <div class="row clearfix">
                    <div class="handleBtns fl">
                        <p class="closePrice">
                            <span id="currency">人民币</span>
                            <input id="price" class="txt3 numInput" type="number" step="0.01" min="0.01" max="200000000" placeholder="请输入">
                        </p>
                        <p><a href="javascript:void(0)" id="addFund">增加资金</a></p>
                        <p><a href="javascript:void(0)" id="minusFund">减少资金</a></p>
                    </div>
                    <div class="search fr clearfix">
                        <input type="text" placeholder="学生账号/学生姓名" id="searchTxt">
                        <a href="javascript:void(0)" class="btn_search"></a>
                    </div>
                </div>
                <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="sdAccount">
                    <thead>
                        <tr>
                            <th width="32"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll"></p></th>
                            <th width="45">序号</th>
                            <th width="100">学校名称</th>
                            <th width="80">班级名称</th>
                            <th width="108">学生账号</th>
                            <th width="64">学生姓名</th>
                            <th width="104">可取资金</th>
                            <th>操作记录</th>
                        </tr>
                    </thead>
                    <tbody><tr data-seq="10000166" class=""><td align="center"><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>1</td><td><span class="sch" title="成都乾隆财经大学">成都乾隆财经大学</span></td><td><span class="cls" title="西方经济学一班">西方经济学一班</span></td><td><a href="turnover.aspx?mathchseq=54&amp;&amp;studentid=000000001001&amp;&amp;matchtype=1 &amp;&amp;backUrl=turnover.aspx" class="cptt">000000001001</a></td><td><span class="userName" title=" "> </span></td><td align="right">100000.00</td><td> </td></tr></tbody>
                </table>
            </div>
            <div class="tbBottom clearfix">
                <div class="fl">
                    <p class="ck fl"><i></i><input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p>
                    
                </div>
                <!--分页开始-->
                <div class="page fr">
                    <div class="pageGro cb clearfix">
                        <div class="pageTotal"><span>共1条记录，每页20条，共1页</span></div>
                        <div class="pageUp" onclick="pageUp()">上一页</div>
                        <div class="pageList">
                            <ul><li class="on">1</li></ul>
                        </div>
                        <div class="pageDown" onclick="pageDown()">下一页</div>
                    </div>
                </div>
                <!--分页结束-->
            </div>
        </div>
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
	@import "../../assets/teacher/css/fundsManage.css";
	@import "../../assets/teacher/css/pulldownList.css";
</style>
