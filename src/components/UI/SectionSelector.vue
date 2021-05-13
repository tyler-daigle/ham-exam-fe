<template>
  <div>
    <ul class="section-list">
      <li
        v-for="section in sectionList"
        class="section-list-item"
        :class="{ 'selected-item': selectedSection === section.section_id }"
        :key="section.section_id"
        @click="select(section.section_id)"
      >
        <h3 class="section-header">Section {{ section.section_id }}</h3>
        <p class="section-description">{{ section.section_description }}</p>
        <span class="selected-questions">1 Question Selected</span>
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
  emits: ["section-changed"],
  props: {
    subelementID: String,
  },
  data() {
    return {
      sectionList: [],
      selectedSection: "",
    };
  },
  watch: {
    subelementID() {
      this.updateSectionList();
    },
  },
  methods: {
    select(val) {
      this.selectedSection = val;
      this.$emit("section-changed", val);
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
  border: solid 1px #ccc9c9;
  background-color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 4px 4px 4px #dcd9d9;
  border-radius: 10px;
}

.section-list-item:hover {
  background-color: #e6e6e6;
}

.selected-item {
  background-color: #e6e6e6;
}

.section-header {
  margin: 0;
  font-weight: 400;
  color: var(--header-color);
}

.section-description {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 300;
}

.selected-questions {
  color: #0a5511;
  font-weight: 300;
}
</style>