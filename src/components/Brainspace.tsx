import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./Button";
import axios from "axios";
import { ShareIcon, PlusIcon } from "../assets/icons/Icons";
import { Card } from "./Card";
import { CreateContentModal } from "./CreateContentModal"
import { ShareWindow } from "./ShareWindow"
import { BackendUrl } from "../../constants";

export function Brainspace(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [shareWindowOpen, setShareWindowOpen] = useState(false);
    const textSize = "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
    const [content, setContent] = useState([]);
    const { hash } = useParams<{ hash: string }>();

    useEffect(() => {
        async function fetchContent() {
            if (props.share) {
                console.log('1');
                const response = await axios.get(`${BackendUrl}/api/v1/brain/${hash}`);
                console.log('2');
                setContent(response.data.data);
                console.log('3');
            } else {
                const response = await axios.get(`${BackendUrl}/api/v1/content`, {
                    headers: {
                        token: localStorage.getItem("token"),
                    },
                });
                console.log(response);
                setContent(response.data.data);
            }
        }
        fetchContent();
        let interval = setInterval(fetchContent, 10 * 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="flex flex-col flex-1 text-dark-gray p-6 space-y-4">
            <CreateContentModal open={modalOpen} onClose={() => {
                setModalOpen(false);
            }} />
            <ShareWindow open={shareWindowOpen} onClose={() => {
                setShareWindowOpen(false);
            }} />
            <div className="flex flex-row justify-between items-center">
                <div className={`font-bold text-zinc-700 ${textSize}`}>All Content</div>
                <div className="flex flex-row space-x-4">
                    <Button
                        onClick={() => setShareWindowOpen(true)}
                        innertext="Share Brain"
                        startIcon={<ShareIcon className="w-6 sm:w-8" />}
                        textColor="text-primary"
                        backgroundColor="bg-secondary hover:bg-secondary-dark"
                    />
                    <Button
                        onClick={() => { setModalOpen(true) }}
                        innertext="Add Content"
                        startIcon={<PlusIcon className="w-6 sm:w-8" />}
                        textColor="text-secondary"
                        backgroundColor="bg-primary hover:bg-primary-dark"
                    />
                </div>
            </div>

            <div className="gap-4 p-4 space-y-4 columns-1 sm:columns-2 md:columns-2 lg:columns-3">
                {content && content.map(({ type, link, title, _id }) => <Card
                    type={type}
                    link={link}
                    title={title}
                    _id={_id}
                />)}
            </div>
        </div>
    );
}