<template>
    <div class="articleDetail">
        <div >
            <span class="backBox" @click="toList">
                <i class="el-icon-arrow-left"></i>
                返回
            </span>
        </div>
        <h1 class="post_title">{{article.title}}</h1>
        <div>
            <i class="el-icon-user"></i>
            <span>{{article.user}}</span>
            创建时间：
            <span>{{article.date_publish}}</span>
            <div class="post_content">{{article.content}}</div>
        </div>
        <div>
            <span>评论：</span>
            <!-- <el-collapse v-model="activeName">
                <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
            </el-collapse>-->
            <ol class="commentlist">
                <div class="" v-if="haveComments">暂无评论</div>
                <li v-for="item in comments" :key="item.id">
                    <div class="top">
                        <el-avatar fit="cover" shape="square" :src="baseUrl +'/'+ item.avatar_link"></el-avatar>
                        <span class="time">{{item.username}}</span>
                    </div>
                    <div></div>
                    <div class="body">
                        <p>
                            {{item.content}}
                            <span>{{item.date_publish}}</span>
                        </p>
                    </div>
                    <div class="reply" v-if="item.havechild" @click="ismorecomments = !ismorecomments">
                        展开回复
                        <i class="el-icon-caret-bottom"></i>
                    </div>
                    <ol v-show="ismorecomments">
                        <li v-for="i in item.child" :key="i.id">
                            <div class="top">
                                <el-avatar
                                    fit="cover"
                                    shape="square"
                                    :src="baseUrl +'/'+ i.avatar_link"
                                ></el-avatar>
                                <span class="time">{{i.username}}</span>
                            </div>
                            <div></div>
                            <div class="body">
                                <p>
                                    {{i.content}}
                                    <span>{{i.date_publish}}</span>
                                </p>
                            </div>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import { BASE_URL } from '@/helper/api/env'

export default {
  name: 'Article',
  props: ['id'],
  beforeRouteEnter: (to, from, next) => { // 写在当前组件
    to.meta.keepAlive = false
    next()
  },
  data () {
    return {
      baseUrl: BASE_URL,
      article: {},
      activeName: 1,
      allComments: [],
      comments: [],
      ismorecomments: false
    }
  },
  mounted () {
    console.log(this.id)
    this.getarticle()
  },

  methods: {
    toList () {
      this.$router.go(-1)
    },
    async getarticle () {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.API.get('/api/articles/' + this.id + '/')
      if (res.code !== 200) {
        return
      }
      console.log('detailres', res)
      this.article = res.data
      this.getComments(this.id)
    },
    // 获取评论的接口http://localhost:8000/api/comment/?search=1
    async getComments (id) {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.API.get('/api/comments/?article=' + id)
      if (res.code !== 200) {
        return
      }
      console.log('detailres', res)
      this.allComments = res.data
      this.comments = res.data.filter(function (item, index) {
        return item.pid == null
      })
      this.comments.forEach((item, index) => {
        const flag = this.allComments.some(item2 => {
          return item2.pid === item.id
        })
        console.log(flag)
        if (flag) {
          item.havechild = true
          item.child = this.allComments.filter(item2 => {
            return item2.pid === item.id
          })
        } else {
          item.havechild = false
        }
      })
      // this.article = res.data
    }
  },
  computed: {
    // 是否有评论内容
    haveComments () {
      return !this.comments.length
    }
  },
  watch: {
    id: {
      handler: 'getarticle', // 调用方法
      immediate: true // 进入立即执行一次
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
.commentlist {
    li {
        margin: 10px;
    }
    .top {
        // text-align: center;
        span {
            line-height: 100%;
        }
    }
    .body {
        p {
            font-size: 1.2rem;
            span {
                font-size: 0.8rem;
            }
        }
    }
    .reply {
        text-align: right;
    }
}
</style>
