import { useEffect } from "react";
import { ShareIcon } from "../assets/icons/Icons"

export function Card(props: { title: string, link: string, type: string }) {

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

    return (
        <div className="p-2 bg-white rounded-md border-gray-200 w-72 border max-h-fit break-inside-avoid">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon className="w-2" />
                    </div>
                    {props.title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={props.link} target="_blank">
                            <ShareIcon className="w-2" />
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon className="w-2" />
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
                    <div>
                        <blockquote className="twitter-tweet">
                            <a href={props.link.replace("x.com", "twitter.com")}>
                                View Tweet
                            </a>
                        </blockquote>
                        <script async src="https://platform.twitter.com/widgets.js"></script>
                    </div>
                )}
            </div>
        </div>
    )
}