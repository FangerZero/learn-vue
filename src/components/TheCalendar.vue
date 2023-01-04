<script>
import CalendarMonth from './calendar/CalendarMonth.vue';
import CalendarDays from './calendar/CalendarDays.vue';

export default {
  data() {
    return {
      calendarDate: new Date()
    }
  },
  methods: {
    onAddMonth() {
      this.calendarDate.setMonth(this.calendarDate.getMonth()+1)
      console.log('Month added', this.calendarDate);
    }, 
    onSubtractMonth() {
      this.calendarDate.setMonth(this.calendarDate.getMonth()-1)
      console.log('Month subtracted', this.calendarDate);
    }
  },
  components: {
    CalendarMonth,
    CalendarDays
  }
}
</script>

<style scoped>
.calendar {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="calendar">
    <CalendarMonth :date="calendarDate" @addMonth="onAddMonth" @subtractMonth="onSubtractMonth"/>
    <CalendarDays :date="calendarDate" />
  </div>
</template>
