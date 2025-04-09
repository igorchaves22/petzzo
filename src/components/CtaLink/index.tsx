import { useIntersectionObserver } from "~hooks";
import { LucideReactIconsType } from "~types";
import { applyClassName } from "~utils";
import { Icon } from "../Icon";

interface ICtaLink {
    title: string;
    icon?: LucideReactIconsType;
    alternative?: boolean;
    animationDelay?: number;
}

export const CtaLink = ({ title, icon, alternative, animationDelay }: ICtaLink) => {
    const { ref, isVisible } = useIntersectionObserver<HTMLAnchorElement>();

    return (
        <a
            ref={ref}
            href="/"
            style={{
                animationDelay: `${animationDelay ?? 0}ms`
            }}
            className={
                "w-full max-w-58 h-min py-2 px-6 border-2 border-amber-400 rounded-full flex flex gap-x-2 items-center cursor-pointer transition-all duration-200 ease-in-out group" +
                applyClassName(alternative, "hover:bg-amber-400", "bg-amber-400 hover:bg-transparent") +
                applyClassName(animationDelay, "opacity-0") +
                applyClassName(animationDelay && isVisible, "animate-slide-in-fwd-center-element")
            }
        >
            <span
                className={
                    "w-full h-min font-bold text-sm font-quicksand transition-all duration-200 ease-in-out" +
                    applyClassName(
                        alternative,
                        "text-amber-400 group-hover:text-gray-50",
                        "text-gray-50 group-hover:text-amber-400"
                    )
                }
            >
                {title}
            </span>
            <Icon
                icon={icon ?? "ArrowRight"}
                strokeWidth={4}
                className={
                    "size-6 transition-all duration-200 ease-in-out group-hover:translate-x-2" +
                    applyClassName(
                        alternative,
                        "text-amber-400 group-hover:text-gray-50",
                        "text-gray-50 group-hover:text-amber-400"
                    )
                }
            />
        </a>
    );
};
