<template>
  <div class="main">
    <div class="main_title">
      <div class="main_link_title">
        <a href="#">Home</a>/<a href="#">Cart</a>
      </div>
    </div>
    <div class="main_container">
      <div class="container_box1">
        <img src="../assets/images/imgcheckout.png" alt="" />
      </div>
      <div class="container_box2">
        <div class="box2_left">
          <div class="box2_left_box1">
            <div class="box2_title">
              <img src="../assets/images/line_title.png" alt="" />
              <p>YOUR INFORMATION</p>
            </div>
            <div class="box_input_container">
              <div class="box_input">
                <p>Name</p>
                <input type="text" v-model="data.name" @blur="validate()" />
                <p class="err">{{ errors.name }}</p>
              </div>
              <div class="box_input">
                <p>Phone Number</p>
                <input type="text" v-model="data.phone" @blur="validate()" />
                <p class="err">{{ errors.phone }}</p>
              </div>
            </div>
            <div class="box_input_container">
              <div class="box_input">
                <p>Email</p>
                <input type="text" v-model="data.email" @blur="validate()" />
                <p class="err">{{ errors.email }}</p>
              </div>
            </div>
            <div class="box_input_container">
              <div class="box_input">
                <p>City</p>
                <input type="text" v-model="data.city" @blur="validate()" />
                <p class="err">{{ errors.city }}</p>
              </div>
              <div class="box_select">
                <p>Zip Code</p>
                <select>
                  <option value="">Home</option>
                  <option value="">Office</option>
                </select>
              </div>
            </div>
            <div class="box_checkbox_container">
              <div class="box_checkbox">
                <input type="radio" name="check_time" />
                <p>Office hours only</p>
              </div>
              <div class="box_checkbox">
                <input type="radio" name="check_time" />
                <p>Every day of the week (matches home address)</p>
              </div>
            </div>
            <div class="box_input_container">
              <div class="box_input">
                <p>Note</p>
                <textarea placeholder="Type something here..."></textarea>
              </div>
            </div>
          </div>
          <div class="box2_left_box2">
            <div class="box2_title">
              <img src="../assets/images/line_title.png" alt="" />
              <p>PAYMENT INFORMATION</p>
            </div>
            <div class="select_pay">
              <select>
                <option value="">Payment by cash when received</option>
                <option value="">Online</option>
              </select>
            </div>
          </div>
        </div>
        <form class="box2_right" action="" @submit.prevent="save()">
          <div class="box2_title">
            <img src="../assets/images/line_title.png" alt="" />
            <p>YOUR ORDER</p>
          </div>

          <div class="box2_right_title">Products</div>
          <div class="all_product">
            <div
              class="detail_product"
              v-for="(product, index) in products"
              :key="index"
            >
              <img :src="'http://127.0.0.1:8000/' + product.img" alt="" />
              <div class="product_content">
                <div class="product_name">
                  {{ product.name }} x{{ product.qty }}
                </div>

                <div class="product_price">$ {{ product.price }}</div>
              </div>
            </div>
          </div>
          <div class="box2_right_title">Order summary</div>
          <div class="price_all">
            <div class="price">
              <p>Subtotal</p>
              <p class="price_secon">{{ total_sum }} $</p>
            </div>
            <div class="price">
              <p>Shipping</p>
              <p class="price_ship">0 $</p>
            </div>
          </div>
          <div class="price_total">
            <p>TOTAL</p>
            <p class="price_after">{{ total_sum }} $</p>
          </div>
          <button
            class="button_buy"
            type="submit"
            :class="{ pointer: isPointer }"
          >
            CONFIRM ORDER
          </button>
        </form>
      </div>
    </div>
    <div class="popup__all" v-if="isCheckout">
      <div class="main__popup">
        <img src="../assets/images/img_logo_send.png" alt="" />
        <div class="main__popup_title">THANK YOU!</div>
        <div class="main__popup_content">
          Thanks for your ordering. Your order is being confirmed and will be
          delivered as soon as possible. Don't forget to keep an eye on your
          phone and email to receive the latest information from us. Best
          regards!
        </div>
        <RouterLink to="/" tag="a">
          <button class="buttonback">BACK TO HOMEPAGE</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkout",
  data() {
    return {
      products: [],
      token: this.$store.state.token,
      cart: this.$store.state.cart,
      data: {
        name: "",
        email: "",
        phone: "",
        city: "",
        note: "",
      },
      errors: {
        name: "",
        email: "",
        phone: "",
        city: "",
      },
      isPointer: false,
      isCheckout: false,
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
    validate() {
      let isValid = true;
      this.errors = {
        name: "",
        email: "",
        phone: "",
        city: "",
      };
      if (!this.data.name) {
        this.errors.name = "Tên không dc để trống";
        isValid = false;
      }
      if (!this.data.email) {
        this.errors.email = "Email không dc để trống";
        isValid = false;
      }
      if (!this.data.phone) {
        this.errors.phone = "Số điện thoại không dc để trống";
        isValid = false;
      }
      if (!this.data.city) {
        this.errors.city = "Địa chỉ không dc để trống";
        isValid = false;
      }
      return isValid;
    },
    save() {
      if (this.validate()) {
        this.isPointer = true;
        this.$request({
          method: "post",
          url: "http://127.0.0.1:8000/api/checkout",
          headers: {
            Authorization: `Bearer ${this.token}`,
            token: this.token,
          },
          data: {
            data: this.data,
            cart: this.cart,
          },
        }).then((res) => {
          if (res.data.status == 200) {
            this.$store.commit("add_cart", []);
            this.isCheckout = true;
          } else {
            this.isPointer = false;
            alert("Có lỗi xảy ra");
          }
        });
      }
      console.log(this.data);
    },
  },
};
</script>

