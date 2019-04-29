<template>
  <table :class="$style.Table">
    <caption :class="$style.Caption">
      <input
        v-model="currentFilter"
        type="text"
        :class="$style.Filter"
        placeholder="filter by name"
      >
    </caption>
    <thead>
      <tr>
        <th>
          name
          <i
            :class="{
              [$style.SortIcon]: true,
              [$style.SortActive]:
                currentSort.field === 'name' && currentSort.order === 'ASC'
            }"
            @click="handleSort('name', 'ASC')"
          >&uarr;</i>
          <i
            :class="{
              [$style.SortIcon]: true,
              [$style.SortActive]:
                currentSort.field === 'name' && currentSort.order === 'DESC'
            }"
            @click="handleSort('name', 'DESC')"
          >&darr;</i>
        </th>
        <th>
          stars
          <i
            :class="{
              [$style.SortIcon]: true,
              [$style.SortActive]:
                currentSort.field === 'stars' && currentSort.order === 'ASC'
            }"
            @click="handleSort('stars', 'ASC')"
          >&uarr;</i>
          <i
            :class="{
              [$style.SortIcon]: true,
              [$style.SortActive]:
                currentSort.field === 'stars' && currentSort.order === 'DESC'
            }"
            @click="handleSort('stars', 'DESC')"
          >&darr;</i>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in paginatedSortedAndFilteredItems"
        :key="item.cursor"
      >
        <td>{{ item.node.name }}</td>
        <td :class="$style.Stars">
          {{ item.node.stargazers.totalCount.toLocaleString() }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">
          <div :class="$style.Pages">
            <a
              v-for="page in pages"
              :key="page"
              :class="{
                [$style.Page]: true,
                [$style.PageActive]: currentPage === page
              }"
              href="#"
              @click.prevent="handlePage(page)"
            >
              {{ page }}
            </a>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import simplePagination from '@/utils/simplePagination';
import removeNonLetters from '@/utils/str.removeNonLetters';

// TODO: refactor
// TODO: tests
export default {
  name: 'RepositoryTable',

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      currentFilter: '',
      currentSort: {
        field: '',
        order: '',
      },
      currentPage: 1,
      perPage: 10,
    };
  },

  computed: {
    filteredItems() {
      return this.items.filter(this.filterByName);
    },

    paginatedSortedAndFilteredItems() {
      const { field, order } = this.currentSort;

      return this.paginate(
        this.sortBy(field, order),
        this.perPage,
        this.currentPage,
      );
    },

    pages() {
      const current = this.currentPage;
      const total = Math.ceil(this.totalItems / this.perPage);

      return simplePagination(current, total);
    },

    totalItems() {
      return this.items.length;
    },
  },

  methods: {
    paginate(arr, size, n) {
      const num = n - 1;
      return arr.slice(num * size, (num + 1) * size);
    },

    filterByName(item) {
      return item.node.name.includes(this.currentFilter);
    },

    handleSort(field, order) {
      this.currentSort = { field, order };
    },

    handlePage(page) {
      if (page === '...') return;

      this.currentPage = page;
    },

    sortBy(field, order) {
      switch (field) {
        case 'name':
          return this.filteredItems.sort(this.sortByName(order));
        case 'stars':
          return this.filteredItems.sort(this.sortByStars(order));
        default:
          return this.filteredItems;
      }
    },

    sortByName(order) {
      if (order === 'ASC') {
        return (a, b) => {
          const lowA = removeNonLetters(a.node.name.toLowerCase());
          const lowB = removeNonLetters(b.node.name.toLowerCase());

          if (lowA === lowB) {
            return 0;
          }

          return lowA > lowB ? 1 : -1;
        };
      }

      return (a, b) => {
        const lowA = removeNonLetters(a.node.name.toLowerCase());
        const lowB = removeNonLetters(b.node.name.toLowerCase());

        if (lowA === lowB) {
          return 0;
        }

        return lowB > lowA ? 1 : -1;
      };
    },

    sortByStars(order) {
      if (order === 'ASC') {
        return (a, b) => a.node.stargazers.totalCount - b.node.stargazers.totalCount;
      }

      return (a, b) => b.node.stargazers.totalCount - a.node.stargazers.totalCount;
    },
  },
};
</script>

<style module>
.Table {
  width: 100%;
  border-collapse: collapse;
}

.Table,
.Table th,
.Table td {
  border: 1px solid rgba(234, 234, 234, 1);
}

.Caption {
  text-align: left;
}

.Filter {
  border: 1px solid rgba(234, 234, 234, 1);
  outline: none;
  font-size: 1.4rem;
  padding: 4px 6px;
  margin: 0 0 6px;
}

.Stars {
  text-align: right;
}

.SortIcon {
  cursor: pointer;
}

.SortActive {
  color: red;
}

.Pages {
  margin-top: 6px;
  display: inline-block;
}

.Page {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.PageActive {
  background-color: #4CAF50;
  color: white;
}

.Page:hover:not(.PageActive) {
  background-color: #ddd;
}


</style>
