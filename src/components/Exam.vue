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
    <subelement-description :subelementId="selectedSubelement" />
    <section-selector
      v-model="selectedSectionID"
      :subelementId="selectedSubelement"
    />
    <!-- TODO: create the question list 
         props will be just the sectionID and then we get
         all the questions that have that sectionID         
    -->
    <question-list />
  </div>
</template>

<script>
import utils from "../utils/api";

import SubelementSelector from "./UI/SubelementSelector";
import SectionSelector from "./UI/SectionSelector";
import SubelementDescription from "./UI/SubelementDescription";

export default {
  props: ["examName"],
  components: {
    SubelementSelector,
    SectionSelector,
    SubelementDescription,
  },
  data() {
    return {
      subelementIDList: [],
      selectedSubelement: "",
      selectedSectionID: "",
    };
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