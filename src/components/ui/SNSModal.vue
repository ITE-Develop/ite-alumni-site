<script setup>
import {SbModal} from "@/components/ui/index.js";
</script>
<template>
  <SbModal id="SNSModalToggle" ref="modalRef" :has-header="false" :has-footer="false">
    <template #body>
      <div class="modal-header justify-content-center">
        <h2 class="modal-title text-center" id="SNSModalToggleLabel">SNS注意点</h2>
        <p class="sb-icon sb-icon-sns-close mb-0" data-bs-dismiss="modal"></p>
      </div>
      <div class="modal-body">
        SNS投稿にはデマや誤った情報が含まれている可能性があります。SNS投稿のみを鵜呑みにせず、報道や行政機関のウェブサイト等の信頼できる情報源も合わせて確認しましょう。
      </div>
    </template>
  </SbModal>
</template>

  <style lang="scss" scoped>
  
    .modal-content {
      background-image: $light-gradient;
      width: 343px;
      height: 159px;
      border-radius: $border-radius-xlarge;
      padding: 16px;

      .modal-header {
        padding: 0 0 16px 0;

        p {
          position: absolute;
          right: 16px;
          top: 16px;
          cursor: pointer;
        }

        h2 {
          font-weight: $font-weight-bold;
          font-size: $h2-font-size;
          line-height: $line-height-lg;
        }
      }
      .modal-body {
        padding: 0;
        font-weight: $font-weight-normal;
        font-size: $bold-font-size;
        line-height: 21px;
        margin-bottom: $BasicRegular;
      }
    }
  </style>
  