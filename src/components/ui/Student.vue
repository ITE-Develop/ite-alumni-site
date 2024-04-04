<script setup>
//define props
const props = defineProps({
  newsItems: Array,
});
</script>

<template>
  <div class="col-md-12">
    <div v-for="(item, index) in newsItems.slice(0, 1)" :key="index">
      <div class="news-card d-flex flex-column">
        <div class="news-content-wrapper">
          <div class="category-header">{{ item.category }}</div>
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

//responsive design
@media screen and (max-width: 768px) {
  .container {
    margin: 40px 20px 0;
  }
}

@media screen and (min-width: 1600px) {
  .container {
    margin: 16px 10px 0 80px;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    margin: 40px 40px 0 40px;
  }
}
</style>
