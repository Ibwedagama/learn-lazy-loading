<template>
  <div class="wrapper">
    <div class="navigation">
      <button @click="$router.go(-1)">&#8592; Kembali</button>
      <nuxt-link to="/">Beranda</nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  width: 100%;
}

.wrapper .navigation {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 32px;
}
</style>
