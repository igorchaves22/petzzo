import { useCallback, useContext, useEffect } from "react";
import { ScreenContext } from "~contexts";
import { useToggle } from "./useToggle";

const SCROLL_THRESHOLD = 10;
const TIMEOUT_DELAY = 1000;

export const useScrollToTopButton = () => {
    const { scrollToTop, thresholdTrigger } = useContext(ScreenContext);
    const { indicator: isRendered, updateIndicator: updateRender } = useToggle(undefined, undefined, {
        value: TIMEOUT_DELAY
    });

    const isScrolled = thresholdTrigger("scroll", SCROLL_THRESHOLD);
    const handleClick = useCallback(() => {
        scrollToTop();

        window.history.pushState({}, document.title, window.location.pathname + window.location.search);
    }, [scrollToTop]);

    useEffect(() => {
        if (isRendered.immediate !== isScrolled) {
            updateRender(isScrolled);
        }
    }, [isRendered, isScrolled, updateRender]);

    return { isRendered, handleClick };
};
