import { useCallback, useEffect, useState } from "react";
import { TAILWINDCSS_BREAKPOINT } from "~utils";

const WINDOW_TOP_INITIAL_VALUE = 0;
const WIDTH_SIZE_INITIAL_STATE = window.innerWidth;
const SCROLL_POSITION_INITIAL_STATE = 0;

export const useScreen = () => {
    const [widthSize, setWidthSize] = useState(WIDTH_SIZE_INITIAL_STATE);
    const [scrollPosition, setScrollPosition] = useState(SCROLL_POSITION_INITIAL_STATE);

    const updateWidthSize = useCallback(() => {
        setWidthSize(window.innerWidth);
    }, []);
    const updateScrollPosition = useCallback(() => {
        setScrollPosition(window.scrollY);
    }, []);
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: WINDOW_TOP_INITIAL_VALUE, behavior: "smooth" });
    }, []);
    const thresholdTrigger = useCallback(
        (type: "width" | "scroll", threshold: number, isBelow?: "isBelow") => {
            const value = type === "width" ? widthSize : scrollPosition;

            if (isBelow) {
                return value < threshold;
            }

            return value >= threshold;
        },
        [widthSize, scrollPosition]
    );
    const screenStatus = {
        isSmScreen: thresholdTrigger("width", TAILWINDCSS_BREAKPOINT.sm, "isBelow"),
        isMdScreen: thresholdTrigger("width", TAILWINDCSS_BREAKPOINT.md, "isBelow"),
        isLgScreen: thresholdTrigger("width", TAILWINDCSS_BREAKPOINT.lg, "isBelow"),
        isXlScreen: thresholdTrigger("width", TAILWINDCSS_BREAKPOINT.xl, "isBelow"),
        is2xlScreen: thresholdTrigger("width", TAILWINDCSS_BREAKPOINT["2xl"], "isBelow")
    };

    useEffect(() => {
        updateWidthSize();
        updateScrollPosition();

        window.addEventListener("resize", updateWidthSize);
        window.addEventListener("scroll", updateScrollPosition);

        return () => {
            window.removeEventListener("resize", updateWidthSize);
            window.removeEventListener("scroll", updateScrollPosition);
        };
    }, [updateScrollPosition, updateWidthSize]);

    return { widthSize, scrollPosition, scrollToTop, thresholdTrigger, screenStatus };
};
