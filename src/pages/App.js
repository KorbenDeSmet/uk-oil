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

  let reverse_data = [];
  reverse_data = data.map(item => item).reverse();

  return (
    <div className="flex flex-col min-h-screen bg-neutral-800 text-white ">
      <div className="flex-grow ">
        <Header data={data} />
        <div className="flex flex-wrap px-7 justify-between">
          <div className="flex flex-col w-[30%] p-3 my-7 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic">Last invoice amount.</div>
            <div className="h-10" />
            <div className="ml-auto text-2xl">{currencyFormat(data[data.length - 1].invoice_amount)}</div>
          </div>
          <div className="flex flex-col w-[30%] my-7 shrink-0 p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic">Gallons sold last week.</div>
            <div className="flex-grow" />
            <div className="ml-auto text-2xl">{gallonsFormat((data[data.length - 1].invoice_amount) / 6.25)}</div>
          </div>
          <div className="flex flex-col w-[30%] my-7 shrink-0 p-3 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic">Last week profits.</div>
            <div className="flex-grow" />
            <div className="ml-auto text-2xl">{currencyFormat(((data[data.length - 1].invoice_amount) / 6.25) * 2.75)}</div>
          </div>
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
          <div className="flex flex-col grow p-3 mb-7 shadow-[2px_2px_4px_rgba(169,169,169,0.5)] bg-neutral-900 rounded-md">
            <div className="italic text-lg mx-auto underline">All transactions</div>
            <div className="grid grid-cols-6 w-full bg-neutral-800 mt-3 py-2 rounded-t-lg">
              <div className="text-center">Week</div>
              <div className="col-span-2 text-center">Invoice amount</div>
              <div className="text-center">Profit</div>
              <div className="col-span-2 text-center">Gallons sold</div>
            </div>
            {
              reverse_data.map(transaction => (
                <div className="text-sm text-neutral-400 grid grid-cols-6 w-full py-2 border border-neutral-800">
                  <div className="text-center">{transaction.id}</div>
                  <div className="col-span-2 text-center">{currencyFormat(transaction.invoice_amount)}</div>
                  <div className="text-white text-center">{currencyFormat((transaction.invoice_amount / 6.25) * 2.75)}</div>
                  <div className="col-span-2 text-center">{gallonsFormat(transaction.invoice_amount / 6.25)}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;