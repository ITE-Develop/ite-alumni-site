<script setup>
import {onBeforeMount, onMounted, ref} from 'vue';
const menu = [
  { name: "Home", link: "/" },
  { name: "Student", link: "/student" },
  {name: "Lecturer", link: "/lecturer"},
  {name: "News", link: "/news"},
  {name: "Article", link: "/article"},
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
  <nav  class="top-navbar" :class="{ 'top-navbar-scrolling': isScrolling }">
    <i class="ite-icon ite-icon-ite-alumni"></i>
    <div class="d-flex gap-5 align-items-center">
      <div v-for="item in menu" :key="item.name"
           :class="{ 'active': item.link === currentRoute }" class="top-text">{{ item.name }}</div>
      <div class="top-menu d-flex align-items-center gap-2" data-bs-toggle="offcanvas"
           href="#offcanvasDrawer" role="button" aria-controls="offcanvasDrawer">
        <div class="top-menu-text">Menu</div>
        <i class="ite-icon ite-icon-menu"></i>
      </div>
    </div>
  </nav>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDrawer" aria-labelledby="offcanvasDrawerLabel">
    <div class="d-flex justify-content-between p-3">
      <h5 class="offcanvas-title" id="offcanvasDrawerLabel">Offcanvas</h5>
      <button type="button" class="btn-close text-reset text-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/scss/components/_navbar.scss");
.top-navbar-scrolling {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #014164;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>