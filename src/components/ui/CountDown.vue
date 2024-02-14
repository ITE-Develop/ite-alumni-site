<script setup>
import { useLecturerControl } from "@/composables/index.js";
import { onMounted, onUnmounted, reactive } from "vue";

const { setup, countdown } = useLecturerControl();

const data = reactive({
  name: "waiting for data...",
  photo: "https://via.placeholder.com/332x168.png/00aaaa?text=amet",
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const refreshData = async () => {
  try {
    const { data: responseData } = await setup();
    Object.assign(data, responseData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const refreshCountdown = () => {
  const { months, days, hours, minutes, seconds } = countdown();
  Object.assign(data, { months, days, hours, minutes, seconds });
};

onMounted(async () => {
  await refreshData();
  refreshCountdown();
  setInterval(refreshCountdown, 1000);
});

const refreshInterval = setInterval(refreshData, 5000);

onUnmounted(() => clearInterval(refreshInterval));
</script>

<template>
    <div class="container mt-5">
      <div class="d-flex carousel">
        <div class="d-flex banner">
          <img :src="data?.photo" alt="" class="banner-image"/>
        </div>
        <div class="d-flex flex-column countable">
          <div class="d-flex justify-content-between area-text">
            <div class="d-flex">
              <i class="ite-icon "></i>
              <i class="ite-icon  ms-2"></i>
            </div>

            <div class="d-flex flex-column text-center academic">
              <div>Academic Year 2020-2024</div>
              <div>Generation 7 Alumni</div>
            </div>
            <i class="ite-icon "></i>
          </div>
          <div class="d-flex area-text-2 mt-4 justify-content-between">
            <div class="d-flex flex-column">
              <img :src="data?.photo" alt="" class="image-lecturer"/>
              <div class="d-flex flex-column title px-4 py-2">
                <div class="title-lecturer">Lecturer</div>
                <div class="name-lecturer">{{ data?.name }}</div>
              </div>
            </div>

            <div class="d-flex flex-column countdown-section">
              <div class="countdown-area d-flex flex-column align-items-center">
                <div class="countdown text-center">Graduation Countdown</div>
                <div class="horizontal-bar"/>
                <div class="d-flex justify-content-between w-85 py-2 px-3 number-count mt-2">
                  <div class="d-flex flex-column justify-content-center me-3">
                    <div class="total">Total</div>
                    <div class="total-students my-2">196</div>
                    <div class="students">Students</div>
                  </div>
                  <div class="vertical-line"/>
                  <div class="d-flex flex-column justify-content-center mx-2">
                    <div class="ug text-center">Upcoming Graduation</div>
                    <div class="d-flex mt-2">
                      <div class="d-flex months">
                        <div class="d-flex flex-column text-center">
                          <div class="month-count">{{ data.months ? data.months : 0 }}</div>
                          <div class="months mt-2">Months</div>
                        </div>
                      </div>
                      <div class="d-flex days">
                        <div class="mx-2 divide">:</div>
                        <div class="d-flex flex-column text-center ">
                          <div class="day-count">{{ data.days ? data.days : 0 }}</div>
                          <div class="days mt-2">Days</div>
                        </div>
                      </div>
                      <div class="hours hide-on-mobile">
                        <div class="mx-2 divide">:</div>
                        <div class="d-flex flex-column text-center ">
                          <div class="day-count">{{ data.hours ? data.hours : 0 }}</div>
                          <div class="days mt-2">Hours</div>
                        </div>
                      </div>
                      <div class="minutes hide-on-mobile">
                        <div class="mx-2 divide">:</div>
                        <div class="d-flex flex-column text-center ">
                          <div class="day-count">{{ data.minutes ? data.minutes : 0 }}</div>
                          <div class="days mt-2">Minutes</div>
                        </div>
                      </div>
                      <div class="seconds hide-on-mobile">
                        <div class="mx-2 divide">:</div>
                        <div class="d-flex flex-column text-center ">
                          <div class="day-count">{{ data.seconds ? data.seconds : 0 }}</div>
                          <div class="days mt-2">Seconds</div>
                        </div>
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

        <div class="d-flex flex-column categories gap-2">
          <div class="h-50 d-flex justify-content-between top-category">
            <div class="h2 fw-bold">Categories</div>
            <div>View All</div>
          </div>

          <div class="h-50 d-flex justify-content-between bottom-category">
            <div class="h2 fw-bold">Categories</div>
            <div>View All</div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/theme/default/_top.scss";
.top-category{
  font-family: $font-family;
  background-color: #014164;
  border-radius: 5px;
  color: #fff;
  display: flex;
  padding: 10px;
}
.bottom-category{
  font-family: $font-family;
  background-color: #014164;
  border-radius: 5px;
  color: #fff;
  display: flex;
  padding: 10px;
}
.category{
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.categories{
  width: 25%;
  height: 475px;
  border-radius: 10px;
}

.countable{
  width: 50%;
}

.hide-on-mobile{
  display: flex;
}
@media (max-width: 1000px) {
  .hide-on-mobile {

    display: none;
  }
}
</style>