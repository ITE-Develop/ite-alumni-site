import { defineAsyncComponent } from 'vue';

export const SbMap = defineAsyncComponent(() => import('./Mapbox.vue'));
export const SbModal = defineAsyncComponent(() => import('./Modal.vue'));
export const SbSNSModal = defineAsyncComponent(() => import('./SNSModal.vue'));
export const SbOffcanvas = defineAsyncComponent(() => import('./Offcanvas.vue'));
export const SbLegend = defineAsyncComponent(() => import('./Legend.vue'));
export const SbDisasterPrevention = defineAsyncComponent(() => import('./DisasterPrevention.vue'));
export const SbDisasterInformation = defineAsyncComponent(() => import('./DisasterInformation.vue'));
export const SbCookieOffcanvas = defineAsyncComponent(() => import('./CookieOffcanvas.vue'));
export const SbEvacuateHelpBottomsheet = defineAsyncComponent(() => import('./OffcanvasComponents/EvacuationBottomsheet/EvacuateHelpBottomsheet.vue'));
export const SbEvacuateSettingBottomsheet = defineAsyncComponent(() => import('./OffcanvasComponents/EvacuationBottomsheet/EvacuateSettingBottomsheet.vue'));

export { default as SbDisasterPostList } from './DisasterPostList.vue';
export { default as SbTrainInfo } from './TrainInfo.vue';
export { default as SbTrainStatus } from './Train.vue';
export { default as SbTwitterPost } from './Twitter.vue';

export { default as SideBar } from './SideBar.vue';
export { default as TopNavbar } from './TopNarbar.vue';
export { default as SecondNavbar } from './SecondNavbar.vue';