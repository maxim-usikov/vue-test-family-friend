<template>
  <section>
    <ul :class="$style.Tabs">
      <li
        v-for="(item, idx) in items"
        :key="item.id"
        :class="{
          [$style.Tab]: true,
          [$style.Active]: idx === currentTab
        }"
        @click="changeTab(item)"
      >
        <slot :tab="item">
          {{ item.id }}. {{ item.query }}
        </slot>
      </li>
    </ul>

    <div :class="$style.Details">
      <RepositoryTable
        :key="detailsKey"
        :items="details"
      />
    </div>
  </section>
</template>

<script>
import RepositoryTable from '@/components/RepositoryTable.vue';

// TODO: tests
export default {
  name: 'ResultsTabs',

  components: {
    RepositoryTable,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      currentTab: 0,
    };
  },

  computed: {
    detailsKey() {
      return this.items[this.currentTab].id;
    },
    details() {
      return this.items[this.currentTab].response.data.search.edges || [];
    },
  },

  watch: {
    items() {
      this.currentTab = 0;
    },
  },

  methods: {
    changeTab(item) {
      this.currentTab = this.items.findIndex(i => i === item);
    },
  },
};
</script>

<style module>
.Tabs {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  list-style: none;
  padding: 0;
  margin: 0;
}

.Tab {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

.Tab:hover {
  background-color: #ddd;
}

.Tab.Active {
  background-color: #ccc;
}

.Details {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
