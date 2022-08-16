import {Line} from 'react-chartjs-3';

export default function MainChart(){
    const data = {
        labels: ["", '5 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov', "5 Dec", "10 Dec", "15 Dec"],
        datasets: [{
            label: 'Effectiveness Score',
            data: [5, 6, 7, 14, 9, 10, 11, 18, 20, 22, 22, 23],
            backgroundColor: [
                "rgba(58, 63, 95, 1)"
            ],
            fill: true,
            borderColor: [
                '#30FF6F'
            ],
            borderWidth: 3,
            lineTension: 0.3,
        }]
    }
    const options = {
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
                ticks:{
                    color: "black",
                },
                grid: {
                    display: false,
                    drawBorder: false,
                    color: "black",
                }
            }
        },
        plugins: {legend: {display: false},},
        elements: {
            point:{
                radius: 0
            }
        }
    }
    return(
        <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <div>
                        <span className="heading">MOOLA / USDT</span>
                        &nbsp;
                        <span className="heading-2">+0.52%</span>
                    </div>
                </div>
                <Line height={170} width={0} data={data} options={options} />
                <br />
            </div>
        </div>
    )
}