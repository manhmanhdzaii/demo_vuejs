<template>
  <div class="header">
    <div class="header_contact">
      <div class="h_contact_phone">
        <div class="ct_phone_img">
          <img src="../../assets/images/phone_header.png" alt="" />
        </div>
        <div class="ct_phone_content">Hotline: (01) 23 456 789</div>
      </div>
      <div class="h_contact_title">
        <div v-if="checkName">
          <div class="h_name_user">
            Xin chào, {{ name }}
            <ul class="sub_name_user hidden">
              <li><RouterLink to="/cart">Thông tin giỏ hàng</RouterLink></li>
              <li><RouterLink to="/orders">Danh sách đơn hàng</RouterLink></li>
              <li @click="logout()">Đăng xuất</li>
            </ul>
          </div>
        </div>
        <div class="h_login" v-else>
          <RouterLink class="link-login" to="/login">Đăng nhập</RouterLink>
          <RouterLink class="link-login" to="/login">Đăng ký</RouterLink>
        </div>
      </div>
    </div>
    <div class="header_content">
      <div class="header_logo">
        <a href="/"><img src="../../assets/images/logo.png" alt="" /></a>
      </div>
      <div class="header_navbar">
        <RouterLink to="/" tag="a" active-class="h_navbar_item_tick">
          <div class="h_navbar_item">HOME</div>
        </RouterLink>
        <a href="#">
          <div class="h_navbar_item">ABOUT US</div>
        </a>
        <RouterLink
          to="/list-products"
          tag="a"
          active-class="h_navbar_item_tick"
        >
          <div class="h_navbar_item">SHOP</div>
        </RouterLink>
        <RouterLink to="/orders" tag="a" active-class="h_navbar_item_tick">
          <div class="h_navbar_item">ORDER</div>
        </RouterLink>
      </div>
      <div class="header_cart">
        <div class="header_cart_img">
          <RouterLink to="/cart" tag="a">
            <img src="../../assets/images/cart_img.png" alt="" />
          </RouterLink>
          <div class="cart_img_absolute">{{ count }}</div>
        </div>
        <div class="header_cart_content"></div>
      </div>
      <div class="header_menu">
        <img src="../../assets/images/menu.png" alt="" />
      </div>
    </div>
  </div>
  <div class="header_sub hidden">
    <div class="header_sub_container">
      <a href="#">
        <div class="header_sub_arrow">
          <img src="../../assets/images/hd_sub_arrow.png" alt="" />
          <div class="header_sub_title hidden">SHOP</div>
        </div>
      </a>
      <div class="header_sub_box1">
        <a href="#">
          <div class="h_sub_b1_item">
            <div class="h_sub_b1_item_content h_navbar_item_tick">HOME</div>
            <div class="h_sub_b1_item_img">
              <img src="../../assets/images/hd_sub_arr1.png" alt="" />
            </div>
          </div>
        </a>
        <a href="#">
          <div class="h_sub_b1_item">
            <div class="h_sub_b1_item_content">ABOUT US</div>
            <div class="h_sub_b1_item_img">
              <img src="../../assets/images/hd_sub_arr1.png" alt="" />
            </div>
          </div>
        </a>
        <a href="#">
          <div class="h_sub_b1_item h_sub_b1_item_shop">
            <div class="h_sub_b1_item_content">SHOP</div>
            <div class="h_sub_b1_item_img">
              <img src="../../assets/images/hd_sub_arr1.png" alt="" />
            </div>
          </div>
        </a>
        <a href="#">
          <div class="h_sub_b1_item">
            <div class="h_sub_b1_item_content">CONTACT</div>
            <div class="h_sub_b1_item_img">
              <img src="../../assets/images/hd_sub_arr1.png" alt="" />
            </div>
          </div>
        </a>
        <div class="h_sub_cart">CART (0)</div>
      </div>
      <div class="header_sub_box2 hidden">
        <a href="#">
          <div class="h_sub_b1_item">
            <div class="h_sub_b1_item_content">FOR WOMEN</div>
            <div class="h_sub_b1_item_img">
              <img src="../../assets/images/hd_sub_arr1.png" alt="" />
            </div>
          </div>
        </a>
        <a href="#">
          <div class="h_sub_b1_item">
            <div class="h_sub_b1_item_content">FOR MEN</div>
            <div class="h_sub_b1_item_img">
              <img src="../../assets/images/hd_sub_arr1.png" alt="" />
            </div>
          </div>
        </a>
        <a href="#">
          <div class="h_sub_b1_item">
            <div class="h_sub_b1_item_content">FOR UNISEX</div>
            <div class="h_sub_b1_item_img">
              <img src="../../assets/images/hd_sub_arr1.png" alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
    name: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    checkName() {
      if (this.name) {
        return true;
      }
      return false;
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("add_name", "");
      this.$store.commit("chane_page_login", false);
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.header_contact {
  display: flex;
  justify-content: space-between;
  padding: 11px 11%;
  align-items: center;
}
.h_contact_phone {
  display: flex;
  gap: 8px;
  align-items: center;
}
.ct_phone_img {
  width: 16px;
  height: 16px;
}
.ct_phone_img img {
  width: 100%;
  height: 100%;
  vertical-align: unset;
}
.ct_phone_content {
  font-size: 14px;
  font-family: Oxygen;
  padding-top: 5px;
}
.h_contact_title {
  font-size: 14px;
  font-family: Oxygen;
}
.header_contact {
  border-bottom: 1px solid #cecaca;
}
.header_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 11% 14px;
}
.header_logo {
  width: 76px;
  height: 70px;
}
a.link-login {
  margin-left: 15px;
  font-family: auto;
  font-size: 16px;
  background: #33337a;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
}
.header_logo img,
.header_cart_img img {
  width: 100%;
  height: 100%;
}
.header_navbar {
  display: flex;
  gap: 52px;
}
.h_navbar_item_tick div {
  color: #c97178;
  font-weight: 700;
  position: relative;
}
.h_navbar_item_tick div::after {
  content: "";
  position: absolute;
  bottom: -4px;
  margin: auto;
  width: 50%;
  left: 25%;
  height: 1.5px;
  background: #c97178;
}
.h_navbar_item_down {
  display: flex;
  gap: 11px;
}
.h_navbar_item_down p {
  line-height: unset;
}
.h_navbar_item_down img {
  width: 12px;
  height: 7px;
  margin-top: 5px;
}
.header_cart {
  display: flex;
  gap: 16px;
  align-items: center;
}
.header_cart_img {
  width: 24px;
  height: 23px;
  position: relative;
}
.cart_img_absolute {
  position: absolute;
  font-size: 12px;
  font-family: Oxygen;
  padding: 2px 4px;
  background: #c97178;
  border-radius: 12px;
  color: white;
  top: -6px;
  right: -5px;
}
.header_cart_content {
  font-family: Oxygen;
}
.header_menu {
  display: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.header_menu img {
  width: 100%;
  height: 100%;
}
.header_sub_box2 {
  margin-bottom: 150px;
}
.hidden {
  display: none;
}
.header_sub {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  z-index: 4;
}
.header_sub_container {
  width: 265px;
  background: #fff;
  padding: 30px 28px 36px 24px;
  margin-top: 70px;
  height: max-content;
}
.h_name_user {
  font-family: auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
}
.h_name_user:hover .sub_name_user {
  display: block !important;
}
.h_name_user::after {
  position: absolute;
  top: 100%;
  content: " ";
  width: 100%;
  height: 10px;
}
.sub_name_user {
  position: absolute;
  background: #d2b0b6;
  top: 120%;
  z-index: 1;
  padding: 4px 0px;
  border-radius: 10px;
  cursor: pointer;
}
.sub_name_user li {
  cursor: pointer;
  padding: 5px 25px 5px 12px;
  font-family: auto;
  color: #4b7090;
}
.sub_name_user li a {
  font-family: auto;
  color: #4b7090;
}
.sub_name_user li:hover {
  background-color: white;
  color: black;
}
.header_sub_arrow {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.header_sub_title {
  color: #aaacad;
}
.header_sub_arrow img {
  width: 24px;
  height: 13px;
}
.h_sub_b1_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Oxygen;
  margin-bottom: 24px;
}
.h_sub_cart {
  width: 100%;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  border: 1.5px solid #2b2f32;
  font-family: "Oxygen";

  font-weight: 700;
}
@media screen and (max-width: 850px) {
  .header_navbar {
    gap: 30px;
  }
}
@media screen and (max-width: 750px) {
  .header_navbar {
    gap: 25px;
  }
  .header_content {
    padding: 16px 6% 14px;
  }
  .header_contact {
    padding: 11px 6%;
  }
}
@media screen and (max-width: 650px) {
  .header_navbar {
    gap: 18px;
  }
  .header_logo {
    width: 43px;
    height: 40px;
  }
  .header_cart_content,
  .h_navbar_item,
  .h_navbar_item p {
    font-size: 14px;
  }

  .header_cart_img {
    width: 20px;
    height: 20px;
  }
  .header_cart_img {
    top: -5px;
  }
}
@media screen and (max-width: 550px) {
  .header_contact,
  .header_navbar,
  .header_cart {
    display: none;
  }
  .header_menu {
    display: block;
  }
  .header {
    position: relative;
  }
}
.hidden {
  display: none;
}
</style>