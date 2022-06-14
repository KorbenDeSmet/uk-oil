import data from "./../data/data.json"
import Header from "./../components/Header"
import AreaChart from "./../components/AreaChart"
import PieChart from "./../components/PieChart"
import Footer from "./../components/Footer"

// Primary color: #7bbf36
function currencyFormat(num) {
  return '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function gallonsFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function App() {
  let total = 0;
  data.forEach(el => {
    total += el.invoice_amount;
  })

  return (
    <div className="flex flex-col min-h-screen bg-neutral-800 text-white ">
      <div className="flex-grow ">
        <Header data={data} />
        <div className="flex h-48 p-7 justify-between">
          <div className="flex flex-col w-[30%] p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic">Last invoice amount.</div>
            <div className="flex-grow" />
            <div className="ml-auto text-2xl">{currencyFormat(data[data.length - 1].invoice_amount)}</div>
          </div>
          <div className="flex flex-col w-[30%] shrink-0 p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic">Gallons sold last week.</div>
            <div className="flex-grow" />
            <div className="ml-auto text-2xl">{gallonsFormat((data[data.length - 1].invoice_amount) / 6.25)}</div>
          </div>
          <div className="flex flex-col w-[30%] shrink-0 p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic">Last week profits.</div>
            <div className="flex-grow" />
            <div className="ml-auto text-2xl">{currencyFormat(((data[data.length - 1].invoice_amount) / 6.25) * 2.75)}</div>
          </div>
        </div>
        <div className="flex flex-wrap px-7 justify-between">
          <div className="flex flex-col grow p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <AreaChart data={data} />
          </div>
          <div className="flex flex-col my-7 w-[30%] shrink-0 p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic">Total amount earned.</div>
            <div className="flex-grow" />
            <div className="ml-auto text-2xl">{currencyFormat((total / 6.25) * 2.75)}</div>
          </div>
          <div className="flex flex-col my-7 w-[30%] shrink-0 p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic">Total amount of gallons sold.</div>
            <div className="flex-grow" />
            <div className="ml-auto text-2xl">{gallonsFormat(total / 6.25)}</div>
          </div>
          <div className="flex flex-col my-7 w-[30%] shrink-0 p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <PieChart data={data} />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;