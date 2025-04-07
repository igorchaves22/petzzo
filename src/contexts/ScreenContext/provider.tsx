import { useScreen } from "~hooks";
import { HtmlPropsType } from "~types";
import { ScreenContext } from "./context";

type AdditionalPropsType = Pick<HtmlPropsType, "children">;

interface IScreenProvider extends AdditionalPropsType {}

export const ScreenProvider = ({ children }: IScreenProvider) => {
    const { widthSize, scrollPosition, scrollToTop, thresholdTrigger, screenStatus } = useScreen();

    return (
        <ScreenContext.Provider value={{ widthSize, scrollPosition, scrollToTop, thresholdTrigger, screenStatus }}>
            {children}
        </ScreenContext.Provider>
    );
};
