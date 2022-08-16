import {Line} from 'react-chartjs-3';

export default function SMS_Card(){
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ".."],
        datasets: [{
            label: 'Effectiveness Score',
            data: [3, 4.9, 5, 4, 5.5, 2.3, 2.3],
            borderColor: [
                '#F47169'
            ],
            borderWidth: 3,
            lineTension: 0.3,
            scales: {
                y: {
                    display: false,
                    beginAtZero: true,
                    grid: {
                        drawBorder: false,
                        display: false
                    }
                },
                x: {
                    display: false,
                    grid: {
                        display: false,
                        drawBorder: false,
                    }
                }
            },
        }]
    };

    return(
        <div className="card mt-4 card-onset">
            <div className="card-body mb-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                    <span className="heading">SMS/MMS</span>
                    <span className="heading-2">-2.43%</span>
                </div>
            </div>
            <Line data={data} height={120} options={{
                scales: {
                    y: {
                        display: false,
                        beginAtZero: true,
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    x: {
                        display: false,
                        grid: {
                            display: false,
                            drawBorder: false,
                        }
                    }
                },
                plugins: {legend: {display: false},},
                elements: {
                    point:{
                        radius: 0
                    }
                }
            }} legend={false}/>
        </div>
    )
}