<template>
  <div class="main">
    <div class="main_title">
      <div class="main_link_title">
        <a href="#">Home</a> / <a href="#">Shop</a>/
        <a href="#">{{ product.name }}</a>
      </div>
    </div>
    <div class="main_container">
      <div class="main_img">
        <div class="main_img_demo">
          <div class="item_img_demo item_img_demo_tick">
            <img
              :src="'http://127.0.0.1:8000/' + product.img"
              @click="change_img($event)"
            />
          </div>
          <div class="item_img_demo" v-for="(img, index) in imgs" :key="index">
            <img
              :src="'http://127.0.0.1:8000/' + img.path"
              @click="change_img($event)"
            />
          </div>
        </div>
        <div class="main_img_show">
          <img :src="'http://127.0.0.1:8000/' + product.img" id="img_show" />
        </div>
      </div>
      <div class="main_content">
        <div class="content_title">
          <p>{{ product.name }}</p>
          <p class="title_type">HOT</p>
        </div>
        <div class="content_price">$ {{ product.price }}</div>
        <div class="content_text">
          Get this: you can look good while being environmentally conscious. The
          women's premium organic t-shirt is made up of 100% organic cotton,
          making it crew and comfy. Plus, the shirt promises the best-possible
          print results, making it an excellent choice for those looking to
          customize.
        </div>
        <div class="content_add_cart">
          <div class="add_cart_subtraction" @click="add_cart_subtraction">
            -
          </div>
          <input
            type="number"
            class="add_cart_value"
            :value="add_cart_value"
            @change="change_input($event)"
          />
          <div class="add_cart_summation" @click="add_cart_summation">+</div>
          <div class="add_cart_to" @click="add_cart">ADD TO CART</div>
        </div>
        <div class="content_des">
          <div class="content_des_title">
            <p>Description</p>
            <img src="../assets/images/detai_it_title.png" alt="" />
          </div>
          <div class="content_des_content">
            <div class="ct_des_item">
              <img src="../assets/images/item_img.png" alt="" />
              <p>Woman 3-piece dress suits: 100% organic cotton</p>
            </div>
            <div class="ct_des_item">
              <img src="../assets/images/item_img.png" alt="" />
              <p>Dry clean only</p>
            </div>
            <div class="ct_des_item">
              <img src="../assets/images/item_img.png" alt="" />
              <p>This product contains (suit, vest and pants)</p>
            </div>
          </div>
        </div>
        <div class="content_des">
          <div class="content_des_title">
            <p>Additional Information</p>
            <img src="../assets/images/detai_it_title.png" alt="" />
          </div>
          <div class="content_des_content">
            <div class="ct_des_item">
              <img src="../assets/images/item_img.png" alt="" />
              <p>Category: Women, clothing, white, yellow, red, black,</p>
            </div>
            <div class="ct_des_item">
              <img src="../assets/images/item_img.png" alt="" />
              <p>Size: S, M, L, XL, XXL</p>
            </div>
          </div>
        </div>
        <div class="content_des">
          <div class="content_des_title">
            <p>Shipping and Returns</p>
            <img src="../assets/images/detai_it_title.png" alt="" />
          </div>
          <div class="content_des_content">
            <div class="ct_des_item">
              <img src="../assets/images/item_img.png" alt="" />
              <p>Delivery in 5-7 days</p>
            </div>
            <div class="ct_des_item">
              <img src="../assets/images/item_img.png" alt="" />
              <p>Free shipping (New York area only)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/repository/products";
