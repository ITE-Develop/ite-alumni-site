<script setup>
</script>

<template>
  <div class="container">
    <div class="row top-navbar justify-content-between">
      <div class="col-md-2 logo">
        <i class="ite-icon ite-icon-ite-alumni"/>-->
      </div>

      <div class="col-md-5 contact d-flex">
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
.container {
  width: 100vw;
  padding: 0;
  margin: 0 auto;
}

.top-navbar {
  padding: 14px 100px 14px 100px;
  align-items: center;
  gap: 10px;
  background: #014164;
}

.col-md-2.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Optional: Set a specific height if needed */
}

.call-phone {
  align-items: flex-start;
  gap: 6px;
}

.call {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.phone-number {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.contact {
  display: flex;
  align-items: flex-end;
  gap: 70px;
}

.second-navbar {
  justify-content: center;
  border-top: 2px solid #FFF;
  width: 100vw;

  &-content {
    background-color: #014164;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0 50px 0 50px;
    width: 1650px;
    height: 60px;
    display: flex;
    align-items: center;
  }
}

.left-round {
  position: relative;
  background-color: #014164;
  height: 40px;
  width: 40px;
  padding: 0;

  &-border {
    position: absolute;
    top: 0;
    right: 0;
    border-top-right-radius: 20px;
    background-color: $bg-color;
    height: 40px;
    width: 100vw;
  }
}


.right-round {
  position: relative;
  background-color: #014164;
  height: 40px;
  width: 40px;
  padding: 0;

  &-border {
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 20px;
    background-color: $bg-color;
    height: 40px;
    width: 100vw;
  }
}


.btn-navbar {
  gap: 50px;
  height: 40px;
  align-items: center;

  &-content {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.search {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.active {
  border-bottom: 2px solid #FFF;
}
</style>