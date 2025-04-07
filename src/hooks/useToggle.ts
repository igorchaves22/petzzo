import { useCallback, useState } from "react";

type UseToggleOptions = {
    value?: number;
    stateChangeDelay?: boolean | "onBothTransitions";
};

type IndicatorState<T> = T extends object ? { immediate: boolean; delayed: boolean } : boolean;

const INDICATOR_INITIAL_STATE = false;
const TIMEOUT_DELAY_DEFAULT = 600;
const STATE_CHANGE_DELAY_DEFAULT = true;

export const useToggle = <T extends boolean | UseToggleOptions | undefined>(
    initialState?: boolean,
    callback?: () => void,
    delay?: T
) => {
    const [indicator, setIndicator] = useState<IndicatorState<T>>(() => {
        const indicatorValue = initialState ?? INDICATOR_INITIAL_STATE;

        if (delay) {
            return { immediate: indicatorValue, delayed: indicatorValue } as IndicatorState<T>;
        }

        return indicatorValue as IndicatorState<T>;
    });

    const updateIndicator = useCallback(
        (applyValue?: boolean) => {
            if (callback) {
                callback();
            }

            const newIndicatorValue = applyValue ?? !(typeof indicator === "object" ? indicator.immediate : indicator);

            if (delay) {
                const shouldApplyDelay =
                    typeof delay === "object" ?
                        (delay.stateChangeDelay ?? STATE_CHANGE_DELAY_DEFAULT)
                    :   STATE_CHANGE_DELAY_DEFAULT;
                const timeoutValue =
                    typeof delay === "object" ? (delay.value ?? TIMEOUT_DELAY_DEFAULT) : TIMEOUT_DELAY_DEFAULT;

                setIndicator((prevState) =>
                    typeof prevState === "object" ?
                        ({ ...prevState, immediate: newIndicatorValue } as IndicatorState<T>)
                    :   (newIndicatorValue as IndicatorState<T>)
                );

                if (
                    shouldApplyDelay === "onBothTransitions" ||
                    (shouldApplyDelay === STATE_CHANGE_DELAY_DEFAULT && !newIndicatorValue) ||
                    (shouldApplyDelay === !STATE_CHANGE_DELAY_DEFAULT && newIndicatorValue)
                ) {
                    setTimeout(() => {
                        setIndicator((prevState) =>
                            typeof prevState === "object" ?
                                ({ ...prevState, delayed: newIndicatorValue } as IndicatorState<T>)
                            :   (newIndicatorValue as IndicatorState<T>)
                        );
                    }, timeoutValue);
                } else {
                    setIndicator((prevState) =>
                        typeof prevState === "object" ?
                            ({ ...prevState, delayed: newIndicatorValue } as IndicatorState<T>)
                        :   (newIndicatorValue as IndicatorState<T>)
                    );
                }

                return;
            }

            return setIndicator(newIndicatorValue as IndicatorState<T>);
        },
        [callback, delay, indicator]
    );

    return { indicator, updateIndicator };
};
