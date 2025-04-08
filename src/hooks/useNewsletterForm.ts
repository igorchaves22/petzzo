import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { newsletterFormSchema, NewsletterFormSchemaType, STATUS_MESSAGE } from "~utils";
import { useToggle } from "./useToggle";

const TIMEOUT_RESET = 5000;

export const useNewsletterForm = () => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
        reset
    } = useForm<NewsletterFormSchemaType>({
        resolver: yupResolver(newsletterFormSchema)
    });
    const { indicator: statusMessageIsRendered, updateIndicator: statusMessageUpdateRender } = useToggle(
        undefined,
        undefined,
        { value: TIMEOUT_RESET }
    );

    const submitData = handleSubmit(() => {
        console.log(STATUS_MESSAGE.newsletter.success);

        reset();
    });
    useEffect(() => {
        const shouldRender = !!errors.email || isSubmitSuccessful;

        if (statusMessageIsRendered.immediate !== shouldRender) {
            statusMessageUpdateRender(shouldRender);
        }
        if (isSubmitSuccessful) {
            setTimeout(() => {
                reset();
            }, TIMEOUT_RESET);
        }
    }, [errors.email, isSubmitSuccessful, reset, statusMessageIsRendered.immediate, statusMessageUpdateRender]);

    return {
        submitData,
        register,
        errors,
        isSubmitSuccessful,
        statusMessageIsRendered
    };
};
