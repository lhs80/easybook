<template>
  <div class="container pr-0 rounded-bottom" style="width:960px;">
    <b-carousel id="carousel1 rounded-bottom" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab" :interval="4000" img-width="1024"
                img-height="272" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 rounded-bottom" width="1024" style="height:272px" src="https://lorempixel.com/1024/480/technics/2/" alt="image slot">
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 rounded-bottom" width="1024" style="height:272px"
             src="https://lorempixel.com/1024/480/technics/4/" alt="image slot">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 rounded-bottom" width="1024" style="height:272px"
             src="https://lorempixel.com/1024/480/technics/8/" alt="image slot">
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 rounded-bottom" width="1024" style="height:272px"
             src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>