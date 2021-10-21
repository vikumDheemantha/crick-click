<template>
  <v-card class="mt-15">
    <v-card-text class="text-body-1 summery-text">
      <p class="text-justify">
        {{ introduction }}
      </p>
    </v-card-text>
    <div class="strike">
      <span class="text-h6 primary--text font-weight-medium">
        Personal Details
      </span>
      <v-card-text>
        <v-row>
          <v-col cols="6" md="6" sm="12">
            <single-iine-info title="Email" :value="email" />
          </v-col>
          <v-col cols="6" md="6" sm="12">
            <single-iine-info title="Mobile No." :value="mobile" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" md="4" sm="12">
            <single-iine-info title="date of Birth" :value="dob" />
          </v-col>
          <v-col cols="8" md="8" sm="12">
            <single-iine-info title="Address" :value="address" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" md="4" sm="12">
            <single-iine-info title="City" :value="city" />
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <single-iine-info title="District" :value="district" />
          </v-col>
          <v-col cols="4" md="4" sm="12">
            <single-iine-info title="Region" :value="region" />
          </v-col>
        </v-row>
      </v-card-text>
      <div class="strike">
        <span class="text-h6 primary--text font-weight-medium">
          Achievements
        </span>
      </div>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="6"
            xl="4"
            xs="12"
            v-for="(achievement, i) in achievements"
            :key="i"
          >
            <achievement-card
              :title="achievement.title"
              :description="achievement.description"
              :date="achievement.date"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
import AchievementCard from "../common/AchievementCard.vue";
import SingleIineInfo from "../common/SingleIineInfo.vue";
export default {
  components: { SingleIineInfo, AchievementCard },
  props: {
    introduction: String,
    email: String,
    mobile: String,
    dob: String,
    address: String,
    city: String,
    district: String,
    region: String,
    achievements: Array,
  },
  data() {
    return {};
  },
};
</script>

<style>
.summery-text p:first-child::first-letter {
  /* padding: 0 0.3rem; */
  /* margin: 0 0.3rem 0 0; */
  font-size: 4rem;
  line-height: 1;
}

.strike {
  display: block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
}

.strike > span {
  position: relative;
  display: inline-block;
}

.strike > span:before,
.strike > span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 9999px;
  height: 3px;
  background: #ffcf00;
}

.strike > span:before {
  right: 100%;
  margin-right: 15px;
}

.strike > span:after {
  left: 100%;
  margin-left: 15px;
}
</style>
