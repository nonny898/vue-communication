<template>
  <div>
    <p>Current Log-in: {{currentUser}}</p>
    <label>
      <input type="text" v-model="message">
    </label>
    <p>Reply from child: {{reply}}</p>
    <p>Reply from child using events: {{reply2}}</p>
    <child
      @input-change="(payload) => {
      this.reply2 = payload
      }"
      :message="message"
      :onChange="handleChange"/>
  </div>
</template>

<script>
  export default {
    name: "Parent",
    components: {
      Child: () => import('./Child.vue')
    },
    data() {
      return {
        message: '',
        reply: '',
        reply2: '',
      }
    },
    methods: {
      //Child to parent call-back method
      handleChange(reply) {
        this.reply = reply
      }
    },
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      }
    }
  }
</script>

<style scoped>

</style>