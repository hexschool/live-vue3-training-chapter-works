<template>
  <div class="about">
    <h1>This is 單一產品頁面</h1>
    {{ product.title }}
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    const { id } = this.$route.params;
    const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/product/${id}`;
    this.$http
      .get(url)
      .then(() => {
        this.product = res.data.product;
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  },
};
</script>