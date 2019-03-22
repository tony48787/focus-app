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

      <div v-for="(seconds, appName, index) in focusAppObj" :key="index">
        <p>{{ appName }} : {{ seconds }} seconds<input type="checkbox"/></p>
      </div>
      <button @click="classifyDistraction()">Submit</button>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'summary-page',
    components: { },
    methods: {
      classifyDistraction() {
        //DB connection
        this.$router.push({ name: 'congrats-page', params: { totalFocusTime: 100 }})
      },
    },
    props: ['focusAppObj'],
    data: () => {
      return {
      };
    },
  };
</script>

