<template>
    <div id="app">
        <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <router-view></router-view>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
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
</style>
