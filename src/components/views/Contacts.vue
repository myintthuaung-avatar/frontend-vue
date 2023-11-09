<template>
    <div>
        <v-col cols="12" md="12">
            <h2>Contact Us</h2>
            <v-row dense>
                <v-col cols="12" md="8">
                    <v-card>
                        <v-card-subtitle>If you want to contact our system, you can contact us by completing the following form.</v-card-subtitle>
                        <v-card-text class="mt-5">
                            <v-row dense>
                                <v-col cols="12" sm="6" md="4">
                                    <label class="lab">First Name<span class="red--text" style="font-size: 15px">*</span></label>
                                </v-col>
                                <v-col cols="12" sm="6" md="8">
                                    <v-text-field required outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <label class="lab">Middle Name<span class="red--text" style="font-size: 15px">*</span></label>
                                </v-col>
                                <v-col cols="12" sm="6" md="8">
                                    <v-text-field required outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <label class="lab">Last Name<span class="red--text" style="font-size: 15px">*</span></label>
                                </v-col>
                                <v-col cols="12" sm="6" md="8">
                                    <v-text-field required outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <label class="lab">Last Name<span class="red--text" style="font-size: 15px">*</span></label>
                                </v-col>
                                <v-col cols="12" sm="6" md="8">
                                    <v-text-field required outlined dense></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <label class="lab">Last Name<span class="red--text" style="font-size: 15px">*</span></label>
                                </v-col>
                                <v-col cols="12" sm="6" md="8">
                                    <v-text-field required outlined dense></v-text-field>
                                </v-col>
                                <v-row dense class="mb-1">
                                    <v-col cols="12" md="10"> </v-col>
                                    <v-col cols="12" md="2">
                                      <v-btn
                                        text
                                        type="submit"
                                        small
                                        outlined
                                        color="#fff"
                                        class="ml-n5"
                                        style="background-color: rgb(27, 218, 91); margin-right: 7px;"
                                        >Save</v-btn
                                      >
                                      <v-btn
                                        text
                                        @click="reset()"
                                        small
                                        outlined
                                        color="black"
                                        style="background-color:rgb(228, 129, 16)"
                                        >Reset</v-btn
                                      >
                                    </v-col>
                                  </v-row>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-carousel :show-arrows="false" >
                            <v-carousel-item
                              v-for="(item,i) in items"
                              :key="i"
                              :src="item.src"
                            ></v-carousel-item>
                          </v-carousel>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
        
    </div>
</template>
<script>
  export default {
    name: 'App',
    data () {
      return {
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
  }
</script>