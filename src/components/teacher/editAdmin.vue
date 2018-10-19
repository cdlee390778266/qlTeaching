<template>
	<div>
		<div class="section">
            <div class="row clearfix">
                <h2 class="tt">
                    <b class="arrow_r"><a href="admins.aspx">管理员信息</a></b>
                    <i>账号权限</i>
                </h2>
            </div>
            <div class="faculty">
                <div class="ckmd acc">
                    <dl>
                        <dt><label>账号授权配置：</label></dt>
                        <dd>
                            <label>账号：</label>
                            <i>T</i>
                            <input type="text" name="acc" placeholder="请输入" value="" maxlength="12" id="accExec" style="width: 115px">

                            <label>姓名：</label>
                            <input type="text" name="name" placeholder="请输入" value="" id="name" maxlength="50" style="width: 115px">
                            <span>（默认密码：888888）</span>

                            <label>学校名称：</label>
                            <input type="text" name="name" placeholder="请输入机构名称" value="" id="name" maxlength="50" style="width: 115px">
                        </dd>
                    </dl>
                </div>
                <div class="ckmd" id="mark">
                    <dl class="clearfix">
                        <dt><label>市场管理权限：</label></dt>
                        <dd class="clearfix">
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="1" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;">
                                <span>沪深证券(非B股)</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="2" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;">
                                <span>沪B股</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="3" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;">
                                <span>深B股</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="4" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;">
                                <span>融资融券</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="5" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;">
                                <span>港股</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="6" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;">
                                <span>金融期货</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="7" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;">
                                <span>商品期货</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="8" data-status="0" type="checkbox" name="market" checked="checked" style="opacity: 0;">
                                <span>期权</span>
                            </p>
                            <p class="ck">
                                <i></i>
                                <input data-seq="9" data-status="1" type="checkbox" name="market" style="opacity: 0;">
                                <span>外汇</span>
                            </p>
                        </dd>
                    </dl>
                </div>
                <div class="ckmd" id="modle">
                    <dl class="clearfix">
                        <dt><label>模块管理权限：</label></dt>
                        <dd class="clearfix pr">
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="2" type="checkbox" name="module" checked="checked" style="opacity: 0;">
                                <span>学生管理</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="3" type="checkbox" name="module" checked="checked" style="opacity: 0;">
                                <span>比赛管理</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="5" type="checkbox" name="module" checked="checked" style="opacity: 0;">
                                <span>通知平台</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="6" type="checkbox" name="module" checked="checked" style="opacity: 0;">
                                <span>排行榜</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="7" type="checkbox" name="module" checked="checked" style="opacity: 0;">
                                <span>个人中心</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input data-seq="8" type="checkbox" name="module" checked="checked" style="opacity: 0;">
                                <span>互动天地</span>
                            </p>
                            <p class="ck">
                                <i class="selected"></i>
                                <input type="checkbox" name="module" id="tsBtn" checked="checked" style="opacity: 0;">
                                <span>特殊处理</span>
                            </p>
                            <div id="ctBox" style="left: 80px; top: 68px;">
                                <dl id="title">特殊处理权限</dl>
                                <dl class="clearfix" data-seq="1" style=" display:none;">
                                    <dt>沪深证券(非B股)</dt>
                                    <dd>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="411" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>商品管理</span>
                                        </p>
                                        
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="413" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>分红送配</span>
                                        </p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="414" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>强制平仓</span>
                                        </p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="415" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>资金管理</span>
                                        </p>
                                    </dd>
                                </dl>
                                <dl class="clearfix" data-seq="2" style=" display:none;">
                                    <dt>沪B股</dt>
                                    <dd>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="421" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>商品管理</span>
                                        </p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="422" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>分红送配</span>
                                        </p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="423" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>强制平仓</span>
                                        </p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="424" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>资金管理</span>
                                        </p>
                                    </dd>
                                </dl>
                                <dl class="clearfix" data-seq="3" style=" display:none;">
                                    <dt>深B股</dt>
                                    <dd>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="431" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>商品管理</span>
                                        </p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="432" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>分红送配</span>
                                        </p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="433" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>强制平仓</span>
                                        </p>
                                        <p class="ck">
                                            <i class="selected"></i>
                                            <input data-seq="434" type="checkbox" name="ts" checked="checked" style="opacity: 0;">
                                            <span>资金管理</span>
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                            <p class="ck">
                                <i></i>
                                <input data-seq="9" data-status="1" type="checkbox" name="market" style="opacity: 0;">
                                <span>钱龙金融学院</span>
                            </p>
                            <p class="ck">
                                <i></i>
                                <input data-seq="9" data-status="1" type="checkbox" name="market" style="opacity: 0;">
                                <span>统计分析</span>
                            </p>
                        </dd>
                    </dl>
                </div>
                <div class="ckmd">
                    <dl>
                        <dt><label>班级管理权限：</label></dt>
                        <dd>
							<ql-filter :filter="filterData" @filterSearch="search"></ql-filter>
                            <div class="row clearfix">
                                <div class="showSelected fl">
                                    <p class="ck">
                                        <i></i>
                                        <input type="checkbox" name="showSel" id="showSel">
                                        <span>显示已勾</span>
                                    </p>
                                </div>
                                <div class="search fr clearfix">
                                    <input type="text" placeholder="搜学校/班级名称" class="searchTxt" id="searchTxt">
                                    <a href="javascript:void(0)" class="btn_search" id="searchSecurity"></a>
                                </div>
                            </div>
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
                            </el-table>
                            <div class="tbBottom clearfix">
                                <div class="fl">
                                  <p class="fl ql-ck">
                                    <el-checkbox class="fl" @change="toggleAllSelection" v-model="selectAll"></el-checkbox>
                                    <span>全选所有页</span></p>
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
                        </dd>
                    </dl>
                    <div class="creatBtns">
                        <p>
                            <input type="submit" id="crtAdmin" value="创建管理员"><input type="button" id="cancel" value="取消"></p>
                    </div>
                </div>
            </div>
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
          }
        ],
        addSchFlt: {    //添加学校
          area: '',
          prov: '',
          schoolName: ''
        },
        authorise: {    //设置
          number: '',
          date: '2018-06-02'
        },
        editFlt: {  //修改学校
          area: '',
          prov: '',
          schoolName: ''
        },
        tableLoading: false,
        selectAll: false,
        tableData: [    //模拟表格数据
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
      search(filter) {  //搜索
        getTatbleData(this);
      },
      showEdit() {  //显示修改学校弹框
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
      edit() {  //修改学校确认
        /*if (this.editFlt.area && this.editFlt.prov && this.editFlt.schoolName) {
          editSchool(this);
          this.$utils.closeAllDialog();
        }*/
      },
      toggleAllSelection(val) { //切换所有表格选中状态
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
      goPage(currentPage) { //翻页
        getTatbleData(this);
      }
    },
    created() {
      getTatbleData(this)
    }
  }
</script>
<style scoped lang="scss">
	@import "../../assets/teacher/css/editAdmin.css";
</style>
