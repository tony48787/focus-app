<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue" width="200">
    <main>
      <div>
        <span class="title">
          Summary
        </span>
        <router-link to="/preparation">Go to Preparation</router-link>
      </div>

      <div>
        <p> Your total focusTime is {{ totalFocusTime }} seconds</p>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'congrats-page',
    components: { },
    methods: {
      classifyDistraction() {
        //DB connection
        this.$router.push({ name: 'congrats-page', params: { totalFocusTime: 100 }})
      },
    },
    props: ['totalFocusTime'],
    data: () => {
      return {
      };
    },
  };
</script>

