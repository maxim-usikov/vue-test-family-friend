import { shallowMount } from '@vue/test-utils';

import HistoryEmptyList from './HistoryEmptyList.vue';

describe('HistoryEmptyList', () => {
  let $c;

  beforeEach(() => {
    $c = shallowMount(HistoryEmptyList);
  });

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy();
  });

  it('name is `HistoryEmptyList`', () => {
    expect($c.name()).toBe('HistoryEmptyList');
  });

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot();
  });
});
