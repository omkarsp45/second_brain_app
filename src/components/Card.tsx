import { useEffect } from "react";
import axios from "axios";
import { BrandIcon, YoutubeIcon, TwitterIcon, ShareIcon, DeleteIcon } from "../assets/icons/Icons";

export function Card(props: { title: string, link: string, type: string, _id: any }) {
    useEffect(() => {
        if (props.type === "twitter") {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [props.type]);

    const getYouTubeId = (url: string) => {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };
    const videoId = props.type === "youtube" ? getYouTubeId(props.link) : null;
    async function deleteContent() {
        try {
            await axios.delete("http://localhost:3000/api/v1/content", {
                headers: {
                    token: localStorage.getItem("token") || "",
                },
                data: {
                    contentId: props._id,
                }
            });

        } catch (error) {
            console.error("Error deleting content:", error);
        }
    }

    return (
        <div className="p-2 bg-white rounded-md border-gray-200 w-92 border max-h-fit break-inside-avoid">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        {props.type==='youtube' ? <YoutubeIcon className="w-5 h-5"/> : <TwitterIcon className="w-5 h-5"/>}
                    </div>
                    {props.title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={props.link} target="_blank">
                            <ShareIcon className="w-5" />
                        </a>
                    </div>
                    <div className="text-gray-500 cursor-pointer" onClick={deleteContent}>
                        <DeleteIcon />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                {props.type === "youtube" && videoId && (
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            allowFullScreen
                            title={props.title}
                        ></iframe>
                    </div>
                )}

                {props.type === "twitter" && (
                    <div className="w-full overflow-hidden">
                        <blockquote className="twitter-tweet" style={{ maxWidth: "100%" }}>
                            <a href={props.link.replace("x.com", "twitter.com")}>View Tweet</a>
                        </blockquote>
                    </div>
                )}
            </div>
        </div>
    )
}
