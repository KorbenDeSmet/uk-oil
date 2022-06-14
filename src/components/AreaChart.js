import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from "moment";

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
        // label_list.push("Week " + element.id);
        label_list.push(moment(element.invoice_date).format("MMMM Do"));
        invoice_amount_list.push(element.invoice_amount);
    });

    let profit_list = invoice_amount_list.map(x => Math.ceil((x / 6.25) * 2.75));

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
            {
                label: "Profit amount",
                data: profit_list,
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
            legend: { display: false }
        },
        interaction: { intersect: false }
    };

    return (
        <>
            <Line data={dataset} options={options} />
        </>
    )
}

export default AreaChart