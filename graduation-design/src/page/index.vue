<template>
  <div>
    <el-button type="primary" v-for="item in buttonList"
      :key="item.id"
      @click="onLinkButtonClick(item)">
      {{item.buttonText}}
    </el-button>
    <div style="height:500px;width:600px;">
      <i-echarts :option="statistics.echartsOption"
        :loading="statistics.isLoading"
        :resizable="true">
      </i-echarts>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonList: [
        {
          id: 0,
          linkName: 'entry',
          buttonText: '指标记录'
        },
        {
          id: 1,
          linkName: 'login',
          buttonText: '登录'
        },
        {
          id: 2,
          linkName: 'relativessList',
          buttonText: '亲友列表'
        },
        {
          id: 3,
          linkName: 'personHealth',
          buttonText: '个人健康'
        },
        {
          id: 4,
          linkName: 'registe',
          buttonText: '注册'
        },
        {
          id: 5,
          linkName: 'resetMessage',
          buttonText: '修改个人信息'
        },
        {
          id: 6,
          linkName: 'resetPassword',
          buttonText: '修改密码'
        }
      ],
      statistics: {
        echartsOption: {
          title: {
            text: '基础雷达图'
          },
          tooltip: {},
          legend: {
            data: [
              '预算分配（Allocated Budget）',
              '实际开销（Actual Spending）'
            ]
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '销售（sales）', max: 6500 },
              { name: '管理（Administration）', max: 16000 },
              { name: '信息技术（Information Techology）', max: 30000 },
              { name: '客服（Customer Support）', max: 38000 },
              { name: '研发（Development）', max: 52000 },
              { name: '市场（Marketing）', max: 25000 }
            ]
          },
          series: [
            {
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              // areaStyle: {normal: {}},
              data: [
                {
                  value: [4300, 10000, 28000, 35000, 50000, 19000],
                  name: '预算分配（Allocated Budget）',
                  areaStyle: {
                    normal: {
                      opacity: 0.5
                    }
                  }
                },
                {
                  value: [5000, 14000, 28000, 31000, 42000, 21000],
                  name: '实际开销（Actual Spending）',
                  areaStyle: {
                    normal: {
                      opacity: 0.8
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  methods: {
    onLinkButtonClick(item) {
      // this.$router.push({
      //   name: item.linkName
      // })
      this.$router.push({
        name: item.linkName,
        params: {
          message: '我是参数'
        }
      })
    }
  },
  created() {
    this.$api
      .post('api/area', {
        NAMEEN: 'hangzhou'
      })
      .then(res => {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      })
  }
}
</script>

<style>
</style>
