import Vue from 'vue'
import Router from 'vue-router'
//import Utils from '../js/utils.js'

const Login  = () => import(/* webpackChunkName: "common" */ '../components/common/login.vue')
const Register  = () => import(/* webpackChunkName: "common" */ '../components/common/register.vue')

/*教师端*/
const Teacher  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/common/wrapper.vue')
const Home  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/home.vue')
const Admins  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/admins.vue')
const EditAdmin  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/editAdmin.vue')
const SdAccounts  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/sdAccounts.vue')
const Turnover  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/turnover.vue')
const CompInfo  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/compInfo.vue')
const CreateComp  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/createComp.vue')
const SarTrading  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/sarTrading.vue')
const PrdManage  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/prdManage.vue')
const Dividends  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/dividends.vue')
const Coerce  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/coerce.vue')
const FundsManage  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/FundsManage.vue')
const Notices  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/notices.vue')
const CreateNotices  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/createNotices.vue')
const SynGrade  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/synGrade.vue')
const Rankinglist  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/rankinglist.vue')
const PerCenter  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/perCenter.vue')
const Interaction  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/interaction.vue')

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'selected',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: '欢迎登录'}
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { title: '欢迎注册'}
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: { title: '学校管理'}
        },
        {
          path: 'admins',
          name: 'admins',
          component: Admins,
          meta: { title: '二级管理员'}
        },
        {
          path: 'editAdmin',
          name: 'editAdmin',
          component: EditAdmin,
          meta: { title: '创建管理员'}
        },
        {
          path: 'sdAccounts',
          name: 'sdAccounts',
          component: SdAccounts,
          meta: { title: '账号详情'}
        },
        {
          path: 'turnover',
          name: 'turnover',
          component: Turnover,
          meta: { title: '持仓成交'}
        },
        {
          path: 'compInfo',
          name: 'compInfo',
          component: CompInfo,
          meta: { title: '比赛信息'}
        },
        {
          path: 'createComp',
          name: 'createComp',
          component: CreateComp,
          meta: { title: '创建比赛'}
        },
        {
          path: 'sarTrading',
          name: 'sarTrading',
          component: SarTrading,
          meta: { title: '商品管理'}
        },
        {
          path: 'prdManage',
          name: 'prdManage',
          component: PrdManage,
          meta: { title: 'T+0商品'}
        },
        {
          path: 'dividends',
          name: 'dividends',
          component: Dividends,
          meta: { title: '分红配送'}
        },
        {
          path: 'coerce',
          name: 'coerce',
          component: Coerce,
          meta: { title: '强制平仓'}
        },
        {
          path: 'fundsManage',
          name: 'fundsManage',
          component: FundsManage,
          meta: { title: '资金管理'}
        },
        {
          path: 'notices',
          name: 'notices',
          component: Notices,
          meta: { title: '通知消息'}
        },
        {
          path: 'createNotices',
          name: 'createNotices',
          component: CreateNotices,
          meta: { title: '创建通知'}
        },
        {
          path: 'synGrade',
          name: 'synGrade',
          component: SynGrade,
          meta: { title: '综合评分'}
        },
        {
          path: 'rankinglist',
          name: 'rankinglist',
          component: Rankinglist,
          meta: { title: '龙虎榜'}
        },
        {
          path: 'perCenter',
          name: 'perCenter',
          component: PerCenter,
          meta: { title: '个人信息'}
        },
        {
          path: 'interaction',
          name: 'interaction',
          component: Interaction,
          meta: { title: '互动天地'}
        },
        {
          path: '**',
          redirect: '/teacher/compInfo'
        },
      ]
    },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: AdminWrapper,
    //   children: [
    //     {
    //       path: 'reply/:id',
    //       name: 'reply',
    //       component: Reply,
    //       meta: { title: '教师点评'}
    //     },
    //     {
    //       path: 'userinfo',
    //       name: 'userinfo',
    //       component: UserInfo,
    //       meta: { title: '个人信息'}
    //     },
    //     {
    //       path: 'setting',
    //       name: 'setting',
    //       component: Setting,
    //       meta: { title: '个人设置'}
    //     }
    //   ]
    // },
    // {
    //   path: '/admin/home',
    //   name: 'adminHome',
    //   component: AdminHome,
    //   meta: { title: '个人中心'}
    // },
    // {
    //   path: '**',
    //   redirect: '/home'
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    document.title = to.meta.title || '高校金融实训平台'
    next()
})

export default router;
