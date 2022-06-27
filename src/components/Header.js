import logo from "./../images/ukoil.png"

const Header = ({ data }) => {
    const handleClick = () => {
        window.open("https://nopixel.fandom.com/wiki/UK_Oil");
    }

    return (
        <div className="flex justify-between py-5 px-7 h-20 bg-neutral-900 border-b border-[#7bbf36] md:px-16">
            <div className="relative w-28">
                <img src={logo} className="object-contain hover:cursor-pointer" alt="Green uk oil logo" onClick={() => handleClick()} />
            </div>
            <div className="my-auto text-lg">Weeks of income: {data.length}</div>
        </div>
    )
}

export default Header