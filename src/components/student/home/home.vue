<template>
	<div>
		<div class="left_side fl">
            <h3><span>基本信息</span></h3>
            <div class="base_info">
                <dl>
                    <dt>
                        <div class="hd">
                        	<img id="img_header" alt="" width="83" height="83" src="http://222.68.185.164:8081/web/uoloadFiles/student/default.jpg">
                        </div>
                        <p class="name">
                        	<span id="span_nickname">
                        		<u title="000000001001">000000001001</u>
                        	</span>
                        </p>
                    </dt>
                    <dd>
                        <p>
                        	<label>学校：</label>
                        	<span id="span_school">
                        		<u title="成都乾隆财经大学">成都乾隆财经大学</u>
                        	</span>
                        </p>
                        <p>
                        	<label>学院：</label>
                        	<span id="span_college">
                        		<u title="金融学院">金融学院</u>
                        	</span>
                        </p>
                        <p>
                        	<label>学系：</label>
                        	<span id="span_department">
                        		<u title="国际贸易系">国际贸易系</u>
                        	</span>
                        </p>
                        <p>
                        	<label>班级：</label>
                        	<span id="span_class">
                        		<u title="西方经济学一班">西方经济学一班</u>
                        	</span>
                        </p>
                    </dd>
                </dl>
            </div>
            <div class="links">
                <ul>
                    <li class="LinkIcon01"><router-link to="/student/home/index">首页</router-link></li>
                    <li class="LinkIcon02"><router-link to="/student/home/collect">收藏</router-link></li>
                    <li class="LinkIcon03"><router-link to="/student/home/discussion">我的讨论</router-link></li>
                    <li class="LinkIcon04"><router-link to="/student/home/atme">提到我的</router-link></li>
                    <li class="LinkIcon05"><router-link to="/student/home/friends"><span id="span_gzcount">关注(0)</span></router-link></li>
                    <li class="LinkIcon06"><router-link to="/student/home/fans"><span id="span_fscount">粉丝(0)</span></router-link></li>
                </ul>
            </div>
        </div>
        <div class="right_side index fr">
        	<router-view/>
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
<style lang="scss">
	@import "../../../assets/student/css/index.css";
	@import "../../../assets/student/css/link.css";
</style>
