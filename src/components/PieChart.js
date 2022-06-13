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
            <div className="mx-auto text-sm italic mb-1.5">Total: {currencyFormat(temp[0] + temp[1])}</div>
            <Pie data={edited_data} options={{ plugins: { legend: { display: false } } }} />
        </>
    )
}

export default PieChart