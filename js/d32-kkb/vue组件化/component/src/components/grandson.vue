<template>
  <div class="grandson">
    this is grandson
    <br>
    <b>{{name}}</b>
    <br>
    {{provideData}}
    <br>
    <button @click="changeName">grandson改变name</button>
  </div>
</template>
<script>
export default {
  inject: ['provideData'],
  props: ['name'],
  name: 'grandson',
  created() {
    console.log('c,c');
  },
  mounted() {
    this.$on('click', (val) => {
      console.log(val);
    });
    console.log('c,m');
    // this.$emit('click', 'this is gandson');
    this.$bus.$emit('selfBusTest', 'grandson selfBusTest');
  },
  methods: {
    changeName() {
      this.$bus.$emit('selfBusTest', 'grandson selfBusTest');
      this.$dispatch('changeName', `this time is ${Date.now()}`);
    },
  },
};
</script>
<style>
.grandson {
  background: blue;
}
</style>
