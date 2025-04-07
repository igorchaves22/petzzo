import { ReactNode } from "react";

export const renderElement = (condition: unknown, element: ReactNode, elseElement?: ReactNode) => {
    if (!condition) {
        if (elseElement) {
            return elseElement;
        }

        return null;
    }

    return element;
};

export const navbarItems = [
    {
        href: "about",
        title: "About"
    },
    {
        href: "partners",
        title: "Partners"
    },
    {
        href: "services",
        title: "Services"
    },
    {
        href: "pricing",
        title: "Pricing"
    },
    {
        href: "resources",
        title: "Resources"
    },
    {
        href: "testimonials",
        title: "Testimonials"
    },
    {
        href: "faq",
        title: "FAQ"
    },
    {
        href: "contact",
        title: "Contact"
    }
];
