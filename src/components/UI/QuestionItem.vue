<template>
  <div>
    <p>
      <span class="question-id">{{ questionData.id }}</span>
      {{ questionData.question_text }}
    </p>
    <ol class="choices-list">
      <li
        v-for="(choiceText, choiceKey) in questionData.choices"
        :key="questionData.id + choiceKey"
        :class="{ 'question-answer': choiceKey === questionData.answer }"
      >
        {{ choiceKey }}. {{ choiceText }}
      </li>
    </ol>
  </div>
</template>

<script>
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

.question-answer {
  background-color: red;
}
</style>