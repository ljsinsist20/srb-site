import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _306cc47e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _47952644 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _4362b1cf = () => interopDefault(import('..\\pages\\about\\detail.vue' /* webpackChunkName: "pages/about/detail" */))
const _68055a2f = () => interopDefault(import('..\\pages\\about\\job.vue' /* webpackChunkName: "pages/about/job" */))
const _6fa87af2 = () => interopDefault(import('..\\pages\\about\\leader.vue' /* webpackChunkName: "pages/about/leader" */))
const _357f94d6 = () => interopDefault(import('..\\pages\\about\\notice.vue' /* webpackChunkName: "pages/about/notice" */))
const _40433e8c = () => interopDefault(import('..\\pages\\about\\partner.vue' /* webpackChunkName: "pages/about/partner" */))
const _3fba33a0 = () => interopDefault(import('..\\pages\\about\\policy.vue' /* webpackChunkName: "pages/about/policy" */))
const _0dfac98a = () => interopDefault(import('..\\pages\\about\\price.vue' /* webpackChunkName: "pages/about/price" */))
const _9f4695ca = () => interopDefault(import('..\\pages\\about\\profile.vue' /* webpackChunkName: "pages/about/profile" */))
const _1774759c = () => interopDefault(import('..\\pages\\about\\report.vue' /* webpackChunkName: "pages/about/report" */))
const _cfd4d14a = () => interopDefault(import('..\\pages\\about\\team.vue' /* webpackChunkName: "pages/about/team" */))
const _69a4fd60 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages/help" */))
const _19cc425a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _41a2ff7c = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _ee54762c = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _2a0b1458 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _50249f43 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _306cc47e,
    children: [{
      path: "",
      component: _47952644,
      name: "about"
    }, {
      path: "detail",
      component: _4362b1cf,
      name: "about-detail"
    }, {
      path: "job",
      component: _68055a2f,
      name: "about-job"
    }, {
      path: "leader",
      component: _6fa87af2,
      name: "about-leader"
    }, {
      path: "notice",
      component: _357f94d6,
      name: "about-notice"
    }, {
      path: "partner",
      component: _40433e8c,
      name: "about-partner"
    }, {
      path: "policy",
      component: _3fba33a0,
      name: "about-policy"
    }, {
      path: "price",
      component: _0dfac98a,
      name: "about-price"
    }, {
      path: "profile",
      component: _9f4695ca,
      name: "about-profile"
    }, {
      path: "report",
      component: _1774759c,
      name: "about-report"
    }, {
      path: "team",
      component: _cfd4d14a,
      name: "about-team"
    }]
  }, {
    path: "/help",
    component: _69a4fd60,
    name: "help"
  }, {
    path: "/login",
    component: _19cc425a,
    name: "login"
  }, {
    path: "/register",
    component: _41a2ff7c,
    name: "register"
  }, {
    path: "/user",
    component: _ee54762c,
    children: [{
      path: "",
      component: _2a0b1458,
      name: "user"
    }]
  }, {
    path: "/",
    component: _50249f43,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
