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
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http
      .get(url)
      .then(() => {
        this.product = res.data.product;
      })
      .catch((err) => {
        alert(err.data.message);
      });
  },
};
</script>