<template>
  <div class="main">
    <div class="main_title">
      <div class="main_link_title">
        <a href="#">Home</a>/<a href="#">Danh sách đơn hàng</a>
      </div>
    </div>
    <div class="main_container">
      <div class="container_box1">
        <img src="../assets/images/imgcart.png" alt="" />
      </div>
      <div class="container_box2" v-if="isOrder">
        <div class="all_order" v-for="(order, index) in orders" :key="index">
          <div class="info_order">
            <div class="stt_order">{{ index + 1 }}</div>
            <div class="name_order">{{ order.created_at }}</div>
            <div class="day_start">{{ order.name_order }}</div>
            <div class="type_order">{{ order.type }}</div>
            <div class="btn_view">
              <button
                class="btn_type btn_show"
                @click="show_all($event, index)"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
          <div class="table_cart hidden">
            <table>
              <tr>
                <td width="54%">Product</td>
                <td width="20%">Quantity</td>
                <td width="20%">Subtotal</td>
              </tr>
              <tr v-for="(item, idx) in order.order_details" :key="idx">
                <td class="product">
                  <img
                    :src="'http://127.0.0.1:8000/' + item.product.img"
                    alt=""
                  />
                  <div class="detail_product">
                    <p class="name_product">{{ item.product.name }}</p>
                    <p class="price_product">{{ item.price }} $</p>
                  </div>
                </td>
                <td>
                  <div class="amount_product">{{ item.amount }}</div>
                </td>
                <td class="price_total_product">
                  {{ item.price * item.amount }} $
                </td>
              </tr>
              <td colspan="2" class="text_total">Tổng tiền</td>
              <td>
                <div class="total_all">{{ order.sum_price }} $</div>
              </td>
            </table>
          </div>
        </div>
      </div>
      <div class="container_box2 no_order" v-else>Không có đơn hàng nào</div>
    </div>
  </div>
</template>

<script>
import Orders from "@/repository/orders";
export default {
  name: "order",
  data() {
    return {
      isOrder: false,
      orders: [],
    };
  },
  created() {
    this.$store.commit("chane_page_login", true);
    this.getAllOrders();
  },
  methods: {
    getAllOrders() {
      Orders.get().then((res) => {
        if ((res.data.data.status = "success")) {
          this.isOrder = true;
          this.orders = res.data.data;
        }
      });
    },
    show_all(e, index) {
      let aa = e.target;
      let bb = document.querySelectorAll(".table_cart");
      if (aa.classList.contains("btn_show")) {
        aa.classList.toggle("btn_show");
        aa.classList.toggle("btn_hidden");
        aa.innerHTML = "Thu gọn";
        bb.forEach(function (element, inx) {
          if (index == inx) {
            element.classList.toggle("hidden");
          }
        });
      } else {
        aa.classList.toggle("btn_show");
        aa.classList.toggle("btn_hidden");
        aa.innerHTML = "Xem chi tiết";
        bb.forEach(function (element, inx) {
          if (index == inx) {
            element.classList.toggle("hidden");
          }
        });
      }
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
  padding-bottom: 60px;
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
.table_cart table tr:last-child td {
  font-family: "Oxygen";
  border-bottom: 1px solid #d5d5d6;
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

.amount_product {
  height: 34px;
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #2b2f32;
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
  font-size: 16px;
  color: #000;
  text-align: center;
}
.total_all {
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 24px;
  text-align: right;
  color: #2b2f32;
  text-align: center;
}
.info_order {
  display: flex;
  padding-top: 30px;
  margin: 0px 30px 0px 20px;
  font-family: "Oxygen";
  border-bottom: 1px dashed #333;
  align-items: center;
  text-align: center;
}
.stt_order {
  width: 5%;
  font-family: "Oxygen";
  color: blue;
}
.name_order {
  flex: 1;
  text-transform: uppercase;
  font-family: "Oxygen";
}
.day_start {
  width: 14%;
  font-family: "Oxygen";
}
.type_order {
  width: 15%;
  font-family: "Oxygen";
  color: #7b7bf1;
}
.btn_view button {
  padding: 5px 20px;
  border: unset;
  border-radius: 5px;
  color: #fff;
}
.btn_show {
  background: #5858ee;
}
.btn_hidden {
  background: #f83f3f;
}
.btn_view {
  width: 16%;
  padding: 16px 0px;
  font-family: "Oxygen";
}
.no_order {
  text-align: center;
  padding-top: 40px;
  font-size: 24px;
}
</style>