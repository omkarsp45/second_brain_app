import { Button } from "./Button";
import { ShareIcon, PlusIcon } from "../assets/icons/Icons";
import { Card } from "./Card";

export function Brainspace() {
    const textSize = "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";

    return (
        <div className="flex flex-col flex-1 bg-card-space text-dark-gray p-6 space-y-4">
            <div className="flex flex-row justify-between items-center">
                <div className={`font-bold text-zinc-700 ${textSize}`}>All Content</div>
                <div className="flex flex-row space-x-4">
                    <Button
                        innertext="Share Brain"
                        startIcon={<ShareIcon className="w-6 sm:w-8" />}
                        textColor="text-primary"
                        backgroundColor="bg-secondary hover:bg-secondary-dark"
                        sidebar={false}
                    />
                    <Button
                        innertext="Add Content"
                        startIcon={<PlusIcon className="w-6 sm:w-8" />}
                        textColor="text-secondary"
                        backgroundColor="bg-primary hover:bg-primary-dark"
                        sidebar={false}
                    />
                </div>
            </div>

            <div className="gap-4 p-4 space-y-4 columns-1 sm:columns-2 md:columns-3 lg:columns-3">
                <Card title="Go to Gym" type="youtube" link="https://youtu.be/jboYNzVeSg8?si=_ctIWPS7R4m3OCs_" />
                <Card title="Job Openings" type="twitter" link="https://x.com/shvm_mshra/status/1873790334779744687" />
                <Card title="Go to Gym" type="youtube" link="https://youtu.be/jboYNzVeSg8?si=_ctIWPS7R4m3OCs_" />
                <Card title="Go to Gym" type="youtube" link="https://youtu.be/jboYNzVeSg8?si=_ctIWPS7R4m3OCs_" />
                <Card title="Job Openings" type="twitter" link="https://x.com/shvm_mshra/status/1873790334779744687" />
                <Card title="Job Openings" type="twitter" link="https://x.com/shvm_mshra/status/1873790334779744687" />
                <Card title="Go to Gym" type="youtube" link="https://youtu.be/jboYNzVeSg8?si=_ctIWPS7R4m3OCs_" />
            </div>
        </div>
    );
}