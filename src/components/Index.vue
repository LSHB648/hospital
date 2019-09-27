<template>
  <div class="Index">
    <h1>这是子组件</h1>
    <li v-for="item in parentmsg" :key="item.id">
        {{item.text}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['parentmsg'],
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
