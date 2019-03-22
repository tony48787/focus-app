<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue" width="200">
    <main>
      <div>
        <span class="title">
          Counter {{remainingTime}}
        </span>
        <button @click="startCounting()">Start</button>
        <button @click="stopCounting()">Stop</button>
      </div>
    </main>
  </div>
</template>

<script>
  const monitorActiveWin = require('@/helpers/monitorActiveWin');

  export default {
    name: 'counter-page',
    components: { },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
      startCounting() {
        function onActiveWinUpdated(window) {
          if ( this.currentFocusAppName == "") {
            this.currentFocusAppName = window.app;
          }

          try {
            if (this.currentFocusAppName in this.focusAppObj) {
              this.focusAppObj[this.currentFocusAppName] += 1;
            } else {
              this.focusAppObj[this.currentFocusAppName] = 1;
            }
          } catch (err) {
            // as
          }

          this.currentFocusAppName = window.app;

          this.remainingTime = this.remainingTime - 1;
          if (this.remainingTime <= 0) {
            this.stopCounting();
          }
        }
        this.remainingTime = this.focusTime;
        monitorActiveWin.start(onActiveWinUpdated.bind(this), -1, 1);
      },
      stopCounting() {
        monitorActiveWin.stop();
        this.$router.push({ name: 'summary-page', params: { focusAppObj: this.focusAppObj }})
      }
    },
    props: ['focusTime'],
    data: () => {
      return {
        remainingTime: 0,
        focusAppObj: {},
        currentFocusAppName: "",
      };
    },
  };
</script>
