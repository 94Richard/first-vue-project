<template>
  <mt-header fixed title="固定在顶部">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>
<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
