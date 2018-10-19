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
      <ql-filter :filter="filterData" @filterSearch="search"></ql-filter>
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
            label="学校名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="xy"
            label="学院"
            width="50"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="xx"
            label="学系"
            width="50"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="zy"
            label="专业"
            width="50"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="b"
            label="班级"
            width="50"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="sr"
            label="上限人数"
            width="90"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="zr"
            label="已注册人数"
            width="100"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="60"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <a href="javascript:void(0)" title="设置" class="setBtn" @click="showSetOpt"></a>
              <a href="javascript:void(0)" title="修改" class="edit" @click="showEdit"><i>交易市场</i></a>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="tbBottom clearfix">
        <div class="fl">
          <p class="fl ql-ck">
            <el-checkbox class="fl" @change="toggleAllSelection" v-model="selectAll"></el-checkbox>
            <span>全选所有页</span></p>
          <a href="javascript:void(0);" class="fl" @click="showDelDialog">删除</a>
        </div>
        <!--分页开始-->
        <div class="page clearfix">
          <div class="pageGro cb clearfix">
            <div class="pageTotal">
              <span>共{{page.total}}条记录，每页{{page.size}}条，共{{Math.ceil(page.total / page.size)}}页</span>
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
      </div>

        <!--浮层开始-->

        <!--添加学校 start -->
        <ql-dialog class="flt addSchFlt" title="添加学校" @confirm="addSch" confirmText="添加">
          <div class="details">
            <p class="clearfix">
		      	<span class="fl">
		            <label><i>*</i>区域</label>
		            <select v-model="addSchFlt.area" :class="{'ql-error': !addSchFlt.area}">
		            	<option value="-1">请选择</option>
		            	<option value="1">华东</option>
		            	<option value="2">华南</option>
		            	<option value="3">华中</option>
		            	<option value="4">华北</option>
		            	<option value="5">西北</option>
		            	<option value="6">西南</option>
		            	<option value="7">东北</option>
		            	<option value="8">港澳台</option>
		            </select>
		        </span>
              <span class="fr">
		            <label><i>*</i>省份</label>
		            <select v-model="addSchFlt.prov" :class="{'ql-error': !addSchFlt.prov}">
		            	<option value="-1">请选择</option>
		            	<option value="1">华东</option>
		            	<option value="2">华南</option>
		            	<option value="3">华中</option>
		            	<option value="4">华北</option>
		            	<option value="5">西北</option>
		            	<option value="6">西南</option>
		            	<option value="7">东北</option>
		            	<option value="8">港澳台</option>
		            </select>
		        </span>
            </p>
            <p id="">
              <label><i>*</i>学校名称</label><i class="remark" :class="{'ql-show': !addSchFlt.schoolName}">（必填项）</i><br>
              <input type="text" class="txt" placeholder="请输入" v-model="addSchFlt.schoolName">
            </p>
          </div>
        </ql-dialog>
        <!--添加学校 end -->

        <!--修改学校开始-->
        <ql-dialog class="flt editFlt" title="修改学校" @confirm="edit" confirmText="修改">
          <div class="details">
            <p class="clearfix">
		      	<span class="fl">
		            <label><i>*</i>区域</label>
		            <select v-model="editFlt.area" :class="{'ql-error': !editFlt.area}">
		            	<option value="-1">请选择</option>
		            	<option value="1">华东</option>
		            	<option value="2">华南</option>
		            	<option value="3">华中</option>
		            	<option value="4">华北</option>
		            	<option value="5">西北</option>
		            	<option value="6">西南</option>
		            	<option value="7">东北</option>
		            	<option value="8">港澳台</option>
		            </select>
		        </span>
              <span class="fr">
		            <label><i>*</i>省份</label>
		            <select v-model="editFlt.prov" :class="{'ql-error': !editFlt.prov}">
		            	<option value="-1">请选择</option>
		            	<option value="1">华东</option>
		            	<option value="2">华南</option>
		            	<option value="3">华中</option>
		            	<option value="4">华北</option>
		            	<option value="5">西北</option>
		            	<option value="6">西南</option>
		            	<option value="7">东北</option>
		            	<option value="8">港澳台</option>
		            </select>
		        </span>
            </p>
            <p id="schTitle">
              <label><i>*</i>学校名称</label><i class="remark" :class="{'ql-show': !editFlt.schoolName}">（必填项）</i><br>
              <input type="text" class="txt" placeholder="请输入" v-model="editFlt.schoolName">
            </p>
          </div>
        </ql-dialog>
        <!--修改学校结束-->

        <!--学校权限设置开始-->
        <ql-dialog class="flt authorise" title="权限设置" @confirm="setOpt">
          <div class="details">
            <!--p><i class="remark">提示：*为必填项</i></p-->
            <p>
              <label><i>*</i>限制注册人数：</label>
              <input type="number" min="1" max="1000000" step="1" class="numInput txt" placeholder="请输入"
                     v-model="authorise.number" :class="{'ql-error': !authorise.number}">
            </p>
            <!--p><b>已注册人数：</b><span>1000人</span></p-->
            <p class="wdateBox clearfix">
              <label class="fl"><i>*</i>登记到期日期：</label>
              <el-date-picker
                class="fl ql-date"
                type="date"
                v-model="authorise.date"
                :class="{'ql-error': !authorise.date}"
                :clearable="false"
                placeholder="选择日期">
              </el-date-picker>
            </p>
          </div>
        </ql-dialog>
        <!--学校权限设置结束-->

        <!--浮层结束-->
        <ql-confirm @confirm="del"></ql-confirm>
      </div>
    </div>
