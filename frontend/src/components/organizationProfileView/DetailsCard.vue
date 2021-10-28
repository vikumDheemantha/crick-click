<template>
  <v-card class="mt-15">
    <v-btn
      color="primary"
      class="float-end mt-3 mr-3"
      fab
      small
      dark
      @click="enableEdit"
      v-if="editable && !editing"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-card-text class="text-body-1 summery-text">
      <p class="text-justify" v-if="!editing">
        {{ description }}
      </p>
      <v-textarea
        outlined
        name="description"
        label="Team Description"
        v-model="descriptionTxt"
        class="mt-5"
        hide-details="auto"
        v-else
      ></v-textarea>
    </v-card-text>
    <v-card-actions class="float-end mr-3 mt-1" v-if="editing">
      <v-btn class="ml-2" color="success" small @click="handleSave">Save</v-btn>
      <v-btn class="ml-2" small @click="handleCancel">Cancel</v-btn>
    </v-card-actions>
    <div class="clear-both"></div>
  </v-card>
</template>

<script>
export default {
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
    description: String,
  },
  data() {
    return {
      editing: false,
      descriptionTxt:
        "ABC Organization is leading sport club mainly focus on cricket as a sport and one of the organization that peform lot of international and national level cricket matches and turnaments in sri lanka. This is one of the most trusted cricket organization in the courtry and trusded by many national level cricket players.",
    };
  },
  methods: {
    enableEdit() {
      this.editing = true;
    },
    async handleSave() {
      // TODO: Save edited content to firebase
      this.editing = false;
    },
    handleCancel() {
      this.editing = false;
    },
  },
  watch: {
    description(val) {
      this.descriptionTxt = val;
    },
  },
};
</script>

<style>
.summery-text p:first-child::first-letter {
  /* padding: 0 0.3rem; */
  /* margin: 0 0.3rem 0 0; */
  font-size: 2.5rem;
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

.clear-both {
  clear: both;
}
</style>
