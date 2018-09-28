<template>
	<div>
		<div class="section">
          <div class="total">
            <ul class="inner clearfix">
              <li><span class="span01">已添加学校数目：5</span></li>
              <li><span class="span02">已添加班级数目：4</span></li>
              <li><span class="span03">管理学生数：12</span></li>
            </ul>
          </div>
          <div class="show_search clearfix">
                <div class="filter clearfix">
                    <ul class="fl" id="filterList">
                        <li><a href="javascript:void(0)">大区</a>
                            <div class="menu" id="pop大区">
                                <span>全部</span></div>
                        </li>
                        <li><a href="javascript:void(0)">省级</a>
                            <div class="menu" id="pop省级">
                                <span>全部</span></div>
                        </li>                        
                    </ul>
                    <div class="btns fl">
                        <a href="javascript:void(0)" class="filSearch">搜索</a> <a href="javascript:void(0)"
                            class="filReset">重置</a>
                    </div>
                    <div class="fr">
                        <a href="javascript:void(0)" class="btn_show fr icon10">展开</a>
                    </div>
                </div>
            </div>
            <div class="case_box clearfix hide">
                <div class="select_scheme">
                    <ul class="scheme">
                        <li>
                            <div class="itemName" data-type="大区">
                                <a href="javascript:void(0)">大区</a></div>
                            <div class="items" id="大区">
                                <span data-seq="0">全部</span></div>
                        </li>
                        <li>
                            <div class="itemName" data-type="省级">
                                <a href="javascript:void(0)">省级</a></div>
                            <div class="items" id="省级">
                                <span data-seq="0">全部</span></div>
                        </li>                        
                    </ul>
                </div>
            </div>
          <div class="row clearfix">
            <div class="handleBtns fl"> <a href="javascript:void(0)" class="delete">删除</a><a href="javascript:void(0)" class="addSch" id="addSch">添加学校</a> </div>
            <div class="selArea fl"> <span>
              <label>类别</label>
              <select id="item">
                <option value="0">全部</option>
                <option value="1">正常</option>
                <option value="2">过期</option>
                <option value="3">满额</option>
              </select>
              </span> </div>
            <div class="search fr clearfix">
              <input type="text" placeholder="学校名称" id="searchTxt">
              <a href="javascript:void(0)" class="btn_search"></a>
            </div>
          </div>
          <div class="faculty">
            <table cellpadding="0" cellspacing="0" width="100%" class="schoolTb tb">
              <thead>
                <tr>
                  <th width="32"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll"></p></th>
                  <th width="50">序号</th>
                  <th width="210">学校名称</th>
                  <th width="50">学院</th>
                  <th width="50">学系</th>
                  <th width="50">专业</th>
                  <th width="50">班级</th>
                  <th width="90">上限人数</th>
                  <th width="90">已注册人数</th>
                  <th width="60">状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
          <div class="tbBottom clearfix">
            <div class="fl"><p class="ck fl"><i></i><input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p><a href="javascript:void(0);" class="fl" id="deleteAll">删除</a></div>
            <!--分页开始-->
           <div class="page clearfix">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal">
                        <span>共0条记录，每页10条，共0页</span></div>
                    <div class="pageUp">
                        上一页</div>
                    <div class="pageList">
                        <ul>
                        </ul>
                    </div>
                    <div class="pageDown">
                        下一页</div>
                </div>
            </div>
            <!--分页结束--> 
          </div>
        </div>

        <!--浮层开始--> 
  
		  <!--添加学校 start -->
		  <div class="flt addSchFlt">
		    <h3><span>添加学校</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="details">
		      <p class="clearfix">
		      	<span class="fl">
		            <label><i>*</i>区域</label>
		            <select id="areaSlt">
		            </select>
		        </span>
		        <span class="fr">
		            <label><i>*</i>省份</label>
		            <select id="provinceSlt">
		            </select>
		        </span>
		      </p>
		      <p id="schTitle">
		      	<label><i>*</i>学校名称</label><i class="remark">（必填项）</i><br>
		      	<input type="text" class="txt" id="school" placeholder="请输入">
		      </p>
		    </div>
		    <div class="btns"><a href="javascript:void(0)" class="btn addBtn">添加</a><a href="javascript:void(0)" class="btn cancel">取消</a></div>
		  </div>
		  <!--添加学校 end --> 

		  <!--修改学校开始-->
		  <div class="flt editFlt">
		    <h3><span>修改学校</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="details">
		      <p class="clearfix">
		      	<span class="fl">
		            <label><i>*</i>区域</label>
		            <select id="editArea">
		            </select>
		        </span>
		        <span class="fr">
		            <label><i>*</i>省份</label>
		            <select id="editProv">
		            </select>
		        </span>
		      </p>
		      <p id="schTitle">
		      	<label><i>*</i>学校名称</label><i class="remark">（必填项）</i><br>
		      	<input type="text" class="txt" id="editSchool" placeholder="请输入" value="上海财经大学">
		      </p>
		    </div>
		    <div class="btns"><a href="javascript:void(0)" class="btn editBtn">修改</a><a href="javascript:void(0)" class="btn cancel">取消</a></div>
		  </div>
		  <!--修改学校结束--> 
		  

		  
		  <!--学校权限设置开始-->
		  <div class="flt authorise">
		    <h3><span>权限设置</span><a href="javascript:void(0)" class="closed"></a></h3>
		    <div class="details"> 
		      <!--p><i class="remark">提示：*为必填项</i></p-->
		      <p>
		      	<label><i>*</i>限制注册人数：</label>
		        <input type="number" min="1" max="1000000" step="1" class="numInput txt" placeholder="请输入" id="regMaxNum"></p>
		        <!--p><b>已注册人数：</b><span>1000人</span></p-->
		      <p class="wdateBox clearfix">
		      	<label class="fl"><i>*</i>登记到期日期：</label>
		        <input type="text" class="Wdate fl txt" id="selWdate" placeholder="请选择日期"/>
		      </p>
		    </div>
		    <div class="btns"><a href="javascript:void(0)" class="btn confirm">确定</a><a href="javascript:void(0)" class="btn cancel">取消</a></div>
		  </div>
		  <!--学校权限设置结束--> 
		  <!--选择区域开始-->
		  <div class="flt caseflt">
		        <h3 class="clearfix">
		            <span class="fl">选择大区</span><a href="javascript:void(0)" class="closed"></a></h3>
		        <div class="top clearfix">
		            <p>
		                <i></i>
		                <input type="checkbox" name="selectAll" value="全选" id="Checkbox1"><span>全选</span></p>
		        </div>
		        <div class="detail clearfix" id="slcBox">
		            <p>
		                <i></i>
		                <input type="checkbox" name="district" value="0" data-type="华东地区"><span>华东地区</span></p>
		            <p>
		                <i></i>
		                <input type="checkbox" name="district" value="1" data-type="华南地区"><span>华南地区</span></p>
		            <p>
		                <i></i>
		                <input type="checkbox" name="district" value="2" data-type="华北地区"><span>华北地区</span></p>
		            <p>
		                <i></i>
		                <input type="checkbox" name="district" value="11" data-type="华南地区33"><span>华南地区33</span></p>
		        </div>
		        <div class="btns">
		            <a href="javascript:void(0)" class="btn btn-confirm">确定</a> <a href="javascript:void(0)"
		                class="btn btn-cancel">取消</a>
		        </div>
		    </div>  
		<!--选择区域结束--> 
		  
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
	@import "../../assets/teacher/css/index.css";
	@import "../../assets/teacher/css/filter.css";
</style>
