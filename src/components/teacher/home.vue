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
          <ql-filter></ql-filter>
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
              <tbody><tr data-seq="8" data-area="6" data-province="9" data-school="成都乾隆金融学校2" class=""> 	<td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td>    <td>1</td>    <td class="college"><a href="college.aspx?AppID=8&amp;backUrl=index.aspx" title="成都乾隆金融学校2">成都乾隆金融学校2</a></td>    <td>1</td>    <td>1</td>    <td>1</td>    <td>1</td>    <td>10000</td>    <td>0</td>    <td class="status" data-date="2018-09-29">过期</td>    <td><a href="javascript:void(0)" class="setBtn" title="设置" onclick="OpenSetSchool(8,10000,'2018-09-29')"></a><a href="javascript:void(0)" title="修改" class="edit" onclick="OpenUpdateSchool(8,6,'9','成都乾隆金融学校2')"></a></td> </tr><tr data-seq="7" data-area="1" data-province="2" data-school="浙江大学" class="" style="background: rgb(242, 242, 242);"> 	<td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td>    <td>2</td>    <td class="college"><a href="college.aspx?AppID=7&amp;backUrl=index.aspx" title="浙江大学">浙江大学</a></td>    <td>0</td>    <td>0</td>    <td>0</td>    <td>0</td>    <td>10000</td>    <td>0</td>    <td class="status" data-date="2018-09-20">过期</td>    <td><a href="javascript:void(0)" class="setBtn" title="设置" onclick="OpenSetSchool(7,10000,'2018-09-20')"></a><a href="javascript:void(0)" title="修改" class="edit" onclick="OpenUpdateSchool(7,1,'2','浙江大学')"></a></td> </tr><tr data-seq="6" data-area="1" data-province="2" data-school="金华广播电视大学" class=""> 	<td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td>    <td>3</td>    <td class="college"><a href="college.aspx?AppID=6&amp;backUrl=index.aspx" title="金华广播电视大学">金华广播电视大学</a></td>    <td>0</td>    <td>0</td>    <td>0</td>    <td>0</td>    <td>10000</td>    <td>0</td>    <td class="status" data-date="">正常</td>    <td><a href="javascript:void(0)" class="setBtn" title="设置" onclick="OpenSetSchool(6,10000,'')"></a><a href="javascript:void(0)" title="修改" class="edit" onclick="OpenUpdateSchool(6,1,'2','金华广播电视大学')"></a></td> </tr><tr data-seq="5" data-area="1" data-province="10" data-school="上海乾隆财经大学" class="" style="background: rgb(242, 242, 242);"> 	<td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td>    <td>4</td>    <td class="college"><a href="college.aspx?AppID=5&amp;backUrl=index.aspx" title="上海乾隆财经大学">上海乾隆财经大学</a></td>    <td>0</td>    <td>0</td>    <td>0</td>    <td>0</td>    <td>10000</td>    <td>0</td>    <td class="status" data-date="">正常</td>    <td><a href="javascript:void(0)" class="setBtn" title="设置" onclick="OpenSetSchool(5,10000,'')"></a><a href="javascript:void(0)" title="修改" class="edit" onclick="OpenUpdateSchool(5,1,'10','上海乾隆财经大学')"></a></td> </tr><tr data-seq="4" data-area="6" data-province="9" data-school="成都乾隆财经大学" class=""> 	<td><p class="ck"><i></i><input name="checkbox" type="checkbox"></p></td>    <td>5</td>    <td class="college"><a href="college.aspx?AppID=4&amp;backUrl=index.aspx" title="成都乾隆财经大学">成都乾隆财经大学</a></td>    <td>2</td>    <td>3</td>    <td>3</td>    <td>3</td>    <td>10000</td>    <td>11</td>    <td class="status" data-date="">正常</td>    <td><a href="javascript:void(0)" class="setBtn" title="设置" onclick="OpenSetSchool(4,10000,'')"></a><a href="javascript:void(0)" title="修改" class="edit" onclick="OpenUpdateSchool(4,6,'9','成都乾隆财经大学')"></a></td> </tr></tbody>
            </table>
          </div>
          <div class="tbBottom clearfix">
            <div class="fl"><p class="ck fl"><i></i><input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p><a href="javascript:void(0);" class="fl" id="deleteAll">删除</a></div>
            <!--分页开始-->
           <div class="page clearfix">
                <div class="pageGro cb clearfix">
                    <div class="pageTotal"><span>共5条记录，每页20条，共1页</span></div>
                    <div class="pageUp" onclick="pageUp()">
                        上一页</div>
                    <div class="pageList">
                        <ul><li class="on">1</li></ul>
                    </div>
                    <div class="pageDown" onclick="pageDown()">
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
	@import "../../assets/teacher/css/index.css";
</style>
