<template>
  <div class="header_login">
    <RouterLink to="/">Trang chủ</RouterLink>
    <RouterLink to="/register">Đăng ký</RouterLink>
  </div>
  <form
    action=""
    method="post"
    class="login_form"
    enctype="multipart/form-data"
    @submit.prevent="save()"
  >
    <div class="d_flex">
      <p class="min_w_100">Tên đăng nhập</p>
      <div class="div">
        <input
          type="text"
          placeholder="Nhập tên đăng nhập"
          class="box_input"
          name="user_name"
          v-model="data.email"
          @blur="validate()"
        />
        <p class="err">
          {{ errors.email }}
        </p>
      </div>
    </div>
    <div class="d_flex">
      <p class="min_w_100">Mật khẩu</p>
      <div class="div">
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          class="box_input"
          name="password"
          v-model="data.password"
          @blur="validate()"
        />
        <p class="err">
          {{ errors.password }}
        </p>
      </div>
    </div>
    <RouterLink to="/password/forgot" class="forgot_pass"
      >Quên mật khẩu ?</RouterLink
    >
    <div class="box_login">
      <input
        type="submit"
        value="Đăng nhập"
        class="login_submit"
        :class="{ pointer: isPointer }"
      />
    </div>
  </form>
</template>

<script>
import Login from "@/repository/login";
export default {
  name: "login",
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
      isPointer: false,
    };
  },
  created() {
    this.$store.commit("chane_page_login", false);
  },
  beforeDestroy() {
    this.$store.commit("chane_page_login", true);
  },
  methods: {
    save() {
      if (this.validate()) {
        let data = {
          email: this.data.email,
          password: this.data.password,
        };
        this.isPointer = true;
        Login.post(data).then((res) => {
          if (res.data.status == 200) {
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("token", res.data.token);
            this.$store.commit("add_name", res.data.name);
            this.$store.commit("chane_page_login", true);
            this.$router.push({ name: "home" });
          } else {
            this.isPointer = false;
            this.errors.email = "Tài khoản hoặc mật khẩu chưa chính xác";
          }
        });
      }
    },
    validate() {
      let isValid = true;
      this.errors = {
        email: "",
        password: "",
      };
      if (!this.data.email) {
        this.errors.email = "Tài khoản không dc để trống";
        isValid = false;
      }
      if (!this.data.password) {
        this.errors.password = "Mật khẩu không dc để trống";
        isValid = false;
      }
      return isValid;
    },
  },
};
</script>

<style scoped>
.box_head {
  text-align: right;
}
.link_head {
  margin-right: 10%;
  text-align: right;
}
.login_form {
  width: max-content;
  display: block;
  margin: 50px auto;
}
.header_login {
  width: 600px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
}

.header_login a {
  color: blue;
  text-decoration: revert;
  font-family: auto;
}
.forgot_pass {
  color: blue;
  margin-left: 30px;
  text-decoration: revert !important;
  font-family: auto;
}
.d_flex {
  display: flex;
}
.min_w_100 {
  min-width: 150px;
}
.box_input {
  width: 300px;
  margin: 0px 0px 0px 20px;
  height: 34px;
  padding: 0px 10px;
}
.err {
  color: red;
  font-size: 12px;
  height: 20px;
  margin: 0;
  padding-left: 20px;
}
.ip_submit {
  padding: 10px 40px;
  display: block;
  margin: 30px auto;
  background: blue;
  color: white;
  border: none;
}
.success {
  width: 100%;
  background: blue;
  text-align: center;
  padding: 10px;
  color: white;
  font-size: 18px;
}
.box_login {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_submit {
  margin-top: 20px;
  padding: 10px 40px;
  display: block;
  background: blue;
  color: white;
  border: none;
}
.pointer {
  pointer-events: none;
}
</style>
