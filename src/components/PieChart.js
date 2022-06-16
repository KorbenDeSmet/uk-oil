import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from 'react-chartjs-2';

function currencyFormat(num) {
    return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const PieChart = ({ data }) => {
    let temp = [0, 1];
    data.forEach(el => { temp[0] += el.invoice_amount });
    temp[1] = Math.ceil((temp[0] / 6.25) * 2.75);

    const edited_data = {
        labels: ['Mary', 'Tommy'],
        datasets: [
            {
                data: temp,
                backgroundColor: [
                    'rgba(169,169,169, 0.2)',
                    'rgba(123, 191, 54, 0.2)',
                ],
                borderColor: [
                    'rgba(169,169,169)',
                    'rgb(123, 191, 54)',
                ],
            },
        ],
    };

    return (
        <>
            <div className="md:text-xl lg:min-w-max">
                <div className="italic">Total revenue: </div>
                <div className="italic mb-3">{currencyFormat(temp[0] + temp[1])}</div>
            </div>
            <Pie className="lg:max-h-52 lg:mr-20" data={edited_data} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </>
    )
}

export default PieChart