<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view />
    <h1>头条</h1>
    <div>
      <i class="toutiao toutiao-shipin"></i>
    </div>
    <!-- 滑动单元格 -->
    <van-swipe-cell>
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell :border="false" title="滑动我试试看" value="内容" />
      <template #right>
        <van-button square type="danger" text="删除" />
        <van-button square type="primary" text="收藏" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  created () {},
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped></style>
