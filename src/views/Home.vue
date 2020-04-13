<template>
    <div class="home">
        <div class="Yarn_Background"></div>
        <div class="search" v-if="!isSearch">
            <i class="js-toggle-search iconfont" @click="isSearch=true"></i>
        </div>
        <transition name="el-fade-in-linear">
            <div class="searchInput transition-box" v-if="isSearch">
                <el-input autofocus clearable v-model="input" placeholder="请输入内容" @change="search"></el-input>
            </div>
        </transition>

        <div class="menuIcon" v-if="!isSearch" @click="showMenu">
            <i class="el-icon-s-fold"></i>
        </div>

        <div class="menu" v-if="isMenu && !isSearch">
            <el-button-group>
                <el-button>首页</el-button>
                <el-button>分类</el-button>
                <el-button>个人中心</el-button>
            </el-button-group>
        </div>
        <div class="siteHeader123">
            <img src="../assets/images/omikron.png" alt />
            <p>This is beauty</p>
        </div>

        <el-container>
            <el-header height="0"></el-header>
            <el-main>
                <el-card class="box-card" v-for="item in articles" :key="item.id">
                    <div class="titleBox">
                        <el-avatar :size="60" src @error="errorHandler">
                            <img
                                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                            />
                        </el-avatar>
                        <span class="title">{{item.title}}</span>
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

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      form: {
        title: ''
      },
      isSearch: false,
      isMenu: false,
      input: '',
      articles: []
    }
  },
  created () {
    this.getarticles()
    // fetch('http://127.0.0.1:8000/api/articles', {
    //   method: 'get'
    // }).then(result => {
    //   console.log(result)
    // })
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
    errorHandler () {
      return true
    }
  }
}
</script>

<style lang="less">
.el-header,
.el-footer {
    text-align: center;
    background-color: pink;
}
.el-main {
    color: #333;
    background-color: #fff;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.Yarn_Background {
    position: fixed;
    width: 100%;
    height: 100%;
    -moz-background-size: cover;
    -o-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: top center;
    z-index: -999;
    background-image: url(../assets/images/47fb3c_.jpg);
}
.search {
    position: absolute;
    z-index: 998;
    top: 2.5em;
    left: 3em;
    i {
        font-size: 30px;
        line-height: 30px;
        margin-right: 20px;
    }
}

.menuIcon {
    position: absolute;
    z-index: 998;
    top: 2.5em;
    right: 3em;
    i {
        font-size: 30px;
        line-height: 30px;
        margin-right: 20px;
        color: #fff;
    }
}
.menu {
    max-width: 640px;
    padding: 0;
    margin: 0 auto;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 5em;
    bottom: 0;
    display: flex; /*所有子元素block或inline都变成行内块元素的样式*/
    justify-content: center; /*子元素靠右*/
}
.js-toggle-search {
    height: 35px;
    width: 35px;
    color: rgba(255, 255, 255, 1);
    float: left;
    display: inline;
    -webkit-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
    cursor: pointer;
}

.searchInput {
    max-width: 640px;
    padding: 0 20px;
    margin: 0 auto;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 3em;
    bottom: 0;
    z-index: 3;
    .el-input {
        font-size: 24px;
    }
    .el-input__inner {
        text-align: center;
        font-family: PingFang SC, "Hiragino Sans GB", "Source Han Sans CN",
            Roboto, "Microsoft Yahei", sans-serif;
        font-size: 24px;
        font-size: 1.5rem;
        background: rgba(255, 255, 255, 0.6);
        color: #fff;
        padding: 12px 0;
        width: 100%;
        border-radius: 50px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
}
.siteHeader123 {
    position: relative;
    padding-top: 120px;
    text-align: center;
    img {
        display: inline-block;
        width: 100px;
    }
    p {
        color: #fff;
    }
}

.box-card {
    margin: 18px 0;
    .titleBox {
        display: flex;
        padding: 1.3rem 1.3rem;
        background:-webkit-gradient(linear, 0 0, 0 bottom, from(#ff0000), to(rgba(0, 0, 255, 0.5)));
        .title {
        display: inline-block;
        margin: 10px;
        width: 100%;
    }
    }

    .content {
        padding: 1.3rem 1.3rem 2rem;
    }
}
</style>
