<template>
  <div class="main">
    <div class="main_title">
      <div class="main_link_title">
        <a href="/">Home</a>/<a href="#">Shop</a>
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
                class="
                  c2_find_b1_item_hidden c2_find_b1_item
                  hidden
                  c2_find_b1_item_check
                "
                value="0"
              ></div>
              <div
                class="c2_find_b1_item search"
                v-for="(category, index) in categories"
                :key="index"
                @click="change_category($event)"
                :value="category.id"
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
                    @change.passive="change_price($event)"
                  />
                  <input
                    type="range"
                    class="range_max"
                    min="0"
                    max="1000"
                    value="900"
                    step="10"
                    @change.passive="change_price($event)"
                  />
                </div>
              </div>
              <div class="find_price">
                <div class="pricer_input">
                  <p>$</p>
                  <input
                    type="number"
                    class="ip_min"
                    value="100"
                    @change.passive="change_range($event)"
                  />
                </div>
                <div class="separator">-</div>
                <div class="pricer_input">
                  <p>$</p>
                  <input
                    type="number"
                    class="ip_max"
                    value="900"
                    @change.passive="change_range($event)"
                  />
                </div>
                <div
                  class="filter_price search"
                  value="0"
                  @click="change_filer($event)"
                >
                  Filter
                </div>
              </div>
            </div>
          </div>
          <div class="b2_find_b3">
            <div class="c2_find_title">COLOUR</div>
            <div class="c2_find_content">
              <div class="b3_box_color">
                <button
                  class="
                    b3_item_color_hidden b3_item_color b3_item_color_check
                    hidden
                  "
                  value="0"
                ></button>
                <button
                  value="1"
                  class="b3_item_color search item_color_white"
                  @click="change_color($event)"
                ></button>
                <button
                  value="2"
                  class="b3_item_color search item_color_black"
                  @click="change_color($event)"
                ></button>
                <button
                  value="3"
                  class="b3_item_color search item_color_red"
                  @click="change_color($event)"
                ></button>
                <button
                  value="4"
                  class="b3_item_color search item_color_yellow"
                  @click="change_color($event)"
                ></button>
                <button
                  value="5"
                  class="b3_item_color search item_color_blue"
                  @click="change_color($event)"
                ></button>
              </div>
            </div>
          </div>
          <div class="b2_find_b4">
            <div class="c2_find_title">SIZE</div>
            <div class="c2_find_content">
              <div class="b4_box_size">
                <button
                  class="
                    b3_item_size b3_item_size_hidden
                    hidden
                    b3_item_size_check
                  "
                  value="0"
                ></button>
                <button
                  value="1"
                  class="search b3_item_size"
                  @click="change_size($event)"
                >
                  S
                </button>
                <button
                  value="2"
                  class="search b3_item_size"
                  @click="change_size($event)"
                >
                  M
                </button>
                <button
                  value="3"
                  class="search b3_item_size"
                  @click="change_size($event)"
                >
                  l
                </button>
                <button
                  value="4"
                  class="search b3_item_size search"
                  @click="change_size($event)"
                >
                  xl
                </button>
                <button
                  value="5"
                  class="search b3_item_size"
                  @click="change_size($event)"
                >
                  xxl
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="c_b2_list">
          <div class="b2_list_sort">
            <div class="list_sort_check" @click="list_sort_check()">
              <p class="list_sort_check_tittle">Defaut Sorting</p>
              <img src="../assets/images/arrow_sort.png" />
              <div class="list_sort_all hidden">
                <div
                  class="list_sort_post list_sort_post_tick search"
                  @click="list_sort_post($event)"
                  value="0"
                >
                  Defaut Sorting
                </div>
                <div
                  class="list_sort_post search"
                  @click="list_sort_post($event)"
                  value="1"
                >
                  Sort by price: low to high
                </div>
                <div
                  class="list_sort_post search"
                  @click="list_sort_post($event)"
                  value="2"
                >
                  Sort by price: high to low
                </div>
              </div>
            </div>
          </div>
          <div class="b2_list_products" v-if="loadderrr">
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
                  <img
                    src="../assets/images/cart_item.png"
                    :value="product.id"
                    @click="saveCart($event)"
                  />
                </div>
              </div>
              <RouterLink :to="'/detail-product/' + product.id">
                <div class="m_b2_it_title">{{ product.name }}</div>
              </RouterLink>
              <div class="m_b2_it_price">{{ product.price }} $</div>
            </div>
            <pagination
              :totalPages="pagination.totalPages"
              :total="pagination.total"
              :perPage="pagination.perPage"
              :current-page="pagination.currentPage"
              @pagechanged="onPageChange"
            />
          </div>
          <div class="div" v-else>
            <img src="../assets/images/Loading_icon.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cpnPagination from "@/components/includes/Pagination.vue";
