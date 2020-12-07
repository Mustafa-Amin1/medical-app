export const DepartmentCapacityChartData = {
  type: 'polarArea',
  data: {
    datasets: [
      { // one line graph
        label: 'Number of Moons',
        data: [ 10, 25, 40],
        backgroundColor: [
          'lightgreen',
          'red',
          'lightblue',
        ],
        borderColor: [
          'lightgreen',
          'red',
          'lightblue',
        ],
        borderAlign: ['center'],
        borderWidth: 2
      },
      { // another line graph
        label: 'Planet Mass (x1,000 km)',
        data: [4.8, 12.1, 72],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
        ],
        borderColor: [
          'red',
        ],
        borderWidth: 5
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 5,
    scales: {

    }
  }
}

export default DepartmentCapacityChartData;