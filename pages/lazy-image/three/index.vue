<template>
  <section class="lazy-three">
    <h3>Vue Lazyload Package</h3>
    <p>
      Penjelasan Plugins/Package Vue Lazyload
      <a href="https://github.com/hilongjw/vue-lazyload"> Klik di sini! </a>
    </p>

    <div class="image-container">
      <img
        class="image"
        v-for="i in 30"
        :key="i"
        v-lazy="`https://picsum.photos/id/${1000 + i}/200/300`"
        :style="{ width: '300px', height: '200px', objectFit: 'cover' }"
        width="300"
        height="200"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.lazy-three {
  width: 100%;
}

.lazy-three h3,
.lazy-three p {
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

.image-container .image[lazy="loading"] {
  opacity: 0;
}

.image-container .image[lazy="loading"] {
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    gray;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
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
