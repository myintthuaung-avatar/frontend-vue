<template>
  <div>
    <v-col cols="12" md="12">
      <v-row dense>
        <v-col cols="12" md="9" sm="12">
          <v-carousel cycle height="500" show-arrows-on-hover>
            <v-carousel-item v-for="(item, i) in slides" :key="i" >
              <v-row
              class="fill-height"
              align="center"
              justify="center">
              <VideoBackground
              :src="item.src"
                  style="max-height: 450px; height: 200vh;">
              </VideoBackground>
              </v-row>
            </v-carousel-item>
          </v-carousel>
          <!-- <VideoBackground
        src="large.mp4"
        style="max-height: 400px; height: 100vh;">
    </VideoBackground> -->
        </v-col>
        <v-col cols="12" md="3" sm="12" class="mb-n6">
          <v-card
          class="mx-auto"
          max-width="300"
          tile>
        <v-list shaped>
          <center><h3>Up Next</h3></center>
          
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in slides"
              :key="i"
            >
              
              <v-list-item-content>
                <VideoBackground
                    :src="item.src"
                        style="max-height: 70px; height: 40vh;">
                    </VideoBackground>
              </v-list-item-content>
              <v-list-item-action-text>aa</v-list-item-action-text>
            </v-list-item>
          </v-list-item-group>
  </v-list>
  <v-btn block color="black">
    <h4>Browse Trailers</h4> <v-icon>mdi-arrow-right-drop-circle</v-icon>
  </v-btn>
</v-card>
          <!-- <VideoBackground
        src="large1.mp4"
        style="max-height: 400px; height: 100vh;">
    </VideoBackground> -->
        </v-col>
        <v-col cols="12" md="12">
          <v-sheet
  class="mx-auto"
  elevation="8"
  max-width="100%"
>
  <v-slide-group
    v-model="model"
    class="pa-4"
    active-class="success"
    show-arrows
  >
    <v-slide-item
    v-for="(item, i) in slides" :key="i">
      <v-card
        :color="active ? undefined : 'black'"
        class="ma-4"
        height="600"
        width="300"
        @click="toggle"
      >
        <!-- <v-row
          class="fill-height"
          align="center"
          justify="center"
        > -->
        <VideoBackground
        :src="item.src"
            style="max-height: 450px; height: 200vh;">
        </VideoBackground>
      
        <!-- </v-row> -->
      </v-card>
    </v-slide-item>
  </v-slide-group>
</v-sheet>
        </v-col>
      </v-row>
    </v-col>
      
    <v-col cols="12" md="12" class="mt-12">
      <center>
        <h1 style="color:#28404C; font-weight: 600;">What do you want ? We can do it !!! Why not !!</h1>
      </center>
    </v-col>
    <v-col cols="12" md="12">
      <v-sheet
          class="mx-auto"
          elevation="8"
          max-width="800">
        <v-slide-group
          v-model="model"
          class="pa-4"
          center-active
          show-arrows
        >
          <v-slide-group-item
            v-for="n in 15"
            :key="n"
            v-slot="{ isSelected, toggle }"
          >
            <v-card
              :color="isSelected ? 'primary' : 'green'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    v-if="isSelected"
                    color="white"
                    size="48"
                    icon="mdi-close-circle-outline"
                  ></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
    <v-row>
        <v-col
          v-for="n in 9"
          :key="n"
          class="d-flex child-flex"
          cols="3">
        <v-card>
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
        </v-col>
      </v-row>
  </div>
  
</template>

<script>
import VideoBackground from 'vue-responsive-video-background-player'
export default {
  name: 'App',
  data: () => ({
    model: null,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        {src: require("../../../public/large1.mp4")},
        {src: require("../../../public/large2.mp4")},
        {src: require("../../../public/large3.mp4")},
        {src: require("../../../public/large4.mp4")}
      ],
      movies: [
        {src: require("../../../public/large5.mp4")},
        {src: require("../../../public/large6.mp4")},
        {src: require("../../../public/large7.mp4")},
        {src: require("../../../public/large1.mp4")}
      ],
  }),
  components:{
      VideoBackground
  }
}
</script>