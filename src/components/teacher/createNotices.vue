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
                    <input type="text" class="txt" id="compTitle" placeholder="请输入" onkeyup="words_deal();" maxlength="50"><span>（还可以输入<u id="textCount">50</u>个字）</span>
                </p>
                <div class="details" style="">
                    <p class="p01"><label> <i>*</i>编辑通知内容</label></p>
                    <div id="editor" class="edui-default" style="width: 998px; margin: 0px auto;"><div id="edui1" class="edui-editor  edui-default" style="width: 836px; z-index: 999;"><div id="edui1_toolbarbox" class="edui-editor-toolbarbox edui-default" style=""><div id="edui1_toolbarboxouter" class="edui-editor-toolbarboxouter edui-default"><div class="edui-editor-toolbarboxinner edui-default"><div id="edui2" class="edui-toolbar   edui-default" onselectstart="return false;" onmousedown="return $EDITORUI[&quot;edui2&quot;]._onMouseDown(event, this);" style="user-select: none;"><div id="edui3" class="edui-box edui-button edui-for-undo edui-default"><div id="edui3_state" onmousedown="$EDITORUI[&quot;edui3&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui3&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui3&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui3&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui3_body" unselectable="on" title="撤销" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui3&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui3&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui4" class="edui-box edui-button edui-for-redo edui-default"><div id="edui4_state" onmousedown="$EDITORUI[&quot;edui4&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui4&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui4&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui4&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui4_body" unselectable="on" title="重做" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui4&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui4&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui5" class="edui-box edui-separator  edui-default"></div><div id="edui6" class="edui-box edui-button edui-for-bold edui-default"><div id="edui6_state" onmousedown="$EDITORUI[&quot;edui6&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui6&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui6&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui6&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui6_body" unselectable="on" title="加粗" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui6&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui6&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui7" class="edui-box edui-button edui-for-italic edui-default"><div id="edui7_state" onmousedown="$EDITORUI[&quot;edui7&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui7&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui7&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui7&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui7_body" unselectable="on" title="斜体" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui7&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui7&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui8" class="edui-box edui-button edui-for-underline edui-default"><div id="edui8_state" onmousedown="$EDITORUI[&quot;edui8&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui8&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui8&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui8&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui8_body" unselectable="on" title="下划线" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui8&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui8&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui9" class="edui-box edui-button edui-for-fontborder edui-default"><div id="edui9_state" onmousedown="$EDITORUI[&quot;edui9&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui9&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui9&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui9&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui9_body" unselectable="on" title="字符边框" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui9&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui9&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui10" class="edui-box edui-button edui-for-strikethrough edui-default"><div id="edui10_state" onmousedown="$EDITORUI[&quot;edui10&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui10&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui10&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui10&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui10_body" unselectable="on" title="删除线" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui10&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui10&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui11" class="edui-box edui-button edui-for-superscript edui-default"><div id="edui11_state" onmousedown="$EDITORUI[&quot;edui11&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui11&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui11&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui11&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui11_body" unselectable="on" title="上标" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui11&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui11&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui12" class="edui-box edui-button edui-for-subscript edui-default"><div id="edui12_state" onmousedown="$EDITORUI[&quot;edui12&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui12&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui12&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui12&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui12_body" unselectable="on" title="下标" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui12&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui12&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui13" class="edui-box edui-button edui-for-removeformat edui-default"><div id="edui13_state" onmousedown="$EDITORUI[&quot;edui13&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui13&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui13&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui13&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui13_body" unselectable="on" title="清除格式" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui13&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui13&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui14" class="edui-box edui-button edui-for-formatmatch edui-default"><div id="edui14_state" onmousedown="$EDITORUI[&quot;edui14&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui14&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui14&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui14&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui14_body" unselectable="on" title="格式刷" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui14&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui14&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui15" class="edui-box edui-button edui-for-blockquote edui-default"><div id="edui15_state" onmousedown="$EDITORUI[&quot;edui15&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui15&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui15&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui15&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui15_body" unselectable="on" title="引用" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui15&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui15&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui16" class="edui-box edui-button edui-for-pasteplain edui-default"><div id="edui16_state" onmousedown="$EDITORUI[&quot;edui16&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui16&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui16&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui16&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui16_body" unselectable="on" title="纯文本粘贴模式" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui16&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui16&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui17" class="edui-box edui-separator  edui-default"></div><div id="edui18" class="edui-box edui-splitbutton edui-for-forecolor edui-default edui-colorbutton"><div title="字体颜色" id="edui18_state" onmousedown="$EDITORUI[&quot;edui18&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui18&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui18&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui18&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-splitbutton-body edui-default"><div id="edui18_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui18&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div id="edui18_colorlump" class="edui-colorlump"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui18&quot;]._onArrowClick();"></div></div></div></div><div id="edui21" class="edui-box edui-splitbutton edui-for-backcolor edui-default edui-colorbutton"><div title="背景色" id="edui21_state" onmousedown="$EDITORUI[&quot;edui21&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui21&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui21&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui21&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-splitbutton-body edui-default"><div id="edui21_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui21&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div id="edui21_colorlump" class="edui-colorlump"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui21&quot;]._onArrowClick();"></div></div></div></div><div id="edui24" class="edui-box edui-menubutton edui-for-insertorderedlist edui-default"><div title="有序列表" id="edui24_state" onmousedown="$EDITORUI[&quot;edui24&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui24&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui24&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui24&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-menubutton-body edui-default"><div id="edui24_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui24&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui24&quot;]._onArrowClick();"></div></div></div></div><div id="edui37" class="edui-box edui-menubutton edui-for-insertunorderedlist edui-default"><div title="无序列表" id="edui37_state" onmousedown="$EDITORUI[&quot;edui37&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui37&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui37&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui37&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-menubutton-body edui-default"><div id="edui37_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui37&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui37&quot;]._onArrowClick();"></div></div></div></div><div id="edui44" class="edui-box edui-button edui-for-selectall edui-default"><div id="edui44_state" onmousedown="$EDITORUI[&quot;edui44&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui44&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui44&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui44&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui44_body" unselectable="on" title="全选" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui44&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui44&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui45" class="edui-box edui-separator  edui-default"></div><div id="edui46" class="edui-box edui-menubutton edui-for-rowspacingtop edui-default"><div title="段前距" id="edui46_state" onmousedown="$EDITORUI[&quot;edui46&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui46&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui46&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui46&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-menubutton-body edui-default"><div id="edui46_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui46&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui46&quot;]._onArrowClick();"></div></div></div></div><div id="edui53" class="edui-box edui-menubutton edui-for-rowspacingbottom edui-default"><div title="段后距" id="edui53_state" onmousedown="$EDITORUI[&quot;edui53&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui53&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui53&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui53&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-menubutton-body edui-default"><div id="edui53_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui53&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui53&quot;]._onArrowClick();"></div></div></div></div><div id="edui60" class="edui-box edui-menubutton edui-for-lineheight edui-default"><div title="行间距" id="edui60_state" onmousedown="$EDITORUI[&quot;edui60&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui60&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui60&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui60&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-menubutton-body edui-default"><div id="edui60_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui60&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui60&quot;]._onArrowClick();"></div></div></div></div><div id="edui69" class="edui-box edui-button edui-for-indent edui-default"><div id="edui69_state" onmousedown="$EDITORUI[&quot;edui69&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui69&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui69&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui69&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui69_body" unselectable="on" title="首行缩进" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui69&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui69&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui70" class="edui-box edui-separator  edui-default"></div><div id="edui71" class="edui-box edui-combox edui-for-customstyle edui-default"><div title="自定义标题" id="edui71_state" onmousedown="$EDITORUI[&quot;edui71&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui71&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui71&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui71&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-combox-body edui-default"><div id="edui71_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui71&quot;]._onButtonClick(event, this);">自定义标题</div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui71&quot;]._onArrowClick();"></div></div></div></div><div id="edui77" class="edui-box edui-combox edui-for-paragraph edui-default"><div title="段落格式" id="edui77_state" onmousedown="$EDITORUI[&quot;edui77&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui77&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui77&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui77&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-combox-body edui-default"><div id="edui77_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui77&quot;]._onButtonClick(event, this);">段落格式</div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui77&quot;]._onArrowClick();"></div></div></div></div><div id="edui86" class="edui-box edui-button edui-for-justifyleft edui-default"><div id="edui86_state" onmousedown="$EDITORUI[&quot;edui86&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui86&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui86&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui86&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui86_body" unselectable="on" title="居左对齐" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui86&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui86&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui87" class="edui-box edui-button edui-for-justifycenter edui-default"><div id="edui87_state" onmousedown="$EDITORUI[&quot;edui87&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui87&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui87&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui87&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui87_body" unselectable="on" title="居中对齐" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui87&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui87&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui88" class="edui-box edui-button edui-for-justifyright edui-default"><div id="edui88_state" onmousedown="$EDITORUI[&quot;edui88&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui88&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui88&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui88&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui88_body" unselectable="on" title="居右对齐" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui88&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui88&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui89" class="edui-box edui-button edui-for-justifyjustify edui-default"><div id="edui89_state" onmousedown="$EDITORUI[&quot;edui89&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui89&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui89&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui89&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui89_body" unselectable="on" title="两端对齐" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui89&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui89&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui90" class="edui-box edui-combox edui-for-fontfamily edui-default"><div title="字体" id="edui90_state" onmousedown="$EDITORUI[&quot;edui90&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui90&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui90&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui90&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-combox-body edui-default"><div id="edui90_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui90&quot;]._onButtonClick(event, this);">字体</div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui90&quot;]._onArrowClick();"></div></div></div></div><div id="edui103" class="edui-box edui-combox edui-for-fontsize edui-default"><div title="字号" id="edui103_state" onmousedown="$EDITORUI[&quot;edui103&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui103&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui103&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui103&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-combox-body edui-default"><div id="edui103_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui103&quot;]._onButtonClick(event, this);">字号</div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui103&quot;]._onArrowClick();"></div></div></div></div><div id="edui120" class="edui-box edui-button edui-for-link edui-default"><div id="edui120_state" onmousedown="$EDITORUI[&quot;edui120&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui120&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui120&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui120&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui120_body" unselectable="on" title="超链接" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui120&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui120&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui121" class="edui-box edui-button edui-for-unlink edui-default"><div id="edui121_state" onmousedown="$EDITORUI[&quot;edui121&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui121&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui121&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui121&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui121_body" unselectable="on" title="取消链接" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui121&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui121&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui122" class="edui-box edui-separator  edui-default"></div><div id="edui123" class="edui-box edui-button edui-for-imagenone edui-default"><div id="edui123_state" onmousedown="$EDITORUI[&quot;edui123&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui123&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui123&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui123&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui123_body" unselectable="on" title="默认" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui123&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui123&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui124" class="edui-box edui-button edui-for-imageleft edui-default"><div id="edui124_state" onmousedown="$EDITORUI[&quot;edui124&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui124&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui124&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui124&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui124_body" unselectable="on" title="左浮动" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui124&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui124&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui125" class="edui-box edui-button edui-for-imageright edui-default"><div id="edui125_state" onmousedown="$EDITORUI[&quot;edui125&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui125&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui125&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui125&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui125_body" unselectable="on" title="右浮动" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui125&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui125&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui126" class="edui-box edui-button edui-for-imagecenter edui-default"><div id="edui126_state" onmousedown="$EDITORUI[&quot;edui126&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui126&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui126&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui126&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui126_body" unselectable="on" title="居中" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui126&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui126&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div><div class="edui-box edui-label edui-default"></div></div></div></div></div><div id="edui127" class="edui-box edui-separator  edui-default"></div><div id="edui128" class="edui-box edui-button edui-for-simpleupload edui-default"><div id="edui128_state" onmousedown="$EDITORUI[&quot;edui128&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui128&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui128&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui128&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui128_body" unselectable="on" title="单图上传" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui128&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui128&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui129" class="edui-box edui-splitbutton edui-for-emotion edui-default"><div title="表情" id="edui129_state" onmousedown="$EDITORUI[&quot;edui129&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui129&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui129&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui129&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-splitbutton-body edui-default"><div id="edui129_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui129&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui129&quot;]._onArrowClick();"></div></div></div></div><div id="edui131" class="edui-box edui-separator  edui-default"></div><div id="edui132" class="edui-box edui-button edui-for-horizontal edui-default"><div id="edui132_state" onmousedown="$EDITORUI[&quot;edui132&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui132&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui132&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui132&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-button-wrap edui-default"><div id="edui132_body" unselectable="on" title="分隔线" class="edui-button-body edui-default" onmousedown="return $EDITORUI[&quot;edui132&quot;]._onMouseDown(event, this);" onclick="return $EDITORUI[&quot;edui132&quot;]._onClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div></div></div></div><div id="edui133" class="edui-box edui-separator  edui-default"></div><div id="edui134" class="edui-box edui-splitbutton edui-for-inserttable edui-default"><div title="插入表格" id="edui134_state" onmousedown="$EDITORUI[&quot;edui134&quot;].Stateful_onMouseDown(event, this);" onmouseup="$EDITORUI[&quot;edui134&quot;].Stateful_onMouseUp(event, this);" onmouseover="$EDITORUI[&quot;edui134&quot;].Stateful_onMouseOver(event, this);" onmouseout="$EDITORUI[&quot;edui134&quot;].Stateful_onMouseOut(event, this);" class="edui-default"><div class="edui-splitbutton-body edui-default"><div id="edui134_button_body" class="edui-box edui-button-body edui-default" onclick="$EDITORUI[&quot;edui134&quot;]._onButtonClick(event, this);"><div class="edui-box edui-icon edui-default"></div></div><div class="edui-box edui-splitborder edui-default"></div><div class="edui-box edui-arrow edui-default" onclick="$EDITORUI[&quot;edui134&quot;]._onArrowClick();"></div></div></div></div></div></div></div><div id="edui1_toolbarmsg" class="edui-editor-toolbarmsg edui-default" style="display:none;"><div id="edui1_upload_dialog" class="edui-editor-toolbarmsg-upload edui-default" onclick="$EDITORUI[&quot;edui1&quot;].showWordImageDialog();">点击上传</div><div class="edui-editor-toolbarmsg-close edui-default" onclick="$EDITORUI[&quot;edui1&quot;].hideToolbarMsg();">x</div><div id="edui1_toolbarmsg_label" class="edui-editor-toolbarmsg-label edui-default"></div><div style="height:0;overflow:hidden;clear:both;" class="edui-default"></div></div><div id="edui1_message_holder" class="edui-editor-messageholder edui-default" style="top: 68px; z-index: 1000;"></div></div><div id="edui1_iframeholder" class="edui-editor-iframeholder edui-default" style="width: 836px; height: 400px; z-index: 999; overflow: visible;"><iframe id="ueditor_0" width="100%" height="100%" frameborder="0" src="javascript:void(function(){document.open();document.write(&quot;<!DOCTYPE html><html xmlns='http://www.w3.org/1999/xhtml' class='view' ><head><style type='text/css'>.view{padding:0;word-wrap:break-word;cursor:text;height:100%;/*文本域高度*/}
body{margin:8px;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}</style><link rel='stylesheet' type='text/css' href='http://222.68.185.164:8081/web/teacher/js/thirdplug/ueditor/themes/iframe.css'/></head><body class='view' ></body><script type='text/javascript'  id='_initialScript'>setTimeout(function(){editor = window.parent.UE.instants['ueditorInstant0'];editor._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);</script></html>&quot;);document.close();}())"></iframe></div><div id="edui1_bottombar" class="edui-editor-bottomContainer edui-default"><table class="edui-default"><tbody class="edui-default"><tr class="edui-default"><td id="edui1_elementpath" class="edui-editor-bottombar edui-default"><div class="edui-editor-breadcrumb">元素路径:</div></td><td id="edui1_wordcount" class="edui-editor-wordcount edui-default">字数统计</td><td id="edui1_scale" class="edui-editor-scale edui-default" style="display: none;"><div class="edui-editor-icon edui-default"></div></td></tr></tbody></table></div><div id="edui1_scalelayer" class="edui-default"></div></div></div>
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
                    <li class="selected" data-seq="1" id="tab1" onclick="ChangeTab(1)">
                        <p class="clearfix">
                            <i></i>
                            <input type="radio" name="selSdt" value="全部账号"></p>
                        <p>
                            <a href="javascript:void(0)">全部账号</a></p>
                    </li>
                    <li data-seq="2" id="tab2" onclick="ChangeTab(2)">
                        <p class="clearfix">
                            <i></i>
                            <input type="radio" name="selSdt" value="按比赛名称"></p>
                        <p>
                            <a href="javascript:void(0)">按比赛名称</a></p>
                    </li>
                    <li data-seq="3" id="tab3" onclick="ChangeTab(3)">
                        <p class="clearfix">
                            <i></i>
                            <input type="radio" name="selSdt" value="自定义班级"></p>
                        <p>
                            <a href="javascript:void(0)">自定义班级</a></p>
                    </li>
                    <li data-seq="4" id="tab4" onclick="ChangeTab(4)">
                        <p class="clearfix">
                            <i></i>
                            <input type="radio" name="selSdt" value="手动添加账号"></p>
                        <p>
                            <a href="javascript:void(0)">手动添加账号</a></p>
                    </li>
                </ul>
                <div class="tabContent">
                    <div class="range center clearfix" id="allAcc">
                        <p><i class="all"></i><span>允许全部账号接收</span></p>
                    </div>
                    <div class="range" id="macth">
                        <div class="compSelect clearfix">
                            <label>比赛名称</label><input type="text" class="fcInput" id="Drop_Match" readonly="">
                        </div>
                    </div>
                    <div class="range" id="selTb">
                        <div class="show_search clearfix">
                            <div class="filter clearfix">
                                <ul class="fl" id="filterList">
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
                                    <a href="javascript:void(0)" class="filSearch" onclick="filSearch()">搜索</a> <a href="javascript:void(0)" class="filReset">重置</a></div>
                                <div class="fr">
                                    <a href="javascript:void(0)" class="btn_show fr icon10">展开</a></div>
                            </div>
                        </div>
                        <div class="case_box clearfix hide">
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
                                    <input type="checkbox" name="showSel" id="selClass" onclick="ShowSelected()"><span>显示已勾选</span></p>
                            </div>
                            <div class="search fr clearfix">
                                <input type="text" placeholder="请输入学校名称" id="searchTxt"><a href="javascript:void(0)" class="btn_search" id="searchSecurity" onclick="SearchList()"></a></div>
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
                                        上一页</div>
                                    <div class="pageList">
                                        <ul>
                                        </ul>
                                    </div>
                                    <div class="pageDown" onclick="pageDown()">
                                        下一页</div>
                                </div>
                            </div>
                            <!--分页结束-->
                        </div>
                    </div>
                </div>
                <div class="creatBtns">
                    <p>
                        <a href="javascript:void(0)" id="crtNotice" onclick="SendNotice()">发布通知</a><a href="javascript:void(0)" id="saveNotice" onclick="SaveNotice()">保存草稿</a><a href="javascript:void(0)" id="cancel" onclick="CancelNotice()">取消</a></p>
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
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../assets/teacher/css/createNotices.css";
	@import "../../assets/teacher/css/pulldownList.css";
</style>
