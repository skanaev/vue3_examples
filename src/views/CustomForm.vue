<template>
<div>
  <h1> {{title}} </h1>
  <input v-model="todoText" placeholder="type new todo" size="lg" class="container sm" @keydown.enter="addNewTodo" />
  <button type="button" class="btn btn-primary customButton" @click="addNewTodo"> Add todo </button>
</div>
</template>

<script>
export default {
  name: 'CustomForm',
  components: {},
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    addNewTodo () {
      this.$emit('addTodo', this.todoText)
    },
  },
  props: {
    title: {String, required: true}
  }
}
</script>

<style scoped>
  .customButton {
    margin-top: 20px;
  }
</style>