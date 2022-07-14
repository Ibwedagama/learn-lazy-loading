<template>
  <main>
    <h1>Lazy Loading</h1>
    <nav>
      <li>
        <nuxt-link to="lazy-image">Lazy Loading Image</nuxt-link>
      </li>
      <li>
        <nuxt-link to="lazy-component">Lazy Loading Component</nuxt-link>
      </li>
    </nav>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style scoped>
main {
  max-width: 1280px;
  margin: 120px auto;
}

main h1 {
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 32px;
}

li {
  list-style: none;
}
</style>
