<template>
  <div>
    <header>
      <h2>{{ examName[0].toUpperCase() + examName.slice(1) }} Exam</h2>
      <!-- exam description should go here -->
      <p>Lorem ipsum dolor sit amet.</p>
    </header>

    <subelement-selector
      v-model="selectedSubelement"
      :subelementIDList="subelementIDList"
    />
    <subelement-description :subelementID="selectedSubelement" />
    <section-selector
      v-model="selectedSectionID"
      :subelementID="selectedSubelement"
    />
    <question-list :sectionID="selectedSectionID" />
  </div>
</template>

<script>
import utils from "../utils/api";

import SubelementSelector from "./UI/SubelementSelector";
import SectionSelector from "./UI/SectionSelector";
import SubelementDescription from "./UI/SubelementDescription";
import QuestionList from "./UI/QuestionList";

export default {
  props: ["examName"],
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
  methods: {},
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