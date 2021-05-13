<template>
  <div>
    <the-header />
    <exam-wrapper>
      <exam
        examName="technician"
        examDescription="This is the technician exam."
      />
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
:root {
  --header-color: #14213d;
  --section-bg-color: #fff;
  --selected-section-bg-color: #e5e5e5;
  --text-color: #3a3a3a;
  --border-color: #14213d;
}
body {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
</style>
