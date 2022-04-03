<template>
  <div class="background">
    <div class="wrap">
      <a-form id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit">
        <a-form-item>
          <div class="avator">
            <img src="@/assets/a.png"
                 alt="">
          </div>
        </a-form-item>
        <a-form-item>
          <a-input v-decorator="[
          'email',
          { rules: [{validator:checkEmail, required: true, message: 'Please input your Email!' }] },
        ]"
                   placeholder="Email">
            <a-icon slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                   type="password"
                   placeholder="Password">
            <a-icon slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]">
            <span style="color:#fff">Remember me</span>
          </a-checkbox>
          <a class="login-form-forgot"
             href="">
            Forgot password
          </a>
          <a-button type="primary"
                    html-type="submit"
                    class="login-form-button">
            Log in
          </a-button>
          <span style="color:#fff">Or</span>
          <a href="">
            register now!
          </a>
        </a-form-item>
      </a-form>
    </div>
  </div>

</template>

<script>
import api from '@/api/user.js'
export default {
  data() {
    return {}
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'user_login' })
  },
 
  methods: {
    checkEmail(rule, value, callback) {
      let emailReg = /^[\w-]+@[\w.-]+.com/
      if (emailReg.test(value)) {
        return callback()
      } else {
        return callback(new Error('邮箱格式不正确'))
      }
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        const params = {
          email: values.email,
          password: values.password,
        }
        api
          .login(params)
          .then((res) => {
              console.log(res)
              this.$store.dispatch('setUserInfo',res)
              this.$router.push({name:'Home'})
          })
          .catch((err) => {
            this.$message.error(err)
          })
      })
    },
  },
}
</script>
<style lang='less' scoped>
.background {
  width: 100%;
  height: 100%;
  background: url('~@/assets/bg.jpg') no-repeat;
  background-size: cover;
}
.wrap {
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  width: 500px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 7px 3px rgba(233, 180, 180, 0.3);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}
.avator {
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>