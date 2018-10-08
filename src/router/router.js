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
const NoticeInfo  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/noticeInfo.vue')
const CreateNotices  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/createNotices.vue')
const SynGrade  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/synGrade.vue')
const Rankinglist  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/rankinglist.vue')
const PerCenter  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/perCenter.vue')
const Interaction  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/interaction.vue')
const InteractionInfo  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/interactionInfo.vue')
const SdBasic  = () => import(/* webpackChunkName: "teacher" */ '../components/teacher/sdBasic.vue')

/*学生端*/
const Student  = () => import(/* webpackChunkName: "student" */ '../components/student/common/wrapper.vue')
const StuHome  = () => import(/* webpackChunkName: "student" */ '../components/student/home/home.vue')
const Index  = () => import(/* webpackChunkName: "student" */ '../components/student/home/index.vue')
const Collect  = () => import(/* webpackChunkName: "student" */ '../components/student/home/collect.vue')
const Discussion  = () => import(/* webpackChunkName: "student" */ '../components/student/home/discussion.vue')
const Atme  = () => import(/* webpackChunkName: "student" */ '../components/student/home/atme.vue')
const Friends  = () => import(/* webpackChunkName: "student" */ '../components/student/home/friends.vue')
const Fans  = () => import(/* webpackChunkName: "student" */ '../components/student/home/fans.vue')
const Competition  = () => import(/* webpackChunkName: "student" */ '../components/student/competition/competition.vue')
const Practice  = () => import(/* webpackChunkName: "student" */ '../components/student/practice/practice.vue')
const Portfolio  = () => import(/* webpackChunkName: "student" */ '../components/student/practice/portfolio.vue')
const StuRankinglist  = () => import(/* webpackChunkName: "student" */ '../components/student/rankinglist/rankinglist.vue')
const Record  = () => import(/* webpackChunkName: "student" */ '../components/student/record/record.vue')
const StuNotices  = () => import(/* webpackChunkName: "student" */ '../components/student/notices/notices.vue')
const BasicInfo  = () => import(/* webpackChunkName: "student" */ '../components/student/basicInfo/basicInfo.vue')
const StuInteraction  = () => import(/* webpackChunkName: "student" */ '../components/student/interaction/interaction.vue')

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
          path: 'noticeInfo/:msgId',
          name: 'noticeInfo',
          component: NoticeInfo,
          meta: { title: '消息详情'}
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
          path: 'interactionInfo/:id',
          name: 'interactionInfo',
          component: InteractionInfo,
          meta: { title: '学生日志'}
        },
        {
          path: 'sdBasic/:id',
          name: 'sdBasic',
          component: SdBasic,
          meta: { title: '学生账户'}
        },
        {
          path: '**',
          redirect: '/teacher/compInfo'
        },
      ]
    },
    {
      path: '/student',
      name: 'student',
      component: Student,
      children: [
        {
          path: 'home',
          name: 'home',
          component: StuHome,
          children: [
            {
              path: 'index',
              name: 'index',
              component: Index,
              meta: { title: '首页'}
            },
            {
              path: 'collect',
              name: 'collect',
              component: Collect,
              meta: { title: '首页'}
            },
            {
              path: 'discussion',
              name: 'discussion',
              component: Discussion,
              meta: { title: '首页'}
            },
            {
              path: 'atme',
              name: 'atme',
              component: Atme,
              meta: { title: '首页'}
            },
            {
              path: 'friends',
              name: 'friends',
              component: Friends,
              meta: { title: '首页'}
            },
            {
              path: 'fans',
              name: 'fans',
              component: Fans,
              meta: { title: '首页'}
            },
            {
              path: '**',
              redirect: '/student/home/index'
            },
          ]
        },
        {
          path: 'competition',
          name: 'competition',
          component: Competition,
          meta: { title: '我的竞赛'}
        },
        {
          path: 'practice',
          name: 'practice',
          component: Practice,
          meta: { title: '我的练习'}
        },
        {
          path: 'portfolio',
          name: 'portfolio',
          component: Portfolio,
          meta: { title: '我的练习'}
        },
        {
          path: 'rankinglist',
          name: 'rankinglist',
          component: StuRankinglist,
          meta: { title: '龙虎榜'}
        },
        {
          path: 'record',
          name: 'record',
          component: Record,
          meta: { title: '我的战绩'}
        },
        {
          path: 'notices',
          name: 'notices',
          component: StuNotices,
          meta: { title: '我的通知'}
        },
        {
          path: 'basicInfo',
          name: 'basicInfo',
          component: BasicInfo,
          meta: { title: '基本信息'}
        },
        {
          path: 'interaction',
          name: 'interaction',
          component: StuInteraction,
          meta: { title: '互动天地'}
        },
        {
          path: '**',
          redirect: '/student/home/index'
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
