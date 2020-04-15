<template>
    <div class="articleDetail" >
        <el-row >
            <el-col :span="4">
                <div @click="toList" style="">
                    <i class="el-icon-arrow-left"></i>
                    返回
                </div>
            </el-col>
        </el-row>
        <h1 class="post_title">{{article.title}}</h1>
        <div>
            <i class="el-icon-user"></i>
            <span>{{article.user}}</span>
            创建时间<span>{{article.date_publish}}</span>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '@/helper/api/env'
export default {
  name: 'Article',
  props: ['id'],
  data () {
    return {
      baseUrl: baseUrl,
      article: {}
    }
  },
  mounted () {
    console.log(this.id)
    this.getarticle(this.id)
  },

  methods: {
    toList () {
      this.$router.go(-1)
    },
    async getarticle (id) {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.Fetch('/api/articles/' + id + '/')
      console.log('detailres', res)
      this.article = res
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
