<template>
  <div>
    <p>Displaying sections for subelement {{ subelementId }}</p>
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
import { getSectionsInSubelement } from "../../utils/api";

export default {
  props: {
    value: String,
    subelementId: String,
  },
  data() {
    return {
      sectionList: [],
    };
  },
  watch: {
    subelementId() {
      this.updateSectionList();
    },
  },
  methods: {
    select(val) {
      this.$emit("input", val);
    },
    async updateSectionList() {
      this.sectionList = await getSectionsInSubelement(this.subelementId);
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