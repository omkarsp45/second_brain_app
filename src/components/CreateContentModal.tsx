import { BackendUrl } from "../../constants";
import { useRef, useState } from "react";
import { CrossIcon } from "../assets/icons/Icons";
import { Button } from "./Button";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
}

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        try {
            await axios.post(
                `${BackendUrl}/api/v1/content`,
                { title, link, type },
                {
                    headers: {
                        Authorization: localStorage.getItem("token") || "",
                    }
                }
            );
            onClose();
        } catch (error) {
            console.error("Error adding content:", error);
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-500 opacity-60"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-lg p-6 shadow-lg z-10 w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Add Content</h2>
                    <div
                        onClick={onClose}
                        className="cursor-pointer p-2 rounded hover:bg-gray-200"
                        aria-label="Close"
                    >
                        <CrossIcon />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {/* Title Input */}
                    <input
                        ref={titleRef}
                        placeholder="Title"
                        type="text"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    {/* Link Input */}
                    <input
                        ref={linkRef}
                        placeholder="Link"
                        type="text"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    {/* Type Selection */}
                    <div>
                        <h3 className="mb-2">Type</h3>
                        <div className="flex gap-2">
                            <Button
                                innertext="Youtube"
                                backgroundColor={type === ContentType.Youtube ? "bg-primary" : "bg-secondary"}
                                textColor="text-white"
                                onClick={() => setType(ContentType.Youtube)}
                            />
                            <Button
                                innertext="Twitter"
                                backgroundColor={type === ContentType.Twitter ? "bg-primary" : "bg-secondary"}
                                textColor="text-white"
                                onClick={() => setType(ContentType.Twitter)}
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-4 flex justify-center">
                    <Button
                        onClick={addContent}
                        backgroundColor="bg-primary"
                        textColor="text-white"
                        innertext="Submit"
                    />
                </div>
            </div>
        </div>
    );
}
