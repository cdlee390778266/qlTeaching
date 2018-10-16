var selectSeqList = ""; //选中表格的SEQ
var selectAllPage_Url = ""; //选中所有页获取SEQ数据
var selectAllPage_Url_Data = {};

$(document).ready(function (e) {
    //选项卡切换效果开始
    $('.tab01 li').click(function () {
        var self = $(this);
        var index = self.index();
        //alert($(this).index());
        self.children().addClass('selected').parent().siblings().find('a').removeClass('selected');
        tabContDiv.eq(index).show().siblings().hide();
    });
    //全选当前页
    $('#checkAll').click(function () {
        var ck = $(this).parents('thead').siblings().find('.ck');
        var ckInput = $(this).parents("table").find('tbody .ck input[type=checkbox]');
        //        var ckInput = $('tbody .ck input[type=checkbox]');
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
            $(this).siblings('i').removeClass('selected');
            ck.find('i').removeClass('selected');
            ckInput.removeAttr('checked');
            ckInput.each(function () {
                var data = $(this).parents('tr').attr("data-seq");
                DelData(data);
            });

        } else {

            $(this).attr("checked", 'true');
            $(this).siblings('i').addClass('selected');
            ck.find('i').addClass('selected');
            ckInput.attr('checked', true);
            ckInput.each(function () {
                var data = $(this).parents('tr').attr("data-seq");
                AddData(data);
            });
            var temp = getDotCount();
            if (temp > 500) {
                alert("超过500条,选择错误！");
                return;
            }
        }
        if ($.isFunction(window.checkAllClick)) {
            checkAllClick();
        }
    });
    $('#checkAll_1').click(function () {
        var ck = $(this).parents('thead').siblings().find('.ck');
        var ckInput = $(this).parents("table").find('tbody .ck input[type=checkbox]');
        //        var ckInput = $('tbody .ck input[type=checkbox]');
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
            $(this).siblings('i').removeClass('selected');
            ck.find('i').removeClass('selected');
            ckInput.removeAttr('checked');
            ckInput.each(function () {
                var data = $(this).parents('tr').attr("data-seq");
                DelData(data);
            });

        } else {

            $(this).attr("checked", 'true');
            $(this).siblings('i').addClass('selected');
            ck.find('i').addClass('selected');
            ckInput.attr('checked', true);
            ckInput.each(function () {
                var data = $(this).parents('tr').attr("data-seq");
                AddData(data);
            });
            var temp = getDotCount();
            if (temp > 500) {
                alert("超过500条,选择错误！");
                return;
            }
        }
        if ($.isFunction(window.checkAllClick)) {
            checkAllClick();
        }
    });
    $('#checkAll_2').click(function () {
        var ck = $(this).parents('thead').siblings().find('.ck');
        var ckInput = $(this).parents("table").find('tbody .ck input[type=checkbox]');
        //        var ckInput = $('tbody .ck input[type=checkbox]');
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
            $(this).siblings('i').removeClass('selected');
            ck.find('i').removeClass('selected');
            ckInput.removeAttr('checked');
            ckInput.each(function () {
                var data = $(this).parents('tr').attr("data-seq");
                DelData(data);
            });

        } else {

            $(this).attr("checked", 'true');
            $(this).siblings('i').addClass('selected');
            ck.find('i').addClass('selected');
            ckInput.attr('checked', true);
            ckInput.each(function () {
                var data = $(this).parents('tr').attr("data-seq");
                AddData(data);
            });
            var temp = getDotCount();
            if (temp > 500) {
                alert("超过500条,选择错误！");
                return;
            }
        }
        if ($.isFunction(window.checkAllClick)) {
            checkAllClick();
        }
    });
    //全选所有页
    $('#selectAll').click(function () {
        var self = $(this), trs = $('.tb tbody tr');
        if (self.prev().hasClass('selected')) {
            //alert('取消选中');
            self.attr('checked', false);
            self.prev().removeClass('selected');
            trs.find('input').removeAttr('checked').prev('i').removeClass('selected');
            //取消所有页赋值
            selectSeqList = "";
        } else {
            //alert('选中');
            var temp = $(".pageTotal").html().match(/共(\d+)条/)[1];
            if (temp > 500) {
                alert("超过500条,选择错误！");
                return;
            }
            else {
                self.attr('checked', true);
                self.prev().addClass('selected');
                trs.find('input').attr('checked', true).prev('i').addClass('selected');
                //全选所有页赋值            
                selectAllOper();
            }
        }
        if ($.isFunction(window.selectAllClick)) {
            selectAllClick();
        }
    });
});

