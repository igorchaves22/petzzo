import { useContext } from "react";
import aboutImg from "~assets/img/about.webp";
import photoImg from "~assets/img/photo.webp";
import resourcesImg from "~assets/img/resources.webp";
import testimonialImg from "~assets/img/testimonial.webp";
import { ScreenContext } from "~contexts";
import {
    faqItems,
    navbarItems,
    partnersItems,
    pricingItems,
    renderElement,
    resourcesItems,
    servicesItems
} from "~utils";
import { CtaLink } from "../CtaLink";
import { FaqCard } from "../FaqCard";
import { Icon } from "../Icon";
import { InfoBanner } from "../InfoBanner";
import { LayoutBox } from "../LayoutBox";
import { NewsletterForm } from "../NewsletterForm";
import { SectionContainer } from "../SectionContainer";

export const PageContent = () => {
    const { screenStatus } = useContext(ScreenContext);

    return (
        <main className="w-full h-auto min-h-screen">
            <SectionContainer
                minHeightScreen
                largePaddingTop
                bgImg
            >
                <InfoBanner
                    title="Love, Care, and Fun for Your Furry Friend!"
                    description="We provide everything your furry friend needs: grooming, bathing, healthy food, and the best toys. Visit our pet shop and ensure your pet’s happiness and well-being!"
                    additionalInfo={
                        <>
                            <CtaLink title="Read More" />
                            <CtaLink
                                title="View Offers"
                                alternative
                            />
                        </>
                    }
                />
            </SectionContainer>
            <SectionContainer id={navbarItems[0].href}>
                <LayoutBox
                    layoutVariant={{
                        breakpoint: "lg",
                        type: "side"
                    }}
                >
                    {renderElement(
                        !screenStatus.isLgScreen,
                        <img
                            src={aboutImg}
                            alt="About"
                            className="size-52 object-contain md:size-82"
                            loading="lazy"
                        />
                    )}
                    <InfoBanner
                        subtitle="KNOW MORE US"
                        title="Our Passion Is Providing Superior Pet Care"
                        additionalInfo={
                            <>
                                <section className="w-full h-min flex flex-col gap-y-2">
                                    <section className="w-full h-min flex gap-x-4 items-center">
                                        <p className="size-max pr-4 border-r-2 border-amber-400 text-amber-400 font-bold text-sm font-quicksand text-center">
                                            <span className="text-4xl">10y</span>
                                            <br />
                                            Experience
                                        </p>
                                        <p className="w-full h-min flex-wrap text-gray-950 font-medium text-sm font-quicksand text-justify">
                                            At Petzzo, we care for your pet with love and dedication. We offer quality
                                            services like grooming, healthy food, and the best toys.
                                        </p>
                                    </section>
                                    <p className="w-full h-min text-gray-950 font-medium text-sm font-quicksand text-justify">
                                        Our mission is to ensure happiness and well-being for your best friend. Count on
                                        a passionate team always ready to help.
                                    </p>
                                </section>
                                <CtaLink title="See Our Story" />
                            </>
                        }
                        alignLeft
                    />
                </LayoutBox>
            </SectionContainer>
            <SectionContainer id={navbarItems[1].href}>
                <InfoBanner
                    title="Partners"
                    additionalInfo={
                        <section className="w-full h-min overflow-x-hidden relative flex group before:content-[''] before:w-[5%] before:h-auto before:absolute before:inset-0 before:z-[2] before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:content-[''] after:w-[5%] after:h-auto after:absolute after:inset-0 after:right-0 after:left-auto after:z-[2] after:bg-gradient-to-l after:from-gray-50 after:to-transparent">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <ul
                                    key={i}
                                    className="w-max h-min px-4 flex gap-x-8 items-center animate-scroll-left-partners group-hover:[animation-play-state:paused]"
                                >
                                    {partnersItems.map((item, index) => (
                                        <li
                                            key={item.title + index}
                                            className="w-max h-min"
                                        >
                                            <img
                                                src={item.logo}
                                                alt="Partner logo"
                                                loading="lazy"
                                                className="w-22 h-min object-contain md:w-32"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </section>
                    }
                />
            </SectionContainer>
            <SectionContainer
                id={navbarItems[2].href}
                bgColor="bg-gray-700"
            >
                <InfoBanner
                    subtitle="DELIVERING WORLD CLASS HOME CARE"
                    title="Providing Our Best Pet Care & Veterinary Services"
                    additionalInfo={
                        <CtaLink
                            title="See All Services"
                            alternative
                        />
                    }
                    alignLeftOnLargeScreen="lg"
                    alternative
                    layoutVariant="lg"
                />
                <ul className="w-full h-min flex flex-wrap gap-y-4 gap-x-14 justify-center md:w-9/12">
                    {servicesItems.map((item) => (
                        <li
                            key={item}
                            className="w-max h-min py-1 px-3 rounded-md bg-gray-100 text-gray-950 font-bold text-xs font-quicksand odd:ml-1 odd:mr-3 odd:animate-bounce-y-service even:mx-2 even:animate-bounce-x-service md:odd:ml-4 md:odd:mr-8"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </SectionContainer>
            <SectionContainer
                id={navbarItems[3].href}
                bgImg
            >
                <InfoBanner title="Flexible Pricing Table" />
                <ol className="w-full h-min flex flex-wrap gap-y-4 gap-x-10 justify-center">
                    {pricingItems.map((item) => (
                        <li
                            key={item.title}
                            className="w-full max-w-2xs h-auto py-6 px-8 rounded-lg flex flex-col gap-y-2 bg-gray-100 shadow-md shadow-gray-300"
                        >
                            <section className="w-full h-min flex gap-x-2 justify-between items-baseline">
                                <p className="w-full h-min text-gray-950 font-bold text-base font-quicksand">
                                    {item.title}
                                </p>
                                <p className="w-max h-min text-amber-400 font-bold text-2xl font-quicksand">
                                    <sup className="top-0 text-sm align-text-top">$</sup>
                                    {item.price}
                                    <sub className="bottom-0 text-sm text-gray-950">/mo</sub>
                                </p>
                            </section>
                            <ul className="w-full h-min flex flex-col grow gap-y-1">
                                {item.includes.map((subItem) => (
                                    <li
                                        key={subItem}
                                        className="w-full h-min flex gap-x-4 items-center"
                                    >
                                        <Icon
                                            icon="CircleCheck"
                                            strokeWidth={3}
                                            className="size-6 text-gray-950"
                                        />
                                        <p className="w-full h-min text-gray-950 font-semibold text-sm font-quicksand">
                                            {subItem}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <CtaLink title="Choose Plan" />
                        </li>
                    ))}
                </ol>
            </SectionContainer>
            <SectionContainer
                id={navbarItems[4].href}
                bgColor="bg-gray-950"
            >
                <LayoutBox
                    layoutVariant={{
                        breakpoint: "lg",
                        type: "threeColumns"
                    }}
                >
                    <InfoBanner
                        subtitle="TIPS AND WISDOM FOR YOUR PET"
                        title="All You Need to Care for Your Pet"
                        description="Find valuable resources on pet care, grooming tips, nutrition, and more. Stay informed and give your furry friend the best life possible!"
                        additionalInfo={<CtaLink title="Read More" />}
                        alignLeft
                        alternative
                    />
                    <img
                        src={resourcesImg}
                        alt="Resources"
                        className="size-52 object-contain md:size-82"
                        loading="lazy"
                    />
                    <section className="w-full h-min flex flex-col gap-y-4">
                        {resourcesItems.map((item) => (
                            <section
                                key={item.title}
                                className="w-full h-min"
                            >
                                <p className="w-full h-min text-amber-400 font-bold text-5xl font-quicksand">
                                    {item.value}
                                </p>
                                <p className="w-full h-min text-amber-400 font-bold text-sm font-quicksand">
                                    {item.title}
                                </p>
                            </section>
                        ))}
                    </section>
                </LayoutBox>
            </SectionContainer>
            <SectionContainer id={navbarItems[5].href}>
                <LayoutBox
                    layoutVariant={{
                        breakpoint: "lg",
                        type: "largeSide"
                    }}
                >
                    <InfoBanner
                        subtitle="OUR CUSTOMERS SPEAK FOR THEMSELVES – AND THEIR PETS TOO!"
                        title="Where pets find the love they deserve"
                        description="Petzzo is more than just a pet shop. it's a place of love and care. See how our customers and their furry friends experience something truly unique with our products and services made with love."
                        additionalInfo={
                            <section className="w-full max-w-sm h-min">
                                <section className="w-full max-w-sm h-min flex gap-x-4 items-center">
                                    <Icon
                                        icon="Quote"
                                        className="size-8"
                                    />
                                    <figure className="w-full h-min flex gap-x-2 items-center">
                                        <img
                                            src={photoImg}
                                            alt="Photo"
                                            className="size-12"
                                        />
                                        <figcaption className="w-full h-min text-gray-950 font-medium text-sm font-quicksand">
                                            Clementine Bauch
                                        </figcaption>
                                    </figure>
                                </section>
                                <p className="w-full h-min text-gray-950 font-medium text-sm font-quicksand text-justify">
                                    Petzzo has transformed my dog's routine! Since I started buying from them, he has
                                    been happier, healthier and full of energy. The products are of the highest quality
                                    and the service is impeccable. You can feel the care in every detail!
                                </p>
                            </section>
                        }
                        alignLeftOnLargeScreen="md"
                    />
                    {renderElement(
                        !screenStatus.isLgScreen,
                        <img
                            src={testimonialImg}
                            alt="Testimonial"
                            className="size-52 object-contain md:size-82"
                            loading="lazy"
                        />
                    )}
                </LayoutBox>
            </SectionContainer>
            <SectionContainer id={navbarItems[6].href}>
                <LayoutBox
                    layoutVariant={{
                        breakpoint: "md",
                        type: "largeSideOpposite"
                    }}
                >
                    <InfoBanner
                        subtitle="FAQ"
                        title="Find Answer Of Your Questions"
                        description="Find answers to common questions about our services, products, and pet care. Still have doubts? We're happy to help!"
                        additionalInfo={
                            <CtaLink
                                title="Need More Help?"
                                alternative
                            />
                        }
                        alignLeftOnLargeScreen="md"
                    />
                    <section className="w-full max-w-2xl h-min flex flex-col gap-y-4">
                        {faqItems.map((item) => (
                            <FaqCard
                                key={item.question}
                                {...item}
                            />
                        ))}
                    </section>
                </LayoutBox>
            </SectionContainer>
            <SectionContainer
                id={navbarItems[7].href}
                bgImg
            >
                <InfoBanner
                    subtitle="CONTACT US"
                    title="We Are Always Available For You & Your Pets"
                    description="We're here to help! Contact us to ask questions, book services, or learn more about our products."
                />
                <NewsletterForm />
                <ul className="w-full h-min flex flex-wrap gap-y-4 gap-x-8 justify-center">
                    <li className="w-max h-min flex gap-x-2 items-center">
                        <div className="w-max h-min p-2 rounded-full bg-amber-400">
                            <Icon
                                icon="MapPin"
                                className="size-4 text-gray-50"
                            />
                        </div>
                        <span className="text-blue-600 font-normal text-sm font-quicksand">
                            256 Avenida Brasil, São Paulo City, Brasil
                        </span>
                    </li>
                    <li className="w-max h-min flex gap-x-2 items-center">
                        <div className="w-max h-min p-2 rounded-full bg-amber-400">
                            <Icon
                                icon="Mail"
                                className="size-4 text-gray-50"
                            />
                        </div>
                        <a
                            href="mailto:contact_petzzo@hotmail.com"
                            className="text-blue-600 font-normal text-sm font-quicksand"
                        >
                            contact_petzzo@hotmail.com
                        </a>
                    </li>
                    <li className="w-max h-min flex gap-x-2 items-center">
                        <div className="w-max h-min p-2 rounded-full bg-amber-400">
                            <Icon
                                icon="Phone"
                                className="size-4 text-gray-50"
                            />
                        </div>
                        <a
                            href="tel:+5511999999999"
                            className="text-blue-600 font-normal text-sm font-quicksand"
                        >
                            +99 (99) 99999-9999
                        </a>
                    </li>
                </ul>
            </SectionContainer>
        </main>
    );
};
