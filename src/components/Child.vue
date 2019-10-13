<template>
  <div>
    <p>
      Parent says: {{message}}
    </p>
    <div>
      <label>
        Callback:
        <input
          type="text"
          @input="onChange(reply)"
          v-model="reply">
      </label>
    </div>
    <div>
      <label>
        Event:
        <input
          type="text"
          @input="$emit('input-change',reply2)"
          v-model="reply2">
      </label>
    </div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
  export default {
    props: {
      message: String,
      onChange: Function,
    },
    data() {
      return {
        reply: '',
        reply2: '',
      }
    },
    methods: {
      login() {
        //Perform log-in
        this.$store.dispatch('login',this.reply)
      },
      logout() {
        //Perform log-out
        this.$store.dispatch('logout')
      },
    }
  }
</script>

<style scoped>

</style>