<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/meetup">Frontend Meetup</router-link> |
    <router-link to="/compositionApi">Демонстрация Composition Api</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
