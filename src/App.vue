<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
	@import './assets/common/css/reset.css';
	@import './assets/common/js/layer/skin/layer.css';
	.fl {
		float: left;
	}
	.el-table {
		thead {
			th {
				background: #608fbf;
			    color: #FFF;
			    font-size: 14px;
			    border-right: 1px solid #999;
			    text-align: center;
			}
		}
		td {
			text-align: center;
		}
	}
	.el-checkbox__inner {
		width: 16px;
		height: 16px;
		border: 1px solid #c6c8cc;
	}
	.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
		background: #fff;
		border-color: #c6c8cc;
		width: 16px;
		height: 16px;
	}
	.el-checkbox__inner::after {
		top: 1px;
		left: 4px;
		border-color: #767575;
		border-width: 2px;
	}
	.el-date-picker {
		z-index: 9999999999999 !important;
	}
	.faculty {
		.el-loading-mask {
			background: rgba(0, 0, 0, 0);
		}
		.el-loading-spinner {
			height: 90px;
			background: url(./assets/teacher/images/ajax-loader.gif) no-repeat center;
			svg {
				display: none;
			}
		}
	}
	.ql-ck {
    width: 100px;
    margin-left: 15px;
    .el-checkbox__inner {
      margin-right: 5px;
    }
  }

  .setBtn, .edit {
    margin: 0 2px;
    float: left;
    i {
      position: relative;
      top: -3px;
    }
  }

  .ql-date {
    margin-left: 5px;
    display: inline-block;
    width: 142px !important;
    .el-input__inner {
      height: 30px;
      line-height: 30px;
      color: #555;
      border-radius: 0;
    }
    .el-icon-date {
      color: rgba(166, 166, 166, .3);
    }
  }
  /*分页开始*/
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #1369bf;
    color: #fff;
    border: 1px solid #1369bf;
  }
  .el-pager li.active+li{
    border-left: 1px solid #ccc;
  }
  .btn-prev:before{
    content: "<<  上一页";
    float: left;
  }
  .btn-next:before{
    content: "下一页  >>";
  }
  .el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon{
    display: none;
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev{
    padding: 0 4px;
    border: 1px solid #ccc;
    color: #999;
  }
  .pageGro .el-pagination{
    margin: -4px 0 0 -4px;
  }
  .pageGro .pageTotal{
    margin-right: 8px !important;
  }
  .el-pagination.is-background .el-pager li{
    margin: 0 2px;
  }
  .ql-error {
  	border: 1px solid rgb(255, 0, 0);
  }
  .details .remark {
  	display: none;
  }
  .flt .ql-show {
  	display: inline !important;
  }
  .section {
  	.el-tabs__header {
  		height: 44px;
  		line-height: 44px;
  		background: #F5F5F5;
  		padding-left: 10px;
  	}
  	.el-tabs__item {
  		color: #0064b5;
  		font-size: 15px;
  		font-weight: bold;
  		text-align: center;
  		box-sizing: border-box;
  	}
  	.el-tabs__active-bar {
  		background-color: #0064b5;
  	}
  	.el-tabs__nav-wrap::after {
  		background-color: #ddd;
  		height: 1px;
  	}
  }
  /*分页结束*/
  /*下拉框开始*/
  .el-input__suffix, .el-popper[x-placement^=bottom] .popper__arrow{
    display: none;
  }
  .el-scrollbar{
    overflow-y: scroll;
  }
  .el-select>.el-input>input{
    height: 36px;
    border-radius: 0;
    width: 740px;
  }
  .el-select-dropdown{
    top:1143px !important;
  }
  .el-select .el-input__inner:focus,
  .el-select .el-input.is-focus .el-input__inner{
    border-color: #ddd;
  }
  .el-select-dropdown__item.selected{
    color: #444;
    font-weight: normal;
  }
  .el-select-dropdown__list{
    padding: 0;
  }
  .el-select-dropdown__item{
    padding: 0 10px;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
    background: #4595e5;
    color: #fff;
  }
  /*下拉框开始*/
  /*表格开始*/
  .el-table thead th{
    border-right: none !important;
  }
  .faculty{
    margin-bottom: 0 !important;
  }
  .el-table td, .el-table th.is-leaf{
    border-bottom: none;
  }
  .el-table__row--striped {
    background: rgb(242, 242, 242) !important;
  }
  .el-table td, .el-table th{
    padding: 9px 0;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #D2E5F7;
  }
  /*表格结束*/
</style>
