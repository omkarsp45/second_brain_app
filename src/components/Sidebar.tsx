import { BrandIcon, YoutubeIcon, TwitterIcon } from "../assets/icons/Icons";
import { Button } from "./Button";

export function Sidebar() {
    const sidebarCSS = `
        flex flex-col w-20 h-screen bg-sidebar-background border-border border-x-2 items-center
        sm:w-44 md:w-52 lg:w-72 xl:w-80 2xl:w-96`

    const textSize = "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"

    const brandIconSize = `w-2 sm:w-4 md:w-6 lg:w-8 xl:w-10 2xl:w-12`
    
    return (
        <div className={sidebarCSS}>
            <div className="flex flex-col w-11/12 h-full space-y-4 text-dark-gray">
                <div className={`flex flex-row text-zinc-700 text-2xl justify-evenly font-bold items-center h-20 ${textSize}`}><BrandIcon className={"aspect-square " + brandIconSize} />Second Brain<span></span></div>
                <Button sidebar={true} innertext="Youtube" textColor="text-zinc-700" backgroundColor="bg-sidebar-background" startIcon={<YoutubeIcon className="w-2" />} />
                <Button sidebar={true} innertext="Twitter" textColor="text-zinc-700" backgroundColor="bg-sidebar-background" startIcon={<TwitterIcon className="w-2" />} />
            </div>
        </div>
    );
}