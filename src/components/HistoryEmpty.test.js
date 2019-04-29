import { shallowMount } from '@vue/test-utils';

import HistoryEmpty from './HistoryEmpty.vue';

describe('HistoryEmpty', () => {
  let $c;

  beforeEach(() => {
    $c = shallowMount(HistoryEmpty);
  });

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy();
  });

  it('name is `HistoryEmpty`', () => {
    expect($c.name()).toBe('HistoryEmpty');
  });

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot();
  });
});
