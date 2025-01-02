import { useState, useEffect } from "react";
import { Button } from "./Button";
import axios from "axios";
import { ShareIcon, PlusIcon } from "../assets/icons/Icons";
import { Card } from "./Card";
import { CreateContentModal } from "./CreateContentModal"
import { BackendUrl } from "../../constants";

export function Brainspace() {
    const [modalOpen, setModalOpen] = useState(false);
    const textSize = "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
    const [content, setContent] = useState([]);

    useEffect(() => {
        async function fetchContent() {
            const response = await axios.get(`${BackendUrl}/api/v1/content`, {
                headers: {
                    token: localStorage.getItem("token"),
                },
            });
            console.log(response);
            setContent(response.data.data);
        }
        fetchContent();
    }, []);

    return (
        <div className="flex flex-col flex-1 text-dark-gray p-6 space-y-4">
            <CreateContentModal open={modalOpen} onClose={() => {
                setModalOpen(false);
            }} />
            <div className="flex flex-row justify-between items-center">
                <div className={`font-bold text-zinc-700 ${textSize}`}>All Content</div>
                <div className="flex flex-row space-x-4">
                    <Button
                        onClick={() => alert("Share Brain")}
                        innertext="Share Brain"
                        startIcon={<ShareIcon className="w-6 sm:w-8" />}
                        textColor="text-primary"
                        backgroundColor="bg-secondary hover:bg-secondary-dark"
                        sidebar={false}
                    />
                    <Button
                        onClick={() => { setModalOpen(true) }}
                        innertext="Add Content"
                        startIcon={<PlusIcon className="w-6 sm:w-8" />}
                        textColor="text-secondary"
                        backgroundColor="bg-primary hover:bg-primary-dark"
                        sidebar={false}
                    />
                </div>
            </div>

            <div className="gap-4 p-4 space-y-4 columns-1 sm:columns-2 md:columns-3 lg:columns-3">
                
                {content && content.map(({ type, link, title }) => <Card
                    type={type}
                    link={link}
                    title={title}
                />)}
            </div>
        </div>
    );
}