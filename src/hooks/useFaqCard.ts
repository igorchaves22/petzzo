import { useCollapseControl } from "./useCollapseControl";
import { useToggle } from "./useToggle";

const TIMEOUT_DELAY = 200;

export const useFaqCard = () => {
    const { indicator: faqCardISRendered, updateIndicator: updateFaCardRender } = useToggle(undefined, undefined, {
        value: TIMEOUT_DELAY
    });
    const { elementRef: faqRef } = useCollapseControl(faqCardISRendered.immediate);

    return { faqRef, faqCardISRendered, updateFaCardRender };
};
