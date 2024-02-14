<script setup>

const newsItems = [
  {
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://via.placeholder.com/332x168.png/00aaaa?text=amet"
  },
  {
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://via.placeholder.com/332x168.png/00aaaa?text=amet"
  },
  {
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://via.placeholder.com/332x168.png/00aaaa?text=amet"
  },
  {
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://via.placeholder.com/332x168.png/00aaaa?text=amet"
  },
    {
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://via.placeholder.com/332x168.png/00aaaa?text=amet"
  },
    {
    title: "TITLE OF NEWS 1",
    timestamp: "10 / 01 / 2023",
    description: "Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Ar Description ewzxcscz New Articrtic ,Newzxcc ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz New Article Description ,Newzxcscz",
    image: "https://via.placeholder.com/332x168.png/00aaaa?text=amet"
  },
  // Add more news items as needed
]
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <div class="title">News</div>
      <button class="see-more">See More</button>
    </div>
    <div class="row">

      <div v-for="(item, index) in newsItems" :key="index" class="col-md-2">
        <div class="news-card d-flex flex-column">
          <div class="news-content-wrapper">
            <div class="d-flex">
              <img :alt="item.title" :src="item.image" class="news-image">
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

  </div>


</template>

<style scoped lang="scss">
.news-content-wrapper {
  flex-grow: 1;
  padding: 20px;
}
.view-more-btn{
  margin-top: 15px;
  font-size: 14px;
  color: #FF6B00;
  background-color: #fff;
  border: 1px solid #FF6B00;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
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
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.5;
}


.timestamp{
  font-size: 14px;
  color: #FF6B00;
}
.title-news{
  font-size: 16px;
  font-weight: 600;
  color: #FF6B00;

}
.news-content {
  margin-right: auto;
}

.category {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
.news-image{
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}
.news-card{
  background-color: #fff;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #FF6B00;
  cursor: pointer;
  transition: all 0.3s;
}
.container{
  margin: 40px 85px 0;
}
.title{
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}
.see-more{
  font-size: 16px;
  color: #FF6B00;
  background-color: #fff;
  border: 1px solid #FF6B00;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>