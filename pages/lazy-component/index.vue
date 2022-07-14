<template>
  <main class="lazy-component">
    <h1>Lazy Component</h1>
    <p>
      Penjelasan Nuxt Lazy Component
      <a
        href="https://nuxtjs.org/docs/directory-structure/components#dynamic-imports"
      >
        Klik di sini!
      </a>
    </p>
    <div class="container">
      <button @click="toggleOpen">Toggle Komponen</button>
      <!-- <section v-if="open">
        <Card title="Hello World" />
      </section> -->
      <section v-if="open">
        <LazyCard title="Lazy Hello World" />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.lazy-component {
  max-width: 1280px;
  margin: 120px auto;
}

.lazy-component h1,
.lazy-component p {
  width: 100%;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.container button {
  width: fit-content;
}
</style>
