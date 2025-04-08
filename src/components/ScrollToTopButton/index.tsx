import { useScrollToTopButton } from "~hooks";
import { applyClassName, renderElement } from "~utils";
import { Icon } from "../Icon";

export const ScrollToTopButton = () => {
    const { isRendered, handleClick } = useScrollToTopButton();

    return renderElement(
        isRendered.delayed,
        <button
            type="button"
            aria-label="Scroll to top"
            onClick={() => handleClick()}
            className={
                "w-max h-min p-1 rounded-full fixed top-auto right-4 bottom-6 left-auto z-15 bg-amber-400 cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-2 active:scale-95 2xl:right-[calc((100vw-96rem)/2)]" +
                applyClassName(
                    isRendered.immediate,
                    "animate-bounce-in-up-scroll-to-top-button",
                    "animate-bounce-out-down-scroll-to-top-button"
                )
            }
        >
            <Icon
                icon="ChevronUp"
                className="size-8 text-gray-50"
            />
        </button>
    );
};
