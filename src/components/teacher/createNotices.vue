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
                <label>比赛名称</label><input type="text" class="fcInput" id="Drop_Match" readonly="">
              </div>
            </div>
            <div class="range" id="selTb" style="display: inherit;">
              <!--自定义班级-->
              <div v-show="nowIndex==2">
                <div class="show_search clearfix">
                  <div class="filter clearfix">
                    <ul class="fl" id="">
                      <li><a href="javascript:void(0)">大区</a>
                        <div class="menu" id="pop大区">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">省级</a>
                        <div class="menu" id="pop省级">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">学校</a>
                        <div class="menu" id="pop学校">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">学院</a>
                        <div class="menu" id="pop学院">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">学系</a>
                        <div class="menu" id="pop学系">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">专业</a>
                        <div class="menu" id="pop专业">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">班级</a>
                        <div class="menu" id="pop班级">
                          <span>全部</span></div>
                      </li>
                    </ul>
                    <div class="btns fl">
                      <a href="javascript:void(0)" class="filSearch" onclick="filSearch()">搜索</a> <a
                      href="javascript:void(0)" class="filReset">重置</a></div>
                    <div class="fr">
                      <a href="javascript:void(0)" class="btn_show fr icon10" @click="showHide()" v-show="!isShow">展开</a>
                      <a href="javascript:void(0)" class="btn_show fr icon10" @click="showHide()" v-show="isShow">关闭</a>
                    </div>
                  </div>
                </div>
                <div class="case_box clearfix" v-show="isShow">
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
                      <li>
                        <div class="itemName" data-type="学校">
                          <a href="javascript:void(0)">学校</a></div>
                        <div class="items" id="学校">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="学院">
                          <a href="javascript:void(0)">学院</a></div>
                        <div class="items" id="学院">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="学系">
                          <a href="javascript:void(0)">学系</a></div>
                        <div class="items" id="学系">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="专业">
                          <a href="javascript:void(0)">专业</a></div>
                        <div class="items" id="专业">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="班级">
                          <a href="javascript:void(0)">班级</a></div>
                        <div class="items" id="班级">
                          <span data-seq="0">全部</span></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="showSelected fl">
                    <p class="ck">
                      <i></i>
                      <input type="checkbox" name="showSel" id="selClass1" onclick="ShowSelected()"><span>显示已勾选</span></p>
                  </div>
                  <div class="search fr clearfix">
                    <input type="text" placeholder="请输入学校名称" id="searchTxt1"><a href="javascript:void(0)"
                                                                               class="btn_search" id="searchSecurity1"
                                                                               onclick="SearchList()"></a></div>
                </div>
                <table cellpadding="0" cellspacing="0" width="100%" class="tb" id="table_class">
                  <thead>
                  <tr>
                    <th width="32">
                      <p class="ck">
                        <i></i>
                        <input type="checkbox" name="checkAll" id="checkAll"></p>
                    </th>
                    <th width="40">
                      序号
                    </th>
                    <th width="90">
                      区域
                    </th>
                    <th width="160">
                      学校名称
                    </th>
                    <th width="120">
                      学院
                    </th>
                    <th width="120">
                      学系
                    </th>
                    <th width="130">
                      专业
                    </th>
                    <th>
                      班级
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
                <div class="tbBottom clearfix">
                  <div class="fl">
                    <p class="ck fl">
                      <i></i>
                      <input type="checkbox" name="sdAccount" id="selectAll1"><span>全选所有页</span></p>
                  </div>
                  <!--分页开始-->
                  <div class="page clearfix">
                    <div class="pageGro cb clearfix">
                      <div class="pageTotal">
                        <span>共0条记录，每页10条，共0页</span></div>
                      <div class="pageUp" onclick="pageUp()">
                        上一页
                      </div>
                      <div class="pageList">
                        <ul>
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
              <!--手动添加账号-->
              <div v-show="nowIndex==3">
                <div class="show_search clearfix">
                  <div class="filter clearfix">
                    <ul class="fl" id="filterList">
                      <li><a href="javascript:void(0)">大区</a>
                        <div class="menu" id="pop大区1">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">省级</a>
                        <div class="menu" id="pop省级1">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">学校</a>
                        <div class="menu" id="pop学校1">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">学院</a>
                        <div class="menu" id="pop学院1">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">学系</a>
                        <div class="menu" id="pop学系1">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">专业</a>
                        <div class="menu" id="pop专业1">
                          <span>全部</span></div>
                      </li>
                      <li><a href="javascript:void(0)">班级</a>
                        <div class="menu" id="pop班级1">
                          <span>全部</span></div>
                      </li>
                    </ul>
                    <div class="btns fl">
                      <a href="javascript:void(0)" class="filSearch" onclick="filSearch()">搜索</a> <a
                      href="javascript:void(0)" class="filReset">重置</a></div>
                    <div class="fr">
                      <a href="javascript:void(0)" class="btn_show fr icon10" @click="showHide()" v-show="!isShow">展开</a>
                      <a href="javascript:void(0)" class="btn_show fr icon10" @click="showHide()" v-show="isShow">关闭</a>
                    </div>
                  </div>
                </div>
                <div class="case_box clearfix" v-show="isShow">
                  <div class="select_scheme">
                    <ul class="scheme">
                      <li>
                        <div class="itemName" data-type="大区">
                          <a href="javascript:void(0)">大区</a></div>
                        <div class="items" id="大区1">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="省级">
                          <a href="javascript:void(0)">省级</a></div>
                        <div class="items" id="省级1">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="学校">
                          <a href="javascript:void(0)">学校</a></div>
                        <div class="items" id="学校1">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="学院">
                          <a href="javascript:void(0)">学院</a></div>
                        <div class="items" id="学院1">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="学系">
                          <a href="javascript:void(0)">学系</a></div>
                        <div class="items" id="学系1">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="专业">
                          <a href="javascript:void(0)">专业</a></div>
                        <div class="items" id="专业1">
                          <span data-seq="0">全部</span></div>
                      </li>
                      <li>
                        <div class="itemName" data-type="班级">
                          <a href="javascript:void(0)">班级</a></div>
                        <div class="items" id="班级1">
                          <span data-seq="0">全部</span></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="showSelected fl">
                    <p class="ck">
                      <i></i>
                      <input type="checkbox" name="showSel" id="selClass" onclick="ShowSelected()"><span>显示已勾选</span></p>
                  </div>
                  <div class="search fr clearfix">
                    <input type="text" placeholder="请输入学校名称" id="searchTxt"><a href="javascript:void(0)"
                                                                               class="btn_search" id="searchSecurity"
                                                                               onclick="SearchList()"></a></div>
                </div>
                <!--表格2 start -->
                <table cellpadding="0" cellspacing="0" width="100%" class="tb stdTb" id="table_student">
                  <thead>
                  <tr>
                    <th width="32">
                      <p class="ck">
                        <i></i>
                        <input type="checkbox" name="checkAll" id="checkAll_1"></p>
                    </th>
                    <th width="46">
                      序号
                    </th>
                    <th width="240">
                      学校名称
                    </th>
                    <th width="180">
                      班级
                    </th>
                    <th width="160">
                      学生账号
                    </th>
                    <th>
                      学生姓名
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
                <!--表格2 end -->
                <div class="tbBottom clearfix">
                  <div class="fl">
                    <p class="ck fl">
                      <i></i>
                      <input type="checkbox" name="sdAccount" id="selectAll"><span>全选所有页</span></p>
                  </div>
                  <!--分页开始-->
                  <div class="page clearfix">
                    <div class="pageGro cb clearfix">
                      <div class="pageTotal">
                        <span>共0条记录，每页10条，共0页</span></div>
                      <div class="pageUp" onclick="pageUp()">
                        上一页
                      </div>
                      <div class="pageList">
                        <ul>
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

          </div>
          <div class="creatBtns">
            <p>
              <a href="javascript:void(0)" id="crtNotice" onclick="SendNotice()">发布通知</a><a href="javascript:void(0)"
                                                                                            id="saveNotice"
                                                                                            onclick="SaveNotice()">保存草稿</a><a
              href="javascript:void(0)" id="cancel" onclick="CancelNotice()">取消</a></p>
          </div>
        </div>
      </form>
    </div>
    <!--浮层开始-->
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
  import qlUeditor from './common/ueditor'

  export default {
    components: {qlUeditor},
    data() {
      return {
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
        createTab:['全部账号','按比赛名称','自定义班级','手动添加账号'],
        nowIndex:0,
        isShow:false
      }
    },
    methods: {
      ChangeTab(index) {//tab切换
        this.nowIndex = index;
      },
      showHide() {
        this.isShow = !this.isShow;
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/teacher/css/createNotices.css";
  @import "../../assets/teacher/css/pulldownList.css";
  @import "../../assets/teacher/css/filter.css";
</style>
