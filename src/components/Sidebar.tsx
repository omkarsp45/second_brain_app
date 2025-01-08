import { BrandIcon, YoutubeIcon, TwitterIcon } from "../assets/icons/Icons";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function Sidebar({ type, setType }) {
    const navigate = useNavigate();
    const sidebarCSS = `
        flex flex-col h-screen bg-sidebar-background border-border border-x-2 items-center
        w-44 md:w-44 lg:w-52 xl:w-72 2xl:w-80 fixed top-0 left-0 p-4`;

    const textSize = "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
    const brandIconSize = "w-4 sm:w-6 md:w-8 lg:w-10 xl:w-10 2xl:w-12";

    function logOut() {
        localStorage.removeItem('token');
        navigate('/auth')
    }

    return (
        <div className={`${sidebarCSS} justify-between`}>
            <div className="flex flex-col w-full space-y-4">
                <div className={`invisible h-8 md:visible flex flex-row items-center md:h-24 ${textSize} font-bold text-zinc-700 cursor-pointer`} onClick={() => { setType('all'); }}>
                    <BrandIcon className={`aspect-square ${brandIconSize} mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 2xl:mr-7`} />
                    <span className="ml-2">Second Brain</span>
                </div>

                <Button
                    onClick={() => { setType('youtube'); }}
                    innertext="YouTube"
                    textColor="text-zinc-700"
                    backgroundColor="bg-sidebar-background hover:bg-gray-300"
                    startIcon={<YoutubeIcon className="w-6 sm:w-8" />}
                />
                <Button
                    onClick={() => { setType('twitter') }}
                    innertext="Twitter"
                    textColor="text-zinc-700"
                    backgroundColor="bg-sidebar-background hover:bg-gray-300"
                    startIcon={<TwitterIcon className="w-6 sm:w-8" />}
                />
            </div>
            <Button
                innertext="Logout"
                textColor="text-zinc-700"
                backgroundColor="bg-red-300 hover:bg-red-400"
                onClick={logOut}
            />
        </div>
    );
}