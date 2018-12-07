<template>
  <div>登录页
    <xxx></xxx>
  </div>
</template>

<script>
import jsx from './jsx'
export default {
  components: {
    xxx: jsx
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style>
</style>
