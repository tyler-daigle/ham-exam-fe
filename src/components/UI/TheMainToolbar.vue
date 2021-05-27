<template>
  <nav>
    <ul class="main-nav-list">
      <li
        class="main-nav-item"
        :class="{ selected: selected === 0 }"
        @click="$emit('viewQuestions')"
      >
        Question Selector
      </li>
      <li
        class="main-nav-item"
        :class="{ selected: selected === 1 }"
        @click="$emit('viewSelected')"
      >
        View Selected Questions
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  emits: ["viewQuestions", "viewSelected"],
  props: ["selected"],
  data() {
    return {
      selectedItem: 0,
    };
  },
};
</script>

<style scoped>
nav {
  border-bottom: solid 3px black;
  margin-bottom: 1rem;
}
.selected {
  background-color: #45c434;
  color: white;
}

.main-nav-list {
  list-style-type: none;
  display: flex;
  margin: 0 auto;
  max-width: 1440px;

  padding: 0;
}

.main-nav-item {
  cursor: pointer;
  margin-right: 1rem;
  border: solid 1px black;
  /*#45c434;*/
  border-bottom: none;
  padding: 0.25rem 1rem;
}
.main-nav-item:hover {
  background-color: #45c434;
  color: white;
}
</style>