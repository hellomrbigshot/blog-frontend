<template>
  <div>
    <Row :gutter="10">
      <Col
        :xs="24"
        :sm="12"
        :md="8"
      >
      <router-link :to="{name: 'userList'}">
        <info-card
          info-text="用户数"
          id-name="user_num"
          color="#2d8cf0"
          icon-type="ios-people"
          :end-val="count.userNum"
        />
      </router-link>
      </Col>
      <Col
        :xs="24"
        :sm="12"
        :md="8"
      >
      <router-link :to="{name: 'pageList'}">
        <info-card
          info-text="文章数"
          id-name="page_num"
          color="#64d572"
          icon-type="document-text"
          :end-val="count.pageNum"
        />
      </router-link>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  components: {
    infoCard: () => import('../components/infoCard')
  },
  data () {
    return {
      count: {
        userNum: 0,
        pageNum: 0,
        tagNum: 0
      }
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      this.Common.axios('/api/statistics').then(res => {
        this.count = res.data.data
      })
    }
  }
}
</script>
