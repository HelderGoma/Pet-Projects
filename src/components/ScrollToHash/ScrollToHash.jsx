import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const scrollToElement = () => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                    setTimeout(scrollToElement, 50);
                }
            };

            scrollToElement();
        } else {
            window.scrollTo({ top: 0, behavior: "auto" });
        }
    }, [hash, pathname]);

    return null;
}