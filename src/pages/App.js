import data from "./../data/data.json"
import logo from "./../images/ukoil.png"
function App() {
  console.log(data)
  // Primary color: #7bbf36
  return (
    <div className="flex flex-col min-h-screen bg-neutral-800 text-white ">
      <div className="flex-grow ">
        <div className="flex justify-between p-5 h-20 bg-neutral-900 border-b border-[#7bbf36]">
          <img src={logo} className="" alt="Green uk oil logo" />
          <div className="my-auto text-lg"><t>Weeks of income: <u>{data.length}</u></t></div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex flex-col grow m-3 p-3 border border-[#7bbf36] rounded-md">
            <t className="mx-auto">€ {data[data.length - 1].invoice_amount}</t>
          </div>
          <div className="flex flex-col grow m-3 p-3 border border-[#7bbf36] bg-neutral-900 rounded-md">
            <t className="mx-auto">€ {data[data.length - 1].invoice_amount}</t>
          </div>
          <div className="flex flex-col grow m-3 p-3 shadow-lg shadow-neutral-700 bg-neutral-900 rounded-md">
            <t className="mx-auto">€ {data[data.length - 1].invoice_amount}</t>
          </div>
        </div>
      </div>
      <div className="flex float-center p-2 bg-neutral-900">
        <a href="https://github.com/KorbenDeSmet" className="mx-auto italic text-sm text-gray-400 hover:text-[#7bbf36] hover:underline">Github of the creator</a>
      </div>
    </div >
  );
}

export default App;