<template>
    <div class>
        <div>
            <span class="backBox" @click="back">
                <i class="el-icon-arrow-left"></i>
                返回首页
            </span>
        </div>

        <el-tabs v-model="activeName" @tab-click="handleClick" :value="'0'">
            <el-tab-pane
                v-for="item in Categorys"
                :key="item.id"
                :label="item.name"
                :name="item.index+''"
            ></el-tab-pane>

            <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="a">定时任务补偿</el-tab-pane>-->
        </el-tabs>
        <div>默认展示所有文章，点击分类后获取分类的文章</div>
        <Articles></Articles>
    </div>
</template>

<script>
import Articles from '@/components/Articles'

export default {
  components: {
    Articles
  },
  data () {
    return {
      activeName: 'second',
      Categorys: [],
      articles: [],
      //   tab栏默认选择位置
      tabValueIndex: ''
    }
  },
  created () {
    this.getCategorys()
    // this.gettabValueIndex()
  },
  mounted () {},
  methods: {
    back () {
      this.$router.go(-1)
      this.$store.commit('changeSC', '')
    },
    handleClick (tab, event) {
      console.log(tab.label, event)
      this.$store.commit('changeSC', tab.label)
    },
    async getCategorys () {
      // get 使用query传入字段，其他请求使用body,这里的get和body是请求参数对象
      const res = await this.API.get('/api/categorys/')
      console.log('res', res)
      if (res.code !== 200) {
        return
      }
      this.Categorys = res.data
    }
  },
  computed: {}
}
</script>

<style>
</style>
