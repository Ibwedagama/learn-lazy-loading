<template>
  <section class="lazy-two">
    <h3>Nuxt Img</h3>
    <p>
      Penjelasan Plugins/Package Nuxt Img
      <a href="https://image.nuxtjs.org/components/nuxt-img"> Klik di sini! </a>
    </p>

    <div class="image-container">
      <nuxt-img
        class="image"
        v-for="i in 30"
        :key="i"
        :src="`https://picsum.photos/id/${1000 - i}/200/300`"
        :style="{ width: '300px', height: '200px', objectFit: 'cover' }"
        width="300"
        height="200"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.lazy-two {
  width: 100%;
}

.lazy-two h3,
.lazy-two p {
  width: 100%;
  text-align: center;
}

.image-container {
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 160px;
}

.support {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.support img {
  width: 80%;
}
</style>
