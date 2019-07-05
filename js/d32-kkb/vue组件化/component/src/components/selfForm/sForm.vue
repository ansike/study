<template>
  <form class="form" onsubmit="return false">
    <h2>form</h2>
    <slot></slot>
  </form>
</template>
<script>

export default {
  provide() {
    return {
      form: this,
    };
  },
  props: ['model', 'rules'],
  name: 'sForm',
  methods: {
    validate(cb) {
      const tasks = this.$children.filter(item => item.prop).map(item => item.validate());
      Promise.all(tasks).then(() => cb(true), () => cb(false));
    },
  },
};
</script>
<style>
.form{
  background: rgb(48, 112, 48)
}
</style>
