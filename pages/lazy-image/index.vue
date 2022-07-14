<template>
  <main>
    <h1>Lazy Image</h1>
    <div class="container">
      <nav>
        <li>
          <nuxt-link to="/lazy-image/one"> Native Lazy Attribute </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/lazy-image/two"> Nuxt Img </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/lazy-image/three"> Vue Lazyload Package </nuxt-link>
        </li>
      </nav>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  max-width: 1280px;
  margin: 120px auto;
}

main h1 {
  text-align: center;
}

.container {
  width: 100%;
}

.container nav {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.container nav li {
  list-style: none;
  padding: 12px 24px;
  background: lightblue;
  cursor: pointer;
}
</style>