import Categories from "@/repository/categories";
import Products from "@/repository/products";
export default {
  name: "listProduct",
  data() {
    return {
      categories: [],
      products: [],
      loadderrr: true,
      pagination: {
        currentPage: "",
        totalPages: "",
        total: "",
        perPage: "",
      },
    };
  },
  created() {
    this.$store.commit("chane_page_login", true);
    this.getAllCategories();
    this.getAllProducts();
  },
  components: {
    pagination: cpnPagination,
  },
  methods: {
    price_search() {
      this.listSort = !this.listSort;
    },
    getAllCategories() {
      Categories.get().then((res) => {
        this.categories = res.data.data.data;
      });
    },
    getAllProducts() {
      this.loadderrr = false;
      Products.get().then((res) => {
        this.loadderrr = true;
        this.products = res.data.data.data;
        this.pagination.currentPage = res.data.data.current_page;
        this.pagination.totalPages = res.data.data.last_page;
        this.pagination.total = res.data.data.total;
        this.pagination.perPage = res.data.data.per_page;
      });
    },
    change_price(e) {
      let priceInput = document.querySelectorAll(".pricer_input input");
      let rangeInput = document.querySelectorAll(".range_input input");
      let progress = document.querySelector(".slider .progress");
      let pricegap = 100;
      let minval = parseInt(rangeInput[0].value);
      let maxval = parseInt(rangeInput[1].value);
      if (maxval - minval < pricegap) {
        if (e.target.className === "range_min") {
          e.target.value = maxval - pricegap;
          minval = maxval - pricegap;
          priceInput[0].value = minval;
        } else {
          e.target.value = minval + pricegap;
          maxval = minval + pricegap;
          priceInput[1].value = maxval;
        }
      } else {
        priceInput[0].value = minval;
        priceInput[1].value = maxval;
      }
      progress.style.left = (minval / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxval / rangeInput[1].max) * 100 + "%";
    },
    change_range(e) {
      let priceInput = document.querySelectorAll(".pricer_input input");
      let rangeInput = document.querySelectorAll(".range_input input");
      let progress = document.querySelector(".slider .progress");
      let pricegap = 100;
      let minval = parseInt(priceInput[0].value),
        maxval = parseInt(priceInput[1].value);
      if (maxval - minval < pricegap || maxval > 1000) {
        if (e.target.className === "ip_min") {
          e.target.value = rangeInput[0].value;
          minval = rangeInput[0].value;
          progress.style.left = (minval / rangeInput[0].max) * 100 + "%";
        } else {
          e.target.value = rangeInput[1].value;
          minval = rangeInput[1].value;
          progress.style.right = 100 - (maxval / rangeInput[1].max) * 100 + "%";
        }
      } else {
        if (e.target.className === "ip_min") {
          rangeInput[0].value = minval;
          progress.style.left = (minval / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxval;
          progress.style.right = 100 - (maxval / rangeInput[1].max) * 100 + "%";
        }
      }
    },
    list_sort_check() {
      document.querySelector(".list_sort_all").classList.toggle("hidden");
    },
    list_sort_post(e) {
      let $title_post = e.target.innerHTML;
      let $title = document.querySelector(".list_sort_check_tittle").innerHTML;
      document
        .querySelector(".list_sort_post_tick")
        .classList.remove("list_sort_post_tick");
      e.target.classList.add("list_sort_post_tick");
      if ($title_post !== $title) {
        document.querySelector(".list_sort_check_tittle").innerHTML =
          $title_post;
      }
      this.search();
    },
    change_category(e) {
      if (e.target.classList.contains("c2_find_b1_item_check")) {
        e.target.classList.remove("c2_find_b1_item_check");
        document
          .querySelector(".c2_find_b1_item_hidden")
          .classList.add("c2_find_b1_item_check");
      } else {
        document
          .querySelector(".c2_find_b1_item_check")
          .classList.remove("c2_find_b1_item_check");
        e.target.classList.add("c2_find_b1_item_check");
      }
      this.search();
    },
    change_size(e) {
      if (e.target.classList.contains("b3_item_size_check")) {
        e.target.classList.remove("b3_item_size_check");
        document
          .querySelector(".b3_item_size_hidden")
          .classList.add("b3_item_size_check");
      } else {
        document
          .querySelector(".b3_item_size_check")
          .classList.remove("b3_item_size_check");
        e.target.classList.add("b3_item_size_check");
      }
      this.search();
    },
    change_color(e) {
      if (e.target.classList.contains("b3_item_color_check")) {
        e.target.classList.remove("b3_item_color_check");
        document
          .querySelector(".b3_item_color_hidden")
          .classList.add("b3_item_color_check");
      } else {
        document
          .querySelector(".b3_item_color_check")
          .classList.remove("b3_item_color_check");
        e.target.classList.add("b3_item_color_check");
      }
      this.search();
    },
    change_filer(e) {
      e.target.setAttribute("value", 1);
      this.search();
    },
    search() {
      this.loadderrr = false;
      let category = document
        .querySelector(".c2_find_b1_item_check")
        .getAttribute("value");
      let search_price = document
        .querySelector(".filter_price")
        .getAttribute("value");
      let price_min = document.querySelector(".range_min").value;
      let price_max = document.querySelector(".range_max").value;
      let size = document
        .querySelector(".b3_item_size_check")
        .getAttribute("value");
      let color = document
        .querySelector(".b3_item_color_check")
        .getAttribute("value");
      let list_sort_post = document
        .querySelector(".list_sort_post_tick")
        .getAttribute("value");

      let data = {
        color: color,
        size: size,
        category: category,
        search_price: search_price,
        price_min: price_min,
        price_max: price_max,
        list_sort_post: list_sort_post,
      };
      Products.search(data).then((res) => {
        this.products = res.data.data.data;
        this.loadderrr = true;
        this.pagination.currentPage = res.data.data.current_page;
        this.pagination.totalPages = res.data.data.last_page;
        this.pagination.total = res.data.data.total;
        this.pagination.perPage = res.data.data.per_page;
      });
    },
    onPageChange(page) {
      this.loadderrr = false;
      this.pagination.currentPage = page;
      Products.page(page).then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          this.loadderrr = true;
          this.products = res.data.data.data;
          this.pagination.currentPage = res.data.data.current_page;
          this.pagination.totalPages = res.data.data.last_page;
          this.pagination.total = res.data.data.total;
          this.pagination.perPage = res.data.data.per_page;
        }
      });
    },
    saveCart(e) {
      let cartSession = this.$store.state.cart;
      let id = e.target.getAttribute("value");
      let idx = cartSession.findIndex((element) => {
        return element.productId === id;
      });
      console.log(cartSession);

      if (idx !== -1) {
        cartSession[idx]["qty"] = cartSession[idx]["qty"] + 1;
      } else {
        let cart = {
          productId: id,
          qty: 1,
        };
        cartSession.push(cart);
      }
      this.$store.commit("add_cart", cartSession);
      alert("Thêm sản phẩm vào giỏ hàng thành công");
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
.div {
  text-align: center;
  background-color: white;
  padding-top: 80px;
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
  cursor: pointer;
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
.b3_item_color_check {
  width: 34px;
  height: 34px;
}
</style>