import {Line} from 'react-chartjs-3';

export default function MainChart() {
    const data = {
        labels: ['5 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov', "5 Dec", "10 Dec", "15 Dec"],
        datasets: [{
            label: 'Effectiveness Score',
            data: [0.003, 0.03, 0.04, 0.04, 0.06, 0.03, 0.03, 0.05, 0.06],
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
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks:{
                    fontColor: "white",
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks:{
                    fontColor: "white",
                    callback: function(value, index, ticks) {
                        return '$ ' + value;
                    }
                }
            }]
        },
        plugins: {legend: {display: false},},
        elements: {
            point: {
                radius: 0
            }
        }
    }
    return (
        <div className="col-md-12 mb-4">
            <div className="card">
                <div className="card-body">
                    <div>
                        <span className="heading">MOOLA / USDT</span>
                        &nbsp;
                        <span className="heading-2">+0.52%</span>
                    </div>
                </div>
                <div>
                    <Line height={250} width={0} data={data} options={options} legend={false}/>
                </div>
                <br/>
            </div>
        </div>
    )
}