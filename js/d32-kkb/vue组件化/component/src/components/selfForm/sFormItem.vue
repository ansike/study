/**
 * @Description: 1. 预留插槽,拓展其他表单组件,
                 2. 展示label
                 3. 校验以及展示检验的错误信息
 * @param {type}
 * @return:
 */
<template>
  <div class="formItem">
    <label for v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error" class="error">{{error}}</p>
  </div>
</template>
<script>
import Schema from 'async-validator';

export default {
  inject: ['form'],
  name: 'formItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: '',
    };
  },
  mounted() {
    this.$on('validate', this.validate);
  },
  methods: {
    validate() {
      const value = this.form.model[this.prop];
      const rule = this.form.rules[this.prop];
      const descriptor = {
        [this.prop]: rule,
      };
      // eslint-disable-next-line new-cap
      const validator = new Schema(descriptor);
      return new Promise((resolve, reject) => {
        validator.validate({
          [this.prop]: value,
        }, (errors) => {
          if (errors) {
            this.error = errors[0].message;
            reject();
          // alert(error);
          } else {
            resolve();
            this.error = '';
          }
        });
      });
    },
  },
};
</script>
<style>
.formItem {
  background: rgb(92, 77, 219);
}
.error {
  color: red;
}
</style>
