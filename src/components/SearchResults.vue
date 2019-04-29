<template>
  <ViewPort>
    <template #default="{ isMobile }">
      <ResultsEmpty v-if="items.length === 0" />
      <ResultsTables
        v-else-if="isMobile"
        :items="reversedLastThreeItems"
      />
      <ResultsTabs
        v-else
        :items="reversedLastThreeItems"
      />
    </template>
  </ViewPort>
</template>

<script>
import ViewPort from '@/components/ViewPort';
import ResultsEmpty from '@/components/ResultsEmpty.vue';
import ResultsTables from '@/components/ResultsTables.vue';
import ResultsTabs from '@/components/ResultsTabs.vue';

// TODO: tests
export default {
  name: 'SearchResults',

  components: {
    ViewPort,
    ResultsEmpty,
    ResultsTables,
    ResultsTabs,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    reversedLastThreeItems() {
      return this.items.slice(-3).reverse();
    },
    lastThreeItems() {
      return this.items.slice(-3);
    },
  },
};
</script>
