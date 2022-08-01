<template>
  <div>
    <my-button :textInside="true"></my-button>
    <my-button color="success" :percentage="75" :height="30"></my-button>
    <my-button
      color="exception"
      :height="40"
      :percentage="25"
      :textInside="true"
    ></my-button>
    <my-button color="success" :percentage="100" :height="30" :textInside="true"></my-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped></style>
