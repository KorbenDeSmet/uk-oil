import logo from "./../images/ukoil.png"

const Header = ({ data }) => {
    return (
        <div className="flex justify-between p-5 h-20 bg-neutral-900 border-b border-[#7bbf36]">
            <img src={logo} className="" alt="Green uk oil logo" />
            <div className="my-auto text-lg"><div>Weeks of income: <u>{data.length}</u></div></div>
        </div>
    )
}

export default Header