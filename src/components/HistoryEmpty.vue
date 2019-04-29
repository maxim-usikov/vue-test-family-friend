<template>
  <div :class="$style.Container">
    No history
  </div>
</template>

<script>
export default {
  name: 'HistoryEmpty',
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
