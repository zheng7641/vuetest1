<template>
  <div>
    Test111111111 {{ a }}{{ this.$route.query.title }}
  </div>
</template>

<script>
export default {
  name: 'Test1',
  data () {
    return {
      a: 'a'
    }
  }
}
</script>
