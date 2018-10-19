<template>
	<div>
	    <div class="section">
	      <div class="row clearfix">
	        <h2 class="tt"> 管理员信息</h2>
	        <el-tabs v-model="activeTab" @tab-click="tabClick">
			    <el-tab-pane label="学校" name="school">
			    	<ql-filter :filter="tabs.school.filterData" @filterSearch="search"></ql-filter>
					<div class="faculty">
				        <div class="row clearfix">
				          	<div class="handleBtns fl">
					          	<a href="javascript:void(0)" class="delete" @click="showDelDialog">删除</a>
					          	<a href="javascript:void(0)" class="frozen" @click="showDjDialog"> 冻结</a>
					          	<a href="javascript:void(0)" class="unfreeze" @click="showJdDialog">解冻</a>
					          	<a href="javascript:void(0)" class="retPassword" @click="showResetPwd">密码重置</a>
					          	<router-link to="/teacher/editAdmin/0">添加管理员</router-link>
				          	</div>
				          	<div class="search fr clearfix">
					            <input type="text" placeholder="搜索管理员账号/名称" class="searchTxt" v-model="tabs.school.searchTxt">
					            <a href="javascript:void(0)" class="btn_search" @click="search"></a>
				        	</div>
				        </div>
				        <el-table
					    ref="table"
					    :data="tabs.school.tableData"
					    style="width: 100%"
					   	border
					    stripe
					    v-loading="tabs.school.tableLoading"
					    @selection-change="handleSelectionChange">
						    <el-table-column
						      type="selection"
						      width="50">
						    </el-table-column>
						    <el-table-column
						      label="序号"
						      width="50"
						      prop="index">
						    </el-table-column>
						    <el-table-column
						      label="账号"
						      width="400">
						      <template slot-scope="scope">
						      	<router-link :to="'/teacher/editAdmin/' + 1">{{scope.row.name}}</router-link>
						      </template>
						    </el-table-column>
						    <el-table-column
						      prop="xy"
						      label="注册时间"
						      width="100"
						      show-overflow-tooltip>
						    </el-table-column>
						    <el-table-column
						      prop="xx"
						      label="操作"
						      width="80"
						      show-overflow-tooltip>
						    </el-table-column>
						    <el-table-column
						      label="操作">
						      <template slot-scope="scope">
						      	<router-link to="/teacher/editAdmin/1" title="修改" class="edit"><i>修改</i></router-link>
						      </template>
						    </el-table-column>
					  	</el-table>
				      </div>
				      <div class="tbBottom clearfix">
				        <div class="fl">
				          <p class="fl ql-ck"><el-checkbox class="fl" @change="toggleAllSelection" v-model="tabs.school.selectAll"></el-checkbox><span>全选所有页</span></p>
			            	<a href="javascript:void(0);" class="fl" @click="showDelDialog">删除</a>
				        </div>
				        <!--分页开始-->
				        <div class="page clearfix">
				          <div class="pageGro cb clearfix">
				            <div class="pageTotal">
			                	<span>共{{tabs.school.page.total}}条记录，每页{{tabs.school.page.size}}条，共{{Math.ceil(tabs.school.page.total / tabs.school.page.size)}}页</span>
			                </div>
			                <el-pagination
				              background
				              layout="prev, pager, next"
				              :page-size="tabs.school.page.size"
				              :total="tabs.school.page.total"
				              :pager-count="5"
				              @current-change="goPage">
				            </el-pagination>
				          </div>
				        </div>
				        <!--分页结束--> 
				      </div>
			    </el-tab-pane>
			    <el-tab-pane label="机构" name="mechanism">
			    	<div class="faculty">
				        <div class="row clearfix">
				          	<div class="handleBtns fl">
					          	<a href="javascript:void(0)" class="delete" @click="showDelDialog">删除</a>
					          	<a href="javascript:void(0)" class="frozen" @click="showDjDialog"> 冻结</a>
					          	<a href="javascript:void(0)" class="unfreeze" @click="showJdDialog">解冻</a>
					          	<a href="javascript:void(0)" class="retPassword" @click="showResetPwd">密码重置</a>
					          	<router-link to="/teacher/editAdmin/0">添加管理员</router-link>
				          	</div>
				          	<div class="search fr clearfix">
					            <input type="text" placeholder="请输入账号、姓名或机构名称" class="searchTxt" v-model="tabs.mechanism.searchTxt" style="width: 200px">
					            <a href="javascript:void(0)" class="btn_search" @click="search"></a>
				        	</div>
				        </div>
				        <el-table
					    ref="table"
					    :data="tabs.mechanism.tableData"
					    style="width: 100%"
					   	border
					    stripe
					    v-loading="tabs.mechanism.tableLoading"
					    @selection-change="handleSelectionChange">
						    <el-table-column
						      type="selection"
						      width="50">
						    </el-table-column>
						    <el-table-column
						      label="序号"
						      width="50"
						      prop="index">
						    </el-table-column>
						    <el-table-column
						      label="账号"
						      width="400">
						      <template slot-scope="scope">
						      	<router-link :to="'/teacher/editAdmin/' + 1">{{scope.row.name}}</router-link>
						      </template>
						    </el-table-column>
						    <el-table-column
						      prop="xy"
						      label="注册时间"
						      width="100"
						      show-overflow-tooltip>
						    </el-table-column>
						    <el-table-column
						      prop="xx"
						      label="操作"
						      width="80"
						      show-overflow-tooltip>
						    </el-table-column>
						    <el-table-column
						      label="操作">
						      <template slot-scope="scope">
						      	<router-link to="/teacher/editAdmin/1" title="修改" class="edit"><i>修改</i></router-link>
						      </template>
						    </el-table-column>
					  	</el-table>
				      </div>
				      <div class="tbBottom clearfix">
				        <div class="fl">
				          <p class="fl ql-ck"><el-checkbox class="fl" @change="toggleAllSelection" v-model="tabs.mechanism.selectAll"></el-checkbox><span>全选所有页</span></p>
			            	<a href="javascript:void(0);" class="fl" @click="showDelDialog">删除</a>
				        </div>
				        <!--分页开始-->
				        <div class="page clearfix">
				          <div class="pageGro cb clearfix">
				            <div class="pageTotal">
			                	<span>共{{tabs.mechanism.page.total}}条记录，每页{{tabs.mechanism.page.size}}条，共{{Math.ceil(tabs.mechanism.page.total / tabs.mechanism.page.size)}}页</span>
			                </div>
			                <el-pagination
				              background
				              layout="prev, pager, next"
				              :page-size="tabs.mechanism.page.size"
				              :total="tabs.mechanism.page.total"
				              :pager-count="5"
				              @current-change="goPage">
				            </el-pagination>
				          </div>
				        </div>
				        <!--分页结束--> 
				      </div>
			    </el-tab-pane>
			</el-tabs>
	      </div>
	    </div>
	    <!--浮层开始>
		<!--重置密码开始-->
		  <ql-dialog class="flt resetPwdFlt" title="重置密码" @confirm="resetPwd">
		    <div class="details">
		      <form action="" method="post">
		        <p>
		          <label> 密码重置（默认密码：888888）</label>
		          <i class="remark" :class="{'ql-show': (resetObj.pwd != resetObj.cpwd)}">（*两次密码输入不一致）</i>
		        <p>
		          <input type="password" placeholder="请输入新密码"  maxlength="30" v-model="resetObj.pwd">
		        </p>
		        <p>
		          <label> 确认密码</label>
		          <i class="remark" :class="{'ql-show': resetObj.pwd != resetObj.cpwd}">（*两次密码输入不一致）</i>
		        <p>
		          <input type="password" placeholder="请输入确认密码" maxlength="30" v-model="resetObj.cpwd">
		        </p>
		      </form>
		    </div>
		  </ql-dialog>
		  <!--重置密码开始--> 

		  <!--浮层结束--> 

		  <ql-confirm @confirm="del" class="delConfirm"></ql-confirm>
		  <ql-confirm @confirm="dj" class="djConfirm" content="确定冻结吗？"></ql-confirm>
		  <ql-confirm @confirm="jd" class="jdConfirm" content="确定解冻吗？"></ql-confirm>
	</div>
