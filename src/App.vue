<template>
    <div id="app">
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

ol {
    padding: 0;
    list-style: none;
    counter-reset: sectioncounter
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

a {
    color: black;
    text-decoration:none;
}
a:hover {
    color:aliceblue;
}

div {
    white-space: pre-wrap;
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

</style>
