import { TailwindcssBreakpointType, HtmlPropsType } from "~types";
import { applyClassName } from "~utils";

type AdditionalPropsType = Pick<HtmlPropsType, "children">;

interface ILayoutBox extends AdditionalPropsType {
    layoutVariant?: {
        breakpoint: TailwindcssBreakpointType;
        type: "side" | "largeSide" | "largeSideOpposite" | "threeColumns";
    };
}

export const LayoutBox = ({ layoutVariant, children }: ILayoutBox) => {
    return (
        <section
            className={
                "w-full h-min flex flex-col gap-y-6 gap-x-24 place-content-center place-items-center" +
                applyClassName(layoutVariant?.breakpoint === "sm", "sm:grid") +
                applyClassName(layoutVariant?.breakpoint === "md", "md:grid") +
                applyClassName(layoutVariant?.breakpoint === "lg", "lg:grid") +
                applyClassName(layoutVariant?.breakpoint === "xl", "xl:grid") +
                applyClassName(layoutVariant?.breakpoint === "2xl", "2xl:grid") +
                applyClassName(
                    layoutVariant?.breakpoint === "sm" && layoutVariant?.type === "side",
                    "sm:grid-cols-[repeat(2,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "md" && layoutVariant?.type === "side",
                    "md:grid-cols-[repeat(2,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "lg" && layoutVariant?.type === "side",
                    "lg:grid-cols-[repeat(2,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "xl" && layoutVariant?.type === "side",
                    "xl:grid-cols-[repeat(2,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "2xl" && layoutVariant?.type === "side",
                    "2xl:grid-cols-[repeat(2,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "sm" && layoutVariant?.type === "largeSide",
                    "sm:grid-cols-[1fr_0.6fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "md" && layoutVariant?.type === "largeSide",
                    "md:grid-cols-[1fr_0.6fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "lg" && layoutVariant?.type === "largeSide",
                    "lg:grid-cols-[1fr_0.6fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "xl" && layoutVariant?.type === "largeSide",
                    "xl:grid-cols-[1fr_0.6fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "2xl" && layoutVariant?.type === "largeSide",
                    "2xl:grid-cols-[1fr_0.6fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "sm" && layoutVariant?.type === "largeSideOpposite",
                    "sm:grid-cols-[0.6fr_1fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "md" && layoutVariant?.type === "largeSideOpposite",
                    "md:grid-cols-[0.6fr_1fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "lg" && layoutVariant?.type === "largeSideOpposite",
                    "lg:grid-cols-[0.6fr_1fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "xl" && layoutVariant?.type === "largeSideOpposite",
                    "xl:grid-cols-[0.6fr_1fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "2xl" && layoutVariant?.type === "largeSideOpposite",
                    "2xl:grid-cols-[0.6fr_1fr]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "sm" && layoutVariant?.type === "threeColumns",
                    "sm:grid-cols-[repeat(3,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "md" && layoutVariant?.type === "threeColumns",
                    "md:grid-cols-[repeat(3,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "lg" && layoutVariant?.type === "threeColumns",
                    "lg:grid-cols-[repeat(3,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "xl" && layoutVariant?.type === "threeColumns",
                    "xl:grid-cols-[repeat(3,1fr)]"
                ) +
                applyClassName(
                    layoutVariant?.breakpoint === "2xl" && layoutVariant?.type === "threeColumns",
                    "2xl:grid-cols-[repeat(3,1fr)]"
                )
            }
        >
            {children}
        </section>
    );
};
