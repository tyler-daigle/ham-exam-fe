<template>
  <div>
    <header class="exam-header">
      <h2 class="exam-name">{{ fullExamName }} Exam</h2>
      <!-- exam description should go here -->
      <p class="exam-description">{{ examDescription }}</p>
    </header>

    <main>
      <exam-wrapper>
        <the-sidebar>
          <subelement-selector
            v-model="selectedSubelement"
            :subelementIDList="subelementIDList"
          />
          <subelement-description :subelementID="selectedSubelement" />
          <section-list
            :sections="currentSectionList"
            :changeSectionHandler="changeSection"
            :selectedSection="selectedSection"
            :selectedQuestions="selectedQuestions"
          />
        </the-sidebar>

        <the-question-container>
          <div v-if="selectedSection && selectedSection !== ''">
            <question-list
              :questionList="questionList"
              :selectedQuestions="selectedQuestions"
              :selectQuestionHandler="selectQuestion"
            />
          </div>
          <div v-else>
            <h3 class="no-selection">
              Choose a section to display the list of questions.
            </h3>
          </div>
        </the-question-container>
      </exam-wrapper>
    </main>
  </div>
</template>

<script>
import utils from "../utils/api";

import ExamWrapper from "../components/layout/ExamWrapper";
import TheSidebar from "../components/layout/TheSidebar";
import SubelementSelector from "./UI/SubelementSelector";
import SectionList from "./UI/SectionList";
import SubelementDescription from "./UI/SubelementDescription";
import QuestionList from "./UI/QuestionList";
import TheQuestionContainer from "./layout/TheQuestionContainer";

export default {
  props: ["examName", "examDescription"],
  components: {
    SubelementSelector,
    SubelementDescription,
    SectionList,
    QuestionList,
    TheSidebar,
    ExamWrapper,
    TheQuestionContainer,
  },
  data() {
    return {
      // subelementIDList - Array of subelements - set in create()
      subelementIDList: [],
      // selectedSubelement is used for the v-model with the <subelement-selector>. changes when
      // the user selects a different subelement. Also used by <subelement-description> to display
      // the descriptions.
      selectedSubelement: "",
      // currentSectionList is an Array of the sections that are currently being displayed
      currentSectionList: [],
      selectedSection: "", // the section that has been selected
      // questionList is an Array of the questions that are in the currently
      // selected section (selectedSection). The questions come from
      // getQuestionsInSection() from api.js
      questionList: [],
      // selectedQuestion is an Object containing the selected question in
      // each section. Most exams only select one question from each section,
      // although it isn't required to do so it is how this app will do it.
      // the object will look like: {T1A: "T1A02", T1B: "T1B04",...} Each
      // section will be the key and the selected question will be the value.
      // This way only one question can be selected from each section.
      // To unselect a question just set the section to ""
      selectedQuestions: {},
    };
  },
  computed: {
    fullExamName() {
      return this.examName[0].toUpperCase() + this.examName.slice(1);
    },
  },
  methods: {
    // changeSection() is the handler passed down to SectionList and is
    // triggered when a section is selected. It passes the sectionID of
    // the section that was clicked.
    async changeSection(sectionID) {
      this.selectedSection = sectionID;
      // section changes so the question list has to be updated.
      this.questionList = await utils.getQuestionsInSection(sectionID);
    },
    async updateSectionList() {
      this.currentSectionList = await utils.getSectionsInSubelement(
        this.selectedSubelement
      );
    },
    selectQuestion(questionID) {
      const sectionID = questionID.slice(0, 3);

      console.log(questionID);
      // check if the question that was just selected was the question that
      // was already selected - if so we set the value to ""
      // Just adding a property to the object will not trigger Vue's reactivity
      // so a new object must be created each time.
      if (sectionID in this.selectedQuestions) {
        let val;
        if (this.selectedQuestions[sectionID] === questionID) {
          val = ""; //unselect the already selected question
        } else {
          val = questionID;
        }
        this.selectedQuestions = {
          ...this.selectedQuestions,
          [sectionID]: val,
        };
      } else {
        // the section key isn't in the object yet, so it can
        // just be set as the selected question.
        this.selectedQuestions = {
          ...this.selectedQuestions,
          [sectionID]: questionID,
        };
      }
      console.log(Object.values(this.selectedQuestions));
    },
  },
  watch: {
    selectedSubelement() {
      // if the subelement selection changes the section list must be updated.
      // also the current selected section has to be reset.
      this.updateSectionList();
      this.selectedSection = "";
    },
    selectedQuestions() {
      console.log(this.selectedQuestions);
    },
  },
  async created() {
    // Get the list of subelements based on the name of the exam.
    // Set the first subelement to be the selected one.
    this.subelementIDList = utils.getSubelements(this.examName);
    this.selectedSubelement = this.subelementIDList[0];

    // get the initial sections for the first selected subelement
    this.updateSectionList();
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

.no-selection {
  text-align: center;
}
</style>