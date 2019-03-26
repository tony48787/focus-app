<template>
  <div id="wrapper">
    <main>
      <el-card class="box-card">
        <span class="title">
          Choose your time to focus
        </span>
        <el-time-picker
          v-model="focusTime"
          :picker-options="{
            selectableRange: '00:00:01 - 00:30:00'
          }"
          placeholder="Focus Time">
        </el-time-picker>

        <p><el-button @click="startCounting()" round plain>Start</el-button></p>
      </el-card>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'preparation-page',
    methods: {
      startCounting() {
        let focusTime = this.focusTime.getMinutes() * 60 + this.focusTime.getSeconds();
        this.$router.push({ name: 'counter-page', params: { focusTime: focusTime }});
      },
    },
    data: () => {
      return {
        focusTime: new Date(0, 0, 0, 0, 0, 3),
      };
    }
  };
</script>
