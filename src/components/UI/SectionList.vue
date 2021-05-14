<template>
  <div>
    <ul class="section-list">
      <section-item
        v-for="section in sections"
        @section-clicked="sectionClicked"
        :key="section.section_id"
        :sectionID="section.section_id"
        :sectionDescription="section.section_description"
        :selected="selectedSection === section.section_id"
        :done="isSectionDone(section.section_id)"
      >
      </section-item>
    </ul>
  </div>
</template>

<script>
/*
  <section-list>
  This component creates a <select> element that allows you to choose a section from the subelement. 

  The required props is an Array of the Sections for the
  currently selected subelement. This array is the value
  returned from getSectionsInSubelement() from api.js.
  
*/
import SectionItem from "./SectionItem";
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
    changeSectionHandler: {
      type: Function,
      required: true,
    },
    selectedSection: {
      type: String,
      required: true,
    },
    selectedQuestions: {
      type: Object,
      required: true,
    },
  },
  components: {
    SectionItem,
  },
  methods: {
    sectionClicked(sectionID) {
      console.log(`Section ${sectionID} clicked.`);
      this.changeSectionHandler(sectionID);
    },
    isSectionDone(sectionID) {
      // a section is done if any question is selected.
      // just make sure it's not === "" which means the question
      // was unselected and one hasn't be reselected again.
      if (sectionID in this.selectedQuestions) {
        return this.selectedQuestions[sectionID] !== "";
      }
      return false;
    },
  },
  created() {
    console.log(`First: ${this.selectedSection}`);
  },
};
</script>

<style scoped>
.section-list {
  list-style-type: none;
  padding: 0;
}
</style>