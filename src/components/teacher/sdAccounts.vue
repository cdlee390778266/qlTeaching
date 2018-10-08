<template>
	<div>
		<div class="section">
	      <h2 class="tt"> 账号详情</h2>
	      <ql-filter></ql-filter>
	      <div class="faculty">
	        <div class="row topBtn clearfix">
	          <div class="fl"> <a href="javascript:void(0)" id="import">注册账号</a> <a href="javascript:void(0)" id="output"> 导出</a> <a href="javascript:void(0)" id="changeCls">学生换班</a> </div>
	          <div class="fr">
	            <p class="ck fl"><i></i><input type="checkbox" name="showList" id="show_tipOff"><span>被举报</span></p>
	            <p class="ck fl"><i></i><input type="checkbox" name="showList" id="show_frozen"><span>已冻结</span></p>
	            <p class="ck fl"><i></i><input type="checkbox" name="showList" id="show_pro"><span>禁止发贴</span></p>
	          </div>
	        </div>
	        <div class="row clearfix">
	          <div class="handleBtns fl"> <a href="javascript:void(0)" class="delSdAccount">删除</a> <a href="javascript:void(0)" class="resetPwd">密码重置</a> <a href="javascript:void(0)" class="frozen">冻结</a> <a href="javascript:void(0)" class="unfreeze">解冻</a> <a href="javascript:void(0)" class="undiary">禁止发贴</a> <a href="javascript:void(0)" class="diary">允许发贴</a> </div>
	          <div class="search fr clearfix"><input type="text" placeholder="请输入账号/姓名" id="searchTxt"><a href="javascript:void(0)" class="btn_search"></a> </div>
	        </div>
	        <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="sdAccount">
	          <thead>
	            <tr>
	              <th width="32"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll"></p></th>
	              <th width="55">序号</th>
	              <th width="120">账号</th>
	              <th width="140">昵称</th>
	              <th width="140">姓名</th>
	              <th width="110">创建时间</th>
	              <th width="80">被举报数</th>
	              <th width="70">冻结</th>
	              <th>发贴</th>
	            </tr>
	          </thead>
	          <tbody><tr data-seq="264" class=""><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>1</td><td><a href="sdBasic.aspx?AppID=264&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000001001</a></td><td><span class="nickName" title="000000001001">000000001001</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="263" class="" style="background: rgb(242, 242, 242);"><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>2</td><td><a href="sdBasic.aspx?AppID=263&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000010</a></td><td><span class="nickName" title="000000000010">000000000010</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="261" class=""><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>3</td><td><a href="sdBasic.aspx?AppID=261&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000008</a></td><td><span class="nickName" title="000000000008">000000000008</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="260" class="" style="background: rgb(242, 242, 242);"><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>4</td><td><a href="sdBasic.aspx?AppID=260&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000007</a></td><td><span class="nickName" title="000000000007">000000000007</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="259" class=""><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>5</td><td><a href="sdBasic.aspx?AppID=259&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000006</a></td><td><span class="nickName" title="000000000006">000000000006</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="258" class="" style="background: rgb(242, 242, 242);"><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>6</td><td><a href="sdBasic.aspx?AppID=258&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000005</a></td><td><span class="nickName" title="000000000005">000000000005</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="257" class=""><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>7</td><td><a href="sdBasic.aspx?AppID=257&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000004</a></td><td><span class="nickName" title="000000000004">000000000004</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="256" class="" style="background: rgb(242, 242, 242);"><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>8</td><td><a href="sdBasic.aspx?AppID=256&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000003</a></td><td><span class="nickName" title="000000000003">000000000003</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="255" class=""><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>9</td><td><a href="sdBasic.aspx?AppID=255&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000002</a></td><td><span class="nickName" title="000000000002">000000000002</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr><tr data-seq="254" class="" style="background: rgb(242, 242, 242);"><td><p class="ck"><i></i><input type="checkbox" name="sdAccount"></p></td><td>10</td><td><a href="sdBasic.aspx?AppID=254&amp;&amp;backUrl=sdAccounts.aspx" class="accountNum">000000000001</a></td><td><span class="nickName" title="000000000001">000000000001</span></td><td><span class="userName" title=""> </span></td><td>2018-09-13</td><td>0</td><td>否</td><td>是</td></tr></tbody>
	        </table>
	      </div>
	      <div class="tbBottom clearfix">
	        <div class="fl">
	          <p class="ck fl"><i></i><input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p>
	          <a href="javascript:void(0);" class="fl" id="deleteAll">删除</a>
	        </div>
	        <!--分页开始-->
	        <div class="page fr">
	          <div class="pageGro cb clearfix">
	            <div class="pageTotal"><span>共10条记录，每页20条，共1页</span></div>
	            <div class="pageUp" onclick="pageUp()"> 上一页</div>
	            <div class="pageList">
	              <ul><li class="on">1</li></ul>
	            </div>
	            <div class="pageDown" onclick="pageDown()"> 下一页</div>
	          </div>
	        </div>
	        <!--分页结束--> 
	      </div>
	    </div>
	    <!--浮层开始--> 
		  <!--重置密码开始-->
		  <div class="flt resetPwdFlt">
		    <h3> <span>重置密码</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="details">
		      <p><label>密码重置（默认密码：888888）</label><i class="remark"></i><br><input type="password" value="888888" id="setpwd1" maxlength="30"></p>
		      <p><label>确认密码</label><i class="remark"></i><br><input type="password" value="888888" id="setpwd" maxlength="30"></p>
		    </div>
		    <div class="btns"> <a href="javascript:void(0)" class="btn confirm">确定</a><a href="javascript:void(0)" class="btn cancel">取消</a></div>
		  </div>
		  <!--重置密码结束--> 
		  <!--更改班级开始-->
		  <div class="flt changeClsFlt">
		    <h3> <span>更改班级</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="details">
		      <table cellpadding="0" cellspacing="0" width="480" align="center">
		        <tr>
		          <td colspan="3"><select class="school" id="hbschool"><option>请选择学校</option></select></td>
		        </tr>
		        <tr>
		          <td width="35%" class="before"><div>
		              <select class="clsSel" id="hbclass1"><option>请选择班级</option> </select>
		              <ul class="codes" id="class1codes"></ul>
		              <p class="ck"> <i></i><input type="checkbox" name="sdAccount" class="ckAll"><span>全选</span></p>
		            </div></td>
		          <td class="mid"><div>
		              <p> <a href="javascript:void(0)" id="right_arrow" title="右移"></a><a href="javascript:void(0)" id="left_arrow" title="左移"></a> </p>
		            </div></td>
		          <td width="35%" class="after"><div>
		              <select class="clsSel" id="hbclass2"><option>请选择班级</option></select>
		              <ul class="codes" id="class2codes"></ul>
		              <p class="ck"><i></i><input type="checkbox" name="sdAccount" class="ckAll"><span>全选</span></p>
		            </div>
		          </td>
		        </tr>
		      </table>
		    </div>
		    <div class="btns"> <a href="javascript:void(0)" class="btn cancel">关闭</a></div>
		  </div>
		  <!--更改班级结束--> 
		  <!--导入学生账号开始-->
		  <div class="flt importFlt">
		    <h3> <span>注册学生账号</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="details">
		      <div class="case case1">
		        <div class="clearfix">
		          <h4 class="clearfix"> <span>手动注册</span><i>（默认密码：888888）</i><u class="remark"></u></h4>
		          <p class="sl clearfix">
		              <span class="fl">
		                <label>学校</label><select class="schSel" id="sdschool"><option>请选择学校</option></select>
		              </span>
		              <span class="fr">
		                <label>班级</label><select class="clsSel" id="sdclass"><option>请选择班级</option></select>
		              </span>
		          </p>
		          <p class="clearfix">
		              <span class="fl">
		              	<label>起始账号输入</label><input type="text" placeholder="请输入账号" class="txt1" id="startAcc">
		              </span>
		            <span>
		            	<label>连续账号数量</label><input type="number" step="1" min="1" placeholder="请输入数量" class="numInput"  id="numAcc">
		            </span>
		          </p>
		          <p class="center"> <a href="javascript:void(0)" id="import01">马上注册</a></p>
		        </div>
		      </div>
		      <div class="case case2">
		        <div>
		          <h4 class="clearfix"> <span>批量注册</span><i>（默认密码：888888）</i><u class="remark"></u></h4>
		          <p class="sl clearfix">
		          	<span class="fl">
		                <label>学校</label><select class="schSel" id="plschool"><option>请选择学校</option></select>
		            </span>
		            <span class="fr">
		                <label>班级</label><select class="clsSel" id="plclass"><option>请选择班级</option></select>
		            </span>
		          </p>
		          <p class="clearfix">
		          	<span class="src fl"><u class="fl" id="template_src"></u><input type="file" class="fl" id="batchImport" accept="xls/xlsx" name="batchImport" /><i class="fl">选择文件</i></span>
		            <a href="javascript:void(0)" class="btn fl" id="reg">批量注册</a><a href="javascript:void(0)" class="btn fl" id="downLoad">下载模板</a>
		          </p>
		        </div>
		      </div>
		    </div>
		  </div>
		  <!--导入学生账号结束--> 
		  <!--选择区域浮层开始-->
		  <div class="flt caseflt">
		    <h3 class="clearfix"> <span class="fl">选择大区</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="top clearfix">
		      <p><i></i><input type="checkbox" name="selectAll" value="全选" id="Checkbox1"><span>全选</span></p>
		    </div>
		    <div class="detail clearfix" id="slcBox"> </div>
		    <div class="btns"><a href="javascript:void(0)" class="btn btn-confirm">确定</a> <a href="javascript:void(0)" class="btn btn-cancel">取消</a></div>
		  </div>
		  <!--注册账号重复提示 开始-->
		  <div class="flt repeatAccount">
		    <div class="details">
		      <p> <b>以下账号已存在，请重新注册：</b></p>
		      <div class="repAcc" id="repAccsd"> </div>
		    </div>
		    <div class="btns"><a href="javascript:void(0)" class="btn close">关闭</a></div>
		  </div>
		  <!--注册账号重复提示 结束--> 
		  <!--批量注册重复提示 开始-->
		  <div class="flt batchReg">
		    <div class="details">
		      <p> <b>以下账号已存在，是否注册：</b></p>
		      <div class="repAcc" id="repAccpl" style="width: 400px;"> </div>
		    </div>
		    <div class="btns"> <a href="javascript:void(0)" class="btn confirm">确定</a><a href="javascript:void(0)" class="btn cancel">取消</a></div>
		  </div>
		  <!--注册账号重复提示 结束--> 
		  <!--选择区域浮层结束--> 
		  <!--浮层结束-->
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
	@import "../../assets/teacher/css/sdAccounts.css";
</style>
