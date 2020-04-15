<template>
    <div class="home">
        <el-container>
            <el-header height="0"></el-header>
            <el-main>
                <el-card class="box-card" v-for="item in articles" :key="item.id">
                    <div class="titleBox">
                        <el-avatar fit="cover" shape="square" :src="baseUrl +'/'+ item.avatar_link"></el-avatar>
                        <span class="title" @click="toDetail(item.id)">{{item.title}}</span>
                    </div>
                    <div class="content">{{item.content}}</div>
                </el-card>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { baseUrl } from '@/helper/api/env'

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      baseUrl: baseUrl,
      input: '',
      articles: [],
      article: {}
    }
  },
  mounted () {
    // fetch('/api/articles', {
    //   method: 'get'
    // }).then(result => {
    //   console.log(result)
    // })
    this.getarticles()
  },

  methods: {
    onSubmit () {
      console.log('submit!')
    },
    search () {
      this.isSearch = false
      this.isMenu = false
      this.input = ''
    },
    showMenu () {
      this.isMenu = !this.isMenu
    },
    async getarticles () {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.Fetch('/api/articles')
      console.log('res', res)
      this.articles = res
    },
    async getarticle (id) {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.Fetch('/api/articles/' + id)
      console.log('detailres', res)
      this.article = res
    },
    toDetail (id) {
      this.$router.push(`/article/${id}`)
    }

  }
}
</script>

<style lang="less">
.el-header,
.el-footer {
    text-align: center;
    // background-color: pink;
}
.el-main {
    color: #333;
    background-color: #fff;
    padding: 1rem;
}

.box-card {
    margin: 1rem 0;

    .titleBox {
        display: flex;
        padding: 1.3rem 1.3rem;
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

        .title {
            display: inline-block;
            padding: 10px;
            width: 100%;
            font-size: 1.3rem;
            cursor: pointer;
        }
        .title:hover {
            color: #000;
        }
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
.articleDetail {
    background-color: #fff;
    i {
        font-size: 20px;
    }
    .post_title {
        text-align: center;
    }
}
</style>
