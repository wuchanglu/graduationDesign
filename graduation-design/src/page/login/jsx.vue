
<script>
export default {
  data() {
    return {
      searchName: 'aaaa',
      type: 'primary'
    }
  },
  methods: {
    getText() {
      return <div>sdkjhfdks</div>
    },
    onButtonClic() {
      console.log(this.searchName)
    }
  },
  render(h) {
    return (
      <div>
        {this.getText()}
        <el-input v-model={this.searchName} />
        <el-button type={this.type} on-click={e => this.onButtonClic()}>
          主要按钮
        </el-button>
      </div>
    )
  }
}
</script>

<style>
</style>
