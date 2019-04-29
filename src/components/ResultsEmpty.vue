<template>
  <div :class="$style.Container">
    No results
  </div>
</template>

<script>
export default {
  name: 'ResultsEmpty',
};
</script>

<style module>
.Container {
  background: rgba(234, 234, 234, 1);
  list-style: none;
  margin: 0;
  padding: 10px;
}
</style>
