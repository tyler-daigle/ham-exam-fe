<template>
  <div>
    <p>{{ subelementDescription }}</p>
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
    subelementId() {
      console.log("Subelement id changed");
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