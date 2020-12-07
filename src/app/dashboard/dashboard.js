import Chart from 'chart.js';
import patientsChartData from './charts/patientsChart-data.js';
import patientsAgeChartData from './charts/patientsAgeChart-data.js';
import DepartmentCapacityChartData from './charts/DepartmentCapacity-data.js';
import patientsGenderChartData from './charts/DepartmentCapacity-data.js';


export default {

    name: 'dashboard',
    data() {
        return {
            patientsChartData: patientsChartData,
            patientsAgeChartData: patientsAgeChartData,
            DepartmentCapacityChartData: DepartmentCapacityChartData,
            patientsGenderChartData: patientsGenderChartData,
            
        }

    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
           return myChart
        }
    },
    components: {
        
      },
    mounted() {
        this.createChart('patients-chart', this.patientsChartData);
        this.createChart('patientsAge-chart', this.patientsAgeChartData);
        this.createChart('DepartmentCapacity-chart', this.DepartmentCapacityChartData);
        this.createChart('patientsGender-chart', this.patientsGenderChartData);
      }
}
