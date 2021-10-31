<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="8" class="left primary--text secondary">
        <div class="text-center">
          <h1>Welcome to CrickClick</h1>
          <h2>
            Sri Lanka's First Cricket Dashboard for Any Level of cricket Player
          </h2>
        </div>
      </v-col>
      <v-col cols="4" class="right acent">
        <h2>Register</h2>
        <validation-observer ref="observer">
          <v-form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="Email"
                required
                outlined
                dark
                filled
                dense
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required"
            >
              <v-text-field
                v-model="password"
                :error-messages="errors"
                label="Password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                required
                outlined
                dense
                dark
                filled
                :type="showPass ? 'text' : 'password'"
              ></v-text-field>
            </validation-provider>
            <div class="text-center">
              <v-btn
                class="signin-btn"
                type="submit"
                rounded
                color="white"
                dark
              >
                Sign In
              </v-btn>
              <div class="mt-2">
                Already have a account,
                <v-btn text color="success" to="/login">sign In</v-btn>
              </div>
            </div>
          </v-form>
        </validation-observer>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationProvider,
  setInteractionMode,
  ValidationObserver,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: "",
    password: null,
    showPass: false,
  }),
  computed: {
    params() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    async submit() {
      const valid = await this.$refs.observer.validate();
      if (valid) {
        this.login(this.params); // action to login
      }
    },
    clear() {
      // you can use this method to clear login form
      this.email = "";
      this.password = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style>
/* ./assets/styles.scss */
.section-container {
  background: #fff;
  width: 100%;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
.section-container .signin {
  padding: 0;

  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
}
.section-container .signin .left {
  padding: 30px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  /* color: #30ac7c; */
  background-color: #f9f9f9;
}
.section-container .signin .right {
  padding: 30px;
  box-sizing: border-box;
  /* background: #30ac7c; */
  color: #fff;
}
.section-container .signin .right h2 {
  text-align: center;
  margin: 30px 0;
}
.section-container .signin .right .signin-btn {
  width: 100%;
  color: #30ac7c;
}
</style>
