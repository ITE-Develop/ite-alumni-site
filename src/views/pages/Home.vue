<script setup>
import {TopNavbar} from "@/components/ui";
</script>

<template>
  <div class="fixed-navbar">
    <TopNavbar/>
  </div>
  <div class="content">
    <div class="container">
      <div class="d-flex carousel">
        <div class="d-flex banner">
          <i/>
        </div>

        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between area-text">
            <div class="d-flex">
              <i class="ite-icon ite-icon-rupp"></i>
              <i class="ite-icon ite-icon-rupp ms-2"></i>
            </div>

            <div class="d-flex flex-column text-center">
              <div>Academic Year 2020-2024</div>
              <div>Generation 7 Alumni</div>
            </div>
            <i class="ite-icon ite-icon-rupp"></i>
          </div>
          <div class="d-flex area-text-2 mt-4 justify-content-between">
            <div class="d-flex flex-column">
              <i class="Lecturer"/>
              <div class="d-flex flex-column title px-4 py-2">
                <div class="title-lecturer">Lecturer</div>
                <div class="name-lecturer">Mr. OUK KEO Vichea</div>
              </div>
            </div>

            <div class="d-flex flex-column">
              <div class="countdown-area d-flex flex-column align-items-center">
                <div class="countdown text-center">Graduation Countdown</div>
                <div class="horizontal-bar"/>
                <div class="d-flex justify-content-between w-100 py-2 px-3 number-count mt-2">
                  <div class="d-flex flex-column justify-content-center">
                    <div class="total">Total</div>
                    <div class="total-students my-2">120</div>
                    <div class="students">Students</div>
                  </div>

                  <div class="vertical-line"/>

                  <div class="d-flex flex-column justify-content-center me-5">
                    <div class="ug">Upcoming Graduation</div>
                    <div class="d-flex mt-2">
                      <div class="d-flex flex-column text-center">
                        <div class="month-count">05</div>
                        <div class="months mt-2">Months</div>
                      </div>
                      <div class="mx-5 divide">:</div>
                      <div class="d-flex flex-column text-center ">
                        <div class="day-count">05</div>
                        <div class="days mt-2">Days</div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              <div class="d-flex align-items-center text-center justify-content-center total-projects">
                <div>Total Final Project :</div>
                <div class="count-project">200</div>
                <div>Projects</div>
              </div>


            </div>

          </div>
          <div class="d-flex justify-content-between mx-3 mt-3 ">
            <div class="view-more-btn">View More</div>
            <div class="share-btn">Share</div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.name-lecturer{
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
.title-lecturer{
  font-size: 14px;
  font-weight: 300;
  color: #000;
}

.share-btn {
  width: 46%;
  background-color: #C4C4C4;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
}

.view-more-btn {
  width: 46%;
  background-color: #C4C4C4;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
}

.count-project {
  margin: 0 10px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
}
.total-projects{
  padding: 10px;
  margin-top: 10px;
  font-size: 20px;
  border-radius: 20px;
  background-color: #C4C4C4;
}
.divide{
  font-size: 30px;
  font-weight: 300;
  color: #000;
}
.day-count{
  font-size: 30px;
  font-weight: 300;
  color: #000;
}
.days{
  font-size: 20px;
  font-weight: normal;
  color: #000;
}
.month-count{
  font-size: 30px;
  font-weight: 300;
  color: #000;
}
.months{
  font-size: 20px;
  font-weight: normal;
  color: #000;
}
.total{
  font-size: 20px;
  font-weight: normal;
  color: #000;
}
.total-students{
  font-size: 30px;
  font-weight: 300;
  color: #000;
}
.students{
  font-size: 20px;
  font-weight: normal;
  color: #000;
}
.ug{
  font-size: 20px;
  font-weight: bold;
  color: #000;
}
.number-count{
  width: 250px;
  height: 200px;
  background: #C4C4C4;
  border-radius: 20px;
}

.vertical-line{
  width: 1px;
  height: 100%;
  background: #000;
}

.countdown{
  width: 500px;
  font-size: 28px;
  font-weight: bold;
  color: #000;
}

.countdown-area{
  height: 200px;
  border-radius: 20px;
  align-items: center;
}
.title {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: grey;
  height: 70px;
  width: 250px;
  color: #000;
}

.Lecturer {
  width: 250px;
  height: 200px;
  background: #C4C4C4;
  //border-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.carousel {
  display: flex;
  width: 85vw;
  margin: 0 100px;
  padding: 18px 23px;
  align-items: flex-start;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.area-text{
  width: calc(85vw - 40vw);
  padding: 0 20px;
}

.area-text-2{
  margin: 0 20px;
  width: calc(85vw - 40vw);
  border: 1px solid #000;
  padding: 20px 20px;
  border-radius: 20px;
}

.banner {
  width: 40vw;
  height: 468px;
  background: #C4C4C4;
  border-radius: 20px;
}

.dot-indicator {
  position: absolute;
  bottom: 10px; /* Adjust the position based on your design */
  left: 50%; /* Center the dot indicator */
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: #000; /* Set the color of the dot */
  border-radius: 50%;
}

.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.content {
  height: 100vh;
  margin-top: 176px; /* Adjust based on the height of your fixed Navbar */
  padding: 20px;
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