//全选所有数据事件
function selectAllOper() {
    ajaxPost(selectAllPage_Url, selectAllPage_Url_Data, null, selectAllOperSuccess, null);
}
function selectAllOperSuccess(obj) {
    if (obj.resultdata == "1") {
        selectSeqList = obj.DataList;
    }
    else {
        alert(obj.errordata);
    }
}


//添加事件
function getDataOverRun(fun) {
    var ckInput = $('.tb tbody .ck input[type=checkbox]');
    ckInput.click(function () {
        var data = $(this).parents('tr').attr("data-seq");
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
            $(this).siblings('i').removeClass('selected');
            DelData(data);
        }
        else {
            $(this).attr("checked", 'true');
            $(this).siblings('i').addClass('selected');
            AddData(data);
            var temp = getDotCount();
            if (temp > 500) {
                alert("超过500条,选择错误！");
                return;
            }
        }
        if ($.isFunction(window.tbCheckClick)) {
            tbCheckClick();
        }
    });
    setCheckData();
    TableRowChangeColor();
    AddDelPrompt(fun);
    AddNoDataPrompt();
}
function setCheckData() {
    $('.tb tbody tr').each(function () {
        var data = $(this).attr("data-seq");
        if (selectSeqList.indexOf("," + data + ",") >= 0) {
            $(this).find('i').addClass('selected');
            $(this).find('input').attr('checked', true);
        }
    });
}
//增加选中行
function AddData(pdata) {
    if (selectSeqList.indexOf("," + pdata + ",") < 0) {
        if (selectSeqList == "")
            selectSeqList += "," + pdata + ",";
        else
            selectSeqList += pdata + ",";
    }
}
//删除选中行
function DelData(pdata) {
    if (selectSeqList == "," + pdata + ",")
        selectSeqList = "";
    if (selectSeqList.indexOf("," + pdata + ",") >= 0) {
        selectSeqList = selectSeqList.replace("," + pdata + ",", ",");
    }

}
//表格隔行变色样式
function TableRowChangeColor() {
    var trAttr = $('.tb tbody tr').attr('class');
    $('.tb tbody tr:odd').css('background', '#f2f2f2');
    $('.tb tbody tr').on('mouseenter', function () {
        $(this).addClass('bluetd');
    });
    $('.tb tbody tr').on('mouseleave', function () {
        $(this).removeClass('bluetd');
    });
}
//增加提示框
function AddDelPrompt(fun) {
    var prmHtml = '';
    if ($('.promptFlt').length > 0)
        return;
    prmHtml += '<div class="flt promptFlt" OperType="DEL">';
    prmHtml += '<h3><span class="fl">提示</span><a href="javascript:void(0)" class="closed"></a></h3>';
    prmHtml += '<div class="detail"><p class="center"><i></i><span>确定删除吗?</span></p></div>';
    prmHtml += '<div class="btns">';
    prmHtml += '<a href="javascript:void(0)"  class="btn confirm">确定</a>';
    prmHtml += '<a  href="javascript:void(0)" class="btn cancel">取消</a>';
    prmHtml += '</div>';
    prmHtml += '</div>';
    $('body').append($(prmHtml));
    //点击关闭
    $('.promptFlt .closed').click(function () {
        layer.closeAll();
    });
    //点击确定
    $('.promptFlt .confirm').click(function () {
        fun($('.promptFlt').attr("OperType"));
    });
    //点击取消
    $('.promptFlt .cancel').click(function () {
        layer.closeAll();
    });
}
function AddNoDataPrompt() {
    //什么都没有选择的提示浮层
    if ($('.nullFlt').length > 0)
        return;
    var nullHtml = '';
    nullHtml += '<div class="flt nullFlt">';
    nullHtml += '<div class="details"><p class="clearfix"><i class="nullIcon fl"></i><span class="fl">您什么都没有选择</span></p></div>';
    nullHtml += '<div class="btns"><a href="javascript:void(0)" class="btn yes">关闭</a></div>';
    nullHtml += '</div>';
    $('body').append($(nullHtml));
    //点击“知道了”
    $('.nullFlt .yes').click(function () {
        layer.closeAll();
    });
}
/************************************ 比赛下拉列表开始 **********************************/
var selectedMathchSeq = -1;  //存放选中的比赛seq，在页面中直接调用该变量获取已选中的比赛seq

