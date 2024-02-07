<template>
  <div class="container">
    <div class="d-flex top-navbar justify-content-between">
      <div class="col-md-2 logo">
        <i class="ite-icon ite-icon-ite-alumni"/>
      </div>
      <div class="contact d-flex">
        <div class="d-flex">
          <i class="ite-icon ite-icon-call me-3"/>
          <div class="d-flex flex-column call-phone">
            <div class="call">Call</div>
            <div class="phone-number">096 328 499 5</div>
          </div>
        </div>
        <div class="d-flex">
          <i class="ite-icon ite-icon-mail me-3"/>
          <div class="d-flex flex-column call-phone">
            <div class="call">Email</div>
            <div class="phone-number">fe.info@rupp.edu.kh</div>
          </div>
        </div>
        <div class="d-flex">
          <i class="ite-icon ite-icon-location me-3"/>
          <div class="d-flex flex-column call-phone">
            <div class="call">Address</div>
            <div class="phone-number">Toul Kork, Phnom Penh</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row second-navbar">
      <div class="left-round">
        <div class="left-round-border"/>
      </div>
      <div class="second-navbar-content justify-content-between">
        <div class="d-flex btn-navbar">
          <div class="btn-navbar-content active">Home</div>
          <div class="btn-navbar-content">Student</div>
          <div class="btn-navbar-content">Lecturer</div>
          <div class="btn-navbar-content">News</div>
          <div class="btn-navbar-content">Article</div>
          <div class="btn-navbar-content">About</div>
          <div class="btn-navbar-content">Contacts</div>
        </div>
        <div class="bg-white rounded-4 search">
          <i class="ite-icon ite-icon-search-navbar mx-auto"></i>
        </div>
      </div>
      <div class="right-round">
        <div class="right-round-border"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/scss/components/_navbar.scss");
</style>