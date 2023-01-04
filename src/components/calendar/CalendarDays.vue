<script>
export default {
  props: {
    date: Date
  },
  methods: {
    getFirstDayOfWeekOfMonth(date) {
        let newDate = new Date(date);
        newDate.setDate(1);
        return newDate.getDay();
    }, 
    getLastDayOfMonth(date) {
        const month = date.getMonth();
        const year = date.getFullYear();

        return new Date(year, month+1, 0).getDate();
    },
    isToday(n) {
        return this.date.getDate() === n;
    },
    createDays() {
        const firstWeekDayOfMonth = this.getFirstDayOfWeekOfMonth(this.date);
        let days = this.getLastDayOfMonth(this.date);
        let count = 1;
        let retVal = [];
        retVal = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        for(let i=0; i < days;i++) {
            if (i >= firstWeekDayOfMonth) {
                retVal.push(count++);
            } else {
                retVal.push(" ");
                days++;
            }
        }
        while(retVal.length % 7 !== 0) {
            retVal.push("?");
        }
        return retVal;
    }
  },
}
</script>

<style scoped>
.week {
    width: 100%;
    background-color:blue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 800px;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.day {
    border: 2px black solid;
    margin: 5px;
    background-color: blueviolet;
    min-width: 100px;
    height: 50px;
    color: yellow;
}
.active {
  background-color: rgb(54, 48, 181, .8);
  color: white;
  font-weight: bold;
}
</style>

<template>   
    <div class="week">
        <div class="day" :class="{active: (isToday(n))}" v-for="n in createDays()">
            {{ n }}
        </div>
    </div>
</template>