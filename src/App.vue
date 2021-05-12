<template>
  <div>
    <the-header />
    <exam-wrapper>
      <exam examName="technician" />
    </exam-wrapper>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader";
import ExamWrapper from "./components/layout/ExamWrapper";
import Exam from "./components/Exam";

export default {
  components: {
    TheHeader,
    ExamWrapper,
    Exam,
  },
};
</script>

<style>
</style>
