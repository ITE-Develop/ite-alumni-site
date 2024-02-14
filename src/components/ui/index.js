import { defineAsyncComponent } from 'vue';


export const SbModal = defineAsyncComponent(() => import('./Modal.vue'));

export const SbCookieOffcanvas = defineAsyncComponent(() => import('./CookieOffcanvas.vue'));

export { default as SideBar } from './SideBar.vue';
export { default as TopNavbar } from './TopNarbar.vue';
export { default as News } from './News.vue';