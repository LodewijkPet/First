chart_it()

async function get_data(){
    const xs = []
    const ys = []
    const response = await fetch('../csvfiles/ZonAnn.Ts+dSST.csv')
    const data = await response.text()
    const table = data.split('\n').splice(1)
    table.forEach(row =>{
        const colums = row.split(',')
        const year = colums[0]
        xs.push(year)
        const temp = parseFloat(colums[1]) + 14
        ys.push(temp)
    })
    return {xs, ys}
}

async function chart_it(){
    const data = await get_data()
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'global temp',
                data: data.ys,
                fill: true,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
    //                'rgba(54, 162, 235, 0.2)',
    //                'rgba(255, 206, 86, 0.2)',
    //                'rgba(75, 192, 192, 0.2)',
    //                'rgba(153, 102, 255, 0.2)',
    //                'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
    //                'rgba(54, 162, 235, 1)',
    //                'rgba(255, 206, 86, 1)',
    //                'rgba(75, 192, 192, 1)',
    //                'rgba(153, 102, 255, 1)',
    //                'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value, index, values){
                            return value+'\xB0C'
                        }
                    }
                }
            }
        }
    });
}