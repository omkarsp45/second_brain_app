import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./Button";
import axios from "axios";
import { ShareIcon, PlusIcon } from "../assets/icons/Icons";
import { Card } from "./Card";
import { CreateContentModal } from "./CreateContentModal";
import { ShareWindow } from "./ShareWindow";
import { BackendUrl } from "../../constants";


type ContentType = {
    type: string;
    link: string;
    title: string;
    _id: string;
};

export function Brainspace(props: { type: string; share: boolean }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [shareWindowOpen, setShareWindowOpen] = useState(false);
    const textSize = "text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
    const [content, setContent] = useState<ContentType[]>([]);
    const [filteredContent, setFilteredContent] = useState<ContentType[]>([]);
    const { hash } = useParams();

    useEffect(() => {
        async function fetchContent() {
            try {
                let response;
                if (props.share) {
                    response = await axios.get(`${BackendUrl}/api/v1/brain/${hash}`);
                } else {
                    response = await axios.get(`${BackendUrl}/api/v1/content`, {
                        headers: {
                            token: localStorage.getItem("token"),
                        },
                    });
                }
                setContent(response.data.data);
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        }

        fetchContent();
        const interval = setInterval(fetchContent, 10 * 1000);
        return () => clearInterval(interval);
    }, [hash, props.share]);

    useEffect(() => {
        setFilteredContent(
            props.type === "all"
                ? content
                // @ts-ignore
                : content.filter((item) => item.type === props.type)
        );
    }, [content, props.type]);

    return (
        <div className="flex flex-col flex-1 text-dark-gray px-5 py-1 md:px-6 md:py-6 space-y-4">
            <CreateContentModal open={modalOpen} onClose={() => {
                setModalOpen(false);
            }} />
            <ShareWindow open={shareWindowOpen} onClose={() => {
                setShareWindowOpen(false);
            }} />
            <div className="flex flex-row justify-between items-center">
                <div className={`font-bold text-zinc-700 ${textSize}`}>
                    {props.type === "all" && <>All Content</>}
                    {props.type === "youtube" && <>YouTube</>}
                    {props.type === "twitter" && <>Twitter</>}
                </div>
                <div className="flex flex-row space-x-4">
                    <Button
                        onClick={() => setShareWindowOpen(true)}
                        innertext="Share Brain"
                        startIcon={<ShareIcon className="w-6 sm:w-8" />}
                        textColor="text-primary"
                        backgroundColor="bg-secondary hover:bg-secondary-dark"
                    />
                    <Button
                        onClick={() => setModalOpen(true)}
                        innertext="Add Content"
                        startIcon={<PlusIcon className="w-6 sm:w-8" />}
                        textColor="text-secondary"
                        backgroundColor="bg-primary hover:bg-primary-dark"
                    />
                </div>
            </div>

            <div className="gap-4 p-4 space-y-4 columns-1 sm:columns-2 md:columns-2 lg:columns-3">
                {filteredContent.map(({ type, link, title, _id }) => <Card
                    type={type}
                    link={link}
                    title={title}
                    _id={_id}
                />)}
            </div>
        </div>
    );
}
