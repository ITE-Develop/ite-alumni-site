export default [
  {
    path: "/",
    name: "home",
    children: [
      {
        path: "",
        name: "tokyu.top",
        component: () => import("@views/Index.vue"),
      }
    ]
  },
]