</template>
<script>
  /*获取表格数据*/
  var getTatbleData = function (that) {
    that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function (res) {
      that.tableLoading = false;
      that.tableData = res;
    }, function () {

    }, {}, false, {});
  }
  /*删除*/
  var delData = function (that) {
    that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function (res) {
      that.tableLoading = false;
      that.tableData = res;
    }, function () {

    }, {}, false, {});
  }
  /*添加学校*/
  var addSchool = function (that) {
    that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function (res) {
      that.tableLoading = false;
      that.tableData = res;
    }, function () {

    }, {}, false, {});
  }
  /*权限设置*/
  var setAuthorise = function (that) {
    that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function (res) {
      that.tableLoading = false;
      that.tableData = res;
    }, function () {

    }, {}, false, {});
  }
  /*修改学校*/
  var editSchool = function (that) {
    that.$utils.getJson(that.$utils.CONFIG.api.testUrl, function (res) {
      that.tableLoading = false;
      that.tableData = res;
    }, function () {

    }, {}, false, {});
  }
  export default {
    data() {
      return {
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
          }
        ],
        addSchFlt: {	//添加学校
          area: '',
          prov: '',
          schoolName: ''
        },
        authorise: {	//设置
          number: '',
          date: '2018-06-02'
        },
        editFlt: {	//修改学校
          area: '',
          prov: '',
          schoolName: ''
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
      showDelDialog() {	//显示删除弹框
        if (this.selectedArr.length) {
          this.$utils.showDialog({
            type: 1,
            title: false,
            scrollbar: false,
            closeBtn: 0,
            area: ['320px', 'auto'],
            shadeClose: true,
            content: $('.promptFlt')
          })
        } else {
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
      showAddSch() {	//显示添加学校弹框
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
      addSch() {	//添加学校确认
        if (this.addSchFlt.area && this.addSchFlt.prov && this.addSchFlt.schoolName) {
          addSchool(this);
          this.$utils.closeAllDialog();
        }
      },
      search(filter) {	//搜索
        getTatbleData(this);
      },
      showSetOpt() {	//显示权限设置弹框
        this.$utils.showDialog({
          type: 1,
          title: false,
          scrollbar: false,
          closeBtn: 0,
          area: ['330px', 'auto'],
          shadeClose: true,
          content: $('.authorise')
        });
      },
      setOpt() {	//权限设置确认
        if (this.authorise.number && this.authorise.date) {
          setAuthorise(this);
          this.$utils.closeAllDialog();
        }
      },
      showEdit() {	//显示修改学校弹框
        this.$utils.showDialog({
          type: 1,
          title: false,
          scrollbar: false,
          closeBtn: 0,
          area: ['380px', 'auto'],
          shadeClose: true,
          content: $('.editFlt')
        });
      },
      edit() {	//修改学校确认
        if (this.editFlt.area && this.editFlt.prov && this.editFlt.schoolName) {
          editSchool(this);
          this.$utils.closeAllDialog();
        }
      },
      toggleAllSelection(val) {	//切换所有表格选中状态
        if (val) {
          this.tableData.forEach(item => {
            this.$refs.table.toggleRowSelection(item, true);
          })
        } else {
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
<style lang="scss">
  @import "../../assets/teacher/css/index.css";
</style>
