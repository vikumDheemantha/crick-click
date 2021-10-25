<template>
  <div>
    <section>
      <v-container fluid>
        <filter-card class="mt-5" />
      </v-container>
      <match-result />
    </section>
  </div>
</template>

<script>
import FilterCard from "../components/matchSearchView/FilterCard.vue";
import MatchResult from "../components/matchSearchView/MatchResult.vue";

export default {
  components: { FilterCard, MatchResult },
};
</script>

<style>
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
