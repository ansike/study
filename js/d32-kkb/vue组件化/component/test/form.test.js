import Vue from 'vue';
// import SForm from '../src/components/selfForm/sForm.vue';
// import SFormItem from '../src/components/selfForm/sFormItem.vue';
// import { mount } from '@vue/test-utils';
import SInput from '../src/components/selfForm/sInput.vue';

describe('test self form', () => {
  it('test input', () => {
    const Constructor = Vue.extend(SInput);
    console.log(Constructor);
    const vm = new Constructor({ propsData: { value: 'this is ipt' } }).$mount();
    console.log(vm);
    console.log(vm.$refs.ipt.value);
    // return vm.$refs.ipt.value;
    // eslint-disable-next-line implicit-arrow-linebreak
    // return 'this is ipt';
    expect(vm.$refs.ipt.value).toBe('this is ipt');
    // expect(1 + 1).toBe(2);
  });
});

function sum(a, b) {
  return a + b;
}
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
