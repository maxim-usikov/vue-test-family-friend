import { shallowMount } from '@vue/test-utils';

import HistoryList from './HistoryList.vue';

describe('HistoryList', () => {
  let $c;

  beforeEach(() => {
    $c = shallowMount(HistoryList);
  });

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy();
  });

  it('name is `HistoryList`', () => {
    expect($c.name()).toBe('HistoryList');
  });

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot();
  });
});
