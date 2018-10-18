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
          <!--<li data-seq="1" id="tab1" @click="ChangeTab(0)" :class="{selected: selectedIndex == 0}"><a href="javascript:void(0)">系统通知<i>(6)</i></a>
          </li>
          <li data-seq="2" id="tab2" @click="ChangeTab(1)" :class="{selected: selectedIndex == 1}"><a href="javascript:void(0)">已发通知<i>(3)</i></a>
          </li>
          <li data-seq="3" id="tab3" @click="ChangeTab(2)" :class="{selected: selectedIndex == 2}"><a href="javascript:void(0)">我的草稿<i>(1)</i></a>
          </li>-->
        </ul>
        <div class="search pa clearfix">
          <input type="text" placeholder="搜索通知" id="searchTxt">
          <a href="javascript:void(0)" class="btn_search" @click="SearchNoticeList()"></a>
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
            <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="sysTb" >
              <thead>
              <tr>
                <th width="30"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll"></p></th>
                <th width="50">序号</th>
                <th width="400">通知主题</th>
                <th width="100">通知人数</th>
                <th>发布时间</th>
              </tr>
              </thead>
              <tbody>
              <tr data-seq="9" v-for="(item,index) of sysTbList">
                <td>
                  <p class="ck"><i></i><input name="checkbox" type="checkbox"></p>
                </td>
                <td>{{index+1}}</td>
                <td class="sysNotice">
                  <router-link to="/teacher/noticeInfo/1" class="read">{{item.title}}</router-link>
                </td>
                <td>{{item.people}}</td>
                <td>{{item.time}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="a02" v-show="nowIndex==1">
            <div class="notice_top clearfix">
              <div class="handleBtns fl">
                <a href="javascript:void(0)" @click="ReSendNotice()">重发</a>
                <a href="javascript:void(0)" class="delete" @click="DeleteNotice()">删除</a>
              </div>
            </div>
            <!--已发通知开始-->
            <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="sendtb" >
              <thead>
              <tr>
                <th width="30"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll_1"></p></th>
                <th width="50">序号</th>
                <th width="400">通知标题</th>
                <th width="100">通知人数</th>
                <th>发布时间</th>
              </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
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
            <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="unissued" >
              <thead>
              <tr>
                <th width="30"><p class="ck"><i></i><input type="checkbox" name="checkAll" id="checkAll_2"></p></th>
                <th width="50">序号</th>
                <th width="400">通知标题</th>
                <th width="100">通知人数</th>
                <th>创建时间</th>
              </tr>
              </thead>
              <tbody>
              <tr data-seq="10">
                <td>
                  <p class="ck"><i></i><input name="checkbox" type="checkbox"></p>
                </td>
                <td>1</td>
                <td class="sysNotice">
                  <router-link to="/teacher/noticeInfo/1" class="read">测试深B股竞赛暂停比赛公告</router-link>
                </td>
                <td>6</td>
                <td>2018/09/18 14:58</td>
              </tr>
              </tbody>
            </table>
            <!--我的草稿结束-->
          </div>
        </div>
        <div class="tbBottom clearfix">
          <div class="fl"><p class="ck fl"><i></i><input type="checkbox" name="sdAccount"
                                                         id="selectAll"><span>全选所有页</span></p><a
            href="javascript:void(0);" class="fl" id="deleteAll" @click="DeleteNotice()">删除</a></div>
          <!--分页开始-->
          <div class="page clearfix">
            <div class="pageGro cb clearfix">
              <div class="pageTotal"><span>共6条记录，每页20条，共1页</span></div>
              <div class="pageUp" onclick="pageUp()">
                上一页
              </div>
              <div class="pageList">
                <ul>
                  <li class="on">1</li>
                </ul>
              </div>
              <div class="pageDown" onclick="pageDown()">
                下一页
              </div>
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
        tabsParam:['系统通知','已发通知','我的草稿'],
        nowIndex:0,
        sysTbList: [
          {
            title: '测试深B股竞赛暂停比赛公告1',
            people: '6',
            time: '2018/09/18 14:58'
          },
          {
            title: '测试深B股竞赛暂停比赛公告2',
            people: '6',
            time: '2018/09/18 14:58'
          }
        ],
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
    //  查询
      myfilter(value){
        if(value.indexOf(this.filterText)>-1){
          return value
        }
      }

    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/teacher/css/notices.css";
  @import "../../assets/teacher/css/common.css";
</style>