//下拉列表默认隐藏
function fcInputBlur_handler() {
    $('.pullSelector').hide();
}
//绑定比赛下拉列表
//参数
//MatchStat：比赛状态（"0"为全部）
//MatchType：比赛类型（"0"为全部）
function SetMatchDropList(MatchStat, MatchType) {

    //如果有传入参数matchtype，则自动选择
    var argMatchType = getQueryString("matchtype");
    if (argMatchType != null)
        MatchType = argMatchType;

    $(".pullSelector").remove();
    var url = "Ajaxdata/CommAjax.ashx?OperType=5";
    var data = { MatchStat: MatchStat, MatchType: MatchType };
    ajaxPost_Ex(url, data, null, SetMatchDropListSuccess, null);
}
function SetMatchDropListSuccess(obj) {
    if (obj != null) {
        if (obj.MatchList != null) {
            var html = '<ul class="pullSelector">';
            for (var i = 0; i < obj.MatchList.length; i++) {
                var SEQ = obj.MatchList[i].SEQ;
                var matchname = obj.MatchList[i].matchname;

                html += '<li><a href="javascript:void(0)" matchseq="' + SEQ + '">' + matchname + '</a></li>';
            }
            html += '</ul>';
        }
    }

    if (!$('body').hasClass('.pullSelector')) {
        $('body').append(html);
    }

    //如果有传入参数mathchseq，则自动选择
    argMatchSeq = getQueryString("mathchseq"); //传入参数mathchseq
    if (argMatchSeq != null) {
        $(".pullSelector li").each(function () {
            var MatchSeq = $(this).children('a').attr("matchseq");
            if (MatchSeq == argMatchSeq) {
                var MatchText = $(this).children('a').text();
                $("#Drop_Match").val(MatchText);
                selectedMathchSeq = MatchSeq;
            }
        });
    }
    else {
        var firstMach = $('.pullSelector li:first-child').children('a').text();
        $("#Drop_Match").val(firstMach);
        selectedMathchSeq = $('.pullSelector li:first-child').children('a').attr("matchseq"); //默认赋值最近一项比赛seq    
    }

    var pullSel = $('.pullSelector'),
        fcInput = $('.fcInput');

    var pullLi = $('.pullSelector li')
    pullLi.click(function () {
        if ($(this).children('input').attr('checked', 'checked')) {
            selectedMathchSeq = $(this).children('a').attr("matchseq"); //将选中的比赛seq赋值到变量中
            var compName = ($(this).children('a').text());
            fcInput.val(compName);
        }
        pullSel.hide();

        if ($.isFunction(window.FunSelectMatch)) {
            FunSelectMatch();
        }
    });

    pullSel.hide();

    $('.fcInput').click(function () {
        var self = $(this),
            left = self.position().left,
            top = self.position().top,
            height = self.outerHeight(),
            width = self.outerWidth() - 2;

        pullSel.css('width', width);
        pullSel.css('left', left);
        pullSel.css('top', top + height);
        pullSel.width(width);
        pullSel.show();

    });

    $('.fcInput').focus(function () {
        var self = $(this),
            left = self.position().left,
            top = self.position().top,
            height = self.outerHeight(),
            width = self.outerWidth() - 2;

        pullSel.css('width', width);
        pullSel.css('left', left);
        pullSel.css('top', top + height);
        pullSel.width(width);
        pullSel.show();

    });

    $('.fcInput').blur(function () {
        pullSel.hide();
    });

    pullSel.bind('mouseenter', function () {

        fcInput.unbind('blur');

    });

    pullSel.bind('mouseleave', function () {
        $(this).hide();
        fcInput.bind('blur', fcInputBlur_handler);
    });

    fcInput.bind('keypress', function () {
        if ($(this).val() == '') {
            pullSel.show();
        }
    })

}
function getDotCount() {
    if (selectSeqList == null || selectSeqList == "")
        return 0;
    var count = selectSeqList.match(/,/g).length - 1;
    return count;
}
/************************************ 比赛下拉列表结束 **********************************/

