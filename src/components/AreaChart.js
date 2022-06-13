import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const colors = {
    green: "rgb(123, 191, 54, 0.7)",
    transparant4: "rgb(123, 191, 54, 0.4)",
    transparant0: "rgb(123, 191, 54, 0)",
};

let gradient;
function getGradient(ctx, chartArea) {
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(1, colors.green);
    gradient.addColorStop(0.7, colors.transparant4);
    gradient.addColorStop(0, colors.transparant0);

    return gradient;
}

const AreaChart = ({ data }) => {
    let label_list = [], invoice_amount_list = [];
    data.forEach(element => {
        label_list.push("Week " + element.id);
        invoice_amount_list.push(element.invoice_amount);
    });

    const dataset = {
        labels: label_list,
        datasets: [
            {
                label: "Invoice amount",
                data: invoice_amount_list,
                fill: 'start',
                lineTension: 0.4,
                borderColor: "rgb(123, 191, 54)",
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return;
                    return getGradient(ctx, chartArea);
                },
                pointStyle: "",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    };

    return (
        <>
            <div className="mx-auto italic">Weekly invoice amount</div>
            <Line data={dataset} options={options} />
        </>
    )
}

export default AreaChart