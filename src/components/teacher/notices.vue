<template>
  <div>
    <div class="section">
      <div class="row clearfix">
        <h2 class="tt">通知信息</h2>
      </div>
      <div class="faculty pr">
        <ul class="tab clearfix">
          <li v-for="(item,index) in tabsParam" @click="ChangeTab(index)" :class="{selected:index===nowIndex}">
            <a href="javascript:void(0)">{{item}}<i>(4)</i></a>
          </li>
        </ul>
        <div class="search pa clearfix">
          <input type="text" placeholder="搜索通知" id="searchTxt">
          <a href="javascript:void(0)" class="btn_search" @click="search()"></a>
        </div>
        <div class="cont">
          <div class="a01" v-show="nowIndex==0">
            <div class="notice_top clearfix">
              <div class="handleBtns fl">
                <a href="javascript:void(0)" id="resend" @click="ReSendNotice()">重发</a>
                <!--<a href="javascript:void(0)" id="send" @click="SendNotice()" style="display: none;">发布</a>-->
                <a href="javascript:void(0)" class="delete" @click="DeleteNotice()">删除</a>
              </div>
            </div>
            <div class="faculty">
              <el-table
                ref="table2"
                :data="tableData2"
                style="width: 100%"
                stripe
                v-loading="tableLoading"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="30">
                </el-table-column>
                <el-table-column
                  label="序号"
                  width="50"
                  prop="index">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="通知主题"
                  width="400">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="通知人数"
                  width="100"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="发布时间"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="a02" v-show="nowIndex==1">
            <div class="notice_top clearfix">
              <div class="handleBtns fl">
                <a href="javascript:void(0)" @click="ReSendNotice()">重发</a>
                <a href="javascript:void(0)" class="delete" @click="DeleteNotice()">删除</a>
              </div>
            </div>
            <!--已发通知开始-->
            <div class="faculty">
              <el-table
                ref="table1"
                :data="tableData1"
                style="width: 100%"
                stripe
                v-loading="tableLoading"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="30">
                </el-table-column>
                <el-table-column
                  label="序号"
                  width="50"
                  prop="index">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="通知标题"
                  width="400">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="通知人数"
                  width="100"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="发布时间"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>
            <!--已发通知结束-->
          </div>
          <div class="a03" v-show="nowIndex==2">
            <div class="notice_top clearfix">
              <div class="handleBtns fl">
                <a href="javascript:void(0)" id="send" @click="SendNotice()" style="display: inline-block;">发布</a>
                <a href="javascript:void(0)" class="delete" @click="DeleteNotice()">删除</a>
              </div>
            </div>
            <!--我的草稿开始-->
            <div class="faculty">
              <el-table
                ref="table"
                :data="tableData"
                style="width: 100%"
                stripe
                v-loading="tableLoading"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="30">
                </el-table-column>
                <el-table-column
                  label="序号"
                  width="50"
                  prop="index">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="通知标题"
                  width="400">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="通知人数"
                  width="100"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="创建时间"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>
            <!--我的草稿结束-->
          </div>
        </div>
        <div class="tbBottom clearfix" v-show="nowIndex==0">
          <div class="fl">
            <p class="fl ql-ck">
              <el-checkbox class="fl" @change="toggleAllSelection2" v-model="selectAll2"></el-checkbox>
              <span class="allSelect">全选所有页</span></p>
            <a href="javascript:void(0);" class="fl" @click="DeleteNotice">删除</a>
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
          <!--分页结束-->
        </div>
        <div class="tbBottom clearfix" v-show="nowIndex==1">
          <div class="fl">
            <p class="fl ql-ck">
              <el-checkbox class="fl" @change="toggleAllSelection1" v-model="selectAll1"></el-checkbox>
              <span>全选所有页</span></p>
            <a href="javascript:void(0);" class="fl" @click="DeleteNotice">删除</a>
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
          <!--分页结束-->
        </div>
        <div class="tbBottom clearfix" v-show="nowIndex==2">
          <div class="fl">
            <p class="fl ql-ck">
              <el-checkbox class="fl" @change="toggleAllSelection" v-model="selectAll"></el-checkbox>
              <span>全选所有页</span></p>
            <a href="javascript:void(0);" class="fl" @click="DeleteNotice">删除</a>
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
          <!--分页结束-->
        </div>
      </div>
    </div>
    <!--重发弹出框开始-->
    <ql-dialog class="flt promptFlt resendflt" :title="'提示'" @confirm="confirm">
      <div class="detail">
        <p class="center"><i></i><span>确定重发吗?</span></p>
      </div>
      <div class="flt nullFlt">
        <div class="details">
          <p class="clearfix">
            <i class="nullIcon fl"></i><span class="fl">您什么都没有选择</span>
          </p>
        </div>
        <div class="btns">
          <a href="javascript:void(0)" class="btn yes" @click="close">关闭</a>
        </div>
      </div>
    </ql-dialog>
    <!--删除弹出框开始-->
    <ql-confirm @confirm="confirm"></ql-confirm>
    <!--发布弹出框开始-->
    <ql-dialog class="flt promptFlt sendflt" :title="'提示'" @confirm="confirm">
      <div class="detail">
        <p class="center"><i></i><span>是否发布?</span></p>
      </div>
      <div class="flt nullFlt">
        <div class="details">
          <p class="clearfix">
            <i class="nullIcon fl"></i><span class="fl">您什么都没有选择</span>
          </p>
        </div>
        <div class="btns">
          <a href="javascript:void(0)" class="btn yes" @click="close">关闭</a>
        </div>
      </div>
    </ql-dialog>

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
  import qlDialog from './common/dialog'
  import qlConfirm from './common/confirm'
  export default {
    props: ['filter'],
    components: {
      qlDialog,
      qlConfirm
    },
    data() {
      return {
        page: Object.assign({}, this.$utils.CONFIG.page),
        tabsParam: ['系统通知', '已发通知', '我的草稿'],
        nowIndex: 0,
        tableLoading: false,
        selectAll: false,
        selectAll1: false,
        selectAll2: false,
        tableData: [	//模拟表格数据
          {
            index: 1,
            name: '测试深B股竞赛暂停比赛公告1',
            num: '6',
            time: '2018/09/18 14:58'
          },
          {
            index: 2,
            name: '测试深B股竞赛暂停比赛公告2',
            num: '6',
            time: '2018/09/18 14:58'
          }
        ],
        tableData1: [	//模拟表格数据
          {
            index: 1,
            name: '测试11',
            num: '6',
            time: '2018/09/18 14:58'
          },
          {
            index: 12,
            name: '测试2',
            num: '6',
            time: '2018/09/18 14:58'
          }
        ],
        tableData2: [	//模拟表格数据
          {
            index: 1,
            name: '测试21',
            num: '6',
            time: '2018/09/18 14:58'
          },
          {
            index: 2,
            name: '测试22',
            num: '6',
            time: '2018/09/18 14:58'
          },
          {
            index: 3,
            name: '测试23',
            num: '6',
            time: '2018/09/18 14:58'
          },
          {
            index: 4,
            name: '测试24',
            num: '6',
            time: '2018/09/18 14:58'
          },
          {
            index: 5,
            name: '测试25',
            num: '6',
            time: '2018/09/18 14:58'
          }
        ]
      }
    },
    methods: {
      //重发
      ReSendNotice() {
        if (true) {
          this.$utils.showDialog({
            type: 1,
            title: false,
            scrollbar: false,
            closeBtn: 0,
            area: ['320px', 'auto'],
            shadeClose: true,
            content: $('.resendflt')
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
      //删除
      DeleteNotice() {
        if (true) {
          this.$utils.showDialog({
            type: 1,
            title: false,
            scrollbar: false,
            closeBtn: 0,
            area: ['320px', 'auto'],
            shadeClose: true,
            content: $('.delflt')
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
      //发布
      SendNotice() {
        if (true) {
          this.$utils.showDialog({
            type: 1,
            title: false,
            scrollbar: false,
            closeBtn: 0,
            area: ['320px', 'auto'],
            shadeClose: true,
            content: $('.sendflt')
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
      close() {
        this.$utils.closeAllDialog();
      },
      confirm() {//确定回调
        alert("confirm");
      },
      ChangeTab(index) {//tab切换
        this.nowIndex = index;
      },
      search(filter) {	//搜索
        getTatbleData(this);
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
      toggleAllSelection1(val) {	//切换所有表格选中状态
        if(val) {
          this.tableData1.forEach(item => {
            this.$refs.table1.toggleRowSelection(item, true);
          })
        }else {
          this.$refs.table1.clearSelection();
        }
      },
      toggleAllSelection2(val) {	//切换所有表格选中状态
        if(val) {
          this.tableData2.forEach(item => {
            this.$refs.table2.toggleRowSelection(item, true);
          })
        }else {
          this.$refs.table2.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.selectedArr = val;
      },
      goPage(currentPage) {	//翻页
        getTatbleData(that);
      }

    },
    created() {
      getTatbleData(this)
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/teacher/css/notices.css";
  @import "../../assets/teacher/css/common.css";
</style>
