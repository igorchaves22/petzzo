import { PageContent } from "../PageContent";
import { PageFooter } from "../PageFooter";
import { PageHeader } from "../PageHeader";
import { ScrollToTopButton } from "../ScrollToTopButton";

export const PageLayout = () => {
    return (
        <>
            <PageHeader />
            <PageContent />
            <PageFooter />
            <ScrollToTopButton />
        </>
    );
};
