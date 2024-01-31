
<script setup>

import {computed, onMounted, ref} from "vue";

const isShow = ref(true);
const isPlaying = ref(false);
const videoRef = ref(null);
const videoObserver = ref(null);

const props = defineProps({
  twitter: {
    type: Object,
    default: () => ({}),
  },
});

const twitterPhoto = computed(() => {
  if (props.twitter.media[0].media_type == 'photo') {
    return props.twitter.media[0].media_url || null;
  }
  return props.twitter.media[0].thumb_url || null;

  isShow.value = false;
});

const twitterVideo = computed(() => {
  if (props.twitter.media[0].media_type === 'video') {
    return props.twitter.media[0].media_url || null;
  }
});

const videoController = () => {
  const video = videoRef.value;
  isPlaying.value = false;

  if (!video.paused) {
    video.pause();
    return;
  }

  video.play();
  isPlaying.value = true;
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      if (isPlaying.value) {
        videoController();
      }
    }
  });
};

const noImage = () => {
  isShow.value = false;
};

onMounted(() => {
  if (videoRef.value) {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the video is out of view
    };

    videoObserver.value = new IntersectionObserver(handleIntersection, options);
    videoObserver.value.observe(videoRef.value);
  }
});
</script>

<template>
  <div class="disaster-post-wrapper" v-if="twitter?.date && isShow">
    <div class="wrapper-inner">
      <a :href="twitter.link" target="_blank" class="d-flex flex-column text-decoration-none">
      <div class="city-code d-flex justify-content-between">
        <div class="limit-text">
          <label class="text tags" v-for="(tag, index) in twitter.tags" :key="index">#{{ tag }}</label>
        </div>
        <p class="text time">{{ twitter.relative_time }}</p>
      </div>
      </a>
      <div class="image-wrapper my-2">
        <template v-if="twitterPhoto">
          <a :href="twitter.link" target="_blank">
            <img :src="twitterPhoto" alt="sns-image" @error="noImage" v-if="!isPlaying" />
          </a>
        </template>

        <template v-if="twitterVideo">
          <div class="video-container">
            <video ref="videoRef" preload="auto" muted @click="videoController" playsinline>
              <source :src="twitterVideo" type="video/mp4">
            </video>
            <div class="video-controls" v-if="!isPlaying">
              <button @click="videoController">
                <i class="sb-icon sb-icon-play"></i>
              </button>
            </div>
          </div>
        </template>
      </div>
      <a :href="twitter.link" target="_blank" class="d-flex flex-column text-decoration-none">
        <p class="text text-wrap limit-text">{{ twitter.text }}</p>
        <div class="d-flex text place">
          <span class="me-1">
            <i class="sb-icon sb-icon-xs sb-icon-place"></i>
          </span>
          <span class="text-secondary text-wrap">{{ twitter.location }}</span>
        </div>
      </a>
      <div class="open-app">
        <a :href="twitter.link" target="_blank" class="d-flex align-items-center">
          <i class="sb-icon sb-icon-xs sb-icon-twitter"></i>
          <i class="text-browse">X（旧Twitter）</i>
          <i class="sb-icon sb-icon-other"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/scss/theme/default/_disaster_post.scss");

.video-container {
  height: 100%; /* Change height to auto to maintain aspect ratio */
  margin: 0 auto;
  background-color: #5E5E5E;
  video {
    margin: 0 auto;
    height: 100%;
    display: block;
  }
}
.video-controls {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  color: white;
  padding: 10px;
  display: block;
  opacity: 1; /* Initially, the controls are visible */
  transition: opacity 0.3s; /* Add a smooth transition effect for visibility */

  button {
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    display: block;
    position: relative; /* Add relative positioning to the button */
  }

  .sb-icon-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>