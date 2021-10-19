<template>
  <v-card class="mt-15">
    <v-card-text class="text-body-1 summery-text">
      <p class="text-justify">
        ABC Organization is leading sport club mainly focus on cricket as a
        sport and one of the organization that peform lot of international and
        national level cricket matches and turnaments in sri lanka. This is one
        of the most trusted cricket organization in the courtry and trusded by
        many national level cricket players.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
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
</style>

