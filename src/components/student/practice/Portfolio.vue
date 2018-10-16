<template>
	<div>
        <div class="main content clearfix">
            <div class="compet">
              <h3><b>当前练习：</b>测试3</h3>
              <div class="tzzh">
                <a href="javascript:void(0);" class="selected">投资组合</a>
                <router-link to="/student/practice/security/">委托下单</router-link>
            </div>
              <div class="tt clearfix">
                <h2 class="fl"><span>自选商品</span></h2>
                <div class="searchCode fl">
                  <input type="text" id="market" style="display:none;">
                  <input type="text" placeholder="代码/名称/拼音" class="plInput" id="searchTxt">
                  <a href="javascript:void(0)" class="searchBtn" id="searchSecurity"></a> <a href="javascript:void(0)" class="addCodeBtn">添加</a>
                  <a href="javascript:void(0)" id="refresh">刷新</a>
                </div>
          </div>
              <div class="zxzq">
                <table cellpadding="0" cellspacing="0" width="100%" class="tb portfTb">
                  <thead>
                    <tr bgcolor="#eee">
                      <th width="90">商品代码</th>
                      <th width="100">商品名称</th>
                      <th width="90">最新</th>
                      <th width="90">涨跌</th>
                      <th width="90">涨幅%</th>
                      <th width="90">成交量</th>
                      <th width="90">均价</th>
                      <th width="90">昨收</th>
                      <th width="90">今开</th>
                      <th width="90">最高</th>
                      <th>最低</th>
                    </tr>
                  </thead>
                  <tbody><tr><td><input type="checkbox" class="nowcheck" name="zxzq" value="1" data-seq="231" data-market="0"><a>000001</a></td><td>上证指数</td><td class="font_green">2565.860</td><td class="font_green">-17.600</td><td class="font_green">-0.68</td><td>436260</td><td class="font_green">856.256</td><td class="font_green">2583.460</td><td class="font_green">2574.040</td><td class="font_green">2589.570</td><td class="font_green">2565.620</td></tr><tr><td><input type="checkbox" class="nowcheck" name="zxzq" value="1" data-seq="230" data-market="1"><a>002635</a></td><td>安洁科技</td><td class="font_green">10.550</td><td class="font_green">-0.550</td><td class="font_green">-4.95</td><td>39011</td><td class="font_green">10.739</td><td class="font_green">11.100</td><td class="font_green">10.810</td><td class="font_green">10.930</td><td class="font_green">10.540</td></tr><tr><td><input type="checkbox" class="nowcheck" name="zxzq" value="1" data-seq="229" data-market="1"><a>000001</a></td><td>平安银行</td><td class="font_red">10.010</td><td class="font_red">0.150</td><td class="font_red">1.52</td><td>486408</td><td class="font_red">9.989</td><td class="font_red">9.860</td><td class="font_red">9.970</td><td class="font_red">10.060</td><td class="font_red">9.870</td></tr><tr><td><input type="checkbox" class="nowcheck" name="zxzq" value="1" data-seq="228" data-market="1"><a>200011</a></td><td>深物业B </td><td class="font_green">5.360</td><td class="font_green">-0.010</td><td class="font_green">-0.19</td><td>223</td><td class="font_green">5.359</td><td class="font_green">5.370</td><td class="font_green">5.350</td><td class="font_green">5.390</td><td class="font_green">5.350</td></tr></tbody>
                </table>
                <div class="row mrt15">
                  <div class="fl">
                    <span class="sltCont"><input type="checkbox" value="全选" class="selectAll">全选</span>
                    <a href="javascript:void(0)" class="deleteAll">删除</a>
                  </div>
                  <div class="fr">
                    <!--分页开始-->
                    <div class="page clearfix">
                      <div class="pageGro cb clearfix">
                        <div class="pageTotal"><span>共4条记录，每页10条，共1页</span></div>
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
            </div>
            <div class="cl"></div>
        </div>

        <!--删除提示 浮层开始-->
        <div class="flt prompt">
        <h3><span>删除提示</span><a href="javascript:void(0)" class="closed"></a></h3>
        <p><i class="icon06"></i><span>确定删除吗？</span></p>
        <div class="center">
            <input type="button" class="btn confirm" value="确定"><input type="button" class="btn cancel" value="取消">
        </div>
        </div>
        <!--删除提示 浮层结束-->

        <!--没有选中 浮层开始-->
        <div class="flt nullFlt">
        <p><i class="icon06"></i><span>您什么都没有选择</span></p>
        <div class="center">
            <input type="button" class="btn close" value="关闭">
        </div>
        </div>
        <!--没有选中 浮层结束-->

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
	@import '../../../assets/student/css/practice.css'
</style>
