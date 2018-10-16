<template>
	<div>
      <h3><b>练习名称：</b><span>测试3</span></h3>
      <div class="tt clearfix">
        <h2 class="fl">委托买入</h2>
        <a href="javascript:void(0);" class="btn-refresh fr">刷新</a></div>
      <form action="" name="">
        <div class="clearfix secur_tb">
          <div class="w2-1 fl">
            <table cellpadding="0" cellspacing="0" width="100%">
              <tbody><tr>
                <td width="25%">股东账号</td>
                <td width="75%"><input type="text" value="" id="Asset_SEQ" class="txt0 disabled" disabled="">
                  
                </td>
              </tr>
              <tr>
                <td>证券代码</td>
                <td>
                  <input type="text" id="matchtype" style="display: none;">
                  <input type="text" id="market" style="display: none;">
                  <input type="text" placeholder="代码/名称/拼音" class="plInput txt0" id="searchTxt"></td>
              </tr>
              <tr>
                <td>证券名称</td>
                <td><input type="text" value="" class="txt0 disabled" id="secName" disabled=""></td>
              </tr>
              <tr>
                <td>买入价格</td>
                <td><input type="number" class="txt0" id="buy_price" min="0" max="10000" step="0.010" value="" placeholder="请输入数字">
                  <input type="checkbox" class="buy_marketPrice">市价</td>
              </tr>
              <tr>
                <td>可用资金</td>
                <td><input type="text" id="fundsAvailable" class="txt0 disabled" value="" disabled=""></td>
              </tr>
              <tr>
                <td>可买数量</td>
                <td><input type="text" id="buyAbleNum" class="txt0 disabled" value="" disabled=""></td>
              </tr>
              <tr>
                <td>买入数量</td>
                <td><input type="number" class="txt0" min="0" max="9999999999999" step="100" id="buyNum" placeholder="请输入数字"></td>
              </tr>
            </tbody></table>
          </div>
          <div class="w2-1 fr">
            <table cellpadding="0" cellspacing="0" width="100%" style="background: #e5f2ff">
              <tbody><tr>
                <td width="25%"> 卖五 </td>
                <td width="40%"><span id="sell5" class="font_red sale05">-</span></td>
                <td><span id="vsell5" class="font_red">-</span></td>
              </tr>
              <tr>
                <td>卖四</td>
                <td><span id="sell4" class="font_red sale04">-</span></td>
                <td><span id="vsell4" class="font_red">-</span></td>
              </tr>
              <tr>
                <td>卖三</td>
                <td><span id="sell3" class="font_red sale03">-</span></td>
                <td><span id="vsell3" class="font_red">-</span></td>
              </tr>
              <tr>
                <td>卖二</td>
                <td><span id="sell2" class="font_red sale02">-</span></td>
                <td><span id="vsell2" class="font_red">-</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #ccc;">
                <td>卖一</td>
                <td><span id="sell1" class="font_red sale01">-</span></td>
                <td><span id="vsell1" class="font_red">-</span></td>
              </tr>
            </tbody></table>
            <table cellpadding="0" cellspacing="0" width="100%" style="background: #e5f2ff">
              <tbody><tr>
                <td width="25%">买一</td>
                <td width="40%"><span id="buy1" class="font_green buy01">-</span></td>
                <td><span id="vbuy1" class="font_green">-</span></td>
              </tr>
              <tr>
                <td>买二</td>
                <td><span id="buy2" class="font_green buy02">-</span></td>
                <td><span id="vbuy2" class="font_green">-</span></td>
              </tr>
              <tr>
                <td>买三</td>
                <td><span id="buy3" class="font_green buy03">-</span></td>
                <td><span id="vbuy3" class="font_green">-</span></td>
              </tr>
              <tr>
                <td>买四</td>
                <td><span id="buy4" class="font_green buy04">-</span></td>
                <td><span id="vbuy4" class="font_green">-</span></td>
              </tr>
              <tr>
                <td>买五</td>
                <td><span id="buy5" class="font_green buy05">-</span></td>
                <td><span id="vbuy5" class="font_green">-</span></td>
              </tr>
            </tbody></table>
            <table cellpadding="0" cellspacing="0" width="100%" style="background: #e5f2ff">
              <tbody><tr>
                <td width="25%">涨停</td>
                <td width="30%"><span id="up" class="font_red">-</span></td>
                <td width="25%" align="center">跌停</td>
                <td><span id="down" class="font_green">-</span></td>
              </tr>
              <tr>
                <td>昨收</td>
                <td><span id="close">-</span></td>
                <td align="center">现价</td>
                <td><span id="now">-</span></td>
              </tr>
            </tbody></table>
          </div>
        </div>
        <div class="reason cl">
          <b>下单理由（限150字）</b>
          <textarea cols="80" class="reasonTxt"></textarea>
          <div class="clearfix">
            <div class="btns"> <a href="javascript:void(0)" class="btn_buy" id="buy">买入</a><a href="javascript:void(0)" class="btn_reset">重置</a></div>
            <p> 还可以输入<b class="words">150</b>个字</p>
          </div>
        </div>
      </form>

      <!--浮层开始-->
	  <div class="flt tradeFlt">
	    <h3><span class="fl">提示</span><a href="javascript:void(0)" class="closed"></a></h3>
	    <div class="detail">
	      <p class="center"><i></i><span>确定买入吗?</span></p>
	    </div>
	    <div class="btns"><a href="javascript:void(0)" class="btn confirm">确定</a><a href="javascript:void(0)" class="btn cancel">取消</a> </div>
	  </div>
	  <!--浮层结束-->

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
