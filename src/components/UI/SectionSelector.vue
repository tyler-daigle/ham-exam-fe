<template>
  <div>
    <p>Displaying sections for subelement {{ subelementId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    subelementId: String,
  },
};
</script>