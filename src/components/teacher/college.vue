<template>
	<div class="section">
      <h2 class="tt">
      	<b><router-link to="/teacher/home" class="arrow_r">学校管理</router-link></b>
      	<span id="span_schoolname" title="广西大学">广西大学</span>
      </h2>
      <div class="row clearfix">
          <div class="handleBtns fl"><a href="javascript:void(0);" class="delete" @click="showDelDialog">删除</a><a href="javascript:void(0)" id="add" @click="showAddSch">添加学院</a></div>
          <div class="search fr">
            <input type="text" placeholder="关键字搜索" class="searchTxt" v-model="searchTxt">
            <a href="javascript:void(0)" class="btn_search" @click="search"></a>
          </div>
      </div>
      <div class="clearfix"></div>
      <div class="faculty">
      	<el-table
	    ref="table"
	    :data="tableData"
	    style="width: 100%"
	   	border
	    stripe
	    v-loading="tableLoading"
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
		      prop="name"
		      label="账号"
		      width="400">
		    </el-table-column>
		    <el-table-column
		      prop="xy"
		      label="姓名"
		      width="80"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="xx"
		      label="注册时间"
		      width="80"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="zy"
		      label="操作"
		      width="80"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      label="操作">
		      <template slot-scope="scope">
		      	<a href="javascript:void(0)" title="修改" class="edit" @click="showEdit(scope.row)"><i>修改</i></a>
		      </template>
		    </el-table-column>
	  	</el-table>
      </div>
      <div class="tbBottom">
        <div class="fl">
			<p class="fl ql-ck"><el-checkbox class="fl" @change="toggleAllSelection" v-model="selectAll"></el-checkbox><span>全选所有页</span></p>
            <a href="javascript:void(0);" class="fl" @click="showDelDialog">删除</a>
        </div>
        
        <!--分页开始-->
        <div class="page clearfix">
            <div class="pageGro cb clearfix">
                <div class="pageTotal"><span>共0条记录，每页20条，共0页</span>
                </div>
                <el-pagination
	              background
	              layout="prev, pager, next"
	              :page-size="page.size"
	              :total="page.total"
	              :pager-count="5"
	              @current-change="goPage">
	            </el-pagination>
            </div>
        </div>
        <!--分页结束--> 
      </div>

	  <!-- 添加学院 start-->
	  <ql-dialog class="flt addFlt" title="添加学院" @confirm="addSch" confirmText="添加">
	    <div class="details">
	      <p> <i>*</i>
	        <label>学院名称</label><u class="remark" :class="{'ql-show': !addFlt.name}">（必填项）</u>
	        <input type="text" class="txt" name="college" id="college" maxlength="25" v-model="addFlt.name">
	      </p>
	    </div>
	  </ql-dialog>
	  <!-- 添加学院 end--> 

	  <!-- 修改学院 start-->
	  <ql-dialog class="flt editFlt" title="修改学院" @confirm="edit" confirmText="修改">
	    <div class="details">
	      <p> <i>*</i>
	        <label>学院名称</label><u class="remark" :class="{'ql-show': !editFlt.name}">（必填项）</u>
	        <input type="text" class="txt" name="college" maxlength="25" v-model="editFlt.name">
	      </p>
	    </div>
	  </ql-dialog>
	  <!--修改学院 end --> 

	  <ql-confirm @confirm="del"></ql-confirm>
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
	/*添加学院*/
	var addSchool = function(that) {
		that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function(res) {
			that.tableLoading = false;
			that.tableData = res;
		}, function() {

		}, {}, false, {});
	}
	/*修改学院*/
	var editSchool = function(that) {
		that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function(res) {
			that.tableLoading = false;
			that.tableData = res;
		}, function() {

		}, {}, false, {});
	}
	export default {
		data() {
			return {
				page: Object.assign({}, this.$utils.CONFIG.page),
				searchTxt: '',
				handleRow: {},
				addFlt: {	//添加学院
		        	name: ''
		        },
		        editFlt: {	//修改学院
		        	name: ''
		        },
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
		},
		methods: {
			search(filter) {	//搜索
				getTatbleData(this);
			},
			showDelDialog() {	//显示删除弹框
				if(this.selectedArr.length) {
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
			del() {	//删除确认
				delData(this);
			},
			showAddSch() {	//显示添加学院弹框
				this.$utils.showDialog({
			        type: 1,
		            title: false,
		            closeBtn: 0,
		            area: ['340px', 'auto'],
		            shadeClose: true,
		            content: $('.addFlt')
			    });
			},
			addSch() {	//添加学院确认
				if(this.addFlt.name) {
					addSchool(this);
					this.$utils.closeAllDialog();
				}
			},
			showEdit(row) {	//显示修改学校弹框
				this.handleRow = row;
				this.$utils.showDialog({
			        type: 1,
			        title: false,
			        closeBtn: 0,
			        area: ['340px', 'auto'],
			        shadeClose: true,
			        content: $('.editFlt')
			    });
			},
			edit() {	//修改学校确认
				if(this.editFlt.name) {
					editSchool(this);
					this.$utils.closeAllDialog();
				}
			},
			toggleAllSelection(val) {	//切换所有表格选中状态
				if(val) {
					this.tableData.forEach(item => {
						this.$refs.table.toggleRowSelection(item, true);
					})
				}else {
					this.$refs.table.clearSelection();
				}
			},
			handleSelectionChange(val) {
		        this.selectedArr = val;
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
	@import "../../assets/teacher/css/department.css";
</style>
