import { useContext } from "react";
import { ScreenContext } from "~contexts";
import { useIntersectionObserver } from "./useIntersectionObserver";

export const usePageContent = () => {
    const { screenStatus } = useContext(ScreenContext);
    const { ref: aboutImgRef, isVisible: aboutImgIsVisible } = useIntersectionObserver<HTMLImageElement>();
    const { ref: aboutTextRef, isVisible: aboutTextIsVisible } = useIntersectionObserver<HTMLDivElement>();
    const { ref: partnersRef, isVisible: partnersIsVisible } = useIntersectionObserver<HTMLDivElement>();
    const { ref: servicesRef, isVisible: servicesIsVisible } = useIntersectionObserver<HTMLUListElement>();
    const { ref: pricingRef, isVisible: pricingIsVisible } = useIntersectionObserver<HTMLOListElement>();
    const { ref: resourcesImgRef, isVisible: resourcesImgIsVisible } = useIntersectionObserver<HTMLImageElement>();
    const { ref: resourcesTextRef, isVisible: resourcesTextIsVisible } = useIntersectionObserver<HTMLDivElement>();
    const { ref: testimonialImgRef, isVisible: testimonialImgIsVisible } = useIntersectionObserver<HTMLImageElement>();
    const { ref: testimonialTextRef, isVisible: testimonialTextIsVisible } = useIntersectionObserver<HTMLDivElement>();
    const { ref: faqRef, isVisible: faqIsVisible } = useIntersectionObserver<HTMLDivElement>();
    const { ref: contactRef, isVisible: contactIsVisible } = useIntersectionObserver<HTMLUListElement>();

    const contentsRef = {
        about: {
            img: { aboutImgRef, aboutImgIsVisible },
            text: { aboutTextRef, aboutTextIsVisible }
        },
        partners: {
            partnersRef,
            partnersIsVisible
        },
        services: {
            servicesRef,
            servicesIsVisible
        },
        pricing: {
            pricingRef,
            pricingIsVisible
        },
        resources: {
            img: { resourcesImgRef, resourcesImgIsVisible },
            text: { resourcesTextRef, resourcesTextIsVisible }
        },
        testimonial: {
            img: { testimonialImgRef, testimonialImgIsVisible },
            text: { testimonialTextRef, testimonialTextIsVisible }
        },
        faq: {
            faqRef,
            faqIsVisible
        },
        contact: {
            contactRef,
            contactIsVisible
        }
    };

    return { screenStatus, contentsRef };
};
