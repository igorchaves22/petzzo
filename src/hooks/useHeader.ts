import { useCallback, useContext, useEffect } from "react";
import { ScreenContext } from "~contexts";
import { useCollapseControl } from "./useCollapseControl";
import { useToggle } from "./useToggle";

const TIMEOUT_DELAY = 500;
const SCROLL_THRESHOLD = 10;

export const useHeader = () => {
    const { thresholdTrigger, screenStatus } = useContext(ScreenContext);
    const { indicator: navbarIsRendered, updateIndicator: updateNavbarRender } = useToggle(undefined, undefined, {
        value: TIMEOUT_DELAY
    });
    const { elementRef: navRef } = useCollapseControl(navbarIsRendered.immediate || !screenStatus.isLgScreen);

    const isScrolled = thresholdTrigger("scroll", SCROLL_THRESHOLD);
    const handleClick = useCallback(() => {
        if (screenStatus.isLgScreen) {
            updateNavbarRender();
        }
    }, [screenStatus.isLgScreen, updateNavbarRender]);

    useEffect(() => {
        if (!screenStatus.isLgScreen && navbarIsRendered) {
            updateNavbarRender(false);
        }
    }, [navbarIsRendered, screenStatus.isLgScreen, updateNavbarRender]);

    return { screenStatus, isScrolled, navRef, navbarIsRendered, handleClick };
};
