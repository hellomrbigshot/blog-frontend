<template>
  <div>
    <div class="topic">
      <h1>草稿箱</h1>
    </div>
    <ul class="draft-ul">
      <li
        v-for="(draft, index) in draft_list"
        :key="index"
        class="draft-li"
      >
        <Row>
          <Col
            :xs="24"
            :sm="24"
            :md="18"
          >
            <router-link :to="{name: 'PageEdit', params: {id: draft._id}}">
              <div class="draft-title">{{ draft.title }}</div>
            </router-link>
          </Col>
          <Col
            :xs="24"
            :sm="24"
            :md="6"
          >
            <div class="create-time">更新于 <time>{{ draft.update_time.substring(0,10) }}</time></div>
          </Col>
        </Row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      draft_list: [],
      total: 0,
      pageSize: 999,
      page: 1
    }
  },
  mounted () {
    this.Common.axios('/api/page/limitpagelist',
      {
        type: 'creator',
        content: this.Cookies.get('user'),
        status: 'draft',
        page: this.page,
        pageSize: this.pageSize
      }
    ).then(res => {
      this.draft_list = res.data.data.result
      this.total = res.data.data.total
    })
  }
}
</script>
<style lang="scss" scoped>
.topic {
  h1 {
    font-weight: 400;
    font-size: 20px;
  }
  padding-bottom: 30px;
}
.topic,
.draft-li {
  border-bottom: 1px solid #e9eaec;
}
.draft-ul {
  list-style: none;
  .draft-li {
    padding: 10px 0;
    .draft-title {
      padding-right: 20px;
      font-weight: 400;
      font-size: 14px;
      width: auto;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #000;
      &:hover {
        text-decoration: underline;
      }
    }
    .create-time {
      padding: 0 10px;
      color: #999;
    }
  }
}
</style>
