<script setup>
const newsItems = [
  {
    category: "Category 1 1231231 123213 14124312234154 142313214123 ",
    title: "TITLE OF NEWS 1 123412 123 15 562645 13414 26 643646346",
    timestamp: "10 / 01 / 2023 125  124 53426 634631 41324123",
    description:
      "Description ewzxcscz New Artiwe1231322ic ,Newzxcc1111111111 11111111111 11111111111111111 1312313211112311111 1111111111111111111111 ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image:
      "https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg",
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description:
      "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image:
      "https://res.cloudinary.com/zerovector/image/upload/v1707731704/ondtmtzyasxnsmezqkgc.jpg",
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description:
      "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image:
      "https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg",
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description:
      "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image:
      "https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg",
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023 1231234 1234124",
    description:
      "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz Ne12222222222222222222222w Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image:
      "https://res.cloudinary.com/zerovector/image/upload/v1707362449/btp3l1qacuguemu6lrjm.png",
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description:
      "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image:
      "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/621e37005b568137419b75f7/6a45b4fc83d050dab7fb/sticker.png&h=416&w=416",
  },
  // Add more news items as needed
];
</script>

<template>
  <div class="container d-flex gap-2">
    <div class="col-md-6">
      <div class="row justify-content-between align-items-center">
        <div v-for="(item, index) in newsItems.slice(0, 1)" :key="index">
          <div class="news-card h-100 d-flex mt-1">
            <div class="news-content-wrapper">
              <div class="d-flex">
                <img :alt="item.title" :src="item.image" class="image" />
              </div>
              <div class="d-flex flex-column justify-content-between w-100">
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-column">
                    <div class="title-news">Mr. Chhim Bunchhun</div>
                  </div>
                  <div class="title-news position-title">
                    Lecturer of FE, ITE, BioE, Food
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between overflow-hidden gap-2 h-100 col-md-12 mt-3"
                >
                  <div class="d-flex flex-column text-center col-md-4">
                    <div class="fs-6">Quote</div>
                    <img
                      :alt="item.title"
                      :src="item.image"
                      class="quote-image"
                    />
                  </div>

                  <div
                    class="lecturer-in-visible flex-column text-center col-md-3"
                  >
                    <div class="fs-6">Lecture in</div>
                    <ul class="bg-white border lecturer-in">
                      <li class="text-start fs-6">
                        <i class="fas fa-quote-left"></i> Education
                      </li>
                      <li class="text-start fs-6">
                        <i class="fas fa-quote-left"></i> Education
                      </li>
                      <li class="text-start fs-6">
                        <i class="fas fa-quote-left"></i> Education
                      </li>
                    </ul>
                  </div>

                  <div class="advising flex-column text-center col-md-2">
                    <div class="fs-6">Total Advising</div>
                    <div class="d-flex flex-column border lecturer-in px-1">
                      <div
                        class="d-flex flex-column text-center col-md-12 border-bottom"
                      >
                        <div class="fs-6">14</div>
                        <div class="fs-6">Teams</div>
                      </div>
                      <div class="d-flex col-md-12">
                        <div class="col-md-6 border-end h-100">
                          <div class="fs-6">4</div>
                          <div class="fs-6">Thesis</div>
                        </div>

                        <div class="col-md-6 h-100">
                          <div class="fs-6">10</div>
                          <div class="fs-6">Reports</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex flex-column text-center col-md-2">
                    <div class="fs-6">Sign</div>
                    <img
                      :alt="item.title"
                      :src="item.image"
                      class="quote-image"
                    />
                  </div>
                </div>
                <div class="horizontal-bar hide-project-detail"></div>

                <div class="view-more-btn text-center">View More →</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(item, index) in newsItems.slice(0, 2)"
      :key="index"
      class="col-md-3"
    >
      <div class="news-card d-flex flex-column mt-1">
        <div class="news-content-wrapper">
          <div class="d-flex">
            <img :alt="item.title" :src="item.image" class="news-image" />
          </div>
          <div class="news-content overflow-hidden">
            <div class="title-news">{{ item.title }}</div>
            <div class="timestamp">{{ item.timestamp }}</div>
            <div class="description">{{ item.description }}</div>
            <div class="view-more-btn text-center">View More →</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advising {
  display: flex;
}

.lecturer-in {
  height: 100px;
  border-radius: 5px;
  padding-top: 5px;
  background-color: #ffffff;
}

.quote-image {
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.image {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 167px !important;
}

.news-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #ff6b00;
  transition: all 0.3s;
}

.news-content-wrapper {
  flex-grow: 1;
  padding: 20px;
}

.view-more-btn {
  font-family: $font-family;
  margin-top: 15px;
  font-size: 14px;
  color: #ff6b00;
  background-color: #fff;
  border: 1px solid #ff6b00;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    font-family: $font-family;
    background-color: #ff6b00;
    color: #fff;
  }
}

.description {
  font-size: 12px;
  color: #000;
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.5;
}

.timestamp {
  font-size: 14px;
  color: #ff6b00;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.5;
}

.title-news {
  font-size: 16px;
  font-weight: 600;
  color: #ff6b00;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.5;
}

.news-content {
  margin-right: auto;
}

.category-header {
  font-size: 14px;
  font-weight: 600;
  color: #ff6b00;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.5;
}

.news-image {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 200px;
}

.news-card {
  background-color: #fff;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #ff6b00;
  padding: 5px 5px;
  overflow: hidden;
  transition: all 0.3s;
}

.container {
  font-family: $font-family;
  margin: 16px 16px 80px;
}

.title {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}

.see-more {
  font-size: 16px;
  color: #ff6b00;
  background-color: #fff;
  border: 1px solid #ff6b00;
  padding: 5px 10px;
  border-radius: 10px;
}

@media screen and (min-width: 446px) and (max-width: 768px) {
  .advising {
    display: flex !important;
    margin: 0 10px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .position-title {
    display: none;
  }
  .advising {
    display: none;
  }
  .container {
    margin: 40px 20px 0;
  }
}

@media screen and (min-width: 1600px) {
  .container {
    margin: 16px 80px 0 80px;
  }
}

@media screen and (max-width: 1700px) {
  .advising {
    display: none;
  }
}

@media screen and (max-width: 1280px) {
  .lecturer-in-visible {
    display: none;
  }

  .advising {
    display: none;
  }
  .container {
    margin: 40px 40px 0 40px;
  }
}
</style>
