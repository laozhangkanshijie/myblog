<template>
    <div class="home">
        <div class="Yarn_Background"></div>
        <div class="search" v-if="!isSearch">
            <i class="js-toggle-search iconfont" @click="chekInput"></i>
        </div>
        <transition name="el-fade-in-linear">
            <div class="searchInput transition-box" v-if="isSearch">
                <el-input clearable v-model="input" placeholder="请输入内容" @change="search"></el-input>
            </div>
        </transition>

        <!-- <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
                <a href="https://www.ele.me" target="_blank">订单管理</a>
            </el-menu-item>
        </el-menu>-->
        <!-- <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>-->
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
      input: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    chekInput () {
      this.isSearch = !this.isSearch
    },
    search () {
      this.isSearch = !this.isSearch
      this.input = ''
    }
  }
}
</script>

<style lang="less">
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
.js-toggle-search {
    height: 35px;
    width: 35px;
    color: rgba(255, 255, 255, 1);
    float: left;
    display: inline;
    -webkit-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
}

.searchInput {
    max-width: 640px;
    padding: 0 20px;
    margin: 0 auto;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 1.5em;
    bottom: 0;
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
</style>
