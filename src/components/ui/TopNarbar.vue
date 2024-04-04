<script setup>
import {onBeforeMount, onMounted, ref} from 'vue';
const menu = [
  { name: "Home", link: "/" },
  { name: "Student", link: "/student" },
  {name: "Lecturer", link: "/lecturer"},
  {name: "News", link: "/news"},
  {name: "Projects", link: "/projects"},
  {name: "About", link: "/about"},
  {name: "Contacts", link: "/contacts"},
];
let isScrolling = false;
let lastScrollTop = 0;

const handleScroll = () => {
  console.log('scrolling')
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    isScrolling = false;
  } else {
    isScrolling = true;
  }
  lastScrollTop = st <= 0 ? 0 : st;
};

const currentRoute = ref(window.location.pathname);

onBeforeMount(() => {
window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
   window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="top-navbar" :class="{ 'top-navbar-scrolling': isScrolling }">
    <i class="ite-icon ite-icon-ite-alumni"></i>
    <div class="d-flex gap-5 align-items-center">
      <div v-for="item in menu" :key="item.name"
           :class="{ 'active': item.link === currentRoute }" class="top-text">{{ item.name }}
      </div>
      <div class="top-menu d-flex align-items-center gap-2" data-bs-toggle="offcanvas"
           href="#offcanvasDrawer" role="button" aria-controls="offcanvasDrawer">
        <div class="top-menu-text">Menu</div>
        <i class="ite-icon ite-icon-menu"></i>
      </div>
    </div>
  </nav>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDrawer" aria-labelledby="offcanvasDrawerLabel">
    <div class="d-flex justify-content-between p-3">
      <h5 class="offcanvas-title" id="offcanvasDrawerLabel">Menu</h5>
      <div type="button" class="btn-close h1 text-reset" data-bs-dismiss="offcanvas" aria-label="Close">×</div>
    </div>
    <div class="offcanvas-body">
      <div class="d-flex flex-column gap-4 align-items-center">
        <div v-for="item in menu" :key="item.name"
             :class="{ 'active': item.link === currentRoute }" class="top-text-offcanvas">{{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/scss/components/_navbar.scss");
</style>