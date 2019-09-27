<template>
  <div class="NavBar">
    <h1>这是父组件</h1>
    <Index v-bind:parentmsg="groceryList"></Index>
  </div>
</template>

<script>
import Index from './Index.vue';
export default {
  name: 'NavBar',
  components: {
      Index: Index
  },
  data () {
    return {
      groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
    }
  },
  methods: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
