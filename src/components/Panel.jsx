import madhu from "../assets/madhu.png"
import notification from "../assets/notification.png"
import Calendar from "./Calendar";
import maill from "../assets/maill.png"
const Panel = () => {
    return (
        <>
            {/* header */}
            <div className="w-full flex flex-row justify-end items-center p-4 mb-8">
                <span><img src={maill} alt="/" className="rounded-full object-cover h-8 w-8" /></span>
                <span className="ml-4"><img src={notification} alt="/" className="rounded-full object-cover h-10 w-10" /></span>
                <span className="ml-4 w-fit flex justify-start items-center gap-2 bg-white p-1 pr-2 rounded-full">
                    <span><div className=' rounded-full bg-indigo-100 w-10 '><img src={madhu} alt="/" className="rounded-full object-cover h-10" /></div></span>
                    <span className="flex flex-col justify-around items-start">
                        <p className="text-sm font-small">Meghna Tomar</p>
                        <p className="text-xs font-small">Chief General Manager</p>
                    </span>
                </span>
            </div>
            <Calendar />
        </>
    )
}

export default Panel;