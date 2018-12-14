<template>
  <div class="page"
    :style="{height:height+'px'}">
    <div class="page__content">
      <div class="content__header">
        <h1 class="header__text">登录</h1>
        <i class="el-icon-close header__icon"></i>
      </div>
      <div class="content__form">
        <el-form :model="loginData"
          label-width="100px"
          class="demo-ruleForm">
          <el-form-item label="账号"
            prop="accuntNum"
            :rules="[
            { required: true, message: '账号不能为空'}
          ]">
            <el-input type="accuntNum"
              v-model.number="loginData.accuntNum"
              autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码"
            prop="password"
            :rules="[
              { required: true, message: '密码不能为空'}
            ]">
            <el-input type="password"
              v-model="loginData.password"
              autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
              @click="submitButtonClick">提交</el-button>
            <el-button @click="registButtonClick">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        accuntNum: '',
        password: ''
      },
      height: 0
    }
  },
  methods: {
    submitButtonClick() {
      if (this.loginData.accuntNum && this.loginData.password) {
        this.$api.post('users/login', this.loginData).then(res => {
          if (res.data.userid) {
            sessionStorage.setItem(
              'userInfo',
              JSON.stringify(
                Object.assign(this.loginData, { userid: res.data.userid })
              )
            )
            this.$message({
              type: 'success',
              message: '登录成功'
            })
          } else {
            this.$message({
              type: 'error',
              message: '账号密码错误'
            })
          }
        })
      } else {
        this.$message({
          type: 'warn',
          message: '请输入账号密码'
        })
      }
    },
    registButtonClick() {
      console.log()
    }
  },
  created() {
    this.height = document.documentElement.clientHeight
    window.addEventListener('resize', () => {
      // 变化后需要做的事
      this.height = document.documentElement.clientHeight
      console.log(this.height)
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  background: #f5f5f5;
  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 500px;
    height: 415px;
    box-shadow: 0 0 0 3px rgba(137, 178, 190, 0.25);
    .content {
      &__header {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        background: #409eff;
        .header {
          &__text {
            color: #fff;
            margin: 0 23px;
          }
          &__icon {
            margin: auto 0;
            cursor: pointer;
            line-height: 100%;
            padding-right: 10px;
            font-size: 20px;
            color: #fff;
          }
        }
      }
      &__form {
        margin: 60px 40px 0 0;
      }
    }
  }
}
</style>
