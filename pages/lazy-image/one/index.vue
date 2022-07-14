<template>
  <section class="lazy-one">
    <h3>Browser Native Lazy Load</h3>
    <p>
      Penjelasan Browser Native Lazy Load
      <a href="https://web.dev/browser-level-image-lazy-loading/">
        Klik di sini!
      </a>
    </p>

    <div class="image-container">
      <img
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

    <div class="support">
      <p>Browser Support :</p>
      <img src="/image1.png" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.lazy-one {
  width: 100%;
}

.lazy-one h3,
.lazy-one p {
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
