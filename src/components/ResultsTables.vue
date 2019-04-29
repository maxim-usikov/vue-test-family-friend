<template>
  <section>
    <template v-for="item in items">
      <h3 :key="item.id">
        {{ item.id }}. {{ item.query }}
      </h3>
      <RepositoryTable
        :key="item.id"
        :items="item.response.data.search.edges"
      />
    </template>
  </section>
</template>

<script>
import RepositoryTable from '@/components/RepositoryTable.vue';

// TODO: tests
export default {
  name: 'ResultsTables',

  components: {
    RepositoryTable,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
