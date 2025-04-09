import { useEffect, useRef } from "react";
import { useToggle } from "./useToggle";

const THRESHOLD = 0.1;

export const useIntersectionObserver = <T extends HTMLElement>() => {
    const { indicator: isVisible, updateIndicator: updateIsVisible } = useToggle();
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    updateIsVisible(true);
                }
            },
            { threshold: THRESHOLD }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [updateIsVisible]);

    return { ref, isVisible };
};
