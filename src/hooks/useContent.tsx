
import { useEffect, useState } from "react";


export function useContent() {
    const [contents, setContents] = useState([]);

    const refresh = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found in localStorage");
            return;
        }

        try {
            const response = await axios.get(`${BackendUrl}/api/v1/content`, {
                headers: {
                    token,
                },
            });
            setContents(response.data.content);
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    };

    useEffect(() => {
        refresh(); // Initial fetch
        const interval = setInterval(() => {
            refresh(); // Periodic fetch
        }, 10 * 1000);

        return () => {
            clearInterval(interval); // Cleanup interval on component unmount
        };
    }, [BackendUrl]); // Add dependencies explicitly

    return { contents, refresh };
}
