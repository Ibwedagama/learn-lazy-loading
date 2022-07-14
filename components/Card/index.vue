<template>
  <article>
    <strong>{{ title }}</strong>
    <img
      src="https://picsum.photos/id/1000/200/300"
      alt="Halo"
      width="300"
      height="200"
    />
  </article>
</template>

<script>
import * as lodash from "lodash";
import * as moment from "moment";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  mounted() {
    console.log(lodash);
    console.log(moment);
  },
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
}

img {
  border-radius: 12px;
}
</style>
