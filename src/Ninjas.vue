<template>
  <ul>
    <li v-for="ninja in ninjas" v-bind:key="ninja">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
