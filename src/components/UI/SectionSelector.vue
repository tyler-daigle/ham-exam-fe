<template>
  <div>
    <p>Displaying sections for subelement {{ subelementID }}</p>
    <h3>Selected: {{ value }}</h3>
    <ul class="section-list">
      <li
        v-for="section in sectionList"
        class="section-list-item"
        :class="{ 'selected-item': value === section.section_id }"
        :key="section.section_id"
        @click="select(section.section_id)"
      >
        <h4>Section {{ section.section_id }}</h4>
        <p>{{ section.section_description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
/*
  <section-selector>
  This component creates a <select> element that allows you to choose a 
  section from the subelement. 

  The required prop is the subelementID which is the ID of the subelement
  used in exam (the ID will probably come from the <subelement-selector> 
  component). This component will use the subelementID to get all the
  sections in that subelement from the database.
*/

import { getSectionsInSubelement } from "../../utils/api";

export default {
  props: {
    value: String,
    subelementID: String,
  },
  data() {
    return {
      sectionList: [],
    };
  },
  watch: {
    subelementID() {
      this.updateSectionList();
    },
  },
  methods: {
    select(val) {
      this.$emit("input", val);
    },
    async updateSectionList() {
      this.sectionList = await getSectionsInSubelement(this.subelementID);
    },
  },
  async created() {
    this.updateSectionList();
  },
};
</script>

<style scoped>
.section-list {
  list-style-type: none;
  padding: 0;
}

.section-list-item {
  border: solid 1px #ccc;
  margin-bottom: 1rem;
  padding: 10px;
  cursor: pointer;
}

.selected-item {
  background-color: #ccc;
}
</style>