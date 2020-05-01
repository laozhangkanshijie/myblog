<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/images/omikron.png" alt />
            </div>
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                :rules="loginFormRules"
                label-width="0px"
                class="login_form"
            >
                <el-form-item prop="username">
                    <div>账号：zhanghao3</div>
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <div>密码：123456</div>
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <router-link class="back" to="/">暂不登录，去首页</router-link>

                    <el-button @click="login" :loading="loading">{{loadingtext}}</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import { API } from '@/helper/api/api'
import { Auth } from '@/helper/api/auth'

export default {
  data () {
    return {
      loading: false,
      loadingtext: '登录',
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证规则对象
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入登录名称',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入登录密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      const formData = new FormData()
      const data = this.loginForm
      Object.keys(data).map(key => {
        formData.append(key, data[key])
      })
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        this.loading = true
        this.loadingtext = '登录中'
        const _this = this
        setTimeout(async () => {
          //   const { data: res } = await this.$http.post('login/', this.loginForm)
          //   const res = await this.Fetch('/login/', this.loginForm, 'POST')
          const res = await _this.API.postFormData(
            '/api/gettoken/',
            formData
          )
          console.log(res)
          if (res.code !== 200) {
            _this.loading = false
            _this.loadingtext = '登录'
            return _this.$message.error('登录失败')
          }
          _this.loading = false
          _this.loadingtext = '登录'
          _this.$message.success('登录成功')
          // 先清除token
          Auth.clear()
          // 保存token
          Auth.token = res.data.token
          // 记得这里可以存用户名和id
          // ！！！ query在$route里
          const redirect = decodeURIComponent(
            _this.$route.query.redirect || '/'
          )
          _this.$router.push(redirect)
        }, 300)
      })
    }
  }
}
</script>

<style lang="less">
@media only screen and (max-width: 300px) {
    .login_box {
        width: 100%;
    }
}

.login_container {
    background-image: url(../assets/images/47fb3c_.jpg);
    height: 100%;
}
.login_box {
    width: 375px;
    height: 300px;
    background-color: #ccc;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .btns {
        display: flex;
        justify-content: flex-end;
    }
    .back {
      margin-right: auto;
    }
}
</style>