<style scoped>
.pointer {
  pointer-events: none;
}

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
  min-width: 1360px;
}
.container_box1 img {
  width: 100%;
  margin: 24px 0px;
}
.container_box2 {
  display: flex;
  gap: 16px;
  padding-top: 20px;
  margin-bottom: 60px;
}
.box2_left {
  width: calc(67% - 16px);
}
.box2_left_box2,
.box2_left_box1 {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 47px 113px rgba(0, 0, 0, 0.07),
    0px 10.7862px 18.7834px rgba(0, 0, 0, 0.0359201);
  padding: 32px 40px;
}
.box2_right {
  background: #ffffff;

  box-shadow: 0px 47px 113px rgba(0, 0, 0, 0.07),
    0px 10.7862px 18.7834px rgba(0, 0, 0, 0.0359201);
  width: 33%;
  padding: 32px 40px;
  height: max-content;
}
.box2_title {
  display: flex;
  gap: 16px;
  align-items: center;
}
.box2_title p {
  font-size: 20px;
  letter-spacing: 0.1em;
  color: #2b2f32;
  margin-bottom: 25px;
}
.box2_right .box2_title p {
  margin-bottom: unset;
}
.box_input_container {
  display: flex;
  gap: 20px;
}
.error {
  font-size: 14px;
  color: red;
  width: 100%;
  margin: 0;
  font-family: none;
  padding: 0;
}
.err {
  font-size: 14px;
  color: red;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 20px;
  line-height: 20px;
}

.box_input {
  flex: 1;
}
.box_input p,
.box_select p {
  font-family: "Oxygen";
  font-weight: 700;
  color: #2b2f32;
  margin-bottom: 5px;
}
.box_input input {
  padding-left: 12px;
  height: 44px;
  border: 1px solid #d5d5d6;
  font-family: "Oxygen";
  font-size: 14px;
  color: #55595b;
  width: 100%;
  padding-right: 32px;
}
.box_select select {
  padding-right: 65px;
  border: 1px solid #d5d5d6;
  height: 44px;
  padding-left: 12px;
  font-family: "Oxygen";
  font-size: 14px;
  color: #55595b;
}
.box_checkbox_container {
  display: flex;
  gap: 33px;
  align-items: center;
}
.box_checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}
.box_checkbox p {
  font-family: "Oxygen";
  font-size: 14px;
  color: #55595b;
}
.box_input textarea {
  border: 1px solid #d5d5d6;
  width: 100%;
  padding: 13px 12px;
  font-family: "Oxygen";
  font-weight: 300;
  font-size: 14px;
  color: #aaacad;
}
.box2_left_box2 {
  margin-top: 16px;
}
.select_pay select {
  margin-top: 25px;
  padding-right: 65px;
  border: 1px solid #d5d5d6;
  height: 44px;
  padding-left: 12px;
  font-family: "Oxygen";
  font-size: 14px;
  color: #55595b;
  width: 100%;
}
.box2_right_title {
  padding-top: 25px;
  padding-bottom: 15px;
  font-family: "Oxygen";
  font-weight: 700;
  color: #2b2f32;
}
.detail_product {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 12px;
}
.detail_product img {
  width: 56px;
}
.product_name {
  font-family: "Oxygen";
  font-size: 14px;
  color: #2b2f32;
  margin-bottom: 5px;
}
.product_price {
  font-family: "Oxygen";
  font-size: 14px;
  color: #c97178;
}
.all_product {
  padding-bottom: 10px;
  border-bottom: 1.5px dashed #d5d5d6;
}

.price {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.price p {
  font-family: "Oxygen";
  font-size: 14px;
  color: #2b2f32;
}
.price_all {
  padding-bottom: 10px;
  border-bottom: 1.5px dashed #d5d5d6;
}
.price_total {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.price_total p {
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 20px;
  color: #2b2f32;
}
.button_buy {
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  width: 100%;
  padding: 15px 0px;
  background: #2b2f32;
  border: unset;
  margin-top: 40px;
}
.popup__all {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__popup {
  width: 742px;
  background: #ffffff;
  box-shadow: 0px 47px 113px rgba(0, 0, 0, 0.07),
    0px 10.7862px 18.7834px rgba(0, 0, 0, 0.0359201);
  padding: 80px 116px 66px 116px;
  text-align: center;
}
.main__popup_title {
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.1em;
  color: #2b2f32;
  margin-top: 16px;
  margin-bottom: 12px;
}
.main__popup_content {
  font-family: "Oxygen";
  text-align: center;
  color: #808284;
  margin-bottom: 40px;
}
.buttonback {
  background: #2b2f32;
  border: unset;
  font-family: "Oxygen";
  font-weight: 700;
  color: #ffffff;
  padding: 15px 62px;
}
.box_input .err {
  color: red;
  font-size: 12px;
  height: 20px;
  margin: 0;
  font-weight: unset;
}
</style>