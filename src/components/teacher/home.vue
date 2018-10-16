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
          <ql-filter :filter="filterData"></ql-filter>
          <div class="row clearfix">
            <div class="handleBtns fl">
            	<a href="javascript:void(0)" class="delete" @click="showDelDialog">删除</a>
            	<a href="javascript:void(0)" class="addSch" @click="showAddSch">添加学校</a>
            </div>
            <div class="selArea fl">
            	<span>
	              <label>类别</label>
	              <select id="item">
	                <option value="0">全部</option>
	                <option value="1">正常</option>
	                <option value="2">过期</option>
	                <option value="3">满额</option>
	              </select>
              </span>
          	</div>
            <div class="search fr clearfix">
              <input type="text" placeholder="学校名称" id="searchTxt">
              <a href="javascript:void(0)" class="btn_search" @click="search"></a>
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
		  <ql-dialog class="flt addSchFlt" title="添加学校" @confirm="addSch" confirmText="添加">
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
		  </ql-dialog>
		  <!--添加学校 end --> 

		  <!--修改学校开始-->
		  <ql-dialog class="flt editFlt" title="修改学校" @confirm="addSch" confirmText="修改">
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
		  </ql-dialog>
		  <!--修改学校结束--> 

		  <!--学校权限设置开始-->
		  <ql-dialog class="flt eauthorise" title="权限设置" @confirm="addSch">
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
		  </ql-dialog>
		  <!--学校权限设置结束--> 

		<!--浮层结束-->
		<ql-confirm @confirm="del"></ql-confirm>
	</div>
</template>
<script>
	import qlFilter from './common/filter'
	import qlConfirm from './common/confirm'
	import qlDialog from './common/dialog.vue'
	export default {
		components: {
			qlFilter,
			qlConfirm,
			qlDialog
		},
		data() {
			return {
				filterData: [
					{
						txt: '大区',
						value: '0',
						children: [
							{
								txt: '华东',
								value: '01'
							},
							{
								txt: '华南',
								value: '02'
							},
							{
								txt: '华中',
								value: '03'
							},
							{
								txt: '华北',
								value: '04'
							},
							{
								txt: '西北',
								value: '05'
							},
							{
								txt: '西南',
								value: '06'
							},
							{
								txt: '东北',
								value: '07'
							},
							{
								txt: '港澳台',
								value: '08'
							}
						]
					},
					{
						txt: '省级',
						value: '0',
						children: [
							{
								txt: '安徽省',
								value: '011'
							},
							{
								txt: '澳门特别行政区',
								value: '012'
							},
							{
								txt: '北京市',
								value: '013'
							},
							{
								txt: '福建省',
								value: '014'
							},
							{
								txt: '甘肃省',
								value: '015'
							},
							{
								txt: '广东省',
								value: '016'
							},
							{
								txt: '广西壮族自治区',
								value: '017'
							},
							{
								txt: '贵州省',
								value: '018'
							}
						]
					},
				]
			}
		},
		methods: {
			showDelDialog() {
				if(true) {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['320px', 'auto'],
			            shadeClose: true,
			            content: $('.promptFlt')
			        })
				}else {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['280px', 'auto'],
			            shadeClose: true,
			            content: $('.nullFlt')
			        })
				}
			},
			del() {
				alert("message");
			},
			showAddSch() {
				this.$utils.showDialog({
			        type: 1,
			        title: false,
					scrollbar: false,
			        closeBtn: 0,
			        area: ['380px', 'auto'],
			        shadeClose: true,
			        content: $('.addSchFlt')
			    });
			},
			addSch() {
				alert("add");
			},
			search() {

			}
		},
		created() {
			
		}
	}
</script>
<style lang="scss">
	@import "../../assets/teacher/css/index.css";
</style>
