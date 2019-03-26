<template>
  <div id="wrapper">
     <el-card shadow="always">
      <el-row>
        <el-col  :offset="6" :span="12">
          <el-progress type="circle" :percentage="progress" :status="statusText" :show-text="statusText != 'text'"></el-progress>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  const monitorActiveWin = require('@/helpers/monitorActiveWin');

  export default {
    name: 'counter-page',
    components: { },
    methods: {
      startCounting() {
        function onActiveWinUpdated(window) {
          if ( this.currentFocusAppName == "") {
            this.currentFocusAppName = window.app;
          }

          try {
            if (this.currentFocusAppName in this.focusAppObj) {
              this.focusAppObj[this.currentFocusAppName]["focusTime"] += 1;
            } else {
              this.focusAppObj[this.currentFocusAppName] = {
                focusTime: 1
              };
            }
          } catch (err) {
            // as
          }

          this.currentFocusAppName = window.app;

          this.remainingTime = this.remainingTime - 1;
          this.progress = (this.focusTime - this.remainingTime) / this.focusTime * 100;
          if (this.remainingTime <= 0) {
            this.stopCounting();
          }
        }
        this.remainingTime = this.focusTime;
        monitorActiveWin.start(onActiveWinUpdated.bind(this), -1, 1);
      },
      stopCounting() {
        monitorActiveWin.stop();
        this.statusText = "success";

        setTimeout(() => {
          this.$router.push({ name: 'summary-page', params: { focusAppObj: this.focusAppObj }});
        }, 3000);
        
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.startCounting();
      })
    },
    props: ['focusTime'],
    data: () => {
      return {
        remainingTime: 0,
        focusAppObj: {},
        currentFocusAppName: "",
        progress: 0,
        statusText: "text",
      };
    },
  };
</script>
