<template>
  <div class="exam-wrapper">
    <slot></slot>
  </div>
</template>

<script>
/*
 <exam-wrapper> is the main container for <the-sidebar> and <the-question-container>. It is
 just a flexbox div which allows the other two containers to sit side by side depending on
 the size of the screen.
*/
export default {};
</script>

<style scoped>
.exam-wrapper {
  display: flex;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .exam-wrapper {
    flex-direction: column;
  }

  #sidebar {
    margin: 1rem 0;
  }
}
</style>