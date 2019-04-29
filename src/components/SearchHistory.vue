<template>
  <section>
    <a
      href="#"
      @click="toggleShow"
    >История запросов:</a>
    <HistoryEmptyList v-if="show && items.length === 0" />
    <HistoryList v-else-if="show">
      <HistoryListItem
        v-for="item in items"
        :key="item.id"
        v-bind="item"
      />
    </HistoryList>
  </section>
</template>

<script>
import HistoryEmptyList from '@/components/HistoryEmptyList.vue';
import HistoryList from '@/components/HistoryList.vue';
import HistoryListItem from '@/components/HistoryListItem.vue';

export default {
  name: 'SearchHistory',

  components: {
    HistoryEmptyList,
    HistoryList,
    HistoryListItem,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>
