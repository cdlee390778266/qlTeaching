<template>
	<div>
		<div class="flt promptFlt" opertype="DEL">
			<h3>
				<span class="fl">提示</span>
				<a href="javascript:void(0)" class="closed" @click="close"></a>
			</h3>
			<div class="detail">
				<p class="center"><i></i><span>确定删除吗?</span></p>
			</div>
			<div class="btns">
				<a href="javascript:void(0)" class="btn confirm" @click="confirm">确定</a>
				<a href="javascript:void(0)" class="btn cancel" @click="close">取消</a>
			</div>
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
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			close() {
				this.$utils.closeAllDialog();
			},
			confirm() {
				this.$utils.closeAllDialog();
				this.$emit('confirm');
			}
		}
	}
</script>
