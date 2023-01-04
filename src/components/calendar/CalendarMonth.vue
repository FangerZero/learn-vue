<script>

export default {
  props: {
    date: Date
  },
  methods: {
    getMonthName(month) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month || new Date().getMonth()];
    },
    clickMonth() {
      console.log('sleepy');
    }
  }
}
</script>

<style scoped>
.month {
  font-weight: 800;
  font-size: x-large;
}
</style>

<template>
  <div @click="$emit('subtractMonth')">
    Left
  </div>
    <div class="month" @click="clickMonth">{{getMonthName(date.getMonth())}} - {{ date.getFullYear() }}</div>
    
  <div @click="$emit('addMonth')">
      Right
    </div>
</template>