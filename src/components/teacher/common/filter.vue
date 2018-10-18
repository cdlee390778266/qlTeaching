<template>
	<div>
		<div class="show_search clearfix">
            <div class="filter clearfix">
                <ul class="fl" id="filterList">
                    <li v-for="item in filter">
                        <a href="javascript:void(0)">{{item.txt}}</a>
                        <div class="menu">
                            <template v-if="item.checkedArr && item.checkedArr.length">
                                <span v-for="(a, index) in item.checkedArr" :key="index">{{a.txt}}</span>
                            </template>
                            <template v-else>
                                <span>全部</span>
                            </template>
                        </div>
                    </li>
                </ul>
                <div class="btns fl">
                    <a href="javascript:void(0)" class="filSearch" @click="search">搜索</a>
                    <a href="javascript:void(0)" class="filReset" @click="reset">重置</a>
                </div>
                <div class="fr">
                    <a href="javascript:void(0)" class="btn_show fr icon10" @click="toggle">{{isShowCaseBox ? '关闭' : '展开'}}</a>
                </div>
            </div>
        </div>
        <div class="case_box clearfix" :class="{show: isShowCaseBox, hide: !isShowCaseBox}">
            <div class="select_scheme">
                <ul class="scheme">
                    <li v-for="item in filter">
                        <div class="itemName">
                            <a href="javascript:void(0)" @click="showFilterDialog(item)">{{item.txt}}</a>
                        </div>
                        <div class="items">
                            <template v-if="item.checkedArr && item.checkedArr.length">
                                <span v-for="(a, index) in item.checkedArr" :key="index">{{a.txt}}</span>
                            </template>
                            <template v-else>
                                <span>全部</span>
                            </template>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--选择区域开始-->
        <ql-dialog class="flt caseflt" :title="'选择'+ dialogItems.txt" @confirm="confirm">
            <div class="top clearfix">
                <p>
                    <input type="checkbox" name="checkedArr" value="all" v-model="checkAllObj.isChecked">
                    <i></i>
                    <span>全选</span>
                </p>
            </div>
            <div class="detail clearfix">
                <p  v-for="(item, index) in dialogItems.children" :key="item.value">
                    <input type="checkbox" name="checkedArr" :value="item" v-model="checkedArr">
                    <i></i>
                    <span>{{item.txt}}</span>
                </p>
            </div>
        </ql-dialog>
        <!--选择区域结束-->
	</div>
</template>
<script>
	export default {
        props: ['filter'],
		data() {
			return {
				isShowCaseBox: false,
                dialogItems: {},
                checkAllObj: {
                    isChecked: false,
                    value: ''
                },
                checkedArr: []
			}
		},
        methods: {
            toggle() {
                this.isShowCaseBox = !this.isShowCaseBox;
            },
            showFilterDialog(items) {
                this.dialogItems = items;
                this.checkedArr = items.checkedArr || [];
                this.checkAllObj.isChecked = false;
                console.log(this.checkedArr);
                this.$utils.showDialog({
                    type: 1,
                    title: false,
                    scrollbar: false,
                    closeBtn: 0,
                    area: ['710px', 'auto'],
                    shadeClose: true,
                    content: $('.caseflt')
                })
            },
            confirm() {
                this.$set(this.dialogItems, 'checkedArr', this.checkedArr.concat());
                this.$utils.closeAllDialog();
            },
            search() {
                this.$emit('filterSearch', 6);
            },
            reset() {
                this.filter.forEach(function(item) {
                    item.checkedArr = [];
                })
            }
        },
        watch: {
            checkAllObj: {
                handler(newValue, oldValue) {
                    if(newValue.isChecked) {
                        this.checkedArr = this.dialogItems.children;
                    }else {
                        this.checkedArr = [];
                    }
                },
                deep: true
            }
        }
	}
</script>
<style lang="scss">
	@import "../../../assets/teacher/css/filter.css";
</style>
