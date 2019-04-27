import { shallowMount } from '@vue/test-utils';

import HistoryListItem from './HistoryListItem.vue';

describe('HistoryListItem', () => {
  let $c;

  beforeEach(() => {
    $c = shallowMount(HistoryListItem, {
      propsData: {
        id: 777,
        query: 'test',
        createdAt: new Date('December 26, 1990 20:00:00'),
        response: { data: { search: { repositoryCount: 999 } } },
      },
    });
  });

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy();
  });

  it('name is `HistoryListItem`', () => {
    expect($c.name()).toBe('HistoryListItem');
  });

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot();
  });
});
