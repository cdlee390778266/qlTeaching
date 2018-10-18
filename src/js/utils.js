import axios from 'axios'
import CONFIG from './config'
import store from '../store/vuex'
import $ from 'jquery'
import layer from '../assets/common/js/layer/layer.js'
import { Loading } from 'element-ui';

var Utils = {}

Utils.$http = axios;

//Utils.$store = store;

Utils.CONFIG = CONFIG;

Utils.ajaxCount = 0;

/**
 * Gets the tip text 获取提示文字
 *
 * @param      {<string>}  type    提示类型
 * @param      {<string>}  code    提示代码
 * @return     {<string>}  提示文字
 */
Utils.getTipText = function(type , code) {
	if(!type || !code) return;
	return CONFIG[type][code] || '';
}

/**
 * Shows the tip. 显示提示
 *
 * @param      {<string>}  type    	   提示框类型
 * @param      {<string>}  textType    提示文字类型
 * @param      {<string>}  code        提示代码
 */

Utils.showTip = function(type, textType, code, text) {
	
}
// Utils.showTip = function(type, textType, code, text) {
// 	Message({
//       showClose: true,
//       message: text ? text : Utils.getTipText(textType, code),
//       type: type ? type: 'success'
//     })
// }

/**
 * Hides the tip. 关闭提示框
 */
Utils.hideTip = function() {
	
}

/**
 * Shows the dialog.	弹出框
 *
 * @param      {<type>}  type      弹出框类型
 * @param      {<type>}  textType  弹出文字类型
 * @param      {<type>}  code      弹出文字代码
 */
Utils.showDialog = function(opts) {
	layer.open(opts);
}

/**
 * Closes all dialog. 关闭所有模态框
 */
Utils.closeAllDialog = function() {
	layer.closeAll();
}

/**
 * Gets the json. 获取json数据
 *
 * @param      {<type>}    url      url
 * @param      {Function}  success  成功回调
 * @param      {Function}  error    失败回调
 * @param      {string}    params   参数
 */
Utils.getJson = function(url, success, error, params = {}, isShowPop=false, urlParams) {
	if(!url) return;
	var loadingInstance;
	if(isShowPop) {
		loadingInstance = Loading.service({
			fullscreen: true,
			customClass: 'loading page-loading'
		});
	}
	//Utils.ajaxCount++;
	Utils.$http({
			method: 'post',
			url: url,
			timeout: 5000,
			data: params,
			params: urlParams
		})
		.then(function(res){
			// if(!(--Utils.ajaxCount) && isShowPop) {
			// 	loadingInstance.close()
			// }
			if(isShowPop) {
				loadingInstance.close()
			}
            if(typeof success == 'function') success(res.data)
        }, function(err){
        	if(isShowPop) {
        		loadingInstance.close();
        	}
        	Utils.showTip('error', 'error', '-1');
            if(typeof error == 'function') error(err)
        })
}

/**
 * Sets the user.设置登录用户
 *
 * @param      {<type>}  user    The user
 */
Utils.setUser = function(user) {
	store.dispatch('setUser', Object.assign({}, user))
}

/**
 * Gets the user.获取登录用户信息
 *
 * @return     {<type>}  The user.
 */
Utils.getUser = function() {
	return store.getters.getUser;
}

/**
 * Sets the login.设置是否登录
 *
 * @param      {boolean}  isLogin  Indicates if login
 */
Utils.setLogin = function(isLogin) {
	store.dispatch('setLogin', isLogin)
}

/**
 * Gets the login.获取是否登录
 *
 * @return     {<type>}  The login.
 */
Utils.getLogin = function() {
	return store.getters.getLogin;
}

export default Utils