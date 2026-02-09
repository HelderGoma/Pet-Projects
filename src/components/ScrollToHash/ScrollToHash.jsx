import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const scrollToElement = () => {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                setTimeout(scrollToElement, 50);
            }
        };


        setTimeout(scrollToElement, 50);
    }, [hash, pathname]);

    return null;
}