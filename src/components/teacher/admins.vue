<template>
	<div>
	    <div class="section">
	      <div class="row clearfix">
	        <h2 class="tt"> 二级管理员</h2>
			<ql-filter></ql-filter>
	      </div>
	      <div class="faculty">
	        <div class="row clearfix">
	          <div class="handleBtns fl"> <a href="javascript:void(0)" class="delete">删除</a> <a href="javascript:void(0)" class="frozen"> 冻结</a> <a href="javascript:void(0)" class="unfreeze">解冻</a> <a href="javascript:void(0)" class="retPassword">密码重置</a> </div>
	          <div class="search fr clearfix">
	            <input type="text" placeholder="搜索管理员账号/名称" class="searchTxt" id="searchTxt">
	            <a href="javascript:void(0)" class="btn_search" id="searchSecurity"></a> </div>
	        </div>
	        <table cellpadding="0" cellspacing="0" width="100%" class="tb">
	          <thead>
	            <tr>
	              <th width="32"> <p class="ck"><i></i>
	                  <input type="checkbox" name="checkAll" id="checkAll">
	                </p>
	              </th>
	              <th width="50"> 序号 </th>
	              <th width="20%"> 账号 </th>
	              <th width="18%"> 姓名 </th>
	              <th width="25%"> 注册时间 </th>
	              <th width="12%"> 操作 </th>
	              <th> 权限设置 </th>
	            </tr>
	          </thead>
	          <tbody><tr data-seq="19" class=""><td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td><td>1</td><td><a href="editAdmin.aspx?AppID=19&amp;OperType=1&amp;backUrl=admins.aspx">T002</a></td><td><span class="userName" title="文老师">文老师</span></td><td>2018-09-24 14:14:18</td><td><span class="state">正常</span></td><td><a href="editAdmin.aspx?AppID=19&amp;OperType=1&amp;backUrl=admins.aspx" class="edit">修改</a></td></tr><tr data-seq="18" class="" style="background: rgb(242, 242, 242);"><td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td><td>2</td><td><a href="editAdmin.aspx?AppID=18&amp;OperType=1&amp;backUrl=admins.aspx">T001</a></td><td><span class="userName" title="张老师">张老师</span></td><td>2018-09-18 13:54:52</td><td><span class="state">正常</span></td><td><a href="editAdmin.aspx?AppID=18&amp;OperType=1&amp;backUrl=admins.aspx" class="edit">修改</a></td></tr><tr data-seq="17" class=""><td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td><td>3</td><td><a href="editAdmin.aspx?AppID=17&amp;OperType=1&amp;backUrl=admins.aspx">Tcdtest</a></td><td><span class="userName" title="gouwenfeng">gouwenfeng</span></td><td>2018-09-06 13:30:38</td><td><span class="state">正常</span></td><td><a href="editAdmin.aspx?AppID=17&amp;OperType=1&amp;backUrl=admins.aspx" class="edit">修改</a></td></tr><tr data-seq="16" class="" style="background: rgb(242, 242, 242);"><td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td><td>4</td><td><a href="editAdmin.aspx?AppID=16&amp;OperType=1&amp;backUrl=admins.aspx">Tboobj</a></td><td><span class="userName" title="朱恒斌">朱恒斌</span></td><td>2017-11-29 13:45:20</td><td><span class="state">正常</span></td><td><a href="editAdmin.aspx?AppID=16&amp;OperType=1&amp;backUrl=admins.aspx" class="edit">修改</a></td></tr><tr data-seq="15" class=""><td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td><td>5</td><td><a href="editAdmin.aspx?AppID=15&amp;OperType=1&amp;backUrl=admins.aspx">T101</a></td><td><span class="userName" title="刘老师">刘老师</span></td><td>2017-11-29 13:44:46</td><td><span class="state">正常</span></td><td><a href="editAdmin.aspx?AppID=15&amp;OperType=1&amp;backUrl=admins.aspx" class="edit">修改</a></td></tr></tbody>
	        </table>
	      </div>
	      <div class="tbBottom clearfix">
	        <div class="fl">
	          <p class="ck fl"> <i></i>
	            <input type="checkbox" name="sdAccount" id="selectAll">
	            <span>全选所有页</span></p>
	          <a href="javascript:void(0);" class="fl" id="deleteAll">删除</a></div>
	        <!--分页开始-->
	        <div class="page clearfix">
	          <div class="pageGro cb clearfix">
	            <div class="pageTotal"><span>共5条记录，每页20条，共1页</span></div>
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
	    <!--浮层开始>
		<!--重置密码开始-->
		  <div class="flt resetPwdFlt">
		    <h3> <span>重置密码</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="details">
		      <form action="" method="post">
		        <p>
		          <label> 密码重置（默认密码：888888）</label>
		          <i class="remark"></i></p>
		        <p>
		          <input type="password" placeholder="请输入新密码" value="888888" maxlength="30" id="setpwd">
		        </p>
		        <p>
		          <label> 确认密码</label>
		          <i class="remark"></i></p>
		        <p>
		          <input type="password" placeholder="请输入确认密码" value="888888" maxlength="30" id="setpwd1">
		        </p>
		      </form>
		    </div>
		    <div class="btns"> <a href="javascript:void(0)" class="btn confirm">确定</a><a href="javascript:void(0)"
		                class="btn cancel">取消</a></div>
		  </div>
		  <!--重置密码开始--> 
		  <!--恢复权限开始-->
		  <div class="flt">
		    <h3> <span>提示</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="detail"> <i></i><span>确定恢复权限吗？</span> </div>
		    <div class="btns"> <a href="javascript:void(0)" class="btn confirm">确定</a> <a href="javascript:void(0)"
		                class="btn cancel">取消</a> </div>
		  </div>
		  <!--恢复权限结束--> 
		  <!--选择区域开始-->
		  <div class="flt caseflt">
		    <h3 class="clearfix"> <span class="fl">选择大区</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="top clearfix">
		      <p> <i></i>
		        <input type="checkbox" name="selectAll" value="全选" id="Checkbox1">
		        <span>全选</span></p>
		    </div>
		    <div class="detail clearfix" id="slcBox">
		      <p> <i></i>
		        <input type="checkbox" name="district" value="0" data-type="华东地区">
		        <span>华东地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="1" data-type="华南地区">
		        <span>华南地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="2" data-type="华北地区">
		        <span>华北地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="3" data-type="东北地区">
		        <span>东北地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="4" data-type="西南地区">
		        <span>西南地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="5" data-type="华东地区1">
		        <span>华东地区1</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="6" data-type="华南地区1">
		        <span>华南地区1</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="7" data-type="华北地区1">
		        <span>华北地区1</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="8" data-type="东北地区1">
		        <span>东北地区1</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="9" data-type="华南地区2">
		        <span>华南地区2</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="10" data-type="港澳台地区">
		        <span>港澳台地区港澳台地区</span></p>
		      <p> <i></i>
		        <input type="checkbox" name="district" value="11" data-type="华南地区33">
		        <span>华南地区33</span></p>
		    </div>
		    <div class="btns"> <a href="javascript:void(0)" class="btn btn-confirm">确定</a> <a href="javascript:void(0)"
		                class="btn btn-cancel">取消</a> </div>
		  </div>
		  <!--选择区域结束--> 
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
	@import "../../assets/teacher/css/admins.css";
</style>
