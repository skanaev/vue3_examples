<template>
<div class="wrapper">
  <slot name="header"></slot>
  <slot v-bind:user="user"> Error, User Info: {{user.name}}, возраст {{user.age}} </slot>
</div>
</template>

<script>
export default {
  name: 'MessageBox',
  components: {},
  data () {
    return {
      user: {
        name: 'Ivan',
        age: 28
      }
    }
  }
}
</script>

<style scoped>
  .wrapper {
    border: 3px solid red;
  }
</style>