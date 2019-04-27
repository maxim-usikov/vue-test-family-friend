<template>
  <li>
    {{ id }}.
    ({{ createdAt | hhmm }})
    {{ query }}
    <span :class="$style.RepositoryCount">{{ repositoryCount }}</span>
  </li>
</template>

<script>
import hhmm from '@/utils/date.hhmm';

export default {
  name: 'HistoryListItem',

  filters: {
    hhmm,
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    response: {
      type: Object,
      required: true,
    },
  },

  computed: {
    repositoryCount() {
      return this.response.data.search.repositoryCount.toLocaleString();
    },
  },
};
</script>

<style module>
.RepositoryCount {
  float: right;
}
</style>
