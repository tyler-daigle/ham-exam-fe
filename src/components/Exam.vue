<template>
  <div>
    <header class="exam-header">
      <h2 class="exam-name">{{ fullExamName }} Exam</h2>
      <!-- exam description should go here -->
      <p class="exam-description">{{ examDescription }}</p>
    </header>

    <subelement-selector
      v-model="selectedSubelement"
      :subelementIDList="subelementIDList"
    />
    <subelement-description :subelementID="selectedSubelement" />
    <section-selector
      @section-changed="sectionChanged"
      :subelementID="selectedSubelement"
    />

    <div v-if="selectedSectionID">
      <question-list :sectionID="selectedSectionID" />
    </div>
    <div v-else>
      <h3>Choose a section to display the list of questions.</h3>
    </div>
  </div>
</template>

<script>
import utils from "../utils/api";

import SubelementSelector from "./UI/SubelementSelector";
import SectionSelector from "./UI/SectionSelector";
import SubelementDescription from "./UI/SubelementDescription";
import QuestionList from "./UI/QuestionList";

export default {
  props: ["examName", "examDescription"],
  components: {
    SubelementSelector,
    SectionSelector,
    SubelementDescription,
    QuestionList,
  },
  data() {
    return {
      subelementIDList: [],
      selectedSubelement: "",
      selectedSectionID: "",
    };
  },
  watch: {
    selectedSubelement() {
      console.log("changing");
      this.selectedSectionID = "";
    },
  },
  computed: {
    fullExamName() {
      return this.examName[0].toUpperCase() + this.examName.slice(1);
    },
  },
  methods: {
    sectionChanged(section) {
      this.selectedSectionID = section;
    },
  },
  created() {
    // have to set the subelementIDList based on the
    // name of the exam.
    this.subelementIDList = utils.getSubelements(this.examName);
    // get all the subelements here as well as how
    // many questions from each subelement.
    // The subelement descriptions.
    // don't need the sections in each subelement because
    // the <section-selector> will handle displaying
    // the sections, all it needs is the subelement id.
    this.selectedSubelement = this.subelementIDList[0];
  },
};
</script>

<style scoped>
.exam-header {
  text-align: center;
}
.exam-name {
  color: var(--header-color);
  margin: 0;
}

.exam-description {
  margin: 0 0 1rem 0;
  color: var(--text-color);
}
</style>