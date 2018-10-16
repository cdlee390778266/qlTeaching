<template>
	<p>
		<i :class="{selected: ischecked}"></i>
        <input type="checkbox" name="district" :value="data.value" @change="toggleCheck">
        <span>{{data.txt}}</span>
	</p>
</template>
<script>
	export default {
		props: ['data', 'isChecked'],
		data() {
			return {
				ischecked: this.isChecked || false
			}
		},
		methods: {
			toggleCheck() {
				/*this.ischecked = !this.ischecked;
				this.$emit('checked', this.data);*/
			}
		}
	}
</script>
<style scoped lang="scss">
</style>
