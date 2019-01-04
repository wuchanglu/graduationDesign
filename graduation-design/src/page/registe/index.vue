<template>
  <div>
    <el-input v-model="accuntNum"
      placeholder="请输入账号"></el-input>
    <el-input v-model="userid"
      placeholder="请输入学号"></el-input>
    <el-input v-model="password"
      type="password"
      placeholder="请输入密码"></el-input>
    <el-input v-model="validateNum"
      type="password"
      placeholder="请再次输入密码"></el-input>
    <el-button type="primary"
      @click="onSubmitButtonClick">提交</el-button>
    <el-button type=""
      @click="onResetButtonClick">重置</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accuntNum: '',
      password: '',
      userid: '',
      validateNum: ''
    }
  },
  computed: {
    isValidate() {
      return Boolean(this.password === this.validateNum)
    }
  },
  methods: {
    onSubmitButtonClick() {
      if (this.isValidate) {
        this.$api
          .post('/users/registe', {
            accuntNum: this.accuntNum,
            password: this.password,
            userid: this.userid
          })
          .then(data => {
            if (data.state === 500) {
              this.$message({ message: data.data, type: 'warning' })
            } else {
              this.$router.push({ name: 'login', params: { userId: 123 } })
            }
          })
      } else {
        this.$message({
          message: '两次输入的密码不一致',
          type: 'erro'
        })
      }
    },
    onResetButtonClick() {
      this.accuntNum = ''
      this.password = ''
      this.userid = ''
    }
  }
}
</script>

<style>
</style>
