<template>
  <div class="parent">
    this is parent
    <Child @changeName="changeName" :name="name"></Child>
    <button @click="broadcast">broadcast</button>
  </div>
</template>
<script>
import Child from './child.vue';

export default {
  name: 'parent',
  data() {
    return {
      name: 'I am parent',
    };
  },
  provide() {
    return {
      provideData: 'init',
    };
  },
  components: {
    Child,
  },
  created() {
    this.$bus.$on('selfBusTest', this.selfBusTest);
    this._provided.provideData = 'mounted';
    console.log('p,c');
    this.$on('dispatch', (val) => {
      console.log(val);
    });
  },
  mounted() {
    console.log('p,m');
    // debugger;
    /* eslint no-underscore-dangle: 0 */
  },
  methods: {
    changeName(val) {
      this.name = val;
    },
    broadcast() {
      console.log('off');
      this.$bus.$off('selfBusTest', this.selfBusTest);
      this.$broadcast('click', 'this is from parent');
    },
    selfBusTest(val) {
      console.log(val);
    },
  },
};
</script>
<style>
.parent {
  background: gray;
  color: white;
}
</style>
