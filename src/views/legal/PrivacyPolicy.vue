
<script setup>
  import { useMetaTag } from "@/composables/index.js";
  import ENV from "@/config/env.js";
  import {onMounted} from "vue";

  const { setTitle } = useMetaTag();
  setTitle("プライバシーポリシー");

  const prefix = ENV.APP_PREFIX;
  const classWrapper = {
    [`${prefix}-legal-wrapper`]: true
  };

  onMounted(() => {
    const modalBackdrop = document.querySelector('.offcanvas-backdrop');
    if (modalBackdrop) {
      modalBackdrop.remove();
    }
  });
</script>

<template>
  <main :class="classWrapper">
    <div class="wrapper-inner">
      <p>
        「防災サービス」は、一般社団法人 竹芝エリアマネジメント、
        東急不動産 株式会社よりサービス提供し、ソフトバンク 株式会社が開発・運用しています。<br><br>
        本アプリケーション・プライバシーポリシーは、「防災サービス」から取得・
        アプリ内で利用される利用者情報の取り扱いについて説明するものです。
      </p>

      <h2>第1条：端末の外部に送信される利用者情報と利用目的</h2>
      <p>
        ソフトバンク株式会社（以下、当社といいます）は、本アプリケーションにおいて、
        アプリケーション経由で自動的に取得する情報（以下「利用者情報」といいます）を、
        以下の利用目的の範囲で利用する場合があります。<br><br>
        ■利用者情報：「防災サービス」へのアクセス状況または当社アプリの利用状況を顧客識別IDで関連付けた利用者のモバイルデバイス等にデータとして保存された識別符号（Cookie）<br>
        ■利用目的：本アプリケーションの改善、不具合の修正、今後の防災サービス検討等のための分析（※）<br>
        ■取得方法：本アプリケーションによる自動取得<br><br>
        利用者情報は当社の管理するサーバシステム（日本国）に格納されます。
        個人情報保護に関する制度は、個人情報保護委員会のサイト
        （<a href="https://www.ppc.go.jp/personalinfo/" target="_blank">https://<br>www.ppc.go.jp/personalinfo</a>）
        をご参照ください。<br><br>
        ※分析情報は、ソフトバンク 株式会社と一般社団法人 竹芝エリアマネジメント、
        東急不動産 株式会社で共有します（個人を特定する情報を含みません）
      </p>

      <h2>第2条：情報収集モジュールによる利用者情報の取得および利用目的</h2>
      <p>
        当社は、以下の情報収集モジュールにより利用者情報を取得し利用いたします。<br>
        情報収集モジュールとは、アプリ本体とは独立した第三者が提供するアプリの利用状況を解析するプログラムです。<br><br>
        ■情報収集モジュール名：Google Analytics™ <br>
        ■情報収集モジュール提供者：Google LLC<br>
        ■利用者情報：本アプリケーション起動回数、本アプリケーション内の各コンテンツ表示回数、Cookie等　※個人を特定する情報を含みません<br>
        ■利用目的：<br>
        ・本アプリケーションの利用状況を把握するため<br>
        ・当社サービス等の品質向上、新しいサービス等の開発、各種調査・分析に役立てるため<br>
        ■情報収集モジュール提供者による利用者情報の利用：<br>
        ・利用者情報はGoogleの管理するサーバシステム（米国）に格納されます。
        Googleおよびその100%子会社は、当該利用者情報をGoogleが定める利用目的の範囲で利用します。
        情報収集モジュールの詳細および利用目的は、Googleプライバシーポリシー
        （<a href="https://policies.google.com/privacy" target="_blank">https://<br>policies.google.com/privacy</a>） <br>
        および「ユーザーがGoogleパートナーのサイトやアプリを使用する際のGoogleによるデータ使用」<br>
        （<a href="https://policies.google.com/technologies/partner-sites" target="_blank">https://policies.google.com/technologies/<br>partner-sites</a>）
        をご参照ください。<br>
        ・米国の個人情報保護制度：個人情報保護委員会の調査結果
        （<a href="https://www.ppc.go.jp/files/pdf/USA_report.pdf" target="_blank">https://www.ppc.go.jp/files/pdf/<br>USA_report.pdf</a>）
        をご参照ください。<br><br>
        ※アプリケーション・プライバシーポリシーの末尾：Google Analytics™ は、Google LLCの商標または登録商標です。
      </p>

      <h2>第3条：利用者情報の利用の選択</h2>
      <p>
        本アプリケーションでは、情報収集モジュールによる利用者情報の取得、
        利用の設定変更をする手段を提供しておりません。これらを停止したい場合には、
        「Googleアナリティクスオプトアウトアドオン」（<a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank">https://tools.google.com/dlpage/gaoptout?<br>hl=ja</a>）をご利用ください。
        なお、すでに取得済みの利用者情報については、当社は、第1条に定める範囲で引き続き利用することがあります。
      </p>

      <h2>第4条：本アプリケーション・プライバ<br>シーポリシーの変更</h2>
      <p>
        本アプリケーション・プライバシーポリシーの内容は、法令の変更や当社の都合により、
        お客さまへの通知なしに変更される場合があります。
      </p>

      <h2>第5条：利用者情報に関するお問合せ</h2>
      <p>
        本アプリケーションおよび本サービスにおいて、お客様から取得した利用者情報の削除やその他のお問い合わせ窓口は以下のとおりです。<br>
        パーソナルデータお客さま相談窓口 <br>
        <a href="https://www.softbank.jp/privacy/management/procedure/" target="_blank">https://www.softbank.jp/privacy/management/<br>procedure/</a>
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/theme/default/term";
</style>