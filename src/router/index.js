import { createRouter, createWebHistory } from "vue-router";
import guards from "./guards";

import tokyu from "./router.js";

const routes = [
  {
    path: "/",
    name: "default",
    redirect: '/home',
    component: () => import("@views/layout/DefaultLayout.vue"),
    children: [
      ...tokyu
    ]
  },
  {
    path: "/legal/term-of-use",
    name: "legal.term-of-use",
    component: () => import("@/views/legal/TermOfUse.vue"),
  },
  {
    path: "/legal/privacy-policy",
    name: "legal.privacy-policy",
    component: () => import("@/views/legal/PrivacyPolicy.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@views/errors/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

router.beforeEach(guards.beforeEach);
router.beforeResolve(guards.beforeResolve);
router.afterEach(guards.afterEach);

export default router;
