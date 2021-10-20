<template>
  <v-container>
    <h3 class="primary--text my-5">All Organizations</h3>
    <search-filter />
    <v-row>
      <v-col cols="12" md="8">
        <organization-table />
      </v-col>
      <v-col cols="12" md="4">
        <organization-profile-card />
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import OrganizationProfileCard from "../components/organizationList/OrganizationProfileCard.vue";
import OrganizationTable from "../components/organizationList/OrganizationTable.vue";
import SearchFilter from "../components/organizationList/SearchFilter.vue";
export default {
  components: { SearchFilter, OrganizationProfileCard, OrganizationTable },
};
</script>

<style></style>
