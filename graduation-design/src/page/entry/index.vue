<template>
  <div>
    <div class="container">
      <div class="header">HEADER</div>
      <div class="menu">MENU</div>
      <div class="content">CONTENT</div>
      <div class="footer">FOOTER</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50px 350px 50px;
  grid-template-areas:
    'h h h h h h h h h h h h'
    'm m c c c c c c c c c c'
    'f f f f f f f f f f f f';
}
.header {
  grid-area: h;
  background-color: aquamarine;
}
.menu {
  grid-area: m;
  background-color: bisque;
}
.content {
  grid-area: c;
  background-color: aqua;
}
.footer {
  grid-area: f;
  background-color: coral;
}
@media screen and (max-width: 640px) {
  .container {
    grid-template-areas:
      'm m m m m m h h h h h h'
      'c c c c c c c c c c c c'
      'f f f f f f f f f f f f';
  }
}
</style>
