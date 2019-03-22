<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue" width="200">
    <main>
      <div class="left-side">
        <span class="title">
          Preparation
        </span>
        <router-link :to="{ name: 'counter-page', params: { focusTime: 5 }}">Go to Counter</router-link>
      </div>
    </main>
  </div>
</template>

<script>

  export default {
    name: 'preparation-page',
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>
