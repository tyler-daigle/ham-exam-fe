<template>
  <div id="sidebar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#sidebar {
  padding: 10px;
  margin-right: 1rem;
  flex: 0 0 45%;
  background-color: #f3f3f3;
  /* border: solid 1px red; */
}
</style>