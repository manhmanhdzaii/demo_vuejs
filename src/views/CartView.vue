<template>
  <div class="main">
    <div class="main_title">
      <div class="main_link_title">
        <a href="#">Home</a>/<a href="#">Cart</a>
      </div>
    </div>
    <div class="main_container">
      <div class="container_box1">
        <img src="../assets/images/imgcart.png" alt="" />
      </div>
      <div class="container_box2">
        <div class="table_cart">
          <table>
            <tr>
              <td width="6%"></td>
              <td width="54%">Product</td>
              <td width="20%">Quantity</td>
              <td width="20%">Subtotal</td>
            </tr>
            <tr v-for="(product, index) in products" :key="index">
              <td>
                <div class="img_delete">
                  <img src="../assets/images/delete_cart.png" alt="" />
                </div>
              </td>
              <td class="product">
                <img :src="'http://127.0.0.1:8000/' + product.img" alt="" />
                <div class="detail_product">
                  <p class="name_product">{{ product.name }}</p>
                  <p class="price_product">$ {{ product.price }}</p>
                </div>
              </td>
              <td>
                <div class="amount_product">
                  <div class="count_minus">-</div>
                  <input type="number" :value="product.qty" />
                  <input type="hidden" :value="total" />

                  <div class="count_add">+</div>
                </div>
              </td>
              <td class="price_total_product">
                {{ product.qty * product.price }} $
              </td>
            </tr>

            <tr class="tr_total">
              <td></td>
              <td colspan="2" class="text_total">
                It is our pleasure to serve you!
              </td>
              <td>
                <div class="total_all">{{ total_sum }} $</div>
              </td>
            </tr>
          </table>
        </div>
        <div class="handle">
          <button class="button_update">UPDATE CART</button>
          <RouterLink to="/checkout">
            <button class="button_checkout">PROCESS TO CHECK OUT</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      products: [],
      cart: this.$store.state.cart,
    };
  },
  created() {
    this.getAllProducts();
  },
  computed: {
    total_sum() {
      let arr = this.products;
      let sum = 0;
      arr.forEach(function (product) {
        sum = sum + product.price * product.qty;
      });
      return sum;
    },
  },
  methods: {
    getAllProducts() {
      this.$request({
        method: "post",
        url: "http://127.0.0.1:8000/api/cart_session",
        data: {
          cart: this.cart,
        },
      }).then((res) => {
        this.products = res.data;
      });
    },
  },
};
</script>

<style scoped>
.main_title {
  background: #f4f5f5;
  padding: 28px 11%;
}
.main_link_title a {
  font-family: "Oxygen";
  color: #000000;
}
.main_container {
  padding: 0px 124px;
  background: #fcfcfc;
  overflow: auto;
}
.container_box1 img {
  width: 100%;
  margin: 24px 0px;
}
.container_box2 {
  margin: 20px 0px 60px 0px;
  background: #ffffff;

  box-shadow: 0px 47px 113px rgba(0, 0, 0, 0.07),
    0px 10.7862px 18.7834px rgba(0, 0, 0, 0.0359201);
}
.table_cart {
  padding-top: 20px;
  width: 100%;
  padding-right: 95px;
  padding-left: 32px;
}

.table_cart table {
  width: 100%;
  border-spacing: 0px;
}
.table_cart table td {
  vertical-align: middle;
  padding: 15px 0px;
}
.table_cart table tr:first-child td {
  font-family: "Oxygen";
  border-bottom: 1px solid #d5d5d6;
  color: #000000;
}
.table_cart table tr:first-child td:first-child {
  border: unset;
}
.product {
  display: flex;
  gap: 16px;
}
.detail_product {
  height: max-content;
  display: block;
  margin: auto 0px;
}
.img_delete img {
  width: 17px;
  height: 20px;
}
.amount_product {
  display: flex;
  background: #f9f9f9;
  border: 1px solid #d5d5d6;
  width: max-content;
  align-items: center;
  margin: auto;
  height: 34px;
}
.amount_product input {
  width: 36px;
  background: #f9f9f9;
  border: unset;
  outline: none;
  pointer-events: none;
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #2b2f32;
}
.amount_product div {
  width: max-content;
  padding: 0px 10px;
  font-size: 20px;
  cursor: pointer;
}
table tr td:nth-child(3) {
  text-align: center;
}
table tr td:nth-child(4) {
  text-align: right;
}
.product img {
  height: 78px;
}
.name_product {
  padding-bottom: 5px;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2b2f32;
}
.price_product {
  font-family: "Oxygen";
  color: #c97178;
}
.price_total_product {
  font-family: "Oxygen";
  font-weight: 700;
  text-align: right;
  color: #808284;
}
.tr_total td {
  border-top: 1px solid #d5d5d6;
  padding-top: 24px;
}
.tr_total td:first-child {
  border-top: unset;
}
.text_total {
  font-family: "Oxygen";
  font-size: 14px;
  color: rgba(43, 47, 50, 0.6);
}
.total_all {
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 24px;
  text-align: right;
  color: #2b2f32;
}
.handle {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding-right: 95px;
  padding-bottom: 42px;
}
.handle button {
  padding: 12px 34px;
  font-family: "Oxygen";
  font-weight: 500;
}
.button_update {
  color: #2b2f32;
  background: #ffffff;
  border: 1.5px solid #2b2f32;
}
.button_checkout {
  color: #ffffff;
  border: unset;
  background: #2b2f32;
}
</style>