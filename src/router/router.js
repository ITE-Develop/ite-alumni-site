export default [
  {
    path: "/",
    name: "home",
    children: [
      {
        path: "",
        name: "tokyu.top",
        component: () => import("@views/Index.vue"),
      },
      {
        path: "harzard-map",
        name: "tokyu.map",
        component: () => import("@views/tokyu/HarzardMap.vue"),
      },
      {
        path: 'dp-privacy',
        name: "tokyu.disaster-prevention",
        component: () => import("@/views/legal/DisasterPrevention.vue"),
      },
      {
        path: 'sns',
        name: "tokyu.disaster-post",
        component: () => import("@views/tokyu/DisasterPost.vue"),
      },
      {
        path: "trains",
        name: "tokyu.train-info",
        component: () => import("@views/tokyu/train/TrainInfo.vue"),
      }
    ]
  },
]
