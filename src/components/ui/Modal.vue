<script setup>
import { makeModalProps } from "@/composables/useProps";
import { Modal } from "bootstrap";
import {onUnmounted} from 'vue';

const props = defineProps({
  ...makeModalProps()
});

const emit = defineEmits(['on-confirm', 'on-cancel']);

const onConfirmClick = () => {
  emit('on-confirm');
}

const onCancelClick = () => {
  emit('on-cancel');
}

const show = () => {
  Modal.getOrCreateInstance(
    document.querySelector("#" + props.id)
  ).show();
};

const hide = () => {
  Modal.getOrCreateInstance(
    document.querySelector("#" + props.id)
  ).hide();
};

const forceClose = () => {
  document.querySelector("#" + props.id)?.remove();
}

const removeBackdrop = () => {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.remove();
  }
}

onUnmounted(() => {
  forceClose();
  removeBackdrop();
})

defineExpose({
  show, hide, removeBackdrop
});

</script>

<template>
  <div :id="id" class="modal fade" data-bs-backdrop="static"
       data-bs-keyboard="false"
       tabindex="-1"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header-term" v-if="hasHeader">
          <slot name="header" />
        </div>
        <div class="modal-body-term">
          <slot name="body">
            <p class="body-text-term"/>
          </slot>
        </div>
        <slot name="checkbox" />
        <div v-if="hasFooter">
          <slot name="footer">
            <button type="button" class="btn btn-primary mb-2"  @click="onConfirmClick" data-dismiss="modal">受け入れる</button>
            <div class="cancel-modal">同意しない場合は右上の×ボタンからお戻りください。</div>
          </slot>
        </div>
          <div>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.modal-header-term{
  margin-top: $BasicRegular;
  margin-bottom: 0;
}

.modal-body-term{
  margin: $BasicRegular $BasicRegular 0 $BasicRegular;
}

.modal-content{
  margin: 0 auto;
  width: 343px;
  border-radius: 16px;
  background-image: linear-gradient(270deg, #EFF4F9 0%, #FFF 100%);
}

</style>
