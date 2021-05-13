<template>
  <div>
    <div v-if="sectionID">
      <header>
        <h2>Questions for section {{ sectionID }}.</h2>
        <question-item
          v-for="question in questionList"
          :key="question.id"
          :questionData="question"
        />
      </header>
    </div>
    <div v-else>
      <header>
        <h2>Choose a section</h2>
      </header>
    </div>
  </div>
</template>

<script>
import { getQuestionsInSection } from "../../utils/api";
import QuestionItem from "./QuestionItem";
/*
  <question-list>

  Displays all the questions from the section with the sectionID that is
  passed as a prop.

  Uses the /questions/section/:sectionId route of the API.

  The list of questions is made up of <question-item>
  components. <question-item> takes a question object (the
  same object that is returned by the api) to display
  the question.
*/

export default {
  props: {
    sectionID: String,
  },
  components: {
    QuestionItem,
  },
  data() {
    return {
      questionList: [],
    };
  },
  created() {
    if (this.sectionID !== "") {
      // is it possible to get here with sectionID === ""?
      // if so it will make the api request fail.
      this.updateQuestionList();
    }
  },
  watch: {
    sectionID() {
      this.updateQuestionList();
    },
  },
  methods: {
    async updateQuestionList() {
      console.log(`Getting questions for section ${this.sectionID}.`);
      this.questionList = await getQuestionsInSection(this.sectionID);
    },
  },
};
</script>