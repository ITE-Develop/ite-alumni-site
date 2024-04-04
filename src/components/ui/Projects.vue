<script setup>

const newsItems = [
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz Neq ewqe eae q wqe qwe e qeqw eew Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://res.cloudinary.com/zerovector/image/upload/v1707731744/rinqwxiiabzhwvinrne2.jpg"
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Desc Article Dscz New Article Description ,Newzxcs  asd dwfg  wr cz qwe qt qwe wqr 3 tqfd frqr q rqw r2 afdf qr3 rqw r31rqwr afq3 rqrs fdg3t qwer rqft fqet13 rqfg4 qwf tg1 3 fdg rqffggdsg qfeq qwee qfdf3r qf3",
    image: "https://res.cloudinary.com/zerovector/image/upload/v1707731704/ondtmtzyasxnsmezqkgc.jpg"
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcsc123123213z New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://res.cloudinary.com/zerovector/image/upload/v1707731610/avzhsqx6u4nykdlovqwo.jpg"
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://res.cloudinary.com/zerovector/image/upload/v1707731744/wb7zvmzhezxkw3z2rx2t.jpg"
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://res.cloudinary.com/zerovector/image/upload/v1707362449/btp3l1qacuguemu6lrjm.png"
  },
  {
    category: "Category 1",
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/621e37005b568137419b75f7/6a45b4fc83d050dab7fb/sticker.png&h=416&w=416"
  },
  // Add more news items as needed
]
</script>

<template>
  <div class="container-project">
    <div class="d-flex justify-content-between">
      <div class="title">Projects</div>
      <button class="see-more">View All →</button>
    </div>
    <div class="row margin-20 justify-content-between align-items-center gap-3">
      <div v-for="(item, index) in newsItems.slice(0, 2)" :key="index">
        <div class="news-card d-flex">
          <div class="news-content-wrapper d-flex">
            <div class="d-flex">
              <img :alt="item.title" :src="item.image" class="news-image">
            </div>
            <div class="d-flex flex-column justify-content-between w-100 ms-4">
               <div class="d-flex justify-content-between">
                  <div class="d-flex flex-column">
                    <div class="title-news">{{ item.title }}</div>
                    <div class="timestamp">{{ item.timestamp }}</div>
                  </div>

                  <div class="d-flex flex-column">
                    <div class="title-news">{{ item.category }}</div>
                  </div>
               </div>
              <div class="news-content overflow-hidden h-100">
                <div class="description">{{ item.description }}</div>
              </div>
              <div class="horizontal-bar"></div>
              <div class="d-flex justify-content-between align-items-end">
                <div class="d-flex flex-column justify-content-center">
                  <div class="text-center fs-6">Research and Develop By :</div>
                  <div class="fs-5">Mai Reaksa</div>
                </div>
                <div class="view-more-btn text-center">View More →</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.margin-20 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.news-content-wrapper {
  flex-grow: 1;
  padding: 15px;
}

.view-more-btn {
  font-family: $font-family;
  margin-top: 15px;
  font-size: 14px;
  color: #FF6B00;
  background-color: #fff;
  border: 1px solid #FF6B00;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    font-family: $font-family;
    background-color: #FF6B00;
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
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  line-height: 1.5;
}


.timestamp {
  font-size: 14px;
  color: #FF6B00;
}

.title-news {
  font-size: 16px;
  font-weight: 600;
  color: #FF6B00;
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
  color: #FF6B00;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}

.news-image {
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 200px;
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
  color: #FF6B00;
  transition: all 0.3s;
}

.container-project {
  font-family: $font-family;
  margin: 16px 80px 0 16px;
}

.title {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}

.see-more {
  font-size: 16px;
  color: #FF6B00;
  background-color: #fff;
  border: 1px solid #FF6B00;
  padding: 5px 10px;
  border-radius: 10px;
}

//responsive design
@media screen and (max-width: 768px) {
  .container {
    margin: 40px 20px 0;
  }
}

@media screen and (max-width: 1600px) {
  .container {
    margin: 40px 40px 0;
  }
}

@media screen and (max-width: 1280px) {
  //only 3 news items per row
  .container-project {
  font-family: $font-family;
  margin: 16px 40px 0 40px;
}
}
</style>