<template>
  <div>
    <div class="section" style="">
      <h2 class="tt">创建通知</h2>
      <form action="" method="post" style="">
        <div class="compBox" style="">
          <h3 class="title">
            <span>基本信息</span></h3>
          <p class="p01 clearfix">
            <label>
              <i>*</i>通知标题：</label>
            <input type="text" class="txt" id="compTitle" placeholder="请输入" onkeyup="words_deal();"
                   maxlength="50"><span>（还可以输入<u id="textCount">50</u>个字）</span>
          </p>
          <div class="details" style="">
            <p class="p01"><label> <i>*</i>编辑通知内容</label></p>
            <!--富文本-->
            <ql-ueditor :config=config ref="ueditor"></ql-ueditor>
            <div class="atta clearfix">
              <div class="files fl">
              </div>
              <div class="addAtta fr">
                <span>添加附件</span>
                <input type="file" name="uploadFile" class="" id="uploadFile" onchange="upload()">
                <center><img src="Images/ajax-loader.gif" alt="附件正在上传中..." id="loading" style="display: none;"></center>
              </div>
            </div>
          </div>
        </div>
        <div class="compBox comp2">
          <h3 class="title"><span>请选择接收通知的账号：</span></h3>
          <ul class="selectNav clearfix" style="width: 600px; margin: 0 auto; padding-bottom: 10px;">
            <li v-for="(item,index) in createTab" @click="ChangeTab(index)" :class="{selected:index===nowIndex}">
              <p class="clearfix">
                <i></i>
                <input type="radio" name="selSdt" value=""></p>
              <p>
                <a href="javascript:void(0)">{{item}}</a></p>
            </li>
          </ul>
          <div class="tabContent">
            <div class="range center clearfix" id="allAcc" v-show="nowIndex==0" style="display: inherit;">
              <p><i class="all"></i><span>允许全部账号接收</span></p>
            </div>

            <div class="range" id="macth" v-show="nowIndex==1" style="display: inherit;">
              <div class="compSelect clearfix">
                <label>比赛名称</label>
                <!--<input type="text" class="fcInput" id="Drop_Match" readonly="">-->
                <el-select v-model="selectValue" placeholder="请选择" id="Drop_Match" class="fcInput" readonly="">
                  <el-option
                    v-for="item in selectData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                  </el-option>
                </el-select>
              </div>
            </div>


            <div class="range" id="selTb" style="display: inherit;">
              <!--自定义班级-->
              <div v-show="nowIndex==2">
                <ql-filter :filter="filterData" @filterSearch="search"></ql-filter>
                <div class="row clearfix">
                  <div class="showSelected fl">
                    <p class="ck">
                      <el-checkbox v-model="selectAll1"><span>显示已勾选</span></el-checkbox>
                    </p>
                  </div>
                  <div class="search fr clearfix">
                    <input type="text" placeholder="请输入学校名称">
                    <a href="javascript:void(0)" class="btn_search" @click="search"></a>
                  </div>
                </div>
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
                      width="32">
                    </el-table-column>
                    <el-table-column
                      label="序号"
                      width="90"
                      prop="index">
                    </el-table-column>
                    <el-table-column
                      prop="qy"
                      label="区域"
                      width="90">
                    </el-table-column>
                    <el-table-column
                      prop="xxmc"
                      label="学校名称"
                      width="160"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="xy"
                      label="学院"
                      width="120"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="xx"
                      label="学系"
                      width="120"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="zy"
                      label="专业"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="bj"
                      label="班级"
                      width="130"
                      show-overflow-tooltip>
                    </el-table-column>
                  </el-table>
                </div>
              </div>
              <!--手动添加账号-->
              <div v-show="nowIndex==3">
                <ql-filter :filter="filterData" @filterSearch="search"></ql-filter>
                <div class="row clearfix">
                  <div class="showSelected fl">
                    <p class="ck">
                      <el-checkbox v-model="selectAll1"><span>显示已勾选</span></el-checkbox>
                    </p>
                  </div>
                  <div class="search fr clearfix">
                    <input type="text" placeholder="请输入学校名称">
                    <a href="javascript:void(0)" class="btn_search" @click="search"></a>
                  </div>
                </div>
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
                      width="32">
                    </el-table-column>
                    <el-table-column
                      label="序号"
                      width="90"
                      prop="index">
                    </el-table-column>
                    <el-table-column
                      prop="qy"
                      label="区域"
                      width="90">
                    </el-table-column>
                    <el-table-column
                      prop="xxmc"
                      label="学校名称"
                      width="160"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="xy"
                      label="学院"
                      width="120"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="xx"
                      label="学系"
                      width="120"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="zy"
                      label="专业"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      prop="bj"
                      label="班级"
                      width="130"
                      show-overflow-tooltip>
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            <div class="tbBottom clearfix" v-show="nowIndex==2">
              <div class="fl">
                <p class="fl ql-ck">
                  <el-checkbox class="fl" @change="toggleAllSelection" v-model="selectAll"></el-checkbox>
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
            <div class="tbBottom clearfix" v-show="nowIndex==3">
              <div class="fl">
                <p class="fl ql-ck">
                  <el-checkbox class="fl" @change="toggleAllSelection1" v-model="selectAll2"></el-checkbox>
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
          </div>
          <div class="creatBtns">
            <p>
              <a href="javascript:void(0)" id="crtNotice" onclick="SendNotice()">发布通知</a>
              <a href="javascript:void(0)" id="saveNotice" onclick="SaveNotice()">保存草稿</a>
              <a href="javascript:void(0)" id="cancel" onclick="CancelNotice()">取消</a></p>
          </div>
        </div>
      </form>
    </div>
    <!--删除弹出框开始-->
    <ql-confirm @confirm="confirm"></ql-confirm>
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
  import qlUeditor from './common/ueditor'
  import qlFilter from './common/filter'
  import qlConfirm from './common/confirm'
  export default {
    components: {
      qlUeditor,
      qlFilter,
      qlConfirm
    },
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
                txt: '上海乾隆财经大学',
                value: '0111'
              },
              {
                txt: '广西大学',
                value: '0112'
              },
              {
                txt: '北京市',
                value: '0113'
              }
            ]
          },
          {
            txt: '学院',
            value: '0',
            children: [
              {
                txt: '理工学院',
                value: '01111'
              },
              {
                txt: '政法学院',
                value: '01112'
              }
            ]
          },
          {
            txt: '学系',
            value: '0',
            children: [
              {
                txt: '计算机科学与技术',
                value: '011111'
              },
              {
                txt: '软件工程',
                value: '011112'
              }
            ]
          },
          {
            txt: '专业',
            value: '0',
            children: [
              {
                txt: '计算机科学与技术',
                value: '0111111'
              },
              {
                txt: '软件工程',
                value: '0111112'
              }
            ]
          },
          {
            txt: '班级',
            value: '0',
            children: [
              {
                txt: '1441班',
                value: '01111111'
              },
              {
                txt: '1442班',
                value: '01111112'
              }
            ]
          }
        ],
        tableData: [	//模拟表格数据
          {
            index: 1,
            qy: '四川省',
            xxmc: '四川大学',
            xy: '理工学院',
            xx: '计算机系',
            zy: '软件工程',
            bj: '1441班'
          },
          {
            index: 2,
            qy: '四川省',
            xxmc: '四川大学',
            xy: '金融学院',
            xx: '金融系',
            zy: '金融专业',
            bj: '1442班'
          }
        ],
        tableData1: [	//模拟表格数据
          {
            index: 1,
            qy: '四川省',
            xxmc: '四川大学',
            xy: '理工学院',
            xx: '计算机系',
            zy: '软件工程',
            bj: '1441班'
          },
          {
            index: 2,
            qy: '四川省',
            xxmc: '四川大学',
            xy: '金融学院',
            xx: '金融系',
            zy: '金融专业',
            bj: '1442班'
          }
        ],
        config: {
          elementPathEnabled: false,//底部路径显示
          wordCount: false,//底部字数统计
          autoHeightEnabled: false,
          autoFloatEnabled: true,
          initialContent: '请输入内容',
          autoClearinitialContent: true,
          initialFrameWidth: null,
          initialFrameHeight: 450,
          BaseUrl: '',
          UEDITOR_HOME_URL: 'static/ueditor/'
        },
        addFormVisible: false,
        createTab: ['全部账号', '按比赛名称', '自定义班级', '手动添加账号'],
        nowIndex: 0,
        tableLoading: false,
        isShow: false,
        selectAll: false,
        selectAll1: false,
        selectAll2: false,
        //  按比赛名称 下拉框数据
        selectData: [{
          label: '测试竞赛1',
          value: '1'
        }, {
          label: '测试竞赛2',
          value: '2'
        }],
        selectValue: ''


      }
    },
    methods: {
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
  @import "../../assets/teacher/css/createNotices.css";
  @import "../../assets/teacher/css/pulldownList.css";
  @import "../../assets/teacher/css/filter.css";
  .showSelected .ck{
    padding: 0 2px;
  }
  .showSelected .ck span{
    margin-left: -8px;
    font-weight: normal;
    color: #444;
  }
</style>
