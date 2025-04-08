import { useFaqCard } from "~hooks";
import { applyClassName, renderElement } from "~utils";
import { Icon } from "../Icon";

interface IFaqCard {
    question: string;
    answer: string;
}

export const FaqCard = ({ question, answer }: IFaqCard) => {
    const { faqRef, faqCardISRendered, updateFaCardRender } = useFaqCard();

    return (
        <section className="w-full h-min flex flex-col gap-y-2 items-center">
            <button
                onClick={() => updateFaCardRender()}
                className="w-full h-min py-2 px-6 rounded-md flex gap-x-4 justify-between items-center bg-gray-100 shadow-sm shadow-gray-300 cursor-pointer transition-all duration-200 ease-in-out"
            >
                <span
                    className={
                        "w-full h-min font-bold text-base font-quicksand text-left transition-all duration-200 ease-in-out" +
                        applyClassName(faqCardISRendered.immediate, "text-amber-400", "text-gray-950")
                    }
                >
                    {question}
                </span>
                <Icon
                    icon="ChevronRight"
                    strokeWidth={3}
                    className={
                        "size-6 transition-all duration-200 ease-in-out" +
                        applyClassName(faqCardISRendered.immediate, "text-amber-400 rotate-90", "text-gray-950")
                    }
                />
            </button>
            {renderElement(
                faqCardISRendered.delayed,
                <section
                    ref={faqRef}
                    className="w-11/12 h-0 border-x border-gray-300 overflow-y-hidden transition-all duration-200 ease-in-out"
                >
                    <section className="w-full h-min p-4">
                        <p className="text-gray-950 font-normal text-sm font-quicksand text-justify">{answer}</p>
                    </section>
                </section>
            )}
        </section>
    );
};
