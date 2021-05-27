<template>
  <div>
    <the-header />
    <exam-app
      examName="general"
      examDescription="This is the technician exam."
    />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import ExamApp from "./components/ExamApp";

export default {
  components: {
    TheHeader,
    ExamApp,
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
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
</style>
