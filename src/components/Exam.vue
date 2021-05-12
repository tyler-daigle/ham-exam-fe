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

    <!-- TODO: create the v-model for the section-selector  
      create the actual list - it should be a nice looking
      list and not a select element.
    -->
    <section-selector :subelementId="selectedSubelement" />

    <!-- TODO: create the question list 
         props will be just the sectionID and then we get
         all the questions that have that sectionID         
    -->
    <question-list />
  </div>
</template>

<script>
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
      subelementIDList: ["T1", "T2", "T3", "T4"],
      selectedSubelement: "",
    };
  },
  methods: {},
  created() {
    // have to set the subelementIDList based on the
    // name of the exam.

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