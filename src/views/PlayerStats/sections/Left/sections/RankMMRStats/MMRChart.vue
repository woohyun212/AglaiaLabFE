<template>
  <div class="chart-base">
    <Line :data="data" :options="options"/>
  </div>
  <button @click="refreshData">클릭</button>
</template>

<script>
import ButtonWrapper from "@/views/PlayerStats/sections/ButtonWrapper.vue";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import {Line} from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


export default {
  name: 'MMRChart',
  components: {ButtonWrapper, Line},
  data() {
    return {
      data: {
        labels: ['08/06', '08/07', '08/08', '08/09', '08/10', '08/11', '08/12'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [6799, 6249, 6394, 6460, 6639, 6780, 6890]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  }
}
</script>
<style scoped>
.chart-base {
  aspect-ratio: 1.23;
}
</style>