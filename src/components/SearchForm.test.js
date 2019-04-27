import { shallowMount } from '@vue/test-utils';

import SearchForm from './SearchForm.vue';

describe('SearchForm', () => {
  let $c;

  beforeEach(() => {
    $c = shallowMount(SearchForm);
  });

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy();
  });

  it('name is `SearchForm`', () => {
    expect($c.name()).toBe('SearchForm');
  });

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot();
  });

  it('emits search', () => {
    const form = $c.find('form');
    $c.setData({ query: 'test' });

    form.trigger('submit');

    expect($c.emitted().search).toBeTruthy();
    expect($c.emitted().search.length).toBe(1);
    expect($c.emitted().search[0][0]).toMatchSnapshot({
      id: expect.any(Number),
      createdAt: expect.any(Date),
    });
  });
});
