<template>
  <div
    @click="sectionClicked"
    class="section-list-item"
    :class="{ 'selected-item': selected }"
  >
    <header>
      <span v-if="done" class="selected-questions"
        ><span class="material-icons">check_box</span></span
      >
      <span v-else class="selected-questions"
        ><span class="material-icons">check_box_outline_blank</span></span
      >
      <h3 class="section-header">Section {{ sectionID }}</h3>
    </header>
    <p class="section-description">{{ sectionDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    sectionID: String,
    sectionDescription: String,
    selected: Boolean,
    done: Boolean,
  },
  methods: {
    sectionClicked() {
      this.$emit("section-clicked", this.sectionID);
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
}
header span {
  display: block;
}
.section-list-item {
  border: solid 1px #ccc9c9;
  background-color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 4px 4px 4px #dcd9d9;
  /* border-radius: 10px; */
}

.section-list-item:hover {
  background-color: #e6e6e6;
}

.selected-item {
  background-color: #e6e6e6;
}

.section-header {
  margin: 0 0.5rem;
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