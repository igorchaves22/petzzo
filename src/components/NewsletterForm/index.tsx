import { useNewsletterForm } from "~hooks";
import { applyClassName, renderElement, STATUS_MESSAGE } from "~utils";
import { Icon } from "../Icon";

export const NewsletterForm = () => {
    const { submitData, register, errors, isSubmitSuccessful, statusMessageIsRendered } = useNewsletterForm();

    return (
        <form
            onSubmit={submitData}
            noValidate
            className="w-full max-w-2xl h-min flex flex-col gap-y-2"
        >
            <label className="w-full h-min px-5 text-gray-950 font-bold text-sm font-quicksand">
                Subscribe to the Newsletter!
            </label>
            <section className="w-full h-min relative flex">
                <input
                    type="email"
                    spellCheck={false}
                    placeholder="example@gmail.com"
                    className="w-full h-auto py-3 px-6 border-2 border-r-0 border-gray-950 rounded-l-full outline-0 text-blue-950 font-bold text-sm font-quicksand bg-gray-50 placeholder:text-gray-400 placeholder:text-xs"
                    {...register("email")}
                />
                <button
                    type="submit"
                    aria-label="Send email"
                    className="w-max h-auto p-3 pr-6 rounded-r-full bg-gray-950 cursor-pointer"
                >
                    <Icon
                        icon="Send"
                        className="size-6 text-gray-50"
                    />
                </button>
                {renderElement(
                    statusMessageIsRendered.delayed,
                    <p
                        className={
                            "w-full h-min px-5 absolute top-[calc(100%+0.25rem)] z-5 font-bold text-xs font-quicksand" +
                            applyClassName(
                                errors.email?.message === STATUS_MESSAGE.newsletter.required,
                                "text-red-600"
                            ) +
                            applyClassName(
                                errors.email?.message === STATUS_MESSAGE.newsletter.invalid,
                                "text-yellow-600"
                            ) +
                            applyClassName(isSubmitSuccessful, "text-green-600")
                        }
                    >
                        {errors.email ?
                            errors.email.message
                        : isSubmitSuccessful ?
                            STATUS_MESSAGE.newsletter.success
                        :   ""}
                    </p>
                )}
            </section>
        </form>
    );
};
