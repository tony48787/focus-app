<template>
  <div id="wrapper">
    <main>
      <div>
        <p> Your total focusTime is {{ totalFocusTime }} seconds</p>
        <p><el-button @click="backToMain()" round plain>Got It!</el-button></p>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'congrats-page',
    components: { },
    methods: {
      backToMain() {
        this.$router.push({ name: 'preparation-page'})
      }
    },
    props: ['totalFocusTime'],
    data: () => {
      return {
      };
    },
  };
</script>

