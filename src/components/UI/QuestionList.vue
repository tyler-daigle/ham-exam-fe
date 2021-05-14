<template>
  <div class="question-list-container">
    <ul class="question-list">
      <li
        class="question-list-item"
        v-for="question in questionList"
        :key="question.id"
      >
        <question-item :questionData="question" :selected="false" />
      </li>
    </ul>
    <p>End of questions.</p>
  </div>
</template>

<script>
import QuestionItem from "./QuestionItem";
/*
  <question-list>
  Displays the list of questions that are sent to it in the questionData prop.  
*/

export default {
  props: {
    questionList: {
      type: Array,
      required: true,
    },
  },
  components: {
    QuestionItem,
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