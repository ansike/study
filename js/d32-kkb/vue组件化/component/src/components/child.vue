<template>
  <div class="child">
    this is child
    <br>
    <b>{{name}}</b>
    <button @click="changeName">改变name</button>
    <GrandSon :name="name"></GrandSon>
  </div>
</template>
<script>
import GrandSon from './grandson.vue';

export default {
  props: ['name'],
  name: 'child',
  methods: {
    changeName() {
      this.$emit('changeName', `this time is ${Date.now()}`);
    },
  },
  components: {
    GrandSon,
  },
};
</script>
<style>
.child {
  background: green;
}
</style>
