<template>
  <div class="subelement-description-container">
    <h2 class="subelement-header">Subelement {{ subelementID }}</h2>
    <p class="subelement-description">{{ subelementDescription }}</p>
  </div>
</template>

<script>
/*
  <subelement-description>

  This component just displays the description of the subelement that is
  passed in using the subelementID prop.
*/

import utils from "../../utils/api";

export default {
  props: ["subelementID"],
  data() {
    return {
      subelementDescription: "",
    };
  },
  watch: {
    subelementID() {
      // whenever the subelementID changes
      this.updateSubelementDescription();
    },
  },
  methods: {
    async updateSubelementDescription() {
      try {
        const seData = await utils.getSubelementDetails(this.subelementID);
        this.subelementDescription = seData.subelement_description;
      } catch (e) {
        console.log(
          e,
          `Tried to get details for subelement ${this.subelementId}.`
        );
        return "Subelement Description lookup failed.";
      }
    },
  },
  created() {
    this.updateSubelementDescription();
  },
};
</script>

<style scoped>
.subelement-description-container {
  text-align: center;
  border: solid 1px #f0b962;
  padding: 10px;
  background-color: #f3c57c;
  /* box-shadow: 3px 3px 2px #f0b962; */
}
.subelement-header {
  color: black;
  margin: 0;
}
.subelement-description {
  color: var(--text-color);
  margin: 0;
  font-weight: 300;
}
</style>