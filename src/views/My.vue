<template>
    <div class="my">
        <div>
            <span class="backBox" @click="back">
                <i class="el-icon-arrow-left"></i>
                返回首页
            </span>
            <span class="quit" @click="quit">退出</span>
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
        <Articles v-if="activeIndex === '1'"></Articles>

        <div class="userInfo" v-if="activeIndex === '2'">
            <span class="avatar">
                  <img :src="userInfo.avatar" alt="">
            </span>
            <div class="userName">
                <span>{{userInfo.username}}</span>
                <div>邮箱：{{userInfo.email ? userInfo.email:'暂无'}}</div>
                <div>QQ：{{userInfo.qq ? userInfo.qq:'暂无'}}</div>
                <div>电话：{{userInfo.mobile ? userInfo.mobile :'暂无'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Auth } from '@/helper/api/auth'
import Articles from '@/components/Articles'
export default {
  components: {
    Articles
  },
  data () {
    return {
      activeIndex: '1',
      userInfo: {}
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    back () {
      this.$router.push('/')
      this.$store.commit('changeSC', '')
    },
    quit () {
      Auth.clear()
      this.$router.push('/login')
    },
    handleSelect (key, keyPath) {
      console.log(key)
      this.activeIndex = key
      // if (key === '2') {
      //   this.getUser()
      // }
    },
    async getUser () {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.API.get('/api/getuser/')
      console.log('res', res)
      if (res.code !== 200) {
        return
      }
      this.userInfo = res.data[0]
      this.getUserArticles()
    },
    getUserArticles () {
      // 将通过用户名搜索文章
      this.$store.commit('changeSC', this.userInfo.username)
    }
  },
  watch: {
    activeIndex: function (val) {
      if (val === '1') {
        this.getUserArticles()
      }
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
.userInfo {
  .avatar {
          display: inline-block;
          box-sizing: border-box;
          text-align:center;
          width: 50px;
          height: 50px;
          line-height: 40px;
          font-size: 14px;
          img {
              display: block;
              height: 100%;
              vertical-align: middle;
            }
        }
}
</style>
