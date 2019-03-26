<template>
  <div id="wrapper">
    <main>

      <el-card shadow="hover" header="Summary">
        <el-row v-for="(activityObj, appName, index) in focusAppObj" :key="index">
          <el-col>
            
              <h3>App Name: {{ appName }}</h3>
              <h5>Time Used: {{ activityObj.focusTime }} seconds</h5>
              <el-checkbox v-model="activityObj.isDistraction" :value="false" border label="Distraction"></el-checkbox>
              
          </el-col>
        </el-row>
      </el-card>
      
       <p><el-button @click="classifyDistraction()" round plain>Submit</el-button></p>
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
        let totalFocusTime = 0;

        for (let appName in this.focusAppObj) {
          if (this.focusAppObj.hasOwnProperty(appName)) {
            let activityObj = this.focusAppObj[appName];
            console.log(activityObj.isDistraction);
            if (!activityObj.isDistraction) {
              totalFocusTime += activityObj.focusTime;
            }
          }
        }

        this.$router.push({ name: 'congrats-page', params: { totalFocusTime }})
      },
    },
    props: ['focusAppObj'],
    data: () => {
      return {
      };
    },
  };
</script>

