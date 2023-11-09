<template>
    <div>
        <!-- <v-row dense > -->
            <v-col cols="12" md="12">
                <v-row dense  class="mb-8">
                    <v-col cols="12" md="3">
                        <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="374">
                        <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                        </template>
            
                        <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                <v-card-title>Retail POS solution</v-card-title>
                <v-card-text>
                  <div>Complete end-to-end retail solution for multi retail locations. Our Integrated ...</div>
                </v-card-text>
              </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="374">
                        <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                        </template>
            
                        <v-img
                        height="250"
                        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                        ></v-img>
            
                <v-card-title>F&B POS Solution</v-card-title>
            
                <v-card-text>
                  <div>Increase your F&B business productivity and lower operational costs. Our ...</div>
                </v-card-text>
              </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="374">
                        <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                        </template>
            
                        <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
            
                <v-card-title>Cloud Based POS Solution</v-card-title>
            
                <v-card-text>
                  <div>Truly centralized integrated hybrid cloud POS system with fast transactions processing ...</div>
                </v-card-text>
              </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-card
                        :loading="loading"
                        class="mx-auto my-12"
                        max-width="374">
                        <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                        </template>
            
                        <v-img
                        height="250"
                        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                        ></v-img>
            
                <v-card-title>Cafe Badilico</v-card-title>
            
                <v-card-text>
                  <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                </v-card-text>
              </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card
            class="mx-auto"
            max-width="100%"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
        
            <v-card-title>
              Top western road trips
            </v-card-title>
            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>
        
              <v-spacer></v-spacer>
        
              <v-btn
                icon
                @click="show1 = !show1"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
        
            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>
        
                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card
            class="mx-auto"
            max-width="100%"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
              height="200px"
            ></v-img>
        
            <v-card-title>
              Top western road trips
            </v-card-title>
            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>
        
              <v-spacer></v-spacer>
        
              <v-btn
                icon
                @click="show2 = !show2"
              >
                <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
        
            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>
        
                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card
            class="mx-auto"
            max-width="100%"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
        
            <v-card-title>
              Top western road trips
            </v-card-title>
            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>
        
              <v-spacer></v-spacer>
        
              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
        
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
        
                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
                    </v-col>
                </v-row>
            </v-col>
            
        
    <!-- </v-row> -->
    </div>
    
  </template>
  <script>
  export default {
    name: 'App',
    data () {
      return {
        show1: false,
        show2: false,
        show: false,
        loading: false,
      selection: 1,
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
  
</script>