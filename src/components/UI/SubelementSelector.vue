<template>
  <div>
    <select :value="value" @input="selectChanged">
      <option
        v-for="subelement in subelementIDList"
        :value="subelement"
        :key="subelement.id"
      >
        Select something
      </option>
    </select>
  </div>
</template>

<script>
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