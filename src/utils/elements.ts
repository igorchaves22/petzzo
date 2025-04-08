import { ReactNode } from "react";
import partner1Svg from "~assets/svg/partner_1.svg";
import partner2Svg from "~assets/svg/partner_2.svg";
import partner3Svg from "~assets/svg/partner_3.svg";
import partner4Svg from "~assets/svg/partner_4.svg";

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

export const partnersItems = [
    { title: "Partner logo 1", logo: partner1Svg },
    { title: "Partner logo 2", logo: partner2Svg },
    { title: "Partner logo 3", logo: partner3Svg },
    { title: "Partner logo 4", logo: partner4Svg }
];

export const servicesItems = [
    "Bath and Grooming",
    "Veterinary Care",
    "Healthy Food",
    "Training",
    "Pet Daycare",
    "Boarding",
    "Pet Taxi",
    "Vaccination",
    "Routine Check-up",
    "24/7 Emergency",
    "Animal Physiotherapy",
    "Hydrotherapy"
];

export const pricingItems = [
    {
        title: "Basic",
        price: 9.99,
        includes: ["Monthly bath", "Nail trimming"]
    },
    {
        title: "Premium",
        price: 17.99,
        includes: ["Monthly bath", "Nail trimming", "Ear cleaning", "Hygienic grooming"]
    },
    {
        title: "VIP",
        price: 29.99,
        includes: [
            "Monthly bath",
            "Nail trimming",
            "Ear cleaning",
            "Hygienic grooming",
            "Monthly veterinary consultation",
            "Annual vaccination included"
        ]
    }
];

export const resourcesItems = [
    {
        title: "Years of experience",
        value: "10+"
    },
    {
        title: "Our Beloved Clients",
        value: "23k"
    },
    {
        title: "Real Customer Reviews",
        value: "15+"
    }
];

export const faqItems = [
    {
        question: "What services do you offer?",
        answer: "We offer grooming, bathing, veterinary consultations, healthy pet food, and a variety of toys and accessories."
    },
    {
        question: "Do you provide pet adoption services?",
        answer: "Yes! We partner with local shelters to help pets find loving homes. Contact us for more details."
    },
    {
        question: "Can I book an appointment online?",
        answer: "Absolutely! You can book grooming and veterinary services directly through our website."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, PayPal, and cash payments at our store."
    }
];
