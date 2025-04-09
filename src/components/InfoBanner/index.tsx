import { ReactNode } from "react";
import { useIntersectionObserver } from "~hooks";
import { TailwindcssBreakpointType } from "~types";
import { applyClassName, renderElement } from "~utils";

interface IInfoBanner {
    title: string;
    subtitle?: string;
    description?: string;
    additionalInfo?: ReactNode;
    alignLeft?: boolean;
    alignLeftOnLargeScreen?: TailwindcssBreakpointType;
    alternative?: boolean;
    layoutVariant?: TailwindcssBreakpointType;
}

export const InfoBanner = ({
    title,
    subtitle,
    description,
    additionalInfo,
    alignLeft,
    alignLeftOnLargeScreen,
    alternative,
    layoutVariant
}: IInfoBanner) => {
    const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

    return (
        <section
            ref={ref}
            className={
                "w-full h-min flex flex-col gap-y-6 gap-x-22 items-center md:gap-y-10" +
                applyClassName(layoutVariant === "sm", "sm:grid sm:grid-cols-[1fr_max-content]") +
                applyClassName(layoutVariant === "md", "md:grid md:grid-cols-[1fr_max-content]") +
                applyClassName(layoutVariant === "lg", "lg:grid lg:grid-cols-[1fr_max-content]") +
                applyClassName(layoutVariant === "xl", "xl:grid xl:grid-cols-[1fr_max-content]") +
                applyClassName(layoutVariant === "2xl", "2xl:grid 2xl:grid-cols-[1fr_max-content]")
            }
        >
            <section className="w-full h-min flex flex-col">
                {renderElement(
                    subtitle,
                    <h2
                        className={
                            "w-full h-min opacity-0 text-amber-400 font-bold text-base font-quicksand" +
                            applyClassName(alignLeft, "text-left", "text-center") +
                            applyClassName(alignLeftOnLargeScreen === "sm", "sm:text-left") +
                            applyClassName(alignLeftOnLargeScreen === "md", "md:text-left") +
                            applyClassName(alignLeftOnLargeScreen === "lg", "lg:text-left") +
                            applyClassName(alignLeftOnLargeScreen === "xl", "xl:text-left") +
                            applyClassName(alignLeftOnLargeScreen === "2xl", "2xl:text-left") +
                            applyClassName(isVisible, "animate-appear-element")
                        }
                    >
                        {subtitle}
                    </h2>
                )}
                <h1
                    style={{
                        animationDelay: "600ms"
                    }}
                    className={
                        "w-full h-min opacity-0 font-bold text-4xl font-quicksand" +
                        applyClassName(alternative, "text-gray-50", "text-blue-600") +
                        applyClassName(alignLeft, "text-left", "text-center") +
                        applyClassName(alignLeftOnLargeScreen === "sm", "sm:text-left") +
                        applyClassName(alignLeftOnLargeScreen === "md", "md:text-left") +
                        applyClassName(alignLeftOnLargeScreen === "lg", "lg:text-left") +
                        applyClassName(alignLeftOnLargeScreen === "xl", "xl:text-left") +
                        applyClassName(alignLeftOnLargeScreen === "2xl", "2xl:text-left") +
                        applyClassName(isVisible, "animate-appear-element")
                    }
                >
                    {title}
                </h1>
                {renderElement(
                    description,
                    <p
                        style={{
                            animationDelay: "800ms"
                        }}
                        className={
                            "w-full h-min opacity-0 font-medium text-base font-quicksand" +
                            applyClassName(alternative, "text-gray-400", "text-gray-950") +
                            applyClassName(alignLeft, "text-justify", "text-center") +
                            applyClassName(alignLeftOnLargeScreen === "sm", "sm:text-justify") +
                            applyClassName(alignLeftOnLargeScreen === "md", "md:text-justify") +
                            applyClassName(alignLeftOnLargeScreen === "lg", "lg:text-justify") +
                            applyClassName(alignLeftOnLargeScreen === "xl", "sm:text-justify") +
                            applyClassName(alignLeftOnLargeScreen === "2xl", "sm:text-justify") +
                            applyClassName(isVisible, "animate-appear-element")
                        }
                    >
                        {description}
                    </p>
                )}
            </section>
            {renderElement(
                additionalInfo,
                <section
                    className={
                        "w-full h-min flex flex-wrap gap-y-1 gap-x-4 items-center md:gap-y-4 md:gap-x-10" +
                        applyClassName(alignLeft, "justify-start", "justify-center") +
                        applyClassName(alignLeftOnLargeScreen === "sm", "sm:justify-start") +
                        applyClassName(alignLeftOnLargeScreen === "md", "md:justify-start") +
                        applyClassName(alignLeftOnLargeScreen === "lg", "lg:justify-start") +
                        applyClassName(alignLeftOnLargeScreen === "xl", "xl:justify-start")
                    }
                >
                    {additionalInfo}
                </section>
            )}
        </section>
    );
};
