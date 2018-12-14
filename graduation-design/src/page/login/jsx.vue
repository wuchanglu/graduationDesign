
<script>
export default {
  props: {
    tagName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchName: '',
      type: 'primary'
    }
  },
  methods: {
    getText() {
      return <div>sdkjhfdks</div>
    },
    onButtonClic() {
      this.$emit('save', this.searchName)
    },
    onTagClick() {
      console.log('heheheeheh')
    }
  },
  render(h) {
    const message = h(
      this.tagName,
      {
        on: {
          click: this.onTagClick
        }
      },
      [this.message, h('el-tag', 'Hello')]
    )
    return (
      <div>
        {this.getText()}
        {message}
        <el-input v-model={this.searchName} placeholder="请输入标签名" />
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
