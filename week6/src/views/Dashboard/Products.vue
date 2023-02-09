<template>
  <div>
    這裡是 後台 產品列表
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ item.origin_price }}
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: "Products",
  props: ["token"],
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      // API
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/products?page=${page}`;
      this.$http
        .get(api)
        .then((response) => {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>