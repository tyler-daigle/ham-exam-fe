<template>
  <div>
    <header>
      <h2 v-if="sectionID">Questions for section {{ sectionID }}.</h2>
      <h2 v-else>Choose a section</h2>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    sectionID: String,
  },
};
</script>