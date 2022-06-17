import logo from "./../images/ukoil.png"

const Header = ({ data }) => {
    const handleClick = () => {
        window.open("https://nopixel.fandom.com/wiki/UK_Oil");
    }
    //border-[#7bbf36]
    return (
        <div className="flex justify-between py-5 px-7 h-20 bg-neutral-900 border-b md:px-16">
            <img src={logo} className="hover:cursor-pointer" alt="Green uk oil logo" onClick={() => handleClick()} />
            <div className="my-auto text-lg"><div>Weeks of income: <u>{data.length}</u></div></div>
        </div>
    )
}

export default Header