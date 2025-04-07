import { createContext } from "react";

interface IScreenContext {
    widthSize: number;
    scrollPosition: number;
    scrollToTop: () => void;
    thresholdTrigger: (type: "width" | "scroll", threshold: number, isBelow?: "isBelow") => boolean;
    screenStatus: {
        isSmScreen: boolean;
        isMdScreen: boolean;
        isLgScreen: boolean;
        isXlScreen: boolean;
        is2xlScreen: boolean;
    };
}

export const ScreenContext = createContext({} as IScreenContext);
