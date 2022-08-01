<template>
  <div
    class="father"
    :style="`height: ${height}px; border-radius: ${height / 2}px;`"
  >
    <div
      class="son"
      :class="[color]"
      :style="`width: ${percentage}%; height: ${height}px; border-radius: ${
        height / 2
      }px;`"
    >
      <span v-if="textInside">{{
        percentage === 100 ? "完成" : percentage + "%"
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      default: "default",
    },
    percentage: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 20,
    },
    textInside: {
      type: Boolean,
      default: false,
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.father {
  width: 500px;
  background-color: #ebeef5;
  padding: 2px;
  margin: 10px;
}
.son {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 10px;
}
.son span {
  color: #fff;
}

.son.default {
  background-color: #409eff;
}

.son.success {
  background-color: #67c23a;
}

.son.exception {
  background-color: #f56c6c;
}
</style>
