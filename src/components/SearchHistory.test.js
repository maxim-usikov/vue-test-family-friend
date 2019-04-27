import { shallowMount } from '@vue/test-utils';

import SearchHistory from './SearchHistory.vue';

describe('SearchHistory', () => {
  let $c;

  beforeEach(() => {
    $c = shallowMount(SearchHistory, {
      propsData: {
        items: [],
      },
    });
  });

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy();
  });

  it('name is `SearchHistory`', () => {
    expect($c.name()).toBe('SearchHistory');
  });

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot();
  });

  it('toggles show', () => {
    const a = $c.find('a');

    expect($c.vm.show).toBeFalsy();
    a.trigger('click');
    expect($c.vm.show).toBeTruthy();
    a.trigger('click');
    expect($c.vm.show).toBeFalsy();
  });

  it('renders HistoryEmptyList component', () => {
    $c.setProps({ items: [] });
    $c.setData({ show: true });

    expect($c.element).toMatchSnapshot();
  });

  it('renders HistoryList component', () => {
    $c.setProps({
      items: [
        {
          id: 111,
          query: 'test',
          createdAt: new Date('December 26, 1990 00:00:00'),
          response: { data: { search: { repositoryCount: 888 } } },
        },
        {
          id: 222,
          query: 'vue',
          createdAt: new Date('December 26, 1990 20:00:00'),
          response: { data: { search: { repositoryCount: 999 } } },
        },
      ],
    });
    $c.setData({ show: true });

    expect($c.element).toMatchSnapshot();
  });
});
