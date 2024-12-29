import { Button } from "./Button";
import { ShareIcon, PlusIcon } from "../assets/icons/Icons";

export function Brainspace() {
    const textSize = "text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
    console.log("Brainspace");
    return (
        <div className="flex flex-col w-full h-full bg-card-space text-dark-gray p-4">
            <div className="flex flex-row justify-between items-center">
                <div className={`text-zinc-700 text-2xl place-content-center font-bold h-20 ${textSize}`}>All Content</div>
                <div className="flex flex-row space-x-4">
                    <Button innertext="Share Brain" startIcon={<ShareIcon className="w-2" />} textColor="text-primary" backgroundColor="bg-secondary" sidebar={false} />
                    <Button innertext="Add Content" startIcon={<PlusIcon className="w-2" />} textColor="text-secondary" backgroundColor="bg-primary" sidebar={false} />
                </div>
            </div>
        </div>
    )
};