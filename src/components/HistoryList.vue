<template>
  <ul :class="$style.Container">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'HistoryList',
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
