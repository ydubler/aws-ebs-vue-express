<template>
  <div id="app" class="example">
    <div>{{ msg }} {{ Math.random() }}</div>
    <br/>
    <div class="drp">
      <date-range-picker
        v-model="dateRange"
        :ranges="ranges"
        :auto-apply="autoapply"
        opens="inline"
      ></date-range-picker>
    </div>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  data () {
    return {
        name: 'app',
        msg: 'Hello world!!!!',
        dateRange: {
          startDate: '2019-12-26',
          endDate: '2022-12-28',
        },
        ranges:false,
        autoapply:true,

    }
  },
  components: {
    DateRangePicker
  },
  methods: {
      dateFormat (classes, date) {
        if (!classes.disabled) {
          classes.disabled = date.getTime() > new Date()
        }
        return classes
      }
  }
}
</script>

<style>
.example {
  color: black;
}
.drp{
width:100%;
text-align: center;
}
</style>