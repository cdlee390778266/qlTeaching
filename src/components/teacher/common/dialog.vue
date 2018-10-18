<template>
	<div>
	    <h3><span>{{title}}</span><a href="javascript:void(0)" class="closed" @click="close"></a></h3>
	    <slot></slot>
	   	<div class="btns">
		<a href="javascript:void(0)" class="btn addBtn" @click="confirm">{{ confirmText || '确定'}}</a>
		<a href="javascript:void(0)" class="btn cancel" @click="close">取消</a>
	</div>
	</div>
</template>
<script>
	export default {
		props: ['title', 'confirmText'],
		data() {
			return {
				
			}
		},
		methods: {
			close() {
				this.$utils.closeAllDialog();
			},
			confirm() {
				this.$emit('confirm');
			}
		}
	}
</script>
