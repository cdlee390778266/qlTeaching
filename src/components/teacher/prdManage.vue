<template>
	<div>
		<div class="section">
          <h2 class="tt">T+0商品</h2>
          <div class="faculty">
              <div class="row handleBtns clearfix">

              	<label>商品代码</label>

                <input type="text" id="matchtype" style="display: none;">
                                <input type="text" id="market" style="display: none;">
                                <input type="text" placeholder="代码/名称/拼音" class="plInput txt0" id="searchTxt" style="width:180px"><span id="secName" style="display: none;"></span>
                <label>商品名称</label>
                <input type="text" name="prdName" class="prdName" id="prdName" placeholder="请输入">
                
                <a href="javascript:void(0)" id="addPrd">增加商品</a>
                <a href="javascript:void(0)" class="delete">删除</a>
              </div>
            <table cellpadding="0" cellspacing="0" width="100%" class="tb">
              <thead>
                <tr>
                  <th width="32"><p class="ck"><i></i>
                  <input type="checkbox" name="checkAll" id="checkAll"></p></th>
                  <th width="50">序号</th>
                  <th width="160">商品代码</th>
                  <th width="160">商品名称</th>
                  <th width="160">商品市场</th>
                  <th width="160">创建日期</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody><tr class=""><td colspan="7" style="text-align:center;">未找到记录</td></tr></tbody>
            </table>
          </div>
          <div class="tbBottom clearfix">
                    <div class="fl">
                        <p class="ck fl">
                            <i></i>
                            <input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p>
                        </div>
                     <!--分页开始-->
                    <div class="page fr">
                        <div class="pageGro cb clearfix">
                            <div class="pageTotal"><span>共0条记录，每页20条，共0页</span></div>
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
	@import "../../assets/teacher/css/prdManage.css";
</style>