</template>
<script>
	/*获取表格数据*/
	var getTatbleData = function(that) {
		that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function(res) {
			that.tableLoading = false;
			that.tableData = res;
		}, function() {

		}, {}, false, {});
	}
	/*删除*/
	var delData = function(that) {
		that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function(res) {
			that.tableLoading = false;
			that.tableData = res;
		}, function() {

		}, {}, false, {});
	}
	/*冻结*/
	var djData = function(that) {
		that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function(res) {
			that.tableLoading = false;
			that.tableData = res;
		}, function() {

		}, {}, false, {});
	}
	/*解冻*/
	var jdData = function(that) {
		that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function(res) {
			that.tableLoading = false;
			that.tableData = res;
		}, function() {

		}, {}, false, {});
	}
	/*重置密码*/
	var resetData = function(that) {
		that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function(res) {
			that.tableLoading = false;
			that.tableData = res;
		}, function() {

		}, {}, false, {});
	}
	export default {
		data() {
			return {
				resetObj: {
		    		pwd: '888888',
		    		cpwd: '888888'
		    	},
				activeTab: 'school',
				tabs: {
					school: {
						page: Object.assign({}, this.$utils.CONFIG.page),
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
							{
								txt: '学校',
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
							{
								txt: '学院',
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
							}
						],
				    	searchTxt: '',
				        tableLoading: false,
				        selectAll: false,
				        tableData: [	//模拟表格数据
				        	{
					          index: '0',
					          name: '成都乾隆金融学校2',
					          xy: '0',
					          xx: '0',
					          zy: '0',
					          b: '0',
					          sr: '1000',
					          zr: '0',
					          status: '过期'
					        },
					        {
					          index: '0',
					          name: '成都乾隆金融学校2',
					          xy: '0',
					          xx: '0',
					          zy: '0',
					          b: '0',
					          sr: '1000',
					          zr: '0',
					          status: '过期'
					        },
					        {
					          index: '0',
					          name: '成都乾隆金融学校2',
					          xy: '0',
					          xx: '0',
					          zy: '0',
					          b: '0',
					          sr: '1000',
					          zr: '0',
					          status: '过期'
					        }
				        ],
				        selectedArr: []
					},
					mechanism: {
						page: Object.assign({}, this.$utils.CONFIG.page),
				    	searchTxt: '',
				        tableLoading: false,
				        selectAll: false,
				        tableData: [	//模拟表格数据
				        	{
					          index: '0',
					          name: '成都乾隆金融学校2',
					          xy: '0',
					          xx: '0',
					          zy: '0',
					          b: '0',
					          sr: '1000',
					          zr: '0',
					          status: '过期'
					        },
					        {
					          index: '0',
					          name: '成都乾隆金融学校2',
					          xy: '0',
					          xx: '0',
					          zy: '0',
					          b: '0',
					          sr: '1000',
					          zr: '0',
					          status: '过期'
					        },
					        {
					          index: '0',
					          name: '成都乾隆金融学校2',
					          xy: '0',
					          xx: '0',
					          zy: '0',
					          b: '0',
					          sr: '1000',
					          zr: '0',
					          status: '过期'
					        }
				        ],
				        selectedArr: []
					}
				}
			}
		},
		methods: {
			tabClick() {

			},
			showDelDialog() {	//显示删除弹框
				if(this.tabs[this.activeTab].selectedArr.length) {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['320px', 'auto'],
			            shadeClose: true,
			            content: $('.delConfirm .promptFlt')
			        })
				}else {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['280px', 'auto'],
			            shadeClose: true,
			            content: $('.delConfirm .nullFlt')
			        })
				}
			},
			del() {	//删除确认
				delData(this);
			},
			showDjDialog() {	//显示冻结弹框
				if(this.tabs[this.activeTab].selectedArr.length) {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['320px', 'auto'],
			            shadeClose: true,
			            content: $('.djConfirm .promptFlt')
			        })
				}else {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['280px', 'auto'],
			            shadeClose: true,
			            content: $('.djConfirm .nullFlt')
			        })
				}
			},
			dj() {	//冻结确认
				djData(this);
			},
			showJdDialog() {	//显示解冻弹框
				if(this.tabs[this.activeTab].selectedArr.length) {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['320px', 'auto'],
			            shadeClose: true,
			            content: $('.jdConfirm .promptFlt')
			        })
				}else {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['280px', 'auto'],
			            shadeClose: true,
			            content: $('.jdConfirm .nullFlt')
			        })
				}
			},
			jd() {	//解冻确认
				jdData(this);
			},
			search(filter) {	//搜索
				getTatbleData(this);
			},
			showResetPwd() {	//显示权限设置弹框
				if(this.tabs[this.activeTab].selectedArr.length) {
					this.$utils.showDialog({
						type: 1,
		                title: false,
		                closeBtn: 0,
		                area: ['400px', 'auto'],
		                shadeClose: true,
		                content: $('.resetPwdFlt')
					});
				}else {
					this.$utils.showDialog({
			            type: 1,
			            title: false,
						scrollbar: false,
			            closeBtn: 0,
			            area: ['280px', 'auto'],
			            shadeClose: true,
			            content: $('.jdConfirm .nullFlt')
			        })
				}
			},
			resetPwd() {	//权限设置确认
				if(this.resetObj.pwd && this.resetObj.cpwd && this.resetObj.pwd == this.resetObj.cpwd) {
					resetData(this);
					this.$utils.closeAllDialog();
				}
			},
			toggleAllSelection(val) {	//切换所有表格选中状态
				if(val) {
					this.tabs[this.activeTab].tableData.forEach(item => {
						this.$refs.table.toggleRowSelection(item, true);
					})
				}else {
					this.$refs.table.clearSelection();
				}
			},
			handleSelectionChange(val) {
		        this.tabs[this.activeTab].selectedArr = val;
		    },
		    goPage(currentPage) {	//翻页
		    	getTatbleData(this);
		    }
		},
		created() {
			getTatbleData(this)
    	}
  	}
</script>
<style scoped lang="scss">
	@import "../../assets/teacher/css/admins.css";
</style>
