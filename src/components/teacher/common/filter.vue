<template>
	<div>
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
                </ul>
                <div class="btns fl">
                    <a href="javascript:void(0)" class="filSearch">搜索</a> <a href="javascript:void(0)"
                        class="filReset">重置</a>
                </div>
                <div class="fr">
                    <a href="javascript:void(0)" class="btn_show fr icon10">展开</a>
                </div>
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
                </ul>
            </div>
        </div>
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
	@import "../../../assets/teacher/css/filter.css";
</style>
