<template>
  <header>
    <img
      id="radio-tower-svg"
      src="../../assets/radio-tower.svg"
      alt="radio-tower"
    />
    <h1>Ham Exam Creator</h1>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  border-bottom: solid 3px var(--header-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
}
h1 {
  color: var(--header-color);
  margin: 0;
}

#radio-tower-svg {
  height: 3rem;
  width: 3rem;
  color: var(--header-color);
}
</style>