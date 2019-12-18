<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>
      <span>This is an home page {{ name }}</span>
      <svg-icon icon-class="earth" />
    </h1>
    <i-switch v-model="switch1" style="margin-right: 20px" />
    <Input
      v-model="value"
      placeholder="Enter something..."
      style="width: 200px; margin-right: 20px;"
    />
    <Button
      type="primary"
      v-clipboard:copy="value"
      v-clipboard:success="clipboardSuccess"
      >复制输入内容</Button
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
import clipboard from "../directive/clipboard/index.js";
export default {
  name: "home",
  data() {
    return {
      switch1: false,
      value: ""
    };
  },

  directives: {
    clipboard
  },

  computed: {
    ...mapState({
      name: state => state.user.name
    })
  },

  methods: {
    clipboardSuccess() {
      this.$Message.info("复制成功");
    }
  }
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
}
</style>
