<template>
<div>

</div>
</template>

<script>
export default {
  name: "login-phone",
  data () {
return {
  phone: '+998',
  isPhone: false
}
  },
  methods: {
    onSubmit() {
        this.$emit('isPhone', this.phone)
    }
  }
}
</script>

<style scoped>

</style>
