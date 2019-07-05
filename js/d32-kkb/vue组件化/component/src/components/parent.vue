<template>
  <div class="parent">
    this is parent
    <Child @changeName="changeName" :name="selfValue"></Child>
    <button @click="broadcast">broadcast</button>
    <br>
    ===
    {{selfValue}}
    <!-- <input type="text" v-model="selfValue" /> -->
    <s-form :model="form" :rules="rules" ref="form">
      <s-form-item label="用户名" prop="userName">
        <s-input v-model="form.userName"></s-input>
      </s-form-item>
      <s-form-item label="密码" prop="password" >
        <s-input v-model="form.password"></s-input>
      </s-form-item>
      <s-form-item>
        <button @click="submit('form')">提交</button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import Child from './child.vue';
import SForm from './selfForm/sForm.vue';
import SFormItem from './selfForm/sFormItem.vue';
import SInput from './selfForm/sInput.vue';

export default {
  name: 'parent',
  data() {
    return {
      form: {
        userName: '',
        password: '',
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名' },
          { type: 'number', message: '只能为数字' },
        ],
        password: [{
          required: true, message: '请输入密码',
        }],
      },
      selfValue: 'I am parent',
    };
  },
  provide() {
    return {
      provideData: 'init',
    };
  },
  components: {
    Child,
    SForm,
    SInput,
    SFormItem,
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
    submit(form) {
      this.$refs[form].validate((res) => {
        if (res) {
          alert('校验成功');
        } else {
          alert('校验失败');
        }
      });
    },
    changeName(val) {
      this.selfValue = val;
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
