<template>
  <div>
    <p>
      <span class="question-id">[{{ questionData.id }}]</span>
      {{ questionData.question_text }}
    </p>
    <ol class="choices-list">
      <li
        v-for="(choiceText, choiceKey) in questionData.choices"
        :key="questionData.id + choiceKey"
        class="question-choice"
        :class="{ 'question-answer': choiceKey === questionData.answer }"
      >
        <span> {{ choiceKey }}.</span>
        {{ choiceText }}
      </li>
    </ol>
  </div>
</template>

<script>
/*
  <question-item> displays the question along with its
  choices.

  The prop is the question object that will be returned 
  from the api.
*/
export default {
  props: {
    questionData: Object,
  },
};
</script>

<style scoped>
.choices-list {
  padding: 0;
  list-style-type: none;
}

.question-choice {
  font-size: 0.85rem;
  font-weight: 300;
}
.question-answer {
  color: #45c434;
  font-weight: 500;
  /* border: solid 1px #7ad66e; */
}
</style>