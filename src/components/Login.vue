<style>
.loginform .v-text-field--outlined fieldset {
  background: #fff;
}
/* .theme--light.v-icon {
  color: #fff;
} */
.loginform .v-input__append-outer .v-icon,
.v-input__prepend-outer .v-icon {
  color: #fff;
}
button.v-icon.notranslate.v-icon--link.mdi.mdi-eye-off.theme--light {
  font-size: 15px;
}
button.v-icon.notranslate.v-icon--link.mdi.mdi-eye.theme--light {
  font-size: 15px;
}
</style>
<template>
  <v-app style="background-color: white;">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" sm="12">
            <v-card>
              
                      <v-col cols="12" md="12" style="background:silver">
                        <center><h4 style="font-size:x-large; font-weight:bolder" class="mt-12">Test System</h4></center>
                            <v-form class="mt-12 loginform" ref="form" @submit.prevent="HandleLogin" v-model="valid" lazy-validation>
                              <div class="v-messages__message" v-if="login_message">{{login_message}}</div>
                              <v-text-field
                              v-model="user"
                              name="login"
                                prepend-icon="mdi-account"
                                type="text"
                                color="black"
                                outlined
                                dense
                                required
                                placeholder="Username"
                                @keydown.enter.prevent="HandleLogin" :rules="nameRules"
                              >
                              </v-text-field>
                              <v-text-field
                              v-model="user"
                      placeholder="Password"
                      required
                               
                                prepend-icon="mdi-lock"
                                outlined
                                dense
                                color="black accent-3"
                                :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="() => (showpass = !showpass)"
                      :type="showpass ? 'password' : 'text'"
                       @keydown.enter.prevent="HandleLogin" :rules="pwdRules"
                                
                              ></v-text-field>
                            </v-form>
                      <div class="text-center mt-1 mb-1">
                        <v-btn to="/dashboard" :loading="loading" class="mb-1 black--text" color="green"
                            >Log In</v-btn>
                      </div>
                    </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//import User from "../models/user";
//import UserService from "../services/user.service";
export default {
  name: 'App',
  data: () => ({
    loading: false,
    valid: false,
    width:120,
    showpass: true,
    nameRules: [ v => !!v || '' ],
    pwdRules: [ v => !!v || '' ],
   // user: new User(),
    login_message:''
  }),

  methods: {
    
  },
};
</script>