<template>
    <div class="home">
        <siteHeader></siteHeader>
        <el-container>
            <el-header height="0"></el-header>
            <el-main>
                <Articles></Articles>
            </el-main>
            <el-footer height="0"></el-footer>
        </el-container>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import siteHeader from '@/components/Header'
import Articles from '@/components/Articles'

export default {
  name: 'Home',
  components: {
    siteHeader,
    Articles
  },
  props: [''],
  data () {
    return {
    }
  },
  methods: {
    showMenu () {
      this.isMenu = !this.isMenu
    }
  }
}
</script>

<style lang="less">
.el-header,
.el-footer {
    text-align: center;
    // background-color: pink;
    height: 0;
}
.el-main {
    color: #333;
    background-color: #fff;
    padding: 1rem;
}

</style>
