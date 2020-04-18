<template>
    <div id="app">
        <div class="Yarn_Background"></div>
        <el-backtop :visibility-height="150" style="right: 30px; bottom: 30px;"><i class="el-icon-caret-top"></i></el-backtop>
        <div class="search" v-if="!isSearch">
            <i class="js-toggle-search iconfont" @click="isSearch=true"></i>
        </div>
        <transition name="el-fade-in-linear">
            <div class="searchInput transition-box" v-if="isSearch">
                <el-input clearable v-model="input" placeholder="请输入内容" @blur="cancelSearch" @keyup.enter.native = 'search'></el-input>
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
            <img src="./assets/images/omikron.png" alt />
            <p>This is beauty</p>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { baseUrl } from '@/helper/api/env'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data () {
    return {
      baseUrl: baseUrl,
      isSearch: false,
      isMenu: false,
      input: '',
      searchReslut: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    cancelSearch (event) {
      console.log('取消搜索')
      this.isSearch = false
      this.isMenu = false
      this.input = ''
    },
    search () {
      console.log(this.input)

      this.isSearch = false
      this.isMenu = false
      this.input = ''
    },
    async getarticles () {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.Fetch('/api/articles/', { search: this.input })
      console.log('res', res)
      if (res.code !== 0) {
        return
      }
      this.searchReslut = res.data.data
    },
    showMenu () {
      this.isMenu = !this.isMenu
    }
  }
}
</script>

<style lang="less">
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: rgba(2, 0, 0, 0.6);
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
p,
div,
span,
ul,
ol,
li,
form,
input,
textarea,
br,
button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
}
*,
*:after,
*:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
textarea,
input[type="text"],
input[type="url"],
input[type="email"],
input[type="tel"],
input[type="password"],
input[type="search"] {
    border: 0;
    width: 100%;
}

@font-face {
    font-family: "iconfont";
    src: url(./assets/fonts/iconfont.eot);
    src: url(./assets/fonts/iconfont.eot?#iefix) format("embedded-opentype"),
        url(./assets/fonts/iconfont.woff) format("woff"),
        url(./assets/fonts/iconfont.ttf) format("truetype"),
        url(./assets/fonts/iconfont.svg#iconfont) format("svg");
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

// 首页样式
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

.el-backtop {
    color: #000;
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
    background-image: url(./assets/images/47fb3c_.jpg);
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
</style>
