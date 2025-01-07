import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { CrossIcon } from "../assets/icons/Icons";
import { BackendUrl } from "../../constants";
interface ShareWindowProps {
    open: boolean;
    onClose: () => void;
}

export function ShareWindow({ open, onClose }: ShareWindowProps) {
    const [isShareable, setIsShareable] = useState(false);
    const [shareLink, setShareLink] = useState<string | null>(null);
    const shareRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open) {
            axios
                .post(
                    `${BackendUrl}/api/v1/brain/share`,
                    { share: "check", userId: { userId: localStorage.getItem("userId") } },
                    {
                        headers: {
                            token: localStorage.getItem("token") || "",
                        },
                    }
                )
                .then((response) => {
                    if (response.data.message) {
                        setIsShareable(true);
                        setShareLink(`localhost:5173/share/${response.data.hash}`);
                    } else {
                        setIsShareable(false);
                        setShareLink(null);
                    }
                })
                .catch((error) => console.error("Error checking share status:", error));
        }
    }, [open]);

    const toggleShareable = async () => {
        if (isShareable) {
            try {
                await axios.post(
                    `${BackendUrl}/api/v1/brain/share`,
                    { share: "false", userId: { userId: localStorage.getItem("userId") } },
                    {
                        headers: {
                            token: localStorage.getItem("token") || "",
                        },
                    }
                );
                setIsShareable(false);
                setShareLink(null);
            } catch (error) {
                console.error("Error removing share link:", error);
            }
        } else {
            try {
                const response = await axios.post(
                    `${BackendUrl}/api/v1/brain/share`,
                    { share: "true", userId: { userId: localStorage.getItem("userId") } },
                    {
                        headers: {
                            token: localStorage.getItem("token") || "",
                        },
                    }
                );
                setIsShareable(true);
                setShareLink(`${BackendUrl}/share/${response.data.hash}`);
            } catch (error) {
                console.error("Error creating share link:", error);
            }
        }
    };

    const copyToClipboard = () => {
        if (shareLink) {
            navigator.clipboard.writeText(shareLink);
            alert("Link copied to clipboard!");
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-gray-500 opacity-60"
                onClick={onClose}
            ></div>
            <div className="relative bg-white rounded-lg p-6 shadow-lg z-10 w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Share Link</h2>
                    <div
                        onClick={onClose}
                        className="cursor-pointer p-2 rounded hover:bg-gray-200"
                        aria-label="Close"
                    >
                        <CrossIcon />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <input
                        ref={shareRef}
                        value={shareLink || "No share link available"}
                        placeholder="Share link"
                        type="text"
                        readOnly
                        onClick={copyToClipboard}
                        title="Click to copy to clipboard"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    />
                </div>

                <div className="mt-4 flex items-center justify-start gap-4">
                    <label className="ml-2 text-sm font-medium text-gray-600">
                        Shareable
                    </label>
                    <input
                        type="checkbox"
                        checked={isShareable}
                        onChange={toggleShareable}
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                </div>
            </div>
        </div>
    );
}
