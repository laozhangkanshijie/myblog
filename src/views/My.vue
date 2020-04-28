<template>
    <div class="my">
        <div>
            <span class="backBox" @click="back">
                <i class="el-icon-arrow-left"></i>
                返回首页
            </span>
            <span class="quit" @click="quit">
                退出
            </span>
        </div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">我的文章</el-menu-item>
            <el-menu-item index="2">个人信息</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { Auth } from '@/helper/api/auth'

export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  created () {
    // this.getUserInfo()
    this.getUser()
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    quit () {
      Auth.clear()
      this.$router.push('/login')
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    async getUserInfo () {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.API.get('/api/userinfo/', { token: Auth.token })
      console.log('res', res)
      // if (res.code !== 200) {
      //   return
      // }
      // this.Categorys = res.data
    },
    async getUser () {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.API.get('/api/getuser/')
      console.log('res', res)
      // if (res.code !== 200) {
      //   return
      // }
      // this.Categorys = res.data
    }
  }
}
</script>

<style lang="less">
.my {
    padding: 20px;
    background-color: #fff;
    .backBox {
        cursor: pointer;
    }
    i {
        font-size: 20px;
    }
    .quit {
        float: right;
        text-decoration: underline;
    }
}
</style>
