import { HtmlPropsType } from "~types";
import { applyClassName } from "~utils";

type AdditionalPropsType = Pick<HtmlPropsType, "id" | "children">;

interface ISectionContainer extends AdditionalPropsType {
    minHeightScreen?: boolean;
    largePaddingTop?: boolean;
    bgImg?: boolean;
    bgColor?: "bg-gray-700" | "bg-gray-950";
}

export const SectionContainer = ({
    minHeightScreen,
    largePaddingTop,
    bgImg,
    bgColor,
    children,
    ...rest
}: ISectionContainer) => {
    return (
        <section
            className={
                "w-full h-min py-12 px-4 scroll-m-16 grid auto-rows-min grid-cols-[min(100%,96rem)] gap-y-8 place-content-center place-items-center md:gap-y-14" +
                applyClassName(minHeightScreen, "min-h-screen") +
                applyClassName(largePaddingTop, "pt-28") +
                applyClassName(
                    bgImg,
                    "bg-[url(~assets/svg/bg_mobile.svg)] bg-top bg-cover bg-no-repeat md:bg-[url(~assets/svg/bg_desktop.svg)]"
                ) +
                applyClassName(bgColor, bgColor!, "bg-slate-50")
            }
            {...rest}
        >
            {children}
        </section>
    );
};
