<template>
  <div class="footer">
    <div class="footer_box">
      <div class="footer_box1">
        <div class="ft_box1_first">
          <div class="footer_title">contact us</div>
          <div class="footer_content">
            <div class="footer_item">
              <div class="footer_item_img">
                <img src="../../assets/images/footer_phone.png" alt="" />
              </div>
              <div class="footer_item_content">(01) 23 456 789</div>
            </div>
            <div class="footer_item">
              <div class="footer_item_img">
                <img src="../../assets/images/footer_email.png" alt="" />
              </div>
              <div class="footer_item_content">support.fashion@gmail.com</div>
            </div>
            <div class="footer_item">
              <div class="footer_item_img">
                <img src="../../assets/images/footer_map.png" alt="" />
              </div>
              <div class="footer_item_content">
                254 Milacina Streets, Behansed Tower, London
              </div>
            </div>
          </div>
        </div>
        <div class="ft_box1_second">
          <div class="ft_b1_second_left">
            <div class="footer_title">GET HELP</div>
            <div class="footer_content">
              <div class="footer_item">
                <div class="footer_item_content">Privacy Policy</div>
              </div>
              <div class="footer_item">
                <div class="footer_item_content">Customer Service</div>
              </div>
              <div class="footer_item">
                <div class="footer_item_content">Payment options</div>
              </div>
            </div>
          </div>
          <div class="ft_b1_second_right">
            <div class="footer_title">quick Link</div>
            <div class="footer_content">
              <div class="footer_item">
                <div class="footer_item_content">About us</div>
              </div>
              <div class="footer_item">
                <div class="footer_item_content">Shop</div>
              </div>
              <div class="footer_item">
                <div class="footer_item_content">Cart</div>
              </div>
            </div>
          </div>
        </div>
        <div class="ft_box1_end">
          <div class="ft_b1_second_left">
            <div class="footer_title">SUBCRIbE FOR OUR NEWSLETTER</div>
            <div class="footer_content">
              <div class="footer_item_content2">
                <input type="text" placeholder="youremail.@gmail.com" />
                <div class="submit_footer">Submit</div>
              </div>
              <div class="footer_network">
                <a href="#"> <img src="../../assets/images/instagram.png" /></a>
                <a href="#"> <img src="../../assets/images/facebook.png" /></a>
                <a href="#"> <img src="../../assets/images/linkedin.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_box2">
        <div class="footer_box2_item">
          ??2022 Fashion Designer, Adamo Software
        </div>
        <div class="footer_box2_item">
          <img src="../../assets/images/cash.png" />
          <img src="../../assets/images/visa.png" />
          <img src="../../assets/images/paypal.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  padding: 40px 11% 20px;
  background: #f3f3f3;
}
.footer_box1 {
  display: flex;
  justify-content: space-between;
}
.ft_box1_first {
  width: 20%;
}
.ft_box1_second {
  width: 33.4%;
  display: flex;
  justify-content: space-between;
}
.ft_box1_end {
  width: 32.4%;
}
.footer_title {
  font-family: "Oxygen";
  font-weight: 700;
  text-transform: uppercase;
  color: #2b2f32;
  margin-bottom: 28px;
}
.footer_item {
  display: flex;
  gap: 8px;
  margin-bottom: 7px;
}

.footer_item img {
  width: 100%;
  height: 100%;
}
.footer_item_content {
  font-size: 14px;
  font-family: Oxygen;
  flex: 1;
}
.footer_item_img {
  display: flex;
  width: 16px;
  height: 16px;
}
.footer_item_content2 {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}
.footer_item_content2 input {
  padding: 10px 12px;
  height: 40px;
  flex: 1;
  font-size: 14px;
  font-family: "Oxygen";
  width: 100%;
  background: #f3f3f3;
  color: #666666;
}
.submit_footer {
  padding: 0px 16px;
  height: 40px;
  color: #ffffff;
  background: #2b2f32;
  line-height: 40px;
  font-size: 14px;
  font-family: "Oxygen";
  font-weight: 700;
  border: 1.5px solid #2b2f32;
}
.footer_network {
  display: flex;
  gap: 12px;
}
.footer_network img {
  width: 28px;
  height: 28px;
}
.footer_box2 {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: 60px;
  border-top: 1px solid #d5d5d6;
}
.footer_box2_item {
  font-family: "DM Sans";
  font-size: 12px;
  color: #2b2f32;
  display: flex;
  align-items: center;
  gap: 12px;
}
.footer_box2_item img {
  width: 51px;
  height: 28px;
}
.footer_box2_item img:nth-child(2) {
  width: 48px;
}
@media screen and (max-width: 1200px) {
  .footer {
    padding: 40px 9% 20px;
  }
  .ft_box1_first {
    width: 22%;
  }
}
@media screen and (max-width: 1050px) {
  .footer {
    padding: 40px 6% 20px;
  }
}

@media screen and (max-width: 950px) {
  .ft_box1_first {
    width: 25%;
  }
  .ft_box1_second {
    width: 29%;
  }
  .ft_box1_end {
    width: 36%;
  }
  .footer {
    padding: 40px 3% 20px;
  }
}
@media screen and (max-width: 800px) {
  .ft_box1_first {
    width: 28%;
  }
  .ft_box1_second {
    width: 31%;
  }
}
@media screen and (max-width: 700px) {
  .footer_box1 {
    flex-wrap: wrap;
  }
  .ft_box1_first,
  .ft_box1_second,
  .ft_box1_end {
    width: 100%;
  }

  .ft_box1_end {
    order: 1;
  }
  .ft_box1_first {
    order: 2;
    margin-top: 32px;
  }
  .ft_box1_second {
    order: 3;
    margin-top: 32px;
  }
  .footer {
    padding: 32px 24px 16px 24px;
  }
  .footer_item_content2,
  .footer_title {
    margin-bottom: 16px;
  }
  .footer_box2 {
    margin-top: 53px;
    padding-top: 12px;
  }
}
@media screen and (max-width: 500px) {
  .footer_item_content2,
  .footer_title {
    font-size: 14px;
  }
  .footer_item_content2 input,
  .footer_item_content {
    font-size: 12px;
  }
  .footer_box2_item {
    font-size: 10px;
  }
  .footer_box2 {
    flex-direction: column;
    gap: 12px;
  }
}
</style>