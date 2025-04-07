import { useEffect, useRef } from "react";

export const useCollapseControl = <T extends HTMLElement>(shouldExpand: boolean) => {
    const elementRef = useRef<T>(null);

    useEffect(() => {
        if (elementRef.current) {
            const height = shouldExpand ? elementRef.current.scrollHeight : 0;

            elementRef.current.style.height = `${height}px`;
        }
    }, [shouldExpand]);

    return { elementRef };
};
