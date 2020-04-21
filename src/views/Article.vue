<template>
    <div class="articleDetail" >
        <div style="">
            <span class="backBox" @click="toList">
              <i class="el-icon-arrow-left"></i>
              返回
            </span>
        </div>
        <h1 class="post_title">{{article.title}}</h1>
        <div>
            <i class="el-icon-user"></i>
            <span>{{article.user}}</span>
            创建时间：<span>{{article.date_publish}}</span>
            <div class="post_content">
              {{article.content}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Article',
  props: ['id'],
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    console.log(this.id)
    this.getarticle(this.id)
  },

  methods: {
    toList () {
      this.$router.push('/')
    },
    async getarticle (id) {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.API.get('/api/articles/' + id + '/')
      if (res.code !== 200) {
        return
      }
      console.log('detailres', res)
      this.article = res.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.articleDetail {
    padding: 20px;
    background-color: #fff;
    .backBox {
      cursor: pointer;
    }
    i {
        font-size: 20px;
    }
    .post_title {
        text-align: center;
        font-size: 1.5rem;
        padding: 10px 0;
    }
    .post_content {
      padding: 10px;
      font-size: 1.2rem;
    }
}
</style>
