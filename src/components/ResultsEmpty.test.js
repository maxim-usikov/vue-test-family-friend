import { shallowMount } from '@vue/test-utils';

import ResultsEmpty from './ResultsEmpty.vue';

describe('ResultsEmpty', () => {
  let $c;

  beforeEach(() => {
    $c = shallowMount(ResultsEmpty);
  });

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy();
  });

  it('name is `ResultsEmpty`', () => {
    expect($c.name()).toBe('ResultsEmpty');
  });

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot();
  });
});
