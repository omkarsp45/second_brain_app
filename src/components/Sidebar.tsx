import { BrandIcon, YoutubeIcon, TwitterIcon } from "../assets/icons/Icons";
import { Button } from "./Button";

export function Sidebar() {
    const sidebarCSS = `
        flex flex-col h-screen w-20 bg-sidebar-background border-border border-x-2 items-center
        sm:w-44 md:w-52 lg:w-72 xl:w-80 2xl:w-96 fixed top-0 left-0 p-4`;

    const textSize = "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
    const brandIconSize = "w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16";

    return (
        <div className={sidebarCSS}>
            <div className="flex flex-col w-full space-y-6">
                <div className={`flex flex-row items-center justify-evenly h-24 ${textSize} font-bold text-zinc-700`}>
                    <BrandIcon className={`aspect-square ${brandIconSize}`} />
                    <span className="ml-2">Second Brain</span>
                </div>

                <Button
                    sidebar={true}
                    innertext="YouTube"
                    textColor="text-zinc-700"
                    backgroundColor="bg-sidebar-background hover:bg-gray-300"
                    startIcon={<YoutubeIcon className="w-6 sm:w-8" />}
                />
                <Button
                    sidebar={true}
                    innertext="Twitter"
                    textColor="text-zinc-700"
                    backgroundColor="bg-sidebar-background hover:bg-gray-300"
                    startIcon={<TwitterIcon className="w-6 sm:w-8" />}
                />
            </div>
        </div>
    );
}