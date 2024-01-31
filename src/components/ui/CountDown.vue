<script setup>

</script>

<template>
  <div class="container d-flex">

    <div class="d-flex flex-column ">
      <img alt="" class="image" src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-1/349309788_6561977050514350_2535667464264474448_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH5wn5CaL-hAmlv9pmJbdBERkuPd29bcwNGS493b1tzA5iSc_pWnMYJO0SWD1eRi2lR6UVMcojkhfqy3pbn_EiA&_nc_ohc=d0X_VGqiFKAAX8rwt0h&_nc_ht=scontent.fpnh10-1.fna&oh=00_AfDEE9TUGxvApzfogplJ1GsFacqV2VS88AT5kY4tdHJaFA&oe=65B5B97D">
      <div class="detail">
        <div>Lecturer</div>
        <div class="name">Mr. OUK KEO Vichear</div>
      </div>
    </div>

    <div class="d-flex flex-column ms-2">
      <div class="countdown">Graduation Countdown</div>
      <div class="horizontal-bar mt-2"/>
      <div class="countdown-date">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column">
            <div class="countdown-date-h1">Total</div>
            <div class="countdown-date-blue">200</div>
            <div class="countdown-date-footer">Students</div>
          </div>
          <div class="vertical-bar mx-4"/>
          <div class="d-flex flex-column align-items-center ">
            <div class="countdown-date-h1">Upcoming Graduation</div>
            <div class="d-flex gap-4">
              <div class="d-flex flex-column">
                <div class="countdown-date-blue">96</div>
                <div class="countdown-date-footer">Months</div>
              </div>
              <div class="d-flex flex-column countdown-date-divide">:</div>
              <div class="d-flex flex-column">
                <div class="countdown-date-blue">96</div>
                <div class="countdown-date-footer">Days</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="d-flex justify-content-between button-group">
        <button class="btn btn-more">View More</button>
        <button class="btn btn-share">Share</button>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.button-group {
  margin-top: 16px;
}

.btn {
  &-more {
    width: 147px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #014164;
    color: #014164;
  }

  &-share {
    width: 147px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #014164;
    color: #FFF;
  }
}

.vertical-bar {
  border-left: 2px solid #24252D;
}

.container {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.20);
  background: #FFF;
  padding: 10px 16px;
  align-items: flex-start;
  gap: 16px;
}

.image {
  width: 218px;
  height: 231px;
  flex-shrink: 0;
  background-color: $text-color-secondary;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  object-fit: cover;
}

.detail {
  padding: 14px;
  height: 70px;
  flex-shrink: 0;
  background-color: $bg-grey;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.name {
  color: #24252D;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;
}

.countdown {
  color: #24252D;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;

  &-date {
    padding: 16px;
    margin-top: 28px;
    width: 315px;
    height: 115px;
    flex-shrink: 0;
    border-radius: 20px;
    background: rgba(241, 241, 241, 0.95);
    backdrop-filter: blur(2px);

    &-h1 {
      color: #24252D;
      text-align: justify;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 208.333% */
      letter-spacing: 0.5px;
    }

    &-blue {
      color: #014164;
      text-align: justify;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px; /* 138.889% */
      letter-spacing: 0.5px;
    }

    &-footer {
      color: #24252D;
      text-align: justify;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 178.571% */
      letter-spacing: 0.5px;
    }

    &-divide {
      color: #014164;
      text-align: justify;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px; /* 138.889% */
      letter-spacing: 0.5px;
    }
  }
}
</style>