<template>
  <div class="chart-base">
    <canvas ref="candleChart"></canvas>
  </div>
<!--  <button @click="changeSetting(chart)">보튼</button>-->
</template>

<script>
import {Chart, registerables} from 'chart.js';
import 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';
import {CandlestickController, CandlestickElement} from 'chartjs-chart-financial';

// Chart.js 등록
Chart.register(...registerables, CandlestickElement, CandlestickController);

export default {
  name: 'MMRChart',
  mounted() {
    this.renderChart();
  },
  data() {
    return {
      chart: null,
      chartConfig: {
        type: 'candlestick',
        data: {
          datasets: [{
            label: '',
            data: this.getChartData(),
            barThickness: 25, // 봉의 고정된 너비를 설정
            maxBarThickness: 15, // 봉의 최대 너비를 제한
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // 창 크기 조절 시 비율을 유지하지 않음
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'MM/dd' // 날짜 포맷을 MM/DD 형식으로 설정
                }
              },
              ticks: {
                autoSkip: false, // 자동 생략 비활성화
                maxRotation: 90,  // 라벨의 회전 각도 제한
                minRotation: 55,
              }
            },
            y: {
              beginAtZero: false
            }
          },
          plugins: {
            legend: {
              display: false // 상단의 레전드 보이기/숨기기
            },
            tooltip: {
              enabled: false, // 기본 툴팁 비활성화
              external: function (context) {
                // 1. 툴팁 엘리먼트 생성 또는 가져오기
                let tooltipEl = document.getElementById('chartjs-tooltip');
                const tooltipModel = context.tooltip;

                // 툴팁 엘리먼트가 없다면 생성
                if (!tooltipEl) {
                  tooltipEl = document.createElement('div');
                  tooltipEl.id = 'chartjs-tooltip';
                  tooltipEl.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                  tooltipEl.style.borderRadius = '3px';
                  tooltipEl.style.color = 'white';
                  tooltipEl.style.opacity = 1;
                  tooltipEl.style.pointerEvents = 'none';
                  tooltipEl.style.position = 'absolute';
                  tooltipEl.style.transform = 'translate(-50%, 0)';
                  tooltipEl.style.transition = 'opacity 0.2s ease, left 0.2s ease, top 0.2s ease';
                  tooltipEl.style.padding = '10px';
                  document.body.appendChild(tooltipEl);
                }
                // 툴팁 숨김 상태 처리
                if (tooltipModel.opacity === 0) {
                  tooltipEl.style.opacity = 0;
                  return;
                }
                tooltipEl.style.opacity = 1;

                // 2. 툴팁의 텍스트 및 데이터 설정
                const label = tooltipModel.dataPoints[0].label;
                const dataIndex = tooltipModel.dataPoints[0].dataIndex;
                const data = tooltipModel.dataPoints[0].dataset.data[dataIndex];
                const parts = label.split(", ");
                const dateString = parts[0] + " " + parts[1];
                const date = new Date(dateString);
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const difference = data['c'] - data['o'];
                const formattedDate = `${month}/${day} <span style="font-size: 20px; font-weight: bolder; color: ${difference >= 0 ? 'green' : 'red'};">${difference}</span>`;

                tooltipEl.innerHTML = `
                  <div style="font-size: 16px; font-weight: normal; line-height: 1.5rem;">${formattedDate}</div>
                  <div style="font-size: 14px;">기점: ${data.o}</div>
                  <div style="font-size: 14px;">고점: ${data.h}</div>
                  <div style="font-size: 14px;">저점: ${data.l}</div>
                  <div style="font-size: 14px;">종점: ${data.c}</div>
                  </>
                `;

                // 3. 툴팁의 위치 설정
                const position = context.chart.canvas.getBoundingClientRect();
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
              }
            }
          },
          backgroundColors: {
            up: 'rgba(75, 192, 192, 0.5)',
            down: 'rgba(255, 99, 132, 0.5)',
            unchanged: 'rgba(201, 203, 207, 0.5)',
          },
          borderColors: {
            up: 'rgb(75, 192, 192)',
            down: 'rgb(255, 99, 132)',
            unchanged: 'rgb(201, 203, 207)',
          }
        }
      }
    }
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.candleChart.getContext('2d');
      this.chart = new Chart(ctx, this.chartConfig);
    },
    getChartData() {
      return this.generateRandomData();
    },
    generateRandomData(initial = 9000, count = 10, changeRange = 4000) {
      let o = initial,
          h,
          l,
          c,
          x = new Date("2024-08-24").getTime();
      return [...Array(count)].map((_, i) => {
        o = c || o;
        h = o + this.randomChange(changeRange) / 2;
        l = o - this.randomChange(changeRange) / 2;
        c = o + (this.randomChange(changeRange) - changeRange / 2);
        x += 24 * 60 * 60 * 1000;
        return {
          o,
          h,
          l,
          c,
          x,
        };
      });
    },
    randomChange(range = 1000) {
      return Math.round(Math.random() * range);
    },
  }
};
</script>

<style scoped>
.chart-base {
  width: 100%;
}
canvas {
  width: 100%;
  max-width: 100%;
}
</style>