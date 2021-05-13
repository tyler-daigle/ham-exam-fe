<template>
  <div class="question-list-container">
    <ul class="question-list">
      <li
        class="question-list-item"
        v-for="question in questionList"
        :key="question.id"
      >
        <question-item
          @question-selected="questionSelected"
          :questionData="question"
          :selected="selectedQuestion === question.id"
        />
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
  inject: ["selectedQuestions", "selectQuestion", "unselectQuestion"],
  data() {
    return {
      questionList: [],
      selectedQuestion: "",
    };
  },
  created() {
    if (this.sectionID !== "") {
      // is it possible to get here with sectionID === ""?
      // if so it will make the api request fail.
      this.updateQuestionList();
    }
  },
  updated() {
    // have to keep track of when this component is updated. Otherwise the
    // selected question won't be changed when a new subelement is
    // selected. The selected question won't be marked until you
    // switch to a second section.
    this.selectedQuestion = this.selectedQuestions[this.sectionID];
  },
  watch: {
    sectionID() {
      // watch for changes to the sectionID - when it occurs the selectedQuestion has
      // to change.
      this.selectedQuestion = this.selectedQuestions[this.sectionID];
      this.updateQuestionList();
    },
  },
  methods: {
    async updateQuestionList() {
      console.log(`Getting questions for section ${this.sectionID}.`);
      this.questionList = await getQuestionsInSection(this.sectionID);
    },
    questionSelected(questionID) {
      // event handler for when a <question-item> is selected
      // The question is either selected or unselected.

      console.log(this.selectedQuestions, this.sectionID);
      console.log(`Current selected: ${this.selectedQuestion}`);

      // check if the question was already selected
      if (this.selectedQuestion === questionID) {
        this.unselectQuestion(questionID);
        this.selectedQuestion = "";
      } else {
        this.selectedQuestion = questionID;
        this.selectQuestion(questionID);
      }
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