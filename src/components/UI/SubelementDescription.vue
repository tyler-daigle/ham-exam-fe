<template>
  <div>
    <p>{{ subelementDescription }}</p>
  </div>
</template>

<script>
import utils from "../../utils/api";

export default {
  props: ["subelementId"],
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
        const seData = await utils.getSubelementDetails(this.subelementId);
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