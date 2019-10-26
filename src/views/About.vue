<template>
  <div class="about">
    <h1>当前主题颜色是：{{themeColor}}</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'themeColor'
    ])
  }
}
</script>
