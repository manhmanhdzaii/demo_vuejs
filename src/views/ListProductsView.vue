<template>
  <div class="main">
    <div class="main_title">
      <div class="main_link_title">
        <a href="#">Home</a>/<a href="#">Shop</a>{{ token }}
      </div>
    </div>
    <div class="main_container">
      <div class="container_box1">
        <img src="../assets/images/list_banner.png" alt="" />
      </div>
      <div class="container_box2">
        <div class="c_b2_find">
          <div class="b2_find_b1">
            <div class="c2_find_title">PRODUCTS CATEGORY</div>
            <div class="c2_find_content">
              <div
                class="c2_find_b1_item"
                v-for="(category, index) in categories"
                :key="index"
              >
                {{ category.name }}
              </div>
            </div>
          </div>
          <div class="b2_find_b2">
            <div class="c2_find_title">FILTER BY PRICE</div>
            <div class="c2_find_content">
              <div class="slider">
                <div class="progress"></div>
                <div class="range_input">
                  <input
                    type="range"
                    class="range_min"
                    min="0"
                    max="1000"
                    value="100"
                    step="10"
                  />
                  <input
                    type="range"
                    class="range_max"
                    min="0"
                    max="1000"
                    value="900"
                    step="10"
                  />
                </div>
              </div>
              <div class="find_price">
                <div class="pricer_input">
                  <p>$</p>
                  <input type="number" class="ip_min" value="100" />
                </div>
                <div class="separator">-</div>
                <div class="pricer_input">
                  <p>$</p>
                  <input type="number" class="ip_max" value="900" />
                </div>
                <div class="filter_price">Filter</div>
              </div>
            </div>
          </div>
          <div class="b2_find_b3">
            <div class="c2_find_title">COLOUR</div>
            <div class="c2_find_content">
              <div class="b3_box_color">
                <button class="b3_item_color item_color_white"></button>
                <button class="b3_item_color item_color_black"></button>
                <button class="b3_item_color item_color_red"></button>
                <button class="b3_item_color item_color_yellow"></button>
                <button class="b3_item_color item_color_blue"></button>
              </div>
            </div>
          </div>
          <div class="b2_find_b4">
            <div class="c2_find_title">SIZE</div>
            <div class="c2_find_content">
              <div class="b4_box_size">
                <button class="b3_item_size">S</button>
                <button class="b3_item_size">M</button>
                <button class="b3_item_size">l</button>
                <button class="b3_item_size b3_item_size_check">xl</button>
                <button class="b3_item_size">xxl</button>
              </div>
            </div>
          </div>
        </div>
        <div class="c_b2_list">
          <div class="b2_list_sort">
            <div class="list_sort_check" @click="price_search">
              <p class="list_sort_check_tittle">Defaut Sorting</p>
              <img src="../assets/images/arrow_sort.png" />
              <div class="list_sort_all" v-if="listSort">
                <div class="list_sort_post">Defaut Sorting</div>
                <div class="list_sort_post">Sort by price: low to high</div>
                <div class="list_sort_post">Sort by price: high to low</div>
              </div>
            </div>
          </div>
          <div class="b2_list_products">
            <div
              class="m_box2_item"
              v-for="(product, index) in products"
              :key="index"
            >
              <div class="m_b2_it_img">
                <RouterLink :to="'/detail-product/' + product.id">
                  <img :src="'http://127.0.0.1:8000/' + product.img" />
                </RouterLink>
                <div class="m_b2_it_type">HOT</div>
                <div class="m_b2_it_car">
                  <img src="../assets/images/cart_item.png" />
                </div>
              </div>
              <RouterLink :to="'/detail-product/' + product.id">
                <div class="m_b2_it_title">{{ product.name }}</div>
              </RouterLink>
              <div class="m_b2_it_price">{{ product.price }} $</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listProduct",
  data() {
    return {
      listSort: false,
      categories: [],
      products: [],
      cart: this.$store.state.cart.length,
      token: this.$store.state.token,
    };
  },
  created() {
    this.getAllCategories();
    this.getAllProducts();
  },
  methods: {
    price_search() {
      this.listSort = !this.listSort;
    },
    getAllCategories() {
      this.$request.get("http://127.0.0.1:8000/api/categories").then((res) => {
        this.categories = res.data.data.data;
      });
    },
    getAllProducts() {
      this.$request.get("http://127.0.0.1:8000/api/products").then((res) => {
        this.products = res.data.data.data;
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
  padding: 20px 0px 60px 0px;
  display: flex;
  gap: 15px;
}
.c_b2_find {
  width: 25%;
}
.c_b2_list {
  width: calc(75% - 15px);
}
/* rand */
.find_price {
  display: flex;
  margin-top: 25px;
  gap: 8px;
  row-gap: 15px;
  flex-wrap: wrap;
}
.pricer_input {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d5d5d6;
  padding: 6px 4px 6px 5px;
}
.pricer_input input {
  width: 35px;
  outline: none;
  background: #fcfcfc;
  border: unset;
  -webkit-appearance: textfield;
  cursor: pointer;
}
.filter_price {
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  background: #2b2f32;
  cursor: pointer;

  padding: 9px 18px;
}
.separator {
  margin: 0px 8px;
  display: flex;
  align-items: center;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.slider {
  height: 6px;
  background: #cecece;
  position: relative;
}
.progress {
  height: 6px;
  position: absolute;
  left: 10%;
  right: 10%;
  background: #eaeaea;
}
.range_input {
  position: relative;
}
.range_input input {
  position: absolute;
  top: 0px;
  height: 6px;
  pointer-events: none;
  -webkit-appearance: none;
  background: none;
  width: 100%;
}
.pricer_input > * {
  font-family: "Oxygen";
  color: #000000;
}
input[type="range"]::-webkit-slider-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  pointer-events: auto;
  -webkit-appearance: none;
  background: #eaeaeb;
  cursor: pointer;
}
input[type="range"]::-webkit-range-thumb {
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 50%;
  pointer-events: auto;
  -webkit-appearance: none;
  background: #eaeaeb;
  cursor: pointer;
}
/* end-rand */
.hidden {
  display: none;
}
.c2_find_title {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: #2b2f32;
  position: relative;
}
.c2_find_title::after {
  content: "";
  width: 52px;
  position: absolute;
  bottom: -12px;
  left: 0;
  border-top: 1.5px solid #d5d5d6;
}
.c2_find_content {
  margin-top: 32px;
}

.c2_find_b1_item {
  width: 100%;
  font-family: "Oxygen";
  color: #2b2f32;
  padding-bottom: 8px;
  border-bottom: 1px solid #eaeaeb;
  margin-bottom: 16px;
  cursor: pointer;
}
.c2_find_content .c2_find_b1_item:last-child {
  border: unset;
}
.c2_find_b1_item_check {
  color: #c97178;
  font-weight: 700;
}
.b2_find_b2 {
  margin-top: 56px;
}
.b2_find_b3 {
  margin-top: 55px;
}
.b3_box_color {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.b3_item_color {
  width: 28px;
  height: 28px;
}
.item_color_white {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.item_color_black {
  background: #000000;
  border: 1px solid #2b2f32;
}
.item_color_red {
  background: #f21717;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.item_color_yellow {
  background: #ffd600;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.item_color_blue {
  background: #1793ed;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.b2_find_b4 {
  margin-top: 55px;
}
.b4_box_size {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.b3_item_size {
  padding: 8px 12px;
  font-family: "Oxygen";
  background: #f4f5f5;
  color: #2b2f32;
  border: unset;
  text-transform: uppercase;
}
.b3_item_size_check {
  background: #c97178;
  color: #ffffff;
}
.b2_list_sort {
  display: flex;
  justify-content: flex-end;
}
.list_sort_check {
  display: flex;
  gap: 40px;
  align-items: center;
  width: max-content;
  padding: 11px 12px;
  background: #ffffff;
  border: 1px solid #eaeaeb;
  position: relative;
  cursor: pointer;
}
.list_sort_check img {
  width: 16px;
  height: 16px;
}
.list_sort_check_tittle {
  white-space: nowrap;
  font-family: "Oxygen";
  font-size: 14px;
  color: #2b2f32;
}
.list_sort_all {
  position: absolute;
  width: 100%;
  background: #ffffff;
  left: 0;
  bottom: -78px;
  padding: 0px 12px;
  z-index: 2;
}
.list_sort_post {
  font-family: "Oxygen";
  font-size: 12px;
  color: #2b2f32;
  line-height: 24px;
}
.b2_list_products {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  row-gap: 30px;
}
.m_box2_item {
  width: calc(33.3% - 10px);
}
.m_b2_it_img {
  position: relative;
}
.m_b2_it_img img {
  width: 100%;
  height: auto;
}
.m_b2_it_type {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  font-family: "Oxygen";
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  background: #c97178;
}
.m_b2_it_car {
  position: absolute;
  padding: 10px;
  background: #ffffff;
  border-radius: 32px;
  bottom: 16px;
  right: 16px;
}
.m_b2_it_car img {
  width: 20px;
  height: 20px;
}
.m_b2_it_title {
  text-align: left;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: #2b2f32;
  margin-top: 20px;
  margin-bottom: 4px;
}
.m_b2_it_price {
  font-family: "Oxygen";
  color: #c97178;
  text-align: left;
}
/* .header_navbar a:nth-child(3) p {
  color: #c97178;
  font-weight: 700;
  position: relative;
}
.header_navbar a:nth-child(3) p::after {
  content: "";
  position: absolute;
  bottom: -4px;
  margin: auto;
  width: 50%;
  left: 25%;
  height: 1.5px;
  background: #c97178;
} */
</style>