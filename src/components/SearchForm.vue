<template>
  <form
    :class="$style.Form"
    @submit.prevent="handleSubmit"
  >
    <input
      v-model="query"
      :class="$style.Input"
      type="text"
      required
    >
    <button
      :class="$style.Button"
      type="submit"
    >
      send
    </button>
  </form>
</template>

<script>
// eslint-disable-next-line no-param-reassign, no-plusplus
const id = (i => () => i++)(1);

export default {
  name: 'SearchForm',

  data() {
    return {
      query: '',
    };
  },

  methods: {
    handleSubmit() {
      this.$emit('search', {
        id: id(),
        query: this.query,
        createdAt: new Date(),
      });

      this.query = '';
    },
  },
};
</script>

<style module>
.Form {
  display: flex;
}

.Input {
  border: 1px solid rgba(234, 234, 234, 1);
  border-right: none;
  outline: none;
  font-size: 1.4rem;
  padding: 4px 6px;
}

.Button {
  border: 1px solid rgba(76, 175, 80, 1);
  font-weight: bold;
  background: rgba(76, 175, 80, 1);
  outline: none;
  cursor: pointer;
}

.Button:hover {
  border-color: rgba(76, 175, 80, .8);
  background: rgba(76, 175, 80, .8);
}
</style>
