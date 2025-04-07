import { useHeader } from "~hooks";
import { applyClassName, navbarItems, renderElement } from "~utils";
import { Icon } from "../Icon";
import { Logo } from "../Logo";

export const PageHeader = () => {
    const { screenStatus, isScrolled, navRef, navbarIsRendered, handleClick } = useHeader();

    return (
        <header
            className={
                "w-full h-min p-4 fixed inset-0 z-20 grid grid-rows-[min-content] grid-cols-[min(100%,96rem)] justify-center transition-all duration-500 ease-in-out" +
                applyClassName(isScrolled || navbarIsRendered.delayed, "bg-gray-50 shadow-sm shadow-gray-300")
            }
        >
            <section className="w-full h-min flex flex-wrap gap-y-4 gap-x-10 justify-between items-center lg:flex-nowrap">
                <Logo />
                {renderElement(
                    screenStatus.isLgScreen,
                    <button
                        type="button"
                        aria-label={navbarIsRendered.immediate ? "Open menu" : "Close menu"}
                        onClick={() => handleClick()}
                        className="size-max"
                    >
                        <Icon
                            icon={navbarIsRendered.immediate ? "X" : "Menu"}
                            className="size-10 text-gray-950"
                        />
                    </button>
                )}
                {renderElement(
                    navbarIsRendered.delayed || !screenStatus.isLgScreen,
                    <nav
                        ref={navRef}
                        className="w-full h-0 overflow-y-hidden transition-all duration-500 ease-in-out lg:overflow-y-visible"
                    >
                        <ul className="w-full h-min flex flex-wrap gap-x-4 justify-end lg:flex-nowrap">
                            {navbarItems.map((item) => (
                                <li
                                    key={item.href}
                                    className="w-full h-min flex justify-end lg:w-max"
                                >
                                    <a
                                        href={`#${item.href}`}
                                        onClick={() => handleClick()}
                                        className="w-max h-min text-gray-950 font-bold text-lg font-quicksand transition-all duration-400 ease-in-out hover:text-amber-400 hover:-translate-y-2"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </section>
        </header>
    );
};
