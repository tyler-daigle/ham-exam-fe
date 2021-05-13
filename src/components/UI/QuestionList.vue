<template>
  <div class="question-list-container">
    <ul class="question-list">
      <li
        class="question-list-item"
        v-for="question in questionList"
        :key="question.id"
      >
        <question-item :questionData="question" />
      </li>
    </ul>
    <p>End of questions for section {{ sectionID }}.</p>
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
    sectionID: {
      type: String,
      required: true,
    },
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

<style scoped>
.question-list-container {
  border: solid 1px #ccc9c9;
  padding: 1rem;
}

.question-list {
  list-style-type: none;
  padding: 0;
}

.question-list-item {
  border-bottom: solid 1px #ccc9c9;
  padding-bottom: 1rem;
}
</style>