export default {
  name: "detailProduct",
  data() {
    return {
      product: "",
      add_cart_value: 1,
      imgs: [],
    };
  },
  computed: {},
  created() {
    this.$store.commit("chane_page_login", true);
    this.getProduct();
  },
  methods: {
    getProduct() {
      let id = this.$route.params.id;
      Products.getById(id).then((res) => {
        this.product = res.data.data;
        console.log(res.data);
        this.imgs = res.data.imgs;
      });
    },
    add_cart_summation() {
      if (this.add_cart_value <= 0 || this.add_cart_value == "") {
        this.add_cart_value = 1;
      } else {
        this.add_cart_value += 1;
      }
    },
    add_cart_subtraction() {
      if (this.add_cart_value <= 1 || this.add_cart_value == "") {
        this.add_cart_value = 1;
      } else {
        this.add_cart_value -= 1;
        console.log(typeof this.cart);
      }
    },
    change_input(e) {
      this.add_cart_value = Number(e.target.value);
    },
    change_img(e) {
      let ele = document.querySelector(".item_img_demo_tick");
      ele.classList.remove("item_img_demo_tick");
      document.getElementById("img_show").setAttribute("src", e.target.src);
      e.target.parentElement.classList.add("item_img_demo_tick");
    },
    add_cart() {
      let cartSession = this.$store.state.cart;
      let id = this.$route.params.id;
      let idx = cartSession.findIndex((element) => {
        return element.productId === id;
      });
      let cart = {
        productId: id,
        qty: this.add_cart_value,
      };
      if (idx !== -1) {
        cartSession[idx] = cart;
      } else {
        cartSession.push(cart);
      }
      alert("Thêm sản phẩm vào giỏ hàng thành công");
      this.$store.commit("add_cart", cartSession);
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.main_title {
  background: #a7adad;
  padding: 28px 11%;
}
.main_link_title a {
  font-family: "Oxygen";
  color: #000000;
}
.main_container {
  padding: 34px 124px 48px;
  background: #fcfcfc;
  overflow: auto;
  display: flex;
  gap: 30px;
}
.main_img {
  display: flex;
  gap: 15px;
}
.item_img_demo {
  width: 79px;
  margin-bottom: 12px;
  cursor: pointer;
}
.main_img_show {
  width: 363px;
  height: 547px;
}
.main_img_show img {
  width: 100%;
  height: 100%;
}
.main_content {
  flex: 1;
}
.content_title {
  display: flex;
  gap: 15px;
  align-items: center;
}
.content_title p {
  font-size: 28px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2b2f32;
}
.content_title .title_type {
  font-family: "DM Sans";
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 7px 12px;
  background: #c97178;
  color: #ffffff;
}
.content_price {
  font-family: "Oxygen";
  font-size: 32px;
  color: #c97178;
  margin-top: 20px;
}
.content_text {
  font-family: "Oxygen";
  color: #55595b;
  margin-top: 20px;
  margin-bottom: 40px;
}
.content_add_cart {
  display: flex;
  margin-bottom: 55px;
}
.add_cart_subtraction,
.add_cart_summation {
  height: 52px;
  line-height: 52px;
  padding: 0px 18px;
  background: #2b2f32;
  color: #ffffff;
  font-size: 30px;
  cursor: pointer;
}
.add_cart_subtraction {
  line-height: 48px;
}
.add_cart_value {
  background: #f9f9f9;
  font-family: "Oxygen";
  text-align: center;
  color: #000000;
  border: unset;
  outline: 0;
  width: 120px;
  cursor: pointer;
}
.add_cart_to {
  font-family: "Oxygen";
  height: 52px;
  line-height: 52px;
  padding: 0px 35px;
  background: #2b2f32;
  color: #ffffff;
  margin-left: 25px;
  cursor: pointer;
}
.content_des {
  padding-bottom: 20px;
  border-bottom: 1px solid #d5d5d6;
  margin-bottom: 12px;
}
.content_des_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content_des_title p {
  font-family: "DM Sans";
  font-weight: 700;
  color: #2b2f32;
}
.ct_des_item {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.ct_des_item p {
  font-family: "DM Sans";
  color: #55595b;
}
.item_img_demo_tick {
  border: 1px solid rgb(226, 89, 89);
}
</style>