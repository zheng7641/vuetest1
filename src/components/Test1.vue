<template>
  <div>
    aaa{{ deliverParentAge }}
  </div>
</template>

<script>
export default {
  name: 'Test1',

  props: {
    deliverParentAge: Number
  }
}
</script>
