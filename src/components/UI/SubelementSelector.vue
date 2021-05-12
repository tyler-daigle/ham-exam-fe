<template>
  <div>
    <select :value="value" @input="selectChanged">
      <option
        v-for="subelement in subelementIDList"
        :value="subelement"
        :key="subelement"
      >
        Subelement {{ subelement }}
      </option>
    </select>
  </div>
</template>

<script>
/*
  <subelement-selector>

  This component creates a <select> element that allows you to choose
  each subelement from the exam. It requires a list of the subelement IDs.
  These IDs are stored in the database and are loaded by calling
  getSubElements() from api.js. 
*/
export default {
  props: ["subelementIDList", "value"],
  methods: {
    selectChanged(e) {
      console.log(e.target.value);
      this.$emit("input", e.target.value);
    },
  },
};
</script>