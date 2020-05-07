<template>
    <div class="articles" v-loading="loading">
      <div v-if="articles.length === 0">
        没有文章哦！
      </div>
        <el-card class="box-card" v-for="item in articles" :key="item.id">
            <div class="titleBox">
                <span class="avatar">
                  <img :src="baseUrl +'/'+ item.avatar_link" alt="">
                </span>
                <span class="title" @click="toDetail(item.id)">{{item.title}}</span>
            </div>
            <div class="userName">
                作者：
                <span>{{item.user}}</span>
            </div>
            <div class="content">{{item.content}}</div>
        </el-card>
        <el-pagination
            :page-size="limit"
            :pager-count="5"
            layout="prev, pager, next"
            :total="total"
            @current-change="pageChange"
        ></el-pagination>
    </div>
</template>

<script>
import { BASE_URL } from '@/helper/api/env'
import { Auth } from '@/helper/api/auth'

export default {
  name: 'Articles',
  data () {
    return {
      baseUrl: BASE_URL,
      // searchText: this.$store.state.searchContent,
      total: 0,
      limit: 3,
      offset: 0,
      articles: [],
      article: {},
      loading: true
    }
  },
  created () {
    console.log('created')
    this.getarticles()
  },
  beforeRouteEnter: (to, from, next) => { // 写在当前组件
    to.meta.keepAlive = false
    next()
  },
  methods: {
    async getarticles () {
      const search = this.searchText
      const limit = this.limit
      const offset = this.offset
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.API.get('/api/articles/', {
        search,
        limit,
        offset
      })

      if (res.code !== 200) {
        Auth.clear()
        this.loading = false
        return
      }
      console.log(res)
      this.articles = res.data.data
      this.total = res.data.total
      this.loading = false
    },
    pageChange (page) {
      console.log('pageChange')
      this.offset = (page - 1) * this.limit
      console.log('offset', this.offset)
      this.getarticles()
    },
    toDetail (id) {
      this.$router.push(`/article/${id}`)
    }
  },
  computed: {
    // 计算属性的 getter
    searchText: function () {
      // `this` 指向 vm 实例
      return this.$store.state.searchContent
    }
  },
  watch: {
    // 为搜索文章使用
    searchText: function (val) {
      // 搜索时先重置到起始查询位置
      this.offset = 0
      this.getarticles()
    },
    '$route' () {
      if (this.$route.path === '/') {
        console.log('路由改变/')
        this.$store.commit('changeSC', '')
        this.getarticles()
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box-card {
    margin: 1rem 0;

    .titleBox {
        display: flex;
        padding: 1.3rem 1.3rem 0;
        background: -webkit-linear-gradient(
            top,
            rgba(105, 105, 105, 0.1) 0%,
            #fff 85%
        );
        background: linear-gradient(
            to bottom,
            rgba(105, 105, 105, 0.1) 0%,
            #fff 85%
        );
        border-radius: 6px 6px 0 0;
        .avatar {
          display: inline-block;
          box-sizing: border-box;
          text-align:center;
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          img {
              display: block;
              height: 100%;
              vertical-align: middle;
            }
        }
        .title {
            display: inline-block;
            padding: 10px;
            width: 100%;
            font-size: 1.3rem;
            cursor: pointer;
        }
        .title:hover {
            color: #303133;
            font-weight: 700;
        }
    }
    .userName {
        padding: 0 1.3rem;
    }
    .content {
        padding: 0 1.3rem;
        word-wrap: break-word;
        max-height: 4rem;
        text-overflow: -o-ellipsis-lastline;
        text-overflow: ellipsis;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; //这个表示要显示几行
        -webkit-box-orient: vertical;
    }

}

.el-pagination {
    text-align: center;
}
</style>
