<style scoped>
.lab{
  color: black;
}
</style>
<template>
    <div>
        <v-row justify="center">
            <v-dialog
              v-model="dialog"
              persistent
              scrollable
              max-width="600px">
              <v-card>
                <v-card-title style="background-color:aqua;">
                  <span class="text-h5" fixed>User Profile</span>
                </v-card-title>
                <v-divider color="#000"></v-divider>
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
                        <v-col cols="12" md="4">
                            <label class="lab">Password<span class="red--text" style="font-size: 15px">*</span></label>
                        </v-col>
                        <v-col cols="12" md="8">
                          <v-text-field
                            required outlined dense></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                          <label class="lab">Email<span class="red--text" style="font-size: 15px">*</span></label>
                      </v-col>
                      <v-col cols="12" sm="8">
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          required outlined dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="4">
                        <label class="lab">Interests<span class="red--text" style="font-size: 15px">*</span></label>
                    </v-col>
                      <v-col cols="12" sm="8">
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          multiple outlined dense>
                        </v-autocomplete>
                      </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn outlined small dark color="green" @click="dialog = false">
                    Save
                  </v-btn>
                  <v-btn outlined small dark color="red" @click="dialog = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
    </div>
</template>
<script>

export default ({
    setup() {
        
    },
    data: () => ({
      dialog: false,
    }),
    computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
})
</script>
