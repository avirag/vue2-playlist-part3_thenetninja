<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Your Vue file'
    }
  },
  methods: {
    greeting() {
      return 'Welcome on board!'
    }
  }
}
</script>

<style>

</style>
