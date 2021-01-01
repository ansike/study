<template>
  <div class="input">
    <h4>input</h4>
    <input ref="ipt" type="text" :value="value" @input="onInput" @change="onChange">
  </div>
</template>
<script>
export default {
  name: 'sInput',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
    onChange() {
      this.$dispatch('validate');
    },
  },
};
</script>
<style>
.input {
  background: pink;
}
</style>